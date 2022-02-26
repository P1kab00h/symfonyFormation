<?php

namespace App\Controller\admin;

use App\Entity\UploadImages;
use App\Service\Telechargement;
use App\Entity\Voiture;
use App\Form\VoitureType;
use App\Repository\MarquesRepository;
use App\Repository\VoitureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Image;

#[Route('/voiture')]
#[IsGranted("ROLE_USER")]
class VoitureController extends AbstractController
{
    #[Route('/', name: 'voiture_index', methods: ['GET'])]
    public function index(VoitureRepository $voitureRepository): Response
    {
//        $this->denyAccessUnlessGranted('ROLE_ADMIN');
//        if(!$this->isGranted('ROLE_ADMIN')) {
//            throw new \Exception("Seul les admins peuvent venir ici");
//        }
        return $this->render('voiture/index.html.twig', [
            'voitures' => $voitureRepository->findAll(),
        ]);
    }

    #[Route('/exo', name: 'exo')]
    public function exo(EntityManagerInterface $entityManager, MarquesRepository $marquesRepository): Response
    {
        $marque = $marquesRepository->findBy(['id' => 1]);

        $voiture = new Voiture();
        $voiture->setNom("V1");
        $voiture->setMarque($marque[0]);
        $voiture2 = new Voiture();
        $voiture2->setNom("V2");
        $voiture2->setMarque($marque[0]);
        $voiture3 = new Voiture();
        $voiture3->setMarque($marque[0]);
        $voiture3->setNom("V3");

        $entityManager->persist($voiture);
        $entityManager->persist($voiture2);
        $entityManager->persist($voiture3);
        $entityManager->flush();

        return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/new', name: 'voiture_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, Telechargement $telechargement): Response
    {
        // Dans le cadre d'un nouvel enregistrement :
        // on instancie une entité (ici une voiture)
        $voiture = new Voiture();

        // on crée un formulaire via notre Type (ici VoitureType) et le second paramètre sera l'entité précédemment créée
        $form = $this->createForm(VoitureType::class, $voiture);
        // on hydrate notre formulaire et l'entité via les données qu'on aura tapées
        $form->handleRequest($request);

        // on vérifie que le formulaire est envoyé et validé
        if ($form->isSubmitted() && $form->isValid()) {

            // gestion des images (on récupère les images transmises)
            // dans la variables nous allons récupérer dans le form sous la propriétée 'images' les datas
            $images = $form->get('images')->getData();
            //$image = $form->get('images')->getData();

            if ($images) {
            // Une boucle sera nécessaire sur les images (afin de gérer l'ajout multiple)
//               foreach ($images as $image){

                // On stocke le nom de l'image dans la BDD (pour rappel nous ne stockons pas de PJ en BDD)
                // instance de UploadImages
                $img = new UploadImages();
                // On attribut un nom qui sera alors inscrit en BDD (nous utilisons la variable $fichier cf plus haut)
                //puis on upload l'image avec la method créé
                $voitureImageFileName = $telechargement->upload($image);
                $img->setName($voitureImageFileName);
                $voiture->addUploadImage($img);

 //               }
            }
            // Préparation de l'enregistrement dans notre base de donnée qui aura pour paramètre l'entité créé précédemment
            $entityManager->persist($voiture);
            // puis on enregistre tout ce que l'on a persisté
            $entityManager->flush();

            $this->addFlash('notice', 'Ma voiture est bien enregistré');
            return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('voiture/new.html.twig', [
            'voiture' => $voiture,
            'form' => $form,
        ]);
    }

    #[Route('/suppressionListeVoiture', name: 'suppressionListeVoiture')]
    public function suppressionListeVoiture(VoitureRepository $voitureRepository, EntityManagerInterface $entityManager): Response
    {
        $listeVoiture = $voitureRepository->findAll();
        $nbrVoiture = count($listeVoiture);
        $nbrSuppression = $nbrVoiture < 3 ? $nbrVoiture : 3;

        for ($i = $nbrVoiture; $i > $nbrVoiture - $nbrSuppression; $i--) {
            $entityManager->remove($listeVoiture[$i - 1]);
        }

        $entityManager->flush();

        if (0 === $nbrSuppression) {
            $this->addFlash("notice", "Aucune voiture à supprimer");
        } else {
            $this->addFlash("notice", "Vous avez supprimé : $nbrSuppression voiture.s");
        }

        return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/suppressionListeVoitureAvecNotreRepo', name: 'suppressionListeVoitureAvecNotreRepo')]
    public function suppressionListeVoitureAvecNotreRepo(VoitureRepository $voitureRepository, EntityManagerInterface $entityManager): Response
    {
        $listeVoiture = $voitureRepository->listeTroisVoitures();
        $nbrSuppression = count($listeVoiture);

        for ($i = $nbrSuppression; $i > 0; $i--) {
            $entityManager->remove($listeVoiture[$i - 1]);
        }

        $entityManager->flush();

        if (0 === $nbrSuppression) {
            $this->addFlash("notice", "Aucune voiture à supprimer");
        } else {
            $this->addFlash("notice", "Vous avez supprimé : $nbrSuppression voiture.s");
        }

        return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}', name: 'voiture_show', methods: ['GET'])]
    public function show(Voiture $voiture): Response
    {
        return $this->render('voiture/show.html.twig', [
            'voiture' => $voiture,
        ]);
    }

    #[Route('/{id}/edit', name: 'voiture_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Voiture $voiture, EntityManagerInterface $entityManager, Telechargement $telechargement): Response
    {
        $form = $this->createForm(VoitureType::class, $voiture);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $images = $form->get('images')->getData();
            //$image = $form->get('images')->getData();

            if ($images) {
                // Une boucle sera nécessaire sur les images (afin de gérer l'ajout multiple)
                //              foreach ($images as $image){

                $img = new UploadImages();

                $voitureImageFileName = $telechargement->upload($images);
                $img->setName($voitureImageFileName);
                $voiture->addUploadImage($img);

            }

            $entityManager->flush();
            return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('voiture/edit.html.twig', [
            'voiture' => $voiture,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'voiture_delete', methods: ['POST'])]
    public function delete(Request $request, Voiture $voiture, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $voiture->getId(), $request->request->get('_token'))) {
            $entityManager->remove($voiture);
            $entityManager->flush();
        }

        return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/supprime_image/{id}', name: 'voiture_image_delete', methods: ['DELETE'])]
    public function deleteImage(UploadImages $images, Request $request, EntityManagerInterface $entityManager) {

        $data = json_decode($request->getContent(), true);

        // vérification de la validité du token
        if($this->isCsrfTokenValid('delete'.$images->getId(), $data['_token'])){
            // récupération du nom de l'image
            $nom = $images->getName();
            // nous retirons le lien entre l'image et la bdd
            unlink($this->getParameter('upload_directory').'/'.$nom);
            // Puis nous supprimons l'image en BDD
            $entityManager->remove($images);
            $entityManager->flush();

            // Réponse en json
            return new JsonResponse(['succes' => 1]);
        } else {
            return  new JsonResponse(['error' => 'Token Invalide'], 400);
        }
    }
}
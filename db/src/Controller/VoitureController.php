<?php

namespace App\Controller;

use App\Entity\Voiture;
use App\Form\VoitureType;
use App\Repository\VoitureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/voiture')]
class VoitureController extends AbstractController
{
    #[Route('/', name: 'voiture_index', methods: ['GET'])]
    public function index(VoitureRepository $voitureRepository): Response
    {
        return $this->render('voiture/index.html.twig', [
            'voitures' => $voitureRepository->findAll(),
            /*dd($voitureRepository->find(20))*/
        ]);
    }

    #[Route('/new', name: 'voiture_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        // Dans le cadre d'un nouvel enregistrement
        // on instancie une entité (ici une voiture)
        $voiture = new Voiture();
        // On crée un formulaire via notre Type (ic VoitureType) et le second paramètre sera l'entité précédemment créée
        $form = $this->createForm(VoitureType::class, $voiture);
        // on hydrate notre formulaire et l'entité via les données qu'on aura tapé
        $form->handleRequest($request);

        //on vérifie que le formulaire est envoyé et validé
        if ($form->isSubmitted() && $form->isValid()) {
            // Préparation de l'enregistrement dans notre base de donnée qui aura pour paramètre l'entité créé précédemment
            $entityManager->persist($voiture);
            // Puis on enregistre tout ce que l'on a persisté
            $entityManager->flush();
            $this->addFlash('notice', 'Voiture bien enregistré');
            // On fini sur la redirection vers notre page pour display à l'utilisateur
            return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('voiture/new.html.twig', [
            'voiture' => $voiture,
            'form' => $form,
        ]);
    }

    // Création d'une method permettant de créer automatiquement trois voitures (depuis l'array $threeCars)
    #[Route('/threeInARow', name: 'three_in_a_row', methods: ['GET', 'POST'])]
    public function threeInARow(EntityManagerInterface $entityManager): Response
    {
        $threeCars = ['voiture de Mac NEw test', 'Pimp my Ride new Test', 'fatchhhhh new Test'];

        for($i=0; $i<count($threeCars); ++$i)
        {
            $voitureTest = new Voiture();
            $voitureTest->setNom($threeCars[$i]);
            $entityManager->persist($voitureTest);
            $entityManager->flush();

        }
        $this->addFlash('notice', "Ajout de voiture à l'aveugle");
        return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/deleteThreeCars', name: 'three_delete', methods: ['GET'])]
    public function threeDelete(VoitureRepository $voitureRepository, EntityManagerInterface $entityManager): Response
    {
//        $test = $voitureRepository->findOneBySomeField(47);
        $testBis = $voitureRepository->findAll();
      /*  $testThird = $testBis[44];*/
//        for($i=count($testBis)-1; $i>count($testBis)-4; --$i)
//            {
//                /*$other = $testBis[$i];*/
//            dd($testBis[$i]);
//            }

        $testUn = $testBis[count($testBis)-1];
        $testDeux = $testBis[count($testBis)-2];
        $testTrois = $testBis[count($testBis)-3];

        $entityManager->remove($testUn);
        $entityManager->remove($testDeux);
        $entityManager->remove($testTrois);
        $this->addFlash('notice', 'Voiture supprimé');
        $entityManager->flush();

        return $this->render('voiture/index.html.twig', [
            'voitures' => $voitureRepository->findAll(),
/*        return $this->render('voiture/deleteThreeCars.twig', [
            'voitures' => $voitureRepository->findAll(),*/
//            dd(count($testBis),$testUn, $testDeux, $testTrois)
        ]);
        /* $test = $voitureRepository->findOneBySomeField(47);
         $testBis = $voitureRepository->findAll();
         $testThird = $testBis[44];
         return $this->render('voiture/deleteThreeCars.twig', [
             dd($test,$testBis, $testThird)
         ]);*/





    }

    #[Route('/{id}', name: 'voiture_show', methods: ['GET'])]
    public function show(Voiture $voiture): Response
    {
/*        dd($voiture);*/
        return $this->render('voiture/show.html.twig', [
            'voiture' => $voiture,
        ]);
    }

    #[Route('/{id}/edit', name: 'voiture_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Voiture $voiture, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(VoitureType::class, $voiture);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            $this->addFlash('notice', 'Voiture bien modifié');
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
        if ($this->isCsrfTokenValid('delete'.$voiture->getId(), $request->request->get('_token'))) {
            $entityManager->remove($voiture);
            $this->addFlash('notice', 'Voiture supprimé');
            $entityManager->flush();
        }

        return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
    }
}

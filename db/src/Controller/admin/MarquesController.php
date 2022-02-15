<?php

namespace App\Controller\admin;

use App\Entity\Marques;
use App\Form\MarquesType;
use App\Repository\MarquesRepository;
use App\Service\FileUploader;
/*
use App\Service\Telechargement;
*/

use App\Service\Telechargement;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/marques')]
class MarquesController extends AbstractController
{
    #[Route('/', name: 'marques_index', methods: ['GET'])]
    public function index(MarquesRepository $marquesRepository): Response
    {
        return $this->render('marques/index.html.twig', [
            'marques' => $marquesRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'marques_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $marque = new Marques();
        $form = $this->createForm(MarquesType::class, $marque);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($marque);
            $entityManager->flush();

            return $this->redirectToRoute('marques_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('marques/new.html.twig', [
            'marque' => $marque,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'marques_show', methods: ['GET'])]
    public function show(Marques $marque): Response
    {
        return $this->render('marques/show.html.twig', [
            'marque' => $marque,
        ]);
    }

    #[Route('/{id}/edit', name: 'marques_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Marques $marque, EntityManagerInterface $entityManager, Telechargement $fileUploader  /*, Telechargement $telechargement*/): Response
    {
        $form = $this->createForm(MarquesType::class, $marque);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var UploadedFile $fichier  */
/*            $fichier = $form->get('fichier')->getData();
              $telechargement->move($fichier);*/
            $fichier = $form->get('fichier')->getData();
            if ($fichier) {
                $fileUploader->upload($fichier);
                           }

            $entityManager->flush();

            return $this->redirectToRoute('marques_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('marques/edit.html.twig', [
            'marque' => $marque,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'marques_delete', methods: ['POST'])]
    public function delete(Request $request, Marques $marque, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$marque->getId(), $request->request->get('_token'))) {
            $entityManager->remove($marque);
            $entityManager->flush();
        }

        return $this->redirectToRoute('marques_index', [], Response::HTTP_SEE_OTHER);
    }
}

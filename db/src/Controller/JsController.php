<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class JsController extends AbstractController
{
    #[Route('/java_script', name: 'java_script')]
    public function index(): Response
    {
        return $this->render('js/js.html.twig', [
            'controller_name' => 'JsController',
        ]);
    }

    #[Route('/des', name: 'des')]
    public function des(): Response
    {
        return $this->render('js/des.html.twig', [
            'controller_name' => 'DesController'
        ]);
    }

    #[Route('/tictactoe', name: 'tictactoe')]
    public function tictactoe(): Response
    {
        return $this->render('js/tictactoe.html.twig', [
            'controller_name' => 'tictactoe'
        ]);
    }

    #[Route('/todo', name: 'todo')]
    public function todo(): Response
    {
        return $this->render('js/todo.html.twig', [
            'controller_name' => 'todo'
        ]);
    }

    #[Route('/mesFonctionsCoule', name: 'mesFonctionsCoule')]
    public function mesClass(): Response
    {
        return $this->render('js/mesFonctionsCoule.html.twig', [
        ]);
    }

    #[Route('/chifourmi', name: 'chifoumi')]
    public function chifoumi(): Response
    {
        return $this->render('js/chifoumi.html.twig', [
        ]);
    }

    #[Route('/tictactoeClass', name: 'tictactoe_class')]
    public function tictactoeClass(): Response
    {
        return $this->render('js/tictactoeClass.html.twig', [
        ]);
    }

}

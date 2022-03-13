<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DebugRouterController extends AbstractController
{
    #[Route('/debug/router', name: 'app_debug_router')]
    public function index(): Response
    {
        return $this->render('debug_router/index.html.twig', [
            'controller_name' => 'DebugRouterController',
        ]);
    }
}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReactController extends AbstractController
{
    #[Route('/react', name: 'react')]
    public function react(): Response
    {
        return $this->render('js/react/react.html.twig', [
            'controller_name' => 'JsController',
        ]);
    }

    #[Route('/component', name: 'component')]
    public function component(): Response
    {
        return $this->render('js/react/component.html.twig', [
            'controller_name' => 'JsController',
        ]);
    }

}

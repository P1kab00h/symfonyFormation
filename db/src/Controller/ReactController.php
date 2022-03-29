<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Repository\VoitureRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

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

    #[Route('/formReact', name: 'formReact')]
    public function formReact(): Response
    {
        return $this->render('js/react/formReact.html.twig', [
            'controller_name' => 'JsController',
        ]);
    }

    #[Route('/todoReact', name: 'todoReact')]
    public function todoReact(): Response
    {
        return $this->render('js/react/todoReact.html.twig', [
            'controller_name' => 'JsController',
        ]);
    }

    #[Route('/hook', name: 'hook')]
    public function hook(): Response
    {
        return $this->render('js/react/hook.html.twig', [
            'controller_name' => 'JsController',
        ]);
    }

    #[Route('/calcHook', name: 'calcHook')]
    public function calcHook(): Response
    {
        return $this->render('js/react/calcHook.html.twig', [
            'controller_name' => 'JsController',
        ]);
    }

    #[Route('/reactDisplay', name: 'reactDisplay')]
    public function reactDisplay(): Response
    {
        return $this->render('js/react/reactDisplay.html.twig', [
            'controller_name' => 'JsController',
        ]);
    }

    #[Route('/ajaxSansRincer', name: 'ajaxSansRincer', methods: ['GET'])]
    public function ajaxSansRincer(VoitureRepository $voitureRepository, NormalizerInterface $normalizer): Response
    {
        return  $this->json($normalizer->normalize($voitureRepository->findAll(), null, ['groups' => 'voiture:read']));
//        return $this->json($normalizer->normalize($voitureRepository->findAll(), null, ['groups' => 'voiture:read']));

    }


    #[Route('/reactEval', name: 'reactEval')]
    public function reactEval(): Response
    {
        return $this->render('js/react/reactEval.html.twig', [
            'controller_name' => 'JsController',
        ]);
    }

    #[Route('/reactEvalMeet', name: 'reactEvalMeet', methods: ['GET'] )]
    public function reactEvalMeet(HttpClientInterface $httpClient) : Response
    {
        $response = $httpClient->request(
            'GET',
            'https://randomuser.me/api/?gender=female&results=50&nat=fr'
        );

        return $this->json($response->toArray());
    }

}

<?php

namespace App\Controller\admin;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Form\UpdateUserFormType;
use App\Security\AppCustomAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, UserAuthenticatorInterface $userAuthenticator, AppCustomAuthenticator $authenticator, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
            $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();
            // do anything else you need here, like send an email

            return $userAuthenticator->authenticateUser(
                $user,
                $authenticator,
                $request
            );
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    #[Route('/updateUser/{id}', name: 'updateUser')]
    /*Ajout de critère pour que la modification ne soit accessible que si on est connecté*/
    #[IsGranted('ROLE_USER')]
    public function updateUser(Request $request, User $user, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        /*Ajout d'un affinage afin que seul l'utilisateur concerné puisse modifier son compte ou l'admin*/
/*        $userCurrent = $this->getUser()->getId();*/
//        La ligne suivante va faire ce que nous demandons, pour le bien de l'exercice on tente aussi de faire modifier le compte par les Admins (non correct pas RGPD)
/*        if($this->getUser()->getId() !== $user->getId() && !$this->isGranted('ROLE_ADMIN')) {
            return $this->redirectToRoute('updateUser', ['id' => $this->getUser()->getId()]);
        }*/
//      Ceci est la méthode plus juste
        if($this->getUser()->getId() !== $user->getId()) {
            return $this->redirectToRoute('updateUser', ['id' => $this->getUser()->getId()]);
        }

        //modification pour UpdateUserFormType
        $form = $this->createForm(UpdateUserFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();
            // do anything else you need here, like send an email
            $this->addFlash('message', 'Votre profil a été mis à jour');
            return $this->redirectToRoute('user');
        }

        return $this->render('registration/updateUser.twig', [
            'updateUser' => $form->createView(),
        ]);
    }
}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use App\Service\Telechargement;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\FileUploadType;

class UploadController extends AbstractController
{

     #[Route("/upload", name: "app_test_upload")]

    public function excelCommunesAction(Request $request, Telechargement $file_uploader)
    {
        $form = $this->createForm(FileUploadType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $file = $form['upload_file']->getData();
            if ($file)
            {
                $file_name = $file_uploader->upload($file);
                if (null !== $file_name) // for example
                {
                    $directory = $file_uploader->getTargetDirectory();
                    $full_path = $directory.'/'.$file_name;
                    // Do what you want with the full path file...
                    // Why not read the content or parse it !!!
                }
                else
                {
                    // Oups, an error occured !!!
                }
            }
        }
        return $this->render('upload/test-upload.html.twig', [
            'form' => $form->createView(),
        ]);
    }
    // ...
}
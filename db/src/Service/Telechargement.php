<?php

namespace App\Service;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

class Telechargement
{
//    private $targetDirectory;
    private $container;
    private $slugger;

    public function __construct(/*$targetDirectory,*/ContainerInterface $container, SluggerInterface $slugger)
    {
//        $this->targetDirectory = $targetDirectory;
        $this->container = $container;
        $this->slugger = $slugger;
    }

    public function upload(UploadedFile $file)
    {
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        $fileName = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();
        try {
            // On copie ensuite le fichier dans le dossier upload, l'ordre des paramètres et OU, puis QUOI
                //on récupére le paramétre indiquant le chemin ou trouver le dossier upload (cf services.yaml)
            $file->move($this->getTargetDirectory()->getParameter('upload_directory'), $fileName);

        } catch (FileException $e) {
            // ... handle exception if something happens during file upload
            return null; // for example
        }
        return $fileName;
    }
    public function getTargetDirectory()
    {
        return $this->container;
    }
}
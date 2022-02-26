<?php

namespace App\Form;

use App\Entity\Marques;
use App\Entity\Voiture;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VoitureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')

            ->add('marque', EntityType::class, [
                'class' => Marques::class, // nom l'entité dont on a besoin
//                'expanded' => true, // voir la documentation de "expanded" et "multiple" https://symfony.com/doc/current/reference/forms/types/entity.html#select-tag-checkboxes-or-radio-buttons
//                'multiple' => true,

//                'choice_label' => function(Marques $marques) {
//                    return $marques->getNom();
//                }
                'choice_label' => 'nom' // la valeur est un attribut d'une entité
            ])
            // Ajout du champ image
            // Le champ ne devra pas être lié à la bdd (mapped à flase, on ne stock pas de fichiers en bdd)
                // On pourra ajouter ici des limites de tailles de types de fichiers de nombres de fichiers ...
            ->add('images', FileType::class, [
                //proposition pour ne pas afficher le label 'images' peut-être retiré sans crainte en fonction des besoins
                'label' => false,
                // multiple nous permettra l'ajout de pièces multiples
                //'multiple' => true,
                'mapped' => false,
                'required' => false
            ])
            ->add('content')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Voiture::class,
        ]);
    }
}
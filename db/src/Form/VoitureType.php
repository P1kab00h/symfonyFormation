<?php

namespace App\Form;

use App\Entity\Marques;
use App\Entity\Voiture;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
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
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Voiture::class,
        ]);
    }
}
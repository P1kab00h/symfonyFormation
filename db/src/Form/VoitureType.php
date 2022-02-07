<?php

namespace App\Form;

use App\Entity\Marque;
use App\Entity\Voiture;
use Symfony\Component\Form\AbstractType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VoitureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            ->add('marque', EntityType::class, [
                'class' => Marque::class, // nom de l'entité dont on a besoin
                'expanded' => true, // boutton radio choix unique.
/*                'choice_label' => function(Marque $marque) {
                    return $marque->getNom();
                }*/
                'choice_label' => 'nom' // la valeur est un attribut de l'entité (id, nom ...)
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

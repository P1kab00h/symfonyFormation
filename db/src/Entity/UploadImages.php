<?php

namespace App\Entity;

use App\Repository\UploadImagesRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UploadImagesRepository::class)]
class UploadImages
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups('voiture:read')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups('voiture:read')]
    private $name;

    #[ORM\ManyToOne(targetEntity: Voiture::class, inversedBy: 'uploadImages')]
    #[ORM\JoinColumn(nullable: false)]
    private $voiture;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getVoiture(): ?Voiture
    {
        return $this->voiture;
    }

    public function setVoiture(?Voiture $voiture): self
    {
        $this->voiture = $voiture;

        return $this;
    }
}

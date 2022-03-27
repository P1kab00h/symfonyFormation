<?php

namespace App\Entity;

use App\Repository\VoitureRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: VoitureRepository::class)]
class Voiture
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups('voiture:read')]
    private $id;

    #[ORM\Column(type: 'string', length: 100)]
    #[Groups('voiture:read')]
    private $nom;

    #[ORM\ManyToOne(targetEntity: Marques::class, inversedBy: 'voitures')]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups('voiture:read')]
    private $marque;

    #[ORM\Column(type: 'text')]
    #[Groups('voiture:read')]
    private $content;

    #[ORM\OneToMany(mappedBy: 'voiture', targetEntity: UploadImages::class, orphanRemoval: true, cascade:  ["persist"])]
    #[Groups('voiture:read')]
    private $uploadImages;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $nameSlugger;

    public function __construct()
    {
        $this->uploadImages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }


    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getMarque(): ?Marques
    {
        return $this->marque;
    }

    public function setMarque(?Marques $marque): self
    {
        $this->marque = $marque;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    /**
     * @return Collection|UploadImages[]
     */
    public function getUploadImages(): Collection
    {
        return $this->uploadImages;
    }

    public function addUploadImage(UploadImages $uploadImage): self
    {
        if (!$this->uploadImages->contains($uploadImage)) {
            $this->uploadImages[] = $uploadImage;
            $uploadImage->setVoiture($this);
        }

        return $this;
    }

    public function removeUploadImage(UploadImages $uploadImage): self
    {
        if ($this->uploadImages->removeElement($uploadImage)) {
            // set the owning side to null (unless already changed)
            if ($uploadImage->getVoiture() === $this) {
                $uploadImage->setVoiture(null);
            }
        }

        return $this;
    }

    public function getNameSlugger(): ?string
    {
        return $this->nameSlugger;
    }

    public function setNameSlugger(?string $nameSlugger): self
    {
        $this->nameSlugger = $nameSlugger;

        return $this;
    }
}
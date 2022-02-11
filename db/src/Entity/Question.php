<?php

namespace App\Entity;

use App\Repository\QuestionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
class Question
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $questionPourUnChampion;

    #[ORM\ManyToOne(targetEntity: Sujet::class, inversedBy: 'questions')]
    #[ORM\JoinColumn(nullable: false)]
    private $sujets;

    #[ORM\OneToMany(mappedBy: 'questions', targetEntity: Reponse::class, orphanRemoval: true)]
    private $reponses;

    public function __construct()
    {
        $this->reponses = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuestionPourUnChampion(): ?string
    {
        return $this->questionPourUnChampion;
    }

    public function setQuestionPourUnChampion(string $questionPourUnChampion): self
    {
        $this->questionPourUnChampion = $questionPourUnChampion;

        return $this;
    }

    public function getSujets(): ?Sujet
    {
        return $this->sujets;
    }

    public function setSujets(?Sujet $sujets): self
    {
        $this->sujets = $sujets;

        return $this;
    }

    /**
     * @return Collection|Reponse[]
     */
    public function getReponses(): Collection
    {
        return $this->reponses;
    }

    public function addReponse(Reponse $reponse): self
    {
        if (!$this->reponses->contains($reponse)) {
            $this->reponses[] = $reponse;
            $reponse->setQuestions($this);
        }

        return $this;
    }

    public function removeReponse(Reponse $reponse): self
    {
        if ($this->reponses->removeElement($reponse)) {
            // set the owning side to null (unless already changed)
            if ($reponse->getQuestions() === $this) {
                $reponse->setQuestions(null);
            }
        }

        return $this;
    }
}

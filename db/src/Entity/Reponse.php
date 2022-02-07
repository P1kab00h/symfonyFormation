<?php

namespace App\Entity;

use App\Repository\ReponseRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReponseRepository::class)]
class Reponse
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $reponse;

    #[ORM\ManyToOne(targetEntity: Question::class, inversedBy: 'reponses')]
    private $question_fk;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReponse(): ?string
    {
        return $this->reponse;
    }

    public function setReponse(string $reponse): self
    {
        $this->reponse = $reponse;

        return $this;
    }

    public function getQuestionFk(): ?Question
    {
        return $this->question_fk;
    }

    public function setQuestionFk(?Question $question_fk): self
    {
        $this->question_fk = $question_fk;

        return $this;
    }
}

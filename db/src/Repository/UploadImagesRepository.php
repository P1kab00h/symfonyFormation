<?php

namespace App\Repository;

use App\Entity\UploadImages;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UploadImages|null find($id, $lockMode = null, $lockVersion = null)
 * @method UploadImages|null findOneBy(array $criteria, array $orderBy = null)
 * @method UploadImages[]    findAll()
 * @method UploadImages[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UploadImagesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UploadImages::class);
    }

    // /**
    //  * @return UploadImages[] Returns an array of UploadImages objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UploadImages
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

<?php

namespace app\controllers;

use Yii;
use app\models\film;
use app\models\FilmSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\data\ActiveDataProvider;
use yii\rest\ActiveController;
/**
 * FilmController implements the CRUD actions for film model.
 */
class FilmController extends ActiveController
{
      public $modelClass = 'app\models\FilmSearch';
       public $serializer = [
        'class' => 'yii\rest\Serializer',
        'collectionEnvelope' => 'data',
    ];
    
     public function behaviors()
    
    {
        return [
            [
                 'class' => \yii\filters\ContentNegotiator::className(),
                
                'formats' => [
                    'application/json' => \yii\web\Response::FORMAT_JSON,
                ],
            ],
        ];
}
}

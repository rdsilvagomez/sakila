<?php

namespace app\controllers;

use Yii;
use app\models\category;
use app\models\SearchCategory;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\data\ActiveDataProvider;
use yii\rest\ActiveController;

/**
 * CategoryController implements the CRUD actions for category model.
 */
class CategoryController extends ActiveController
{
     public $modelClass = 'app\models\SearchCategory';
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

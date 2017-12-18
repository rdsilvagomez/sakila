<?php

namespace app\controllers;

use Yii;
use app\models\filmActor;
use app\models\SearchFilmActor;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\data\ActiveDataProvider;
use yii\rest\ActiveController;
/**
 * FilmActorController implements the CRUD actions for filmActor model.
 */
class FilmActorController extends ActiveController
{
     public $modelClass = 'app\models\SearchFilmActor';
       public $serializer = [
        'class' => 'yii\rest\Serializer',
        'collectionEnvelope' => 'data',
    ];
    public function actionList()    {
   $query = \app\models\SearchFilmActor::find()->andFilterWhere(['=', 'actor_id', $_GET['actor_id']])
                             ;
   
   $dataProvider = new ActiveDataProvider([
    'query' => $query,
                'pagination' => ['pageSize'   => 10,],
        ]);
    return $dataProvider;                             
 
}
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

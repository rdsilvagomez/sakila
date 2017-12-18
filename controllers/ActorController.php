<?php

namespace app\controllers;

use Yii;
use app\models\Actor;
use app\models\ActorSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\data\ActiveDataProvider;
use yii\rest\ActiveController;
/**
 * ActorController implements the CRUD actions for Actor model.
 */
class ActorController extends ActiveController
{
    
   public $modelClass = 'app\models\ActorSearch';
       public $serializer = [
        'class' => 'yii\rest\Serializer',
        'collectionEnvelope' => 'data',
    ];
    public function actionList ()
    {
        $query = \app\models\ActorSearch::find(); 
        $provider = new ActiveDataProvider([
                                'query'      => $query,
                                'pagination' => ['pageSize'   => 10,]
            ]);
          return $provider; 

    } 
    public function actionSearch()
{
    if (!empty($_GET)) {
        $model = new $this->modelClass;
        foreach ($_GET as $key => $value) {
            if (!$model->hasAttribute($key)) {
                throw new \yii\web\HttpException(404, 'Invalid attribute:' . $key);
            }
        }
        try {
            $provider = new ActiveDataProvider([
                'query' => $model->find()->where($_GET),
                 'pagination' => ['pageSize'   => 10,]
            ]);
        } catch (Exception $ex) {
            throw new \yii\web\HttpException(500, 'Internal server error');
        }

        if ($provider->getCount() <= 0) {
            throw new \yii\web\HttpException(404, 'No entries found with this query string');
        } else {
            return $provider;
        }
    } else {
        throw new \yii\web\HttpException(400, 'There are no query string');
    }
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

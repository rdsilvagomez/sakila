<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\filmActor;

/**
 * SearchFilmActor represents the model behind the search form about `app\models\filmActor`.
 */
class SearchFilmActor extends filmActor
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['actor_id', 'film_id'], 'integer'],
            [['last_update'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = filmActor::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'actor_id' => $this->actor_id,
            'film_id' => $this->film_id,
            'last_update' => $this->last_update,
        ]);

        return $dataProvider;
    }
}

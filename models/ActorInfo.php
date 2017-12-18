<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "actor_info".
 *
 * @property integer $actor_id
 * @property string $first_name
 * @property string $last_name
 * @property string $film_info
 */
class ActorInfo extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'actor_info';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['actor_id'], 'integer'],
            [['first_name', 'last_name'], 'required'],
            [['film_info'], 'string'],
            [['first_name', 'last_name'], 'string', 'max' => 45],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'actor_id' => 'Actor ID',
            'first_name' => 'First Name',
            'last_name' => 'Last Name',
            'film_info' => 'Film Info',
        ];
    }
}

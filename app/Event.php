<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
    	'date', 'name'
    ];

    public function guests() {
    	return $this->hasMany('App\Guest');
    }
}

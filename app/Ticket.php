<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = [
    	'type', 'cost', 'type', 'description'
    ];

    public function guests() {
    	return $this->hasMany('App\Guest');
    }
}

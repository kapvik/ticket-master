<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guest extends Model
{
    protected $fillable = [
    	'first_name', 'last_name', 'email', 'event_id', 'ticket_id'
    ];

    public function ticket() {
    	return $this->belongsTo('App\Ticket');
    }

    public function event() {
    	return $this->belongsTo('App\Event');
    }

}

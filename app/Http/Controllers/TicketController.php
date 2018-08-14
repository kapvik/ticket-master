<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ticket;
class TicketController extends Controller
{
    public function index()
    {
        $tikets = Ticket::all();
        return $tikets;
    }

}

<?php

use Illuminate\Database\Seeder;

class TicketsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	DB::table('tickets')->insert([
    		[
    			'type' => 'free',
    			'cost' => 0,
    			'description' => 'The free ticket option, includes seats to regular events are general admission and available on a first-come-first-serve basis.'
    		],
    		[
    			'type' => 'standard',
    			'cost' => 100,
    			'description' => 'The standard ticket option, which are usually a block of desirable seats in the centr of the seating area, and also with the added benefit of being able to reserve your seats.'
    		],
    		[
    			'type' => 'premium',
    			'cost' => 500,
    			'description' => 'The premium ticket option, includes seats near to scene and have feature going to afterparty with celebrities, where is free in-seat dining service (including alcohol).'
    		]
    	]);
    }
}

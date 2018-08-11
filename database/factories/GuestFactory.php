<?php

use Faker\Generator as Faker;

$factory->define(App\Guest::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        'ticket_id' => $faker->numberBetween(1,3),
        'event_id' => function () {
        	return App\Event::inRandomOrder()->first()->id;
        }
    ];
});

<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'date' => $faker->dateTime($max = 'now', $timezone = null),
        'name' => $faker->unique()->realText($faker->numberBetween(15,20))
    ];
});

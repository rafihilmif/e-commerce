<?php

namespace Database\Seeders;

use App\Models\Customer;
use Faker\Factory as Faker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Str;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $faker = Faker::create();
        foreach (range(1, 25) as $index) {
            DB::table('customer')->insert([
                'id' => $faker->uuid(),
                'email' => $faker->unique()->email,
                'name' => $faker->name,
                'password' => bcrypt('secret'),
                'gender' => $faker->randomElement(['Male', 'Female']),
                'address' => $faker->address,
                'province' => $faker->state,
                'city' => $faker->city,
                'birthdate' => $faker->dateTimeBetween($startDate = '-30 years', $endDate = 'now', $timezone = null),
                'phone' => $faker->numerify('###-###-###-###'),
                'created_at' => $faker->dateTimeThisMonth(),
                'updated_at' => $faker->dateTimeThisMonth(),
            ]);
        }
    }
}
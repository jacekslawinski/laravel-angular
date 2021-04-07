<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class HardwaresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('hardwares')->insertOrIgnore([
            'id' => 1,
            'name' => 'HP EliteBook',
            'serial_number' => '12545679787',
            'production_year' => 2020,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('hardwares')->insertOrIgnore([
            'id' => 1,
            'name' => 'Dell Inspiron',
            'serial_number' => '6565696969554',
            'production_year' => 2019,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

    }

}

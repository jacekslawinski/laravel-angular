<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class HardwareSystemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('hardware_systems')->insertOrIgnore([
            'hardware_id' => 1,
            'system_id' => 2,
        ]);
        DB::table('hardware_systems')->insertOrIgnore([
            'hardware_id' => 2,
            'system_id' => 1,
        ]);

    }

}

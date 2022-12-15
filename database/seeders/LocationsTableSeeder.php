<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\Province;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Kodepandai\LaravelRajaOngkir\Facades\RajaOngkir;

class LocationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = json_decode(RajaOngkir::getProvince(), true);
        $daftarProvinsi = $data['rajaongkir']['results'];
        foreach ($daftarProvinsi as $provinsi) {
            Province::create([
                'province_id' => $provinsi['province_id'],
                'title' => $provinsi['province']
            ]);
        }

        $data = json_decode(RajaOngkir::getCity(), true);
        $daftarKota = $data['rajaongkir']['results'];
        foreach ($daftarKota as $kota) {
            City::create([
                'province_id' => $kota['province_id'],
                'city_id' => $kota['city_id'],
                'title' => $kota['city_name']
            ]);
        }
    }
}

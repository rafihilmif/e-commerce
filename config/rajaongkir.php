<?php
// config for Kodepandai/LaravelRajaOngkir
return  [
    /**
     * api key yang di dapat dari akun raja ongkir
     */
    'API_KEY' => env('RAJAONGKIR_KEY', '24cd1cef06ae8acad38717e780097342'),

    /**
     * tipe akun untuk menentukan api url
     * starter, basic, pro
     */
    'ACCOUNT_TYPE' => env('RAJAONGKIR_TYPE', 'starter')
];

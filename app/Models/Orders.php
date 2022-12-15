<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
    protected $table        = "orders";
    protected $primaryKey   = "id";
    public $incrementing    = false;
    public $timestamps      = true;

    protected $fillable = ['id', 'id_customer', 'name', 'courier', 'delivery_type', 'delivery_fee', 'total', 'province_order', 'city_order', 'address_order', 'zip_code', 'phone', 'note', 'status_order'];
}

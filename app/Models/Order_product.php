<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order_product extends Model
{
    use HasFactory;
    use HasFactory;
    protected $table        = "order_product";
    protected $primaryKey   = "id";
    public $incrementing    = false;
    public $timestamps      = false;
}

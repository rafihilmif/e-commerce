<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $table        = "cart";
    protected $primaryKey   = "id";
    public $incrementing    = false;
    public $timestamps      = false;

    protected $fillable = ['id', 'id_customer', 'id_product', 'name', 'qty', 'image'];

    public function Customer()
    {
        return $this->belongsTo(Customer::class, 'id_customer', 'id');
    }
    public function Product()
    {
        return $this->belongsTo(Product::class, 'id_product', 'id');
    }
}

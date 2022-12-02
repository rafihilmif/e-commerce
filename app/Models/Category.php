<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table        = "category";
    protected $primaryKey   = "id";
    public $incrementing    = false;
    public $timestamps      = false;

    protected $fillable = ['id', 'name', 'parent'];

    public function Product()
    {
        return $this->hasMany(Product::class, 'id_category', 'id');
    }
}
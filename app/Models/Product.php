<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table        = "product";
    protected $primaryKey   = "id";
    public $incrementing    = false;
    public $timestamps      = false;

    protected $fillable = ['id', 'id_category', 'id_artist', 'tag', 'artist', 'name', 'material', 'desc', 'size', 'price', 'color', 'stock', 'image'];

    public function Categories()
    {
        return $this->belongsTo(Category::class, 'id_category', 'id');
    }
    public function Artist()
    {
        return $this->belongsTo(Artist::class, 'id_artist', 'id');
    }
}
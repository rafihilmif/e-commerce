<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;
    protected $table        = "artist";
    protected $primaryKey   = "id";
    public $incrementing    = false;
    public $timestamps      = false;

    protected $fillable = ['id', 'name'];

    public function Product()
    {
        return $this->hasMany(Product::class, 'id', 'id_artist');
    }
}
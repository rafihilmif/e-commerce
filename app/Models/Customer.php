<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $table        = "customer";
    protected $primaryKey   = "id";
    public $incrementing    = false;
    public $timestamps      = true;

    protected $fillable = ['id', 'email', 'name', 'address', 'birthdate', 'province', 'city', 'gender', 'phone', 'password'];

    public function save(array $options = array())
    {
        if (isset($this->remember_token))
            unset($this->remember_token);

        return parent::save($options);
    }

    public function Cart()
    {
        return $this->hasMany(Cart::class, 'id', 'id_Product');
    }
}

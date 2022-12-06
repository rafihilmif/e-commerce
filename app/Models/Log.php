<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    use HasFactory;

    protected $table = "log";
    protected $primaryKey = "id";
    public $incrementing = false;
    public $timestamp = false;

    protected $fillable = ['id','id_customer', 'keterangan'];
}

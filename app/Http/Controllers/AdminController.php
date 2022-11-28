<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Faker\Core\Uuid as CoreUuid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Ramsey\Uuid\Uuid;

class AdminController extends Controller
{
    public function home(Request $req){
        return view('admin.home');
    }

    public function add(Request $req){
        $customer = Customer::all();
        $param["daftarcustomer"] = $customer;
        return view('admin.add', $param);
    }

    public function adduser(Request $req){
        $req->validate(
            [
                'email' => 'required',
                'name' => 'required',
                'password' => 'required|min:8',
                'address' => 'required',
                'city' => 'required',
                'provinsi' => 'required',
                'birthdate' => 'required',
                'phone' => 'required'
            ]
        );
        $res = Customer::create([
            'id' => Uuid::uuid4()->getHex(),
            'email' => $req->email,
            'name' => $req->name,
            'password' => Hash::make($req->password),
            'gender' => $req->rbgender,
            'address' => $req->address,
            'province' => $req->provinsi,
            'city' => $req->city,
            'birthdate' => $req->birthdate,
            'phone' => $req->phone
        ]);
        if($res){
            return redirect()->back();
        }
    }

    public function ubah(Request $req){
        return view('admin.update');
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Middleware\Logging;
use App\Models\Customer;
use App\Models\Log;
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
            return redirect()->back()->with('pesan','Berhasil Menambah Customer');
        }
    }

    public function ubah(Request $req){
        $customer = Customer::all()->find($req->id);
        $param["daftarcustomer"] = $customer;
        return view('admin.update');
    }

    public function doubah(Request $req){
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
        $ubahcust = Customer::find($req->id);
        $ubahcust->email = $req->email;
        $ubahcust->name = $req->name;
        $ubahcust->password = $req->password;
        $ubahcust->gender = $req->rbgender;
        $ubahcust->province = $req->provinsi;
        $ubahcust->city = $req->city;
        $ubahcust->birthdate = $req->birthdate;
        $ubahcust->phone = $req->phone;
        $ubahcust->id = Uuid::uuid4()->getHex();
        $res = $ubahcust->save();
        if($res){
            return redirect("admin/update/user/{$req->id}")->with('pesan', 'Berhasil Mengubah Customer');
        }
    }

    // public function logs(Request $req){
    //     $logs = Log::all();
    //     $param["daftarlogs"] = $logs;
    //     return view('admin.logs', $param);
    // }
}
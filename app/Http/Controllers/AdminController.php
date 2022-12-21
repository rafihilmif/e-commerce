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
        $customer = Customer::all();
        $param["daftarcustomer"] = $customer;
        return view('admin.home', $param);
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
            'gender' => $req->gender,
            'address' => $req->address,
            'province' => $req->provinsi,
            'city' => $req->city,
            'birthdate' => $req->birthdate,
            'phone' => $req->phone
        ]);
        if($res){
            return redirect()->back()->with('success','Berhasil Menambah Customer');
        }else{
            return redirect()->back()->with('error', 'Gagal Menambah Customer');
        }
    }

    public function ubahuser(Request $req){
        $cust = Customer::all()->find($req->id);
        //$param["cust"] = $cust;
        return view('admin.update', ['customer' => $cust], compact('cust'));
    }

    public function doubah(Request $req){
        $customer = Customer::find($req->id);

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

        $res = $customer->update([
            'email' => $req->email,
            'name' => $req->name,
            'password' => $req->password,
            'gender' => $req->gender,
            'province' => $req->provinsi,
            'city' => $req->city,
            'birthdate' => $req->birthdate,
            'phone' => $req->phone
        ]);
        // $ubahcust->email = $req->email;
        // $ubahcust->name = $req->name;
        // $ubahcust->password = $req->password;
        // $ubahcust->gender = $req->gender;
        // $ubahcust->province = $req->provinsi;
        // $ubahcust->city = $req->city;
        // $ubahcust->birthdate = $req->birthdate;
        // $ubahcust->phone = $req->phone;
        // $ubahcust->id = Uuid::uuid4()->getHex();
        // $res = $ubahcust->save();
        if($res){
            return redirect()->back()->with('success', 'Berhasil Mengubah Customer');
        }else{
            return redirect()->back()->with('error', 'Gagal Mengubah Customer');
        }
    }

    public function doHapus(Request $req){
        $customer = Customer::find($req->id);
        $res = $customer->delete();
        if($res){
            return redirect()->back()->with('info', 'Data Berhasil dihapus');
        }
    }
    // public function logs(Request $req){
    //     $logs = Log::all();
    //     $param["daftarlogs"] = $logs;
    //     return view('admin.logs', $param);
    // }
}

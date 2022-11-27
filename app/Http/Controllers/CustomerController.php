<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Ramsey\Uuid\Uuid;

class CustomerController extends Controller
{
    public function login()
    {
        return view('login', ['title' => 'Login']);
    }
    public function doRegister(Request $req)
    {
        $req->validate(
            [
                "email" => "required|unique:customer",
                "name" => "required|max:50",
                "address" => "required",
                "phone" => "required|numeric",
                "password" => "required|min:8|required_with:confirmpassword|same:confirmpassword|regex:/[a-z]/|regex:/[A-Z]/|regex:/[@$!%*#?&]/|regex:/[0-9]/",
                "confirmpassword" => "required",
            ],
        );
        $password = $req->input("password");
        $cpassword = $req->input("confirmpassword");
        if ($password == $cpassword) {
            $customer = Customer::create([
                'id' => Uuid::uuid4()->getHex(),
                'email' => $req->email,
                'name' => $req->name,
                'address' => $req->address,
                'province' => $req->province,
                'city' => $req->city,
                'birthdate' => $req->birthdate,
                'gender' => $req->gender,
                'phone' => $req->phone,
                'password' => Hash::make($req->password)
            ]);
            return redirect()->route('login')->with('success', 'Registration success. Please login!');
        }
    }
    public function doLogin(Request $req)
    {
        $validation = [
            "email" => "required",
            "password" => "required"
        ];
        $remember_me = $req->has('remember_me') ? true : false;
        $this->validate($req, $validation);
        if (Auth::attempt(['email' => $req->email, 'password' => $req->password], $remember_me)) {
            $customer = auth()->user();
            $req->session()->regenerate();
            return redirect()->intended('customer/home');
        }
        return back()->withErrors([
            'password' => 'Password incorrect',
        ]);
    }
    public function home(Request $req)
    {
        if (Auth::check()) {
            return view('customer/home', ['title' => 'Home']);
        }
    }
    public function profile(Request $req)
    {
        if (Auth::check()) {
            return view('customer/profile', ['title' => 'Profile']);
        }
    }
    public function doUpdateProfile(Request $req)
    {
        $req->validate([
            'password' => 'required|current_password',
            'new_password' => 'required_with:new_confirm_password',
        ]);
        $password = $req->input('password');
        $new_password = $req->input('new_password');
        if (filled($new_password)) {
            $customer = Customer::find(Auth::id());
            $customer->password = Hash::make($req->new_password);
            $req->session()->regenerate();
            $customer->save();
            return back()->with('success', 'Password has Change!');
        } else if (filled($password)) {
            $customer = Customer::find(Auth::id());
            $customer->name = $req->input('name');
            $customer->address = $req->input('address');
            $customer->phone = $req->input('phone');
            $customer->gender = $req->input('gender');
            $customer->province = $req->input('province');
            $customer->city = $req->input('city');
            $customer->birthdate = $req->input('birthdate');
            $req->session()->regenerate();
            $customer->save();
            return back()->with('success', 'Profile has Change!');
        }
    }
    public function logout(Request $req)
    {
        Auth::logout();
        $req->session()->invalidate();
        $req->session()->regenerateToken();
        return redirect('/login');
    }
}
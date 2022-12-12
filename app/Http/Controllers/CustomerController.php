<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Support\Facades\DB;
use App\Models\Customer;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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
        $product = DB::table('product')->paginate(8);

        if (Auth::check()) {
            return view('landing', ['title' => 'Noiseblod'], compact('product'));
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

    public function cart(Request $req)
    {
        $carts = Cart::where('id_customer', Auth::id())->get();
        return view('customer/cart', ['title' => 'cart'], compact('carts'));
    }
    public function addToCart(Request $req)
    {
        $product_id = $req->input("product_id");
        $qty = $req->input("qtybutton");

        if (Cart::where('id_product', $product_id)->exists()) {
            $cart = Cart::where('id_product', $product_id)->first();
            $cart->qty += $qty;
            $saved = $cart->save();
        }else {
            $product = Product::find($product_id);

            $index = Cart::all()->count()+1;
            $nameid = "CA" . Carbon::now()->toDateTimeString() . str_pad($index,4,"0",STR_PAD_LEFT);

            $cart = new Cart;
            $cart->id = $nameid;
            $cart->id_customer = Auth::id();
            $cart->id_product = $product->id;
            $cart->name = $product->name;
            $cart->qty = $qty;
            $cart->image = $product->image;
            $saved = $cart->save();
        }

        return back();
    }
    public function updateCart(Request $req)
    {
        $cart = Cart::find($req->id);
        $cart->qty = $req->qty;
        $saved = $cart->save();
        return back();
    }
    public function removeCart($id)
    {
        Cart::where('id_customer', Auth::id())->where('id_product', $id)->delete();
        return back();
    }
    public function removeAllCart(Request $req)
    {
        Cart::where('id_customer', Auth::id())->delete();
        return back();
    }

    public function checkout(Request $req)
    {
        $carts = Cart::where('id_customer', Auth::id())->get();
        return view('customer/checkout', ['title' => 'checkout'], compact('carts'));
    }

    public function wishlist(Request $req)
    {
        if (Auth::check()) {
            return view('customer/wishlist', ['title' => 'wishlist']);
        }
    }
    public function addToWishlist(Product $product)
    {
        return back();
    }
}

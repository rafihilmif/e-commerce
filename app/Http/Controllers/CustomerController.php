<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\City;
use Illuminate\Support\Facades\DB;
use App\Models\Customer;
use App\Models\Order_product;
use App\Models\Orders;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Kodepandai\LaravelRajaOngkir\Facades\RajaOngkir;
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
            return redirect()->intended('customer/home')->with('success', 'Login Successful!');
        }
        return back()->withErrors([
            'password' => 'Password incorrect',
        ]);
    }
    public function home(Request $req)
    {
        $product = DB::table('product')->orderBy('created_at', 'DESC')->paginate(12);

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
        return view('customer/cart', ['title' => 'Cart'], compact('carts'));
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
        // $origin = "Surabaya";
        // $destination = "Balikpapan";
        // $weight = 0;
        // $courier = "jne";

        // $data = json_decode(RajaOngkir::getCity(), true);

        // $cities = $data['rajaongkir']['results'];
        // foreach ($cities as $c) {
        //     if ($c['city_name'] == $origin) {
        //         $origin = $c['city_id'];
        //     }
        //     if ($c['city_name'] == $destination) {
        //         $destination = $c['city_id'];
        //     }
        // }

        // $carts = Cart::where('id_customer', Auth::id())->get();
        // foreach ($carts as $cart) {
        //     $weight += $cart->qty;
        // }
        // $weight = $weight*500;

        // $data = RajaOngkir::getCost($origin,'city', $destination,'city', $weight, $courier);
        // $cost = json_decode($data, true);
        // dd($cost['rajaongkir']['results'][0]['costs']);

        // $data = json_decode(RajaOngkir::getCity(), true);
        // $cities = $data['rajaongkir']['results'];
        // dd($cities);

        $carts = Cart::where('id_customer', Auth::id())->get();

        return view('customer/checkout', ['title' => 'Checkout'], compact('carts'));
    }

    public function wishlist(Request $req)
    {
        if (Auth::check()) {
            return view('customer/wishlist', ['title' => 'Wishlist']);
        }
    }
    public function addToWishlist(Product $product)
    {
        return back();
    }

    public function estimateCost(Request $req)
    {
        $origin = City::where('title', 'Surabaya')->first();
        $destination = City::where('title', $req->city)->first();
        $weight = 0;
        $courier = $req->courier;

        $carts = Cart::where('id_customer', Auth::id())->get();
        foreach ($carts as $cart) {
            $weight += $cart->qty;
        }
        $weight = $weight*0.5;

        $data = RajaOngkir::getCost($origin->city_id,'city', $destination->city_id,'city', $weight, $courier);
        $cost = json_decode($data, true);
        return response()->json($cost);
    }

    public function placeOrder(Request $req)
    {
        $name = $req->name;
        $courier = $req->courier;
        $delivery_type = $req->delivery_type;
        $delivery_fee = $req->delivery_fee;
        $total = $req->total;
        $province_order = $req->province_order;
        $city_order = $req->city_order;
        $address_order = $req->address_order;
        $zip_code = $req->zip_code;
        $phone = $req->phone;
        $note = $req->note;

        $id = "";

        try {
            do {
                $index = Orders::all()->count()+1;
                $id = "ODR" . Carbon::now()->toDateTimeString() . str_pad($index,4,"0",STR_PAD_LEFT);
            } while (Orders::where('id', $id)->exists());

            $order = new Orders;
            $order->id = $id;
            $order->id_customer = Auth::id();
            $order->name = $name;
            $order->courier = $courier;
            $order->delivery_type = $delivery_type;
            $order->delivery_fee = $delivery_fee;
            $order->total = $total;
            $order->province_order = $province_order;
            $order->city_order = $city_order;
            $order->address_order = $address_order;
            $order->zip_code = $zip_code;
            $order->phone = $phone;
            $order->note = $note;
            $order->status_order = "Waiting Confirmation";
            $order->created_at = Carbon::now()->toDateTimeString();
            $order->save();


            $carts = Cart::where('id_customer', Auth::id())->get();
            foreach ($carts as $cart) {
                $product = Product::where('id', $cart->id_product)->first();

                $orderP = new Order_product;
                $orderP->id_order = $id;
                $orderP->id_produk = $cart->id_product;
                $orderP->price = $product->price;
                $orderP->qty = $cart->qty;
                $orderP->save();
            }

            Cart::where('id_customer', Auth::id())->delete();

            return response()->json($note);

        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }
}

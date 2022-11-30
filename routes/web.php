<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\SellerController;
use App\Models\Customer;
use App\Models\Category;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [SellerController::class, 'landing'])->name('landing');

Route::get('/login', [CustomerController::class, 'login'])->name('login');
Route::post('login', [CustomerController::class, 'doLogin'])->name('doLogin');

Route::get('/register', [CustomerController::class, 'doRegister']);
Route::get('logout', [CustomerController::class, 'logout'])->name('logout');

Route::get('/aboutus', function () {
    return view('about');
});
Route::get('/contactus', function () {
    return view('contact');
});
Route::get('/contactus', function () {
    return view('contact');
});

Route::get('detail/{product}', [SellerController::class, 'productDetail'])->name('detail');
Route::get('search/{name}', [SellerController::class, 'productSearch'])->name('search');
Route::get('collection/{name}', [SellerController::class, 'productCategory'])->name('collection');

Route::get('artist/{name}', [SellerController::class, 'productArtist'])->name('artists');

Route::group(['prefix' => 'customer',  'middleware' => 'auth'], function () {
    Route::prefix('/')->group(function () {
        Route::get('home', [CustomerController::class, 'home'])->name('home');
        Route::get('cart', function () {
            return view('customer.cart');
        });

        Route::get('checkout', function () {
            return view('customer.checkout');
        });
        Route::get('wishlist', function () {
            return view('customer.wishlist');
        });
        Route::get('profile', [CustomerController::class, 'profile'])->name('profile');
        Route::post('profile', [CustomerController::class, 'doUpdateProfile'])->name('update');
    });
});
Route::prefix('admin')->group(function () {
    Route::prefix('/')->group(function () {
        Route::get('home', function () {
            return view('admin.home');
        });
        Route::get('add/user', function () {
            return view('admin.add');
        });
        Route::get('update/user', function () {
            return view('admin.update');
        });
    });
});
Route::prefix('seller')->group(function () {
    Route::prefix('/')->group(function () {
        Route::get('home', function () {
            return view('seller.home');
        });
        Route::post('add/product', [SellerController::class, 'addProduct'])->name('addProduct');
        Route::get('add/product', [SellerController::class, 'product'])->name('add');

        Route::post('properties/product', [SellerController::class, 'addProperties'])->name('addProperties');
        Route::get('properties/product', [SellerController::class, 'properties'])->name('properties');

        Route::post('category/product', [SellerController::class, 'addCategory'])->name('addCategory');
        Route::get('category/product', [SellerController::class, 'category'])->name('category');

        Route::post('artist/product', [SellerController::class, 'addArtist'])->name('addArtist');
        Route::get('artist/product', [SellerController::class, 'artist'])->name('artist');

        Route::post('tag/product', [SellerController::class, 'addTag'])->name('addTag');
        Route::get('tag/product', [SellerController::class, 'tag'])->name('tag');

        Route::post('image/product', [SellerController::class, 'addMultiImage'])->name('addMultiImage');
        Route::get('image/product', [SellerController::class, 'image'])->name('image');

        Route::get('update/product', function () {
            return view('seller.update');
        });
    });
});
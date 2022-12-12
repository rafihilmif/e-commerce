 <?php

    use App\Http\Controllers\AdminController;
    use App\Http\Controllers\CustomerController;
    use App\Http\Controllers\SellerController;
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
    Route::get('search/collection/{name}', [SellerController::class, 'productSearchByCategory'])->name('searchByCategory');
    Route::get('search/artist/{name}', [SellerController::class, 'productSearchByArtist'])->name('searchByArtist');

    Route::get('filter', [SellerController::class, 'filterByCategory'])->name('filterByCategory');

    Route::get('collection/{name}', [SellerController::class, 'productCategory'])->name('collection');
    Route::get('artist/{name}', [SellerController::class, 'productArtist'])->name('artists');

    Route::group(['prefix' => 'customer',  'middleware' => 'auth'], function () {
        Route::prefix('/')->group(function () {
            Route::get('home', [CustomerController::class, 'home'])->name('home');
            Route::get('cart', [CustomerController::class, 'cart'])->name('cart');
            Route::get('checkout', [CustomerController::class, 'checkout'])->name('checkout');
            Route::get('wishlist', [CustomerController::class, 'wishlist'])->name('wishlist');
            Route::get('profile', [CustomerController::class, 'profile'])->name('profile');
            Route::post('profile', [CustomerController::class, 'doUpdateProfile'])->name('update');

            Route::post('cart', [CustomerController::class, 'addToCart'])->name('addToCart');
            Route::post('cart/update', [CustomerController::class, 'updateCart'])->name('updateCart');
            Route::get('cart/remove/{id}', [CustomerController::class, 'removeCart'])->name('removeCart');
            Route::get('cart/remove', [CustomerController::class, 'removeAllCart'])->name('removeAllCart');
            Route::get('wishlist/{product}', [CustomerController::class, 'addToWishlist'])->name('addToWishlist');
        });
    });
    Route::prefix('admin')->group(function () {
        Route::prefix('/')->group(function () {
            Route::get('home', [AdminController::class, 'home']);
            Route::get('add/user', [AdminController::class, 'add'])->name('addUser');
            Route::post('add/user', [AdminController::class, 'adduser'])->name('doAddUser');
            Route::get('update/user', [AdminController::class, 'ubah'])->name('ubahUser');
            Route::post('update/user', [AdminController::class, 'doubah'])->name('doUbah');
            Route::get('home/{id}', [AdminController::class, 'doHapus'])->name('doHapus');
        });
    });
    Route::prefix('seller')->group(function () {
        Route::prefix('/')->group(function () {

            Route::get('dashboard', [SellerController::class, 'dashboard'])->name('dashboard');

            Route::post('add/product', [SellerController::class, 'addProduct'])->name('addProduct');
            Route::get('add/product', [SellerController::class, 'product'])->name('addPro');

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

            Route::get('update/product/{product}', [SellerController::class, 'updateProduct'])->name('updateProduct');
            Route::post("update/product", [SellerController::class, "doUpdateProduct"])->name('doUpdateProduct');
            Route::get("delete/{id}", [SellerController::class, "deleteProduct"])->name('deleteProduct');
        });
    });

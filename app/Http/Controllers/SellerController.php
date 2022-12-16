<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Product;
use App\Models\Category;
use App\Models\Product_properties;
use App\Models\Artist;
use App\Models\Customer;
use App\Models\Tag;
use App\Models\Images;
use App\Models\Order_product;
use App\Models\Orders;
use Illuminate\Http\Request;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Termwind\Components\Dd;
use Termwind\Components\Raw;

class SellerController extends Controller
{
    public function landing(Request $req)
    {
        $product = DB::table('product')->orderBy('created_at', 'DESC')->paginate(12);
        return view('landing', ['title' => 'Noiseblod'], compact('product'));
    }
    public function dashboard()
    {
        $customer = DB::table('customer')->get();
        $customerCount = $customer->count();
        $product = DB::table('product')->paginate(5);
        return view('seller.dashboard', ['title' => 'Dashboard'], compact('product', 'customerCount'));
    }
    public function product()
    {
        $product = Product::all();
        $category = Category::all()->sortBy('name');
        $artist = Artist::all()->sortBy('name');
        $tag = Tag::all()->sortBy('name');
        return view('seller.add', ['title' => 'Add Product'], compact('product', 'category', 'artist', 'tag'));
    }
    public function properties()
    {
        $product = Product::all();
        return view('seller.properties', ['title' => 'Add Properties'], compact('product'));
    }
    public function image()
    {
        $product = Product::all()->sortBy('name');
        return view('seller.image', ['title' => 'Add Image'], compact('product'));
    }
    public function category()
    {
        return view('seller.category', ['title' => 'Add Category']);
    }
    public function artist()
    {
        return view('seller.artist', ['title' => 'Add Artist']);
    }
    public function tag()
    {
        return view('seller.tag', ['title' => 'Add Tag']);
    }
    public function contact()
    {
        return view('contact', ['title' => 'Contact']);
    }
    public function about()
    {
        return view('about', ['title' => 'About']);
    }
    public function updateProduct(Product $product)
    {
        $category = Category::all()->sortBy('name');;
        $artist = Artist::all()->sortBy('name');;
        $tag = Tag::all()->sortBy('name');;
        return view('seller.update', ['product' => $product, 'title' => $product->name], compact('product', 'category', 'artist', 'tag'));
    }
    public function addProduct(Request $req)
    {
        if ($req->hasfile('image')) {
            $file = $req->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('assets/img/upload/product/', $filename);
            $image = $filename;
        } else {
            $filename = 'default.png';
        }
        $id = IdGenerator::generate(['table' => 'product', 'length' => 9, 'prefix' => 'ITM-']);
        $product = Product::create([
            'id' => $id,
            'id_category' => $req->id_category,
            'id_artist' => $req->id_artist,
            'tag' => $req->tag,
            'name' => $req->name,
            'price' => $req->price,
            'material' => $req->material,
            'desc' => $req->desc,
            'image' => $image,
        ]);

        return redirect()->back();
    }
    public function addProperties(Request $req)
    {
        $id = IdGenerator::generate(['table' => 'product_properties', 'length' => 9, 'prefix' => 'PRO-']);
        $category = Product_properties::create([
            'id' => $id,
            'id_product' => $req->id_product,
            'size' => $req->size,
            'stock' => $req->stock,
        ]);
        return redirect()->back();
    }
    public function addCategory(Request $req)
    {
        $id = IdGenerator::generate(['table' => 'category', 'length' => 9, 'prefix' => 'CAT-']);
        $category = Category::create([
            'id' => $id,
            'name' => $req->name,
            'parent' => $req->parent,
        ]);
        return redirect()->back();
    }
    public function addArtist(Request $req)
    {
        $id = IdGenerator::generate(['table' => 'artist', 'length' => 9, 'prefix' => 'ART-']);
        $artist = Artist::create([
            'id' => $id,
            'name' => $req->name,
        ]);
        return redirect()->back();
    }
    public function addTag(Request $req)
    {
        $id = IdGenerator::generate(['table' => 'tag', 'length' => 9, 'prefix' => 'TAG-']);
        $tag = Tag::create([
            'id' => $id,
            'name' => $req->name,
        ]);
        return redirect()->back();
    }
    public function addMultiImage(Request $req)
    {
        if ($req->hasFile('path')) {
            foreach ($req->file('path') as $file) {
                $extension = $file->getClientOriginalName();
                $filename = time() . '.' . $extension;
                $file->move('assets/img/upload/product/', $filename);
                $images[] = $filename;
            }
        } else {
            $filename = 'default.png';
        }
        $id = IdGenerator::generate(['table' => 'image', 'length' => 9, 'prefix' => 'IMG-']);
        $images = Images::create([
            'id' => $id,
            'id_product' => $req->id_product,
            'path' => json_encode($images),
        ]);
        return redirect()->back();
    }
    public function productDetail(Product $product)
    {
        $images = Images::select('path')
            ->where('id_product', $product->id)->get();
        return view('detail', ['product' => $product, 'title' => $product->name], compact('product', 'images'));
    }
    public function productCategory($name)
    {
        $category = Category::where('name', $name)->first();
        $product = Product::where('id_category', $category->id)->orderBy('name', 'ASC')->paginate(12);
        return view('collection', compact('category', 'product'));
    }
    public function productArtist($name)
    {
        $artist = Artist::where('name', $name)->first();
        $product = Product::where('id_artist', $artist->id)->orderBy('name', 'ASC')->paginate(12);
        return view('artist', compact('artist', 'product'));
    }
    public function productSearchByCategory(Request $req, $name)
    {
        $category = Category::where('name', $name)->first();
        $product = Product::where('id_category', $category->id);
        if ($req->has('term')) {
            $product = $product->where('name', 'like', "%$req->term%");
        }
        $product = $product->paginate(12);
        return view('collection', compact('category', 'product'));
    }
    public function productSearchByArtist(Request $req, $name)
    {
        $artist = Artist::where('name', $name)->first();
        $product = Product::where('id_artist', $artist->id);
        if ($req->has('term')) {
            $product = $product->where('name', 'like', "%$req->term%");
        }
        $product = $product->paginate(12);
        return view('artist', compact('artist', 'product'));
    }
    public function doUpdateProduct(Request $req)
    {
        $product = Product::find($req->id);
        if ($req->hasfile('image')) {
            $file = $req->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('assets/img/upload/product/', $filename);
            $image = $filename;
        } else {
            $filename = 'default.png';
        }
        $res = $product->update([
            'name' => $req->input('name'),
            'id_artist' => $req->input('id_artist'),
            'id_category' => $req->input('id_category'),
            'id_tag' => $req->input('id_tag'),
            'material' => $req->input('material'),
            'price' => $req->input('price'),
            'image' => $image,
        ]);
        if ($res) {
            return redirect()->back()->with("pesanSukses", "Data telah diperbaharui!");
        } else {
            return redirect()->back()->with("pesanGagal", "Gagal memperbaharui data!");
        }
    }
    public function deleteProduct(Request $req)
    {
        $product = Product::find($req->id);
        $res = $product->delete();

        if ($res) {
            return redirect()->back()->with("pesanSukses", "Data telah hapus!");
        } else {
            return redirect()->back()->with("pesanGagal", "Gagal menghapus data!");
        }
    }
    public function apparel()
    {
        $category = Category::where('parent', '=', 'Apparel')->first();
        $product = Product::where('id_category', $category->id)->paginate(12);
        return view('apparel', compact('category', 'product'));
    }
    public function music()
    {
        $category = Category::where('parent', '=', 'Music')->first();
        $product = Product::where('id_category', $category->id)->paginate(12);
        return view('apparel', compact('category', 'product'));
    }
    public function accessories()
    {
        $category = Category::where('parent', '=', 'Accessories')->first()->sortBy('name');
        $product = Product::where('id_category', $category->id)->paginate(12);
        return view('apparel', compact('category', 'product'));
    }

    public function delivery()
    {
        $orders = DB::table('orders')->paginate(5);
        return view('seller.delivery', ['title' => 'delivery'], compact('orders'));
    }

    public function deliveryDetail($id)
    {
        $order = Orders::where('id', $id)->first();
        $detail = Order_product::where('id_order', $id)->first();
        return view('seller.deliveryDetail', ['title' => 'delivery'], compact('order', 'detail'));
    }
}

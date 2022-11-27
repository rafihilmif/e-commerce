<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Models\Product_properties;
use App\Models\Artist;
use App\Models\Tag;
use App\Models\Images;
use Illuminate\Http\Request;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class SellerController extends Controller
{
    public function landing(Request $req)
    {
        $product = Product::all();
        return view('landing', ['title' => 'Noiseblod'], compact('product'));
    }
    public function product()
    {
        $product = Product::all();
        $category = Category::all();
        $artist = Artist::all();
        $tag = Tag::all();
        return view('seller.add', ['title' => 'Add Product'], compact('product', 'category', 'artist', 'tag'));
    }
    public function properties()
    {
        $product = Product::all();
        return view('seller.properties', ['title' => 'Add Properties'], compact('product'));
    }
    public function image()
    {
        $product = Product::all();
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
        $product = Product::where('id_category', $category->id)->get();
        return view('collection', compact('category', 'product'));
    }
    public function productArtist($name)
    {
        $artist = Artist::where('name', $name)->first();
        $product = Product::where('id_artist', $artist->id)->get();
        return view('artist', compact('artist', 'product'));
    }
}
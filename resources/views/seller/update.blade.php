<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title', $title)</title>
    @include('adminsellerstyle')
</head>

<body>
    @include('template.sidebarseller')
    <div id="main">
        <header class="mb-3">
            <a href="#" class="burger-btn d-block d-xl-none">
                <i class="bi bi-justify fs-3"></i>
            </a>
        </header>
        @if (Session::has('pesanSukses'))
            <div class="alert alert-success">
                {{ Session::get('pesanSukses') }}
            </div>
        @endif

        @if (Session::has('pesanGagal'))
            <div class="alert alert-danger">
                {{ Session::get('pesanGagal') }}
            </div>
        @endif
        <div class="page-heading">
            <div class="page-title">
                <h3>Update Product</h3>
                <section id="multiple-column-form">
                    <div class="row match-height">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <form class="form" action="{{ route('doUpdateProduct') }}" method="POST"
                                            enctype="multipart/form-data">
                                            @csrf
                                            <div class="row">
                                                <input type="hidden" name="id" value="{{ $product->id }}">
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="first-name-column">Name</label>
                                                        <input type="text" id="first-name-column"
                                                            class="form-control" placeholder="Name" name="name"
                                                            value="{{ $product->name }}">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="last-name-column">Artist</label>
                                                        <select name="id_artist" class="form-control">
                                                            @foreach ($artist as $item)
                                                                <option value="{{ $item->id }}">
                                                                    {{ strtoupper($item->name) }}</option>
                                                                </option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="city-column">Category</label>
                                                        <select name="id_category" class="form-control">
                                                            @foreach ($category as $item)
                                                                <option value="{{ $item->id }}">
                                                                    {{ strtoupper($item->name) }}</option>
                                                                </option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="city-column">Tag</label>
                                                        <select name="tag" class="form-control">
                                                            @foreach ($tag as $item)
                                                                <option>{{ strtoupper($item->name) }}</option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label>Material</label>
                                                        <select name="material" class="form-control">
                                                            <option value="Cotton">COTTON</option>
                                                            <option value="Polyster">POLYSTER</option>
                                                            <option value="Fleece">FLEECE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="first-name-column">Price</label>
                                                        <input type="number" id="first-name-column"
                                                            class="form-control" placeholder="Price" name="price"
                                                            value="{{ $product->price }}">
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label>Image</label>
                                                        <input type="file" class="form-control" name="image">
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label>Description</label>
                                                        <textarea name="desc" rows="4" cols="50" class="form-control">{{ $product->desc }}</textarea>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <button type="submit"
                                                            class="btn btn-primary form-control">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
</body>

</html>

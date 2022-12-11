<!doctype html>
<html class="no-js" lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', $title)</title>
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
    @include('customerstyle')

    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
</head>

<body>
    <div class="wrapper">
        @include('template.header')
        <div class="product-details-area pt-100 pb-95">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="product-details-img">
                            <div class="zoompro-border zoompro-span">
                                <img class="zoompro" src="{{ asset('assets/img/upload/product/' . $product->image) }}"
                                    data-zoom-image="{{ asset('assets/img/upload/product/' . $product->image) }}"
                                    alt="" />
                                <div class="product-video">
                                </div>
                            </div>
                            @foreach ($images as $image)
                                <div id="gallery" class="mt-20 product-dec-slider">
                                    @foreach (json_decode($image->path) as $path_name)
                                        <a data-image="{{ asset('assets/img/upload/product/' . $path_name) }}"
                                            data-zoom-image="{{ asset('assets/img/upload/product/' . $path_name) }}">
                                            <img src="{{ asset('assets/img/upload/product/' . $path_name) }}"
                                                alt="" width="90px" height="90px">
                                        </a>
                                    @endforeach
                                </div>
                            @endforeach

                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="product-details-content ml-30">
                            <h2>{{ $product->name }}</h2>
                            <div class="product-details-price">
                                <span>@currency($product->price)</span>
                            </div>
                            <div class="pro-details-rating-wrap">
                                <div class="pro-details-rating">
                                    <i class="sli sli-star yellow"></i>
                                    <i class="sli sli-star yellow"></i>
                                    <i class="sli sli-star yellow"></i>
                                    <i class="sli sli-star yellow"></i>
                                    <i class="sli sli-star yellow"></i>
                                </div>
                                <span><a href="#">3 Reviews</a></span>
                            </div>
                            <p>{{ strtoupper($product->desc) }}</p>
                            <div class="pro-details-size-color">
                                <?php $sizes = DB::table('product_properties')
                                    ->select('size')
                                    ->groupBy('size')
                                    ->where('id_product', $product->id)
                                    ->groupBy('size')
                                    ->get(); ?>
                                <div class="pro-details-size">
                                    <span>Size</span>
                                    <div class="pro-details-size-content">
                                        @if (count($sizes) != 0)
                                            <ul>
                                                @foreach ($sizes as $size)
                                                    <li><a>{{ strtoupper($size->size) }}</a></li>
                                                @endforeach
                                            </ul>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <form action="{{ route('addToCart') }}" style="display: inline-block;" method="post">
                                @csrf
                                <div class="pro-details-quality">
                                    <input type="hidden" name="product_id" id="product_id" value="{{ $product->id }}">
                                    <div class="cart-plus-minus">
                                        <input class="cart-plus-minus-box" type="text" name="qtybutton" id="qtybutton" value="1">
                                    </div>
                                    <div class="pro-details-cart btn-hover">
                                        <a href="#"><button type="submit" style="background:none;
                                            border:none;
                                            margin:0;
                                            padding:0;
                                            color:white;
                                            cursor: pointer;">Add To Cart</button></a>
                                    </div>
                                    <div class="pro-details-wishlist">
                                        <a title="Add To Wishlist" href="{{ route('addToWishlist', $product) }}"><i class="sli sli-heart"></i></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="description-review-area pb-95">
            <div class="container">


                <div class="description-review-wrapper">
                    <div class="description-review-topbar nav">
                        <a class="active" data-bs-toggle="tab" href="#des-details1">Description</a>
                        <a data-bs-toggle="tab" href="#des-details3">Additional information</a>
                        <a data-bs-toggle="tab" href="#des-details2">Reviews (3)</a>
                    </div>
                    <div class="tab-content description-review-bottom">
                        <div id="des-details1" class="tab-pane active">
                            <div class="product-description-wrapper">
                                <p>{{ strtoupper($product->desc) }}</p>
                            </div>
                        </div>
                        <div id="des-details3" class="tab-pane">
                            <div class="product-anotherinfo-wrapper">
                                <ul>
                                    <li><span>Tag</span>{{ $product->tag }}</li>
                                    <li><span>Materials</span>{{ $product->material }}</li>
                                </ul>
                            </div>
                        </div>
                        <div id="des-details2" class="tab-pane">
                            <div class="review-wrapper">
                                <div class="single-review">
                                    <div class="review-img">
                                        <img src="{{ url('assets/img/product-details/client-1.jpg') }}" alt="">
                                    </div>
                                    <div class="review-content">
                                        <p>“In convallis nulla et magna congue convallis. Donec eu nunc vel
                                            justo maximus posuere. Sed viverra nunc erat, a efficitur nibh”</p>
                                        <div class="review-top-wrap">
                                            <div class="review-name">
                                                <h4>Stella McGee</h4>
                                            </div>
                                            <div class="review-rating">
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-review">
                                    <div class="review-img">
                                        <img src="{{ url('assets/img/product-details/client-1.jpg') }}" alt="">
                                    </div>
                                    <div class="review-content">
                                        <p>“In convallis nulla et magna congue convallis. Donec eu nunc vel
                                            justo maximus posuere. Sed viverra nunc erat, a efficitur nibh”</p>
                                        <div class="review-top-wrap">
                                            <div class="review-name">
                                                <h4>Stella McGee</h4>
                                            </div>
                                            <div class="review-rating">
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-review">
                                    <div class="review-img">
                                        <img src="{{ url('assets/img/product-details/client-1.jpg') }}"
                                            alt="">
                                    </div>
                                    <div class="review-content">
                                        <p>“In convallis nulla et magna congue convallis. Donec eu nunc vel
                                            justo maximus posuere. Sed viverra nunc erat, a efficitur nibh”</p>
                                        <div class="review-top-wrap">
                                            <div class="review-name">
                                                <h4>Stella McGee</h4>
                                            </div>
                                            <div class="review-rating">
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ratting-form-wrapper">
                                <span>Add a Review</span>
                                <p>Your email address will not be published. Required fields are marked
                                    <span>*</span>
                                </p>
                                <div class="star-box-wrap">
                                    <div class="single-ratting-star">
                                        <i class="sli sli-star"></i>
                                    </div>
                                    <div class="single-ratting-star">
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                    </div>
                                    <div class="single-ratting-star">
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                    </div>
                                    <div class="single-ratting-star">
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                    </div>
                                    <div class="single-ratting-star">
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                    </div>
                                </div>
                                <div class="ratting-form">
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="rating-form-style mb-20">
                                                    <label>Your review <span>*</span></label>
                                                    <textarea name="Your Review"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="rating-form-style mb-20">
                                                    <label>Name <span>*</span></label>
                                                    <input type="text">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="rating-form-style mb-20">
                                                    <label>Email <span>*</span></label>
                                                    <input type="email">
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-submit">
                                                    <input type="submit" value="Submit">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>@include('template.footer')</footer>

    </div>

    <script>
        @include('js')
    </script>

</body>

</html>

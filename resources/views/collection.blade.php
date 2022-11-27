<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ strtoupper($category->name) }}</title>
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
    @include('customerstyle')
    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
</head>
<body>
    <div class="wrapper">
        <header>@include('template.header')</header>
        <div class="mobile-off-canvas-active">
            <a class="mobile-aside-close"><i class="sli sli-close"></i></a>
            <div class="header-mobile-aside-wrap">
                <div class="mobile-search">
                    <form class="search-form" action="#">
                        <input type="text" placeholder="Search entire store…">
                        <button class="button-search"><i class="sli sli-magnifier"></i></button>
                    </form>
                </div>
                <div class="mobile-social-wrap">
                    <a class="facebook" href="#"><i class="sli sli-social-facebook"></i></a>
                    <a class="twitter" href="#"><i class="sli sli-social-twitter"></i></a>
                    <a class="pinterest" href="#"><i class="sli sli-social-pinterest"></i></a>
                    <a class="instagram" href="#"><i class="sli sli-social-instagram"></i></a>
                    <a class="google" href="#"><i class="sli sli-social-google"></i></a>
                </div>
            </div>
        </div>
        <div class="shop-area pt-95 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="shop-top-bar">
                            <div class="select-shoing-wrap">
                                <div class="shop-select">
                                    <select>
                                        <option value="">Sort by newness</option>
                                        <option value="">A to Z</option>
                                        <option value=""> Z to A</option>
                                        <option value="">In stock</option>
                                    </select>
                                </div>
                            </div>
                            <div class="shop-tab nav">
                                <a class="active" href="#shop-1" data-bs-toggle="tab">
                                    <i class="sli sli-grid"></i>
                                </a>
                                <a href="#shop-2" data-bs-toggle="tab">
                                    <i class="sli sli-menu"></i>
                                </a>
                            </div>
                        </div>
                        <div class="shop-bottom-area mt-35">
                            <div class="tab-content jump">
                                <div id="shop-1" class="tab-pane active">
                                    <div class="row ht-products">
                                        @foreach ($product as $item)
                                            <div class="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div
                                                    class="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                                                    <div class="ht-product-inner">
                                                        <div class="ht-product-image-wrap">
                                                            <a href="{{ route('detail', $item->id) }}"
                                                                class="ht-product-image">
                                                                <img src="{{ asset('assets/img/upload/product/' . $item->image) }}"
                                                                    alt="Universal Product Style"> </a>
                                                            <div class="ht-product-action">
                                                                <ul>
                                                                    <li><a href="#"><i
                                                                                class="sli sli-heart"></i><span
                                                                                class="ht-product-action-tooltip">Add to
                                                                                Wishlist</span></a></li>
                                                                    <li><a href="#"><i
                                                                                class="sli sli-bag"></i><span
                                                                                class="ht-product-action-tooltip">Add to
                                                                                Cart</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="ht-product-content">
                                                            <div class="ht-product-content-inner">
                                                                <div class="ht-product-categories"><a
                                                                        href="#">{{ $category->name }}</a></div>
                                                                <h4 class="ht-product-title"><a
                                                                        href="product-details.html">{{ $item->name }}</a>
                                                                </h4>
                                                                <div class="ht-product-price">
                                                                    <span class="new">{{ $item->price }}</span>
                                                                </div>
                                                            </div>
                                                            <div class="ht-product-action">
                                                                <ul>
                                                                    <li><a href="#" data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"><i
                                                                                class="sli sli-magnifier"></i><span
                                                                                class="ht-product-action-tooltip">Quick
                                                                                View</span></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="sli sli-heart"></i><span
                                                                                class="ht-product-action-tooltip">Add
                                                                                to
                                                                                Wishlist</span></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="sli sli-bag"></i><span
                                                                                class="ht-product-action-tooltip">Add
                                                                                to Cart</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="ht-product-countdown-wrap">
                                                                <div class="ht-product-countdown"
                                                                    data-countdown="2020/01/01"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach

                                    </div>
                                </div>
                                <div id="shop-2" class="tab-pane">
                                    <div class="shop-list-wrap shop-list-mrg2 shop-list-mrg-none mb-30">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4">
                                                <div class="product-list-img">
                                                    <a href="product-details.html">
                                                        <img src="{{ url('assets/img/product/product-list-1.svg') }}"
                                                            alt="Universal Product Style">
                                                    </a>
                                                    <div class="product-quickview">
                                                        <a href="#" title="Quick View" data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"><i
                                                                class="sli sli-magnifier-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-8 align-self-center">
                                                <div class="shop-list-content">
                                                    <h3><a href="product-details.html">Demo Product Name</a></h3>
                                                    <p>It has roots in a piece of classical Latin literature from 45 BC,
                                                        making it over 2000 years old. Richard The standard chunk.</p>
                                                    <span>Chair</span>
                                                    <div class="shop-list-price-action-wrap">
                                                        <div class="shop-list-price-ratting">
                                                            <div class="ht-product-list-price">
                                                                <span class="new">$40.00</span>
                                                                <span class="old">$70.00</span>
                                                            </div>
                                                            <div class="ht-product-list-ratting">
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ht-product-list-action">
                                                            <a class="list-wishlist" title="Add To Wishlist"
                                                                href="#"><i class="sli sli-heart"></i></a>
                                                            <a class="list-cart" title="Add To Cart"
                                                                href="#"><i class="sli sli-basket-loaded"></i>
                                                                Add to Cart</a>
                                                            <a class="list-refresh" title="Add To Compare"
                                                                href="#"><i class="sli sli-refresh"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap shop-list-mrg2 shop-list-mrg-none mb-30">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4">
                                                <div class="product-list-img">
                                                    <a href="product-details.html">
                                                        <img src="{{ url('assets/img/product/product-list-2.svg') }}"
                                                            alt="Universal Product Style">
                                                    </a>
                                                    <div class="product-quickview">
                                                        <a href="#" title="Quick View" data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"><i
                                                                class="sli sli-magnifier-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-8 align-self-center">
                                                <div class="shop-list-content">
                                                    <h3><a href="product-details.html">Demo Product Name</a></h3>
                                                    <p>It has roots in a piece of classical Latin literature from 45 BC,
                                                        making it over 2000 years old. Richard The standard chunk.</p>
                                                    <span>Chair</span>
                                                    <div class="shop-list-price-action-wrap">
                                                        <div class="shop-list-price-ratting">
                                                            <div class="ht-product-list-price">
                                                                <span class="new">$50.00</span>
                                                            </div>
                                                            <div class="ht-product-list-ratting">
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ht-product-list-action">
                                                            <a class="list-wishlist" title="Add To Wishlist"
                                                                href="#"><i class="sli sli-heart"></i></a>
                                                            <a class="list-cart" title="Add To Cart"
                                                                href="#"><i class="sli sli-basket-loaded"></i>
                                                                Add to Cart</a>
                                                            <a class="list-refresh" title="Add To Compare"
                                                                href="#"><i class="sli sli-refresh"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap shop-list-mrg2 shop-list-mrg-none mb-30">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4">
                                                <div class="product-list-img">
                                                    <a href="product-details.html">
                                                        <img src="{{ url('assets/img/product/product-list-2.svg') }}"
                                                            alt="Universal Product Style">
                                                    </a>
                                                    <div class="product-quickview">
                                                        <a href="#" title="Quick View" data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"><i
                                                                class="sli sli-magnifier-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-8 align-self-center">
                                                <div class="shop-list-content">
                                                    <h3><a href="product-details.html">Demo Product Name</a></h3>
                                                    <p>It has roots in a piece of classical Latin literature from 45 BC,
                                                        making it over 2000 years old. Richard The standard chunk.</p>
                                                    <span>Chair</span>
                                                    <div class="shop-list-price-action-wrap">
                                                        <div class="shop-list-price-ratting">
                                                            <div class="ht-product-list-price">
                                                                <span class="new">$50.00</span>
                                                            </div>
                                                            <div class="ht-product-list-ratting">
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ht-product-list-action">
                                                            <a class="list-wishlist" title="Add To Wishlist"
                                                                href="#"><i class="sli sli-heart"></i></a>
                                                            <a class="list-cart" title="Add To Cart"
                                                                href="#"><i class="sli sli-basket-loaded"></i>
                                                                Add to Cart</a>
                                                            <a class="list-refresh" title="Add To Compare"
                                                                href="#"><i class="sli sli-refresh"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap shop-list-mrg2 shop-list-mrg-none mb-30">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4">
                                                <div class="product-list-img">
                                                    <a href="product-details.html">
                                                        <img src="{{ url('assets/img/product/product-list-2.svg') }}"
                                                            alt="Universal Product Style">
                                                    </a>
                                                    <div class="product-quickview">
                                                        <a href="#" title="Quick View" data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"><i
                                                                class="sli sli-magnifier-add"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-8 align-self-center">
                                                <div class="shop-list-content">
                                                    <h3><a href="product-details.html">Demo Product Name</a></h3>
                                                    <p>It has roots in a piece of classical Latin literature from 45 BC,
                                                        making it over 2000 years old. Richard The standard chunk.</p>
                                                    <span>Chair</span>
                                                    <div class="shop-list-price-action-wrap">
                                                        <div class="shop-list-price-ratting">
                                                            <div class="ht-product-list-price">
                                                                <span class="new">$50.00</span>
                                                            </div>
                                                            <div class="ht-product-list-ratting">
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                                <i class="sli sli-star"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ht-product-list-action">
                                                            <a class="list-wishlist" title="Add To Wishlist"
                                                                href="#"><i class="sli sli-heart"></i></a>
                                                            <a class="list-cart" title="Add To Cart"
                                                                href="#"><i class="sli sli-basket-loaded"></i>
                                                                Add to Cart</a>
                                                            <a class="list-refresh" title="Add To Compare"
                                                                href="#"><i class="sli sli-refresh"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pro-pagination-style text-center mt-30">
                                <ul>
                                    <li><a class="prev" href="#"><i class="sli sli-arrow-left"></i></a></li>
                                    <li><a class="active" href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a class="next" href="#"><i class="sli sli-arrow-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="sidebar-style mr-30">
                            <div class="sidebar-widget">
                                <h4 class="pro-sidebar-title">Search </h4>
                                <div class="pro-sidebar-search mb-50 mt-25">
                                    <form class="pro-sidebar-search-form" action="#">
                                        <input type="text" placeholder="Search here...">
                                        <button>
                                            <i class="sli sli-magnifier"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div class="sidebar-widget">
                                <h4 class="pro-sidebar-title">Refine By </h4>
                                <div class="sidebar-widget-list mt-30">
                                    <ul>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox"> <a href="#">On Sale <span>4</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">New
                                                    <span>5</span></a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">In Stock
                                                    <span>6</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar-widget mt-45">
                                <h4 class="pro-sidebar-title">Filter By Price </h4>
                                <div class="price-filter mt-10">
                                    <div class="price-slider-amount">
                                        <input type="text" id="amount" name="price"
                                            placeholder="Add Your Price" />
                                    </div>
                                    <div id="slider-range"></div>
                                </div>
                            </div>

                            <div class="sidebar-widget mt-40">
                                <h4 class="pro-sidebar-title">Size </h4>
                                <div class="sidebar-widget-list mt-20">
                                    <ul>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">XL
                                                    <span>4</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">L
                                                    <span>5</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">SM
                                                    <span>6</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">XXL
                                                    <span>7</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar-widget mt-50">
                                <h4 class="pro-sidebar-title">Tag </h4>
                                <div class="sidebar-widget-tag mt-25">
                                    <ul>
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">For Men</a></li>
                                        <li><a href="#">Women</a></li>
                                        <li><a href="#">Fashion</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('template.footer')
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true"></span></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-5 col-sm-12 col-xs-12">
                                <div class="tab-content quickview-big-img">
                                    <div id="pro-1" class="tab-pane fade show active">
                                        <img src="assets/img/product/quickview-l1.svg" alt="">
                                    </div>
                                    <div id="pro-2" class="tab-pane fade">
                                        <img src="assets/img/product/quickview-l2.svg" alt="">
                                    </div>
                                    <div id="pro-3" class="tab-pane fade">
                                        <img src="assets/img/product/quickview-l3.svg" alt="">
                                    </div>
                                    <div id="pro-4" class="tab-pane fade">
                                        <img src="assets/img/product/quickview-l2.svg" alt="">
                                    </div>
                                </div>
                                <!-- Thumbnail Large Image End -->
                                <!-- Thumbnail Image End -->
                                <div class="quickview-wrap mt-15">
                                    <div class="quickview-slide-active owl-carousel nav nav-style-2" role="tablist">
                                        <a class="active" data-bs-toggle="tab" href="#pro-1"><img
                                                src="assets/img/product/quickview-s1.svg" alt=""></a>
                                        <a data-bs-toggle="tab" href="#pro-2"><img
                                                src="assets/img/product/quickview-s2.svg" alt=""></a>
                                        <a data-bs-toggle="tab" href="#pro-3"><img
                                                src="assets/img/product/quickview-s3.svg" alt=""></a>
                                        <a data-bs-toggle="tab" href="#pro-4"><img
                                                src="assets/img/product/quickview-s2.svg" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 col-sm-12 col-xs-12">
                                <div class="product-details-content quickview-content">
                                    <h2>Products Name Here</h2>
                                    <div class="product-details-price">
                                        <span>$18.00 </span>
                                        <span class="old">$20.00 </span>
                                    </div>
                                    <div class="pro-details-rating-wrap">
                                        <div class="pro-details-rating">
                                            <i class="sli sli-star yellow"></i>
                                            <i class="sli sli-star yellow"></i>
                                            <i class="sli sli-star yellow"></i>
                                            <i class="sli sli-star"></i>
                                            <i class="sli sli-star"></i>
                                        </div>
                                        <span>3 Reviews</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut
                                        labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud
                                        exercitation ullamco</p>
                                    <div class="pro-details-list">
                                        <ul>
                                            <li>- 0.5 mm Dail</li>
                                            <li>- Inspired vector icons</li>
                                            <li>- Very modern style </li>
                                        </ul>
                                    </div>
                                    <div class="pro-details-size">
                                        <span>Size</span>
                                        <div class="pro-details-size-content">
                                            <ul>
                                                <li><a href="#">s</a></li>
                                                <li><a href="#">m</a></li>
                                                <li><a href="#">l</a></li>
                                                <li><a href="#">xl</a></li>
                                                <li><a href="#">xxl</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="pro-details-quality">
                                    <div class="cart-plus-minus">
                                        <input class="cart-plus-minus-box" type="text" name="qtybutton"
                                            value="2">
                                    </div>
                                    <div class="pro-details-cart">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                    <div class="pro-details-wishlist">
                                        <a title="Add To Wishlist" href="#"><i class="sli sli-heart"></i></a>
                                    </div>
                                    <div class="pro-details-compare">
                                        <a title="Add To Compare" href="#"><i class="sli sli-refresh"></i></a>
                                    </div>
                                </div>
                                <div class="pro-details-meta">
                                    <span>Categories :</span>
                                    <ul>
                                        <li><a href="#">Minimal,</a></li>
                                        <li><a href="#">Furniture,</a></li>
                                        <li><a href="#">Fashion</a></li>
                                    </ul>
                                </div>
                                <div class="pro-details-meta">
                                    <span>Tag :</span>
                                    <ul>
                                        <li><a href="#">Fashion, </a></li>
                                        <li><a href="#">Furniture,</a></li>
                                        <li><a href="#">Electronic</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal end -->
    </div>










    <!-- All JS is here
============================================ -->

    <!-- jQuery JS -->
    <script>
        @include('js')
    </script>

</body>

</html>

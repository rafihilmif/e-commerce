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
                                        <option value="">ALPHABETICALLY, A TO Z</option>
                                        <option value="">ALPHABETICALLY, Z TO A</option>
                                    </select>
                                </div>
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
                                                                    <span class="new"> @currency($item->price)</span>
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
                            </div>
                            <div class="col-md-12">
                                {{ $product->links('vendor.pagination.bootstrap-5') }}
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="sidebar-style mr-30">
                            <div class="sidebar-widget">
                                <h4 class="pro-sidebar-title">Search </h4>
                                <div class="pro-sidebar-search mb-50 mt-25">
                                    <form class="pro-sidebar-search-form" action="{{ route('searchByCategory',$category->name) }}" method="GET">
                                        <input type="text" placeholder="Search here..." name='term'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('template.footer')
    </div>
    </div>
    <script>
        @include('js')
    </script>

</body>

</html>

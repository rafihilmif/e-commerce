<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>@yield('title', $title)</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
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
            <div class="mobile-menu-wrap">
                
                <div class="mobile-navigation">
                    
                    <nav>
                        <ul class="mobile-menu">
                            <li class="menu-item-has-children"><a href="index.html">Home</a>
                                <ul class="dropdown">
                                    <li><a href="index.html">Home version 1 </a></li>
                                    <li><a href="index-2.html">Home version 2 </a></li>
                                    <li><a href="index-3.html">Home version 3 </a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children "><a href="shop.html">shop</a>
                                <ul class="dropdown">
                                    <li class="menu-item-has-children"><a href="#">Shop Layout</a>
                                        <ul class="dropdown">
                                            <li><a href="shop.html">standard style</a></li>
                                            <li><a href="shop-grid-2-column.html">grid 2 column</a></li>
                                            <li><a href="shop-grid-4-column.html">grid 4 column</a></li>
                                            <li><a href="shop-grid-fullwide.html">grid full wide</a></li>
                                            <li><a href="shop-right-sidebar.html">grid right sidebar </a></li>
                                            <li><a href="shop-list-style1.html">list style 1</a></li>
                                            <li><a href="shop-list-style2.html">list style 2</a></li>
                                            <li><a href="shop-list-style3.html">list style 3</a></li>
                                            <li><a href="shop-list-fullwide.html">list full wide</a></li>
                                            <li><a href="shop-list-sidebar.html">list with sidebar </a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="#">products details</a>
                                        <ul class="dropdown">
                                            <li><a href="product-details.html">tab style 1</a></li>
                                            <li><a href="product-details-tab-2.html">tab style 2</a></li>
                                            <li><a href="product-details-tab-3.html">tab style 3</a></li>
                                            <li><a href="product-details-gallery.html">gallery style  </a></li>
                                            <li><a href="product-details-gallery-right.html">gallery right</a></li>
                                            <li><a href="product-details-sticky.html">sticky style</a></li>
                                            <li><a href="product-details-sticky-right.html">sticky right</a></li>
                                            <li><a href="product-details-slider-box.html">slider style</a></li>
                                            <li><a href="product-details-affiliate.html">Affiliate style</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="shop.html">Accessories </a></li>
                            <li class="menu-item-has-children"><a href="#">pages</a>
                                <ul class="dropdown">
                                    <li><a href="about-us.html">about us </a></li>
                                    <li><a href="cart-page.html">cart page </a></li>
                                    <li><a href="checkout.html">checkout </a></li>
                                    <li><a href="compare-page.html">compare </a></li>
                                    <li><a href="wishlist.html">wishlist </a></li>
                                    <li><a href="my-account.html">my account </a></li>
                                    <li><a href="contact-us.html">contact us </a></li>
                                    <li><a href="login-register.html">login/register </a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children "><a href="blog.html">Blog</a>
                                <ul class="dropdown">
                                    <li><a href="blog.html">standard style </a></li>
                                    <li><a href="blog-2-col.html">blog 2 column </a></li>
                                    <li><a href="blog-3-col.html">blog 3 column </a></li>
                                    <li><a href="blog-right-sidebar.html">blog right sidebar </a></li>
                                    <li><a href="blog-details.html">blog details </a></li>
                                    <li><a href="blog-details-right-sidebar.html">blog details right sidebar </a></li>
                                </ul>
                            </li>
                            <li><a href="contact-us.html">Contact us</a></li>
                        </ul>
                    </nav>
                    
                </div>
                
            </div>
            <div class="mobile-curr-lang-wrap">
                <div class="single-mobile-curr-lang">
                    <a class="mobile-language-active" href="#">Language <i class="sli sli-arrow-down"></i></a>
                    <div class="lang-curr-dropdown lang-dropdown-active">
                        <ul>
                            <li><a href="#">English (US)</a></li>
                            <li><a href="#">English (UK)</a></li>
                            <li><a href="#">Spanish</a></li>
                        </ul>
                    </div>
                </div>
                <div class="single-mobile-curr-lang">
                    <a class="mobile-currency-active" href="#">Currency <i class="sli sli-arrow-down"></i></a>
                    <div class="lang-curr-dropdown curr-dropdown-active">
                        <ul>
                            <li><a href="#">USD</a></li>
                            <li><a href="#">EUR</a></li>
                            <li><a href="#">Real</a></li>
                            <li><a href="#">BDT</a></li>
                        </ul>
                    </div>
                </div>
                <div class="single-mobile-curr-lang">
                    <a class="mobile-account-active" href="#">My Account <i class="sli sli-arrow-down"></i></a>
                    <div class="lang-curr-dropdown account-dropdown-active">
                        <ul>
                            <li><a href="login-register.html">Login</a></li>
                            <li><a href="login-register.html">Creat Account</a></li>
                            <li><a href="my-account.html">My Account</a></li>
                        </ul>
                    </div>
                </div>
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
    <div class="slider-area section-padding-1">
        <div class="slider-active-2 owl-carousel nav-style-2 dot-style-1">
            <div class="single-slider slider-height-2 bg-aliceblue">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                            <div class="slider-content pt-180 slider-animated-1">
                                <h1 class="animated">NEW MERCH</h1>
                                <p class="animated">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader.</p>
                                <div class="slider-btn btn-hover">
                                    <a class="animated" href="shop.html">Shop Now <i class="sli sli-basket-loaded"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                            <div class="slider-single-img-2 slider-animated-1">
                                <img class="animated" src="{{url('/assets/img/slider/slider-hm2-2.png')}}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-slider slider-height-2 bg-aliceblue">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                            <div class="slider-content pt-180 slider-animated-1">
                                <h1 class="animated">FEATURED MERCH</h1>
                                <p class="animated">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader.</p>
                                <div class="slider-btn btn-hover">
                                    <a class="animated" href="shop.html">Shop Now <i class="sli sli-basket-loaded"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                            <div class="slider-single-img-2 slider-animated-1">
                                <img class="animated" src="{{url('/assets/img/slider/slider-hm2-2.png')}}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="banner-area pt-100 pb-65">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="single-banner mb-30 scroll-zoom">
                        <a href="product-details.html"><img class="animated" src="{{url('assets/img/banner/banner-6.png')}}" alt=""></a>
                        <div class="banner-content-2 banner-position-5">
                            <h4>Women</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="single-banner mb-30 scroll-zoom">
                        <a href="product-details.html"><img class="animated" src="{{url('assets/img/banner/banner-6.png')}}" alt=""></a>
                        <div class="banner-content-2 banner-position-5">
                            <h4>Men</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="single-banner mb-30 scroll-zoom">
                        <a href="product-details.html"><img class="animated" src="{{url('assets/img/banner/banner-6.png')}}" alt=""></a>
                        <div class="banner-content-2 banner-position-5">
                            <h4>accessories</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="single-banner mb-30 scroll-zoom">
                        <a href="product-details.html"><img class="animated" src="{{url('assets/img/banner/banner-6.png')}}" alt=""></a>
                        <div class="banner-content banner-position-6">
                            <h3>Black Friday</h3>
                            <h2>Wall Lighting <br>Black.</h2>
                            <a href="product-details.html">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="single-banner mb-30 text-center scroll-zoom">
                        <a href="product-details.html"><img class="animated" src="{{url('assets/img/banner/banner-6.png')}}" alt=""></a>
                        <div class="banner-content-3 banner-position-7">
                            <h2>Wall Lighting Black.</h2>
                            <a href="product-details.html">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="product-area pb-70">
        <div class="container">
            <div class="section-title text-center pb-45">
                <h2>POPULAR PRODUCT</h2>
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
            </div>
            <div class="arrivals-wrap scroll-zoom">
                <div class="ht-products product-slider-active-2 owl-carousel">
              
                        <div class="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                        <div class="ht-product-inner">
                            <div class="ht-product-image-wrap">
                                <span class="ht-product-label ht-product-label-left">NEW</span>
                                <span class="ht-product-label ht-product-label-right">Sale</span>
                                <a href="product-details.html" class="ht-product-image"> <img src="" alt="Universal Product Style"> </a>
                                <div class="ht-product-action">
                                    <ul>
                                        <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ht-product-content">
                                <div class="ht-product-content-inner">
                                    <div class="ht-product-categories"><a href="#">Dress</a></div>
                                    <h4 class="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                    <div class="ht-product-price">
                                        <span class="new">$60.00</span>
                                    </div>
                                    <div class="ht-product-ratting-wrap">
                                        <span class="ht-product-ratting">
                                            <span class="ht-product-user-ratting" style="width: 100%;">
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                            </span>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="ht-product-action">
                                    <ul>
                                         <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                                <div class="ht-product-countdown-wrap">
                                    <div class="ht-product-countdown" data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="banner-area pt-80 pb-80 section-margin-1 bg-aliceblue">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8 col-md-7 col-sm-7">
                    <div class="banner-img-2 pr-10 scroll-zoom">
                        <a href="product-details.html"><img src="" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-5">
                    <div class="banner-bg-content pl-100 scroll-zoom">
                        <h3>35% off <br>Black Monday</h3>
                        <h2>NEW MUSIC</h2>
                        <a href="product-details.html">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="blog-area pt-95 pb-65">
        <div class="container">
            <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4">
                    <div class="single-feature mb-40">
                        <div class="feature-icon">
                            <img src="" alt="">
                        </div>
                        <div class="feature-content">
                            <h4>Free Shipping</h4>
                            <p>Most product are free <br>shipping.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-4 col-md-4">
                    <div class="single-feature mb-40 pl-50">
                        <div class="feature-icon">
                            <img src="{{url('assets/img/icon-img/support.png')}}" alt="">
                        </div>
                        <div class="feature-content">
                            <h4>Customer Support</h4>
                            <p>24x7 Customer Support</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-4">
                    <div class="single-feature mb-40">
                        <div class="feature-icon">
                            <img src="{{url('assets/img/icon-img/security.png')}}" alt="">
                        </div>
                        <div class="feature-content">
                            <h4>Secure Payment</h4>
                            <p>Most Secure Payment <br>for customer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div class="instagram-area section-margin-1">
        <div class="container">
            <div class="section-title text-center pb-45">
                <h2>INSTAGRAM FEED</h2>
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
            </div>
        </div>
        <div class="instagram-feed-thumb">
            <div class="instagram-carousel owl-carousel">
                <div class="single-instagram-item">
                    <a href="#"><img src="{{url('assets/img/instagram/instagram-1.jpg')}}" alt=""></a>
                </div>
                <div class="single-instagram-item">
                    <a href="#"><img src="{{url('assets/img/instagram/instagram-1.jpg')}}" alt=""></a>
                </div>
                <div class="single-instagram-item">
                    <a href="#"><img src="{{url('assets/img/instagram/instagram-1.jpg')}}" alt=""></a>
                </div>
                <div class="single-instagram-item">
                    <a href="#"><img src="{{url('assets/img/instagram/instagram-1.jpg')}}" alt=""></a>
                </div>
                <div class="single-instagram-item">
                    <a href="#"><img src="{{url('assets/img/instagram/instagram-1.jpg')}}" alt=""></a>
                </div>
                <div class="single-instagram-item">
                    <a href="#"><img src="{{url('assets/img/instagram/instagram-1.jpg')}}" alt=""></a>
                </div>
            </div>
        </div>
    </div>
   <footer>@include('template.footer')</footer>
   
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
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
                            <div class="quickview-wrap mt-15">
                                <div class="quickview-slide-active owl-carousel nav nav-style-2" role="tablist">
                                    <a class="active" data-bs-toggle="tab" href="#pro-1"><img src="assets/img/product/quickview-s1.svg" alt=""></a>
                                    <a data-bs-toggle="tab" href="#pro-2"><img src="assets/img/product/quickview-s2.svg" alt=""></a>
                                    <a data-bs-toggle="tab" href="#pro-3"><img src="assets/img/product/quickview-s3.svg" alt=""></a>
                                    <a data-bs-toggle="tab" href="#pro-4"><img src="assets/img/product/quickview-s2.svg" alt=""></a>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                                <div class="pro-details-list">
                                    <ul>
                                        <li>- 0.5 mm Dail</li>
                                        <li>- Inspired vector icons</li>
                                        <li>- Very modern style  </li>
                                    </ul>
                                </div>
                                <div class="pro-details-size-color">
                                    <div class="pro-details-color-wrap">
                                        <span>Color</span>
                                        <div class="pro-details-color-content">
                                            <ul>
                                                <li class="blue"></li>
                                                <li class="maroon active"></li>
                                                <li class="gray"></li>
                                                <li class="green"></li>
                                                <li class="yellow"></li>
                                                <li class="white"></li>
                                            </ul>
                                        </div>
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
                                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="2">
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
</div>
    <script>
        @include('js')
    </script>
</body>
</html>
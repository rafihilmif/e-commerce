<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>NOISEBLOD</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @include('customerstyle')
    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
</head>

<body>
    <div class="wrapper">
        @include('template.header')
        <div class="slider-area section-padding-1">
            <div class="slider-active-2 owl-carousel nav-style-2 dot-style-1">
                <div class="single-slider slider-height-2 bg-aliceblue">
                    <div class="container">
                        <div class="row">

                            <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                <div class="slider-content pt-180 slider-animated-1">
                                    <h1 class="animated">MERCHANDISE</h1>
                                    <p class="animated">Getting merchandise is a solid way to support Band. Every
                                        purchase you make directly benefits practical and visionary organizing toward
                                        abolition. Thank you for sharing your resources and keeping root strong!</p>
                                    <div class="slider-btn btn-hover">
                                        <a class="animated" href="shop.html">Shop Now <i
                                                class="sli sli-basket-loaded"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                <div class="slider-single-img-2 slider-animated-1">
                                    <img class="animated" src="{{ asset('assets/img/slider/Amenra.jpg') }}"
                                        alt="">
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
                                    <h1 class="animated">MUSIC</h1>
                                    <p class="animated">Getting vinyl and anything else is a solid way to support Band.
                                        Every
                                        purchase you make directly benefits practical and visionary organizing toward
                                        abolition. Thank you for sharing your resources and keeping root strong!</p>
                                    <div class="slider-btn btn-hover">
                                        <a class="animated" href="shop.html">Shop Now <i
                                                class="sli sli-basket-loaded"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                <div class="slider-single-img-2 slider-animated-1">
                                    <img class="animated" src="{{ asset('assets/img/slider/Masakre-Crawling.jpg') }}"
                                        alt="">
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
                            <a href="product-details.html"><img class="animated"
                                    src="{{ asset('assets/img/banner/longsleeve.jpg') }}" alt=""></a>
                            <div class="banner-content-2 banner-position-5">
                                <h4 style="color: white;">APPAREL</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="single-banner mb-30 scroll-zoom">
                            <a href="product-details.html"><img class="animated"
                                    src="{{ asset('assets/img/banner/vinyl.jpg') }}" alt=""></a>
                            <div class="banner-content-2 banner-position-5">
                                <h4 style="color: white;">MUSIC</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="single-banner mb-30 scroll-zoom">
                            <a href="product-details.html"><img class="animated"
                                    src="{{ asset('assets/img/banner/pin.jpg') }}" alt=""></a>
                            <div class="banner-content-2 banner-position-5">
                                <h4 style="color: white;">ACCESSORIES</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-area pb-150">
            <div class="container">
                <div class="section-title text-center pb-60">
                    <h2>Our Merchandise</h2>
                    <p> Check out and shop official merchandise today! Featuring limited edition.</p>
                </div>
                <div class="arrivals-wrap item-wrapper">
                    <div class="ht-products row">
                        @foreach ($product as $item)
                            <div
                                class="ht-product ht-product-action-on-hover ht-product-category-right-bottom toggle-item-active col-lg-3 col-md-6 col-sm-6 col-12 mb-30">
                                <div class="ht-product-inner">
                                    <div class="ht-product-image-wrap">
                                        <a href="{{ route('detail', $item->id) }}" class="ht-product-image"> <img
                                                src="{{ asset('assets/img/upload/product/' . $item->image) }}"
                                                alt="Universal Product Style">
                                        </a>
                                        <div class="ht-product-action">
                                            <ul>
                                                <li><a href="#"><i class="sli sli-heart"></i><span
                                                            class="ht-product-action-tooltip">Add to
                                                            Wishlist</span></a>
                                                </li>
                                                <li><a href="#"><i class="sli sli-bag"></i><span
                                                            class="ht-product-action-tooltip">Add to Cart</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="ht-product-content">
                                        <div class="ht-product-content-inner">
                                            <h4 class="ht-product-title"><a
                                                    href="#">{{ strtoupper($item->name) }}</a>
                                            </h4>
                                            <div class="ht-product-price">
                                                <span class="new">@currency($item->price)</span>
                                            </div>
                                        </div>
                                        <div class="ht-product-action">
                                            <ul>
                                                <li><a href="#"><i class="sli sli-magnifier"></i><span
                                                            class="ht-product-action-tooltip">Quick View</span></a>
                                                </li>
                                                <li><a href="#"><i class="sli sli-heart"></i><span
                                                            class="ht-product-action-tooltip">Add to
                                                            Wishlist</span></a>
                                                </li>

                                                <li><a href="#"><i class="sli sli-bag"></i><span
                                                            class="ht-product-action-tooltip">Add to Cart</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="ht-product-countdown-wrap">
                                            <div class="ht-product-countdown" data-countdown="2020/01/01"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div class="show-more-btn text-center mt-10 toggle-btn">
                        <a class="loadMore" href="#">View More Products</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-area pt-80 pb-80 section-margin-1 bg-aliceblue">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-md-7 col-sm-7">
                        <div class="banner-img-2 pr-10 scroll-zoom">
                            <a href="product-details.html"><img src="{{ asset('assets/img/banner/banner.jpg') }}"
                                    alt=""></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-5 col-sm-5">
                        <div class="banner-bg-content pl-100 scroll-zoom">
                            <h3>RECORD OF THE MONTH</h3>
                            <p style="text-align: justify;">Legendary Tacoma, Washington mathcore/hardcore/metal band Botch have announced they’ve
                                signed with Los Angeles label/management company Sargent House.

                                Bassist Brian Cook, guitarist David Knudson, drummer Tim Latona and vocalist Dave
                                Verellen formed Botch in 1993, becoming one of the most ground-breaking and influential
                                bands during a pivotal shift in heavy music before splitting in 2002.

                                Their split made way for members to form and or to play in other highly notable and
                                influential bands including Minus the Bear, These Arms Are Snakes, Narrows, SUMAC and
                                current Sargent House bands Russian Circles and Torment & Glory.. </p>
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
                                    <img src="{{ asset('assets/img/icon-img/free-shipping.png') }}">
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
                                    <img src="{{ asset('assets/img/icon-img/support.png') }}">
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
                                    <img src=" {{ asset('assets/img/icon-img/security.png') }}">
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
        <footer>@include('template.footer')</footer>
    </div>
    <script>
        @include('js')
    </script>


</body>

</html>

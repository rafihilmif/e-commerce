<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ strtoupper($artist->name) }}</title>
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
    @include('customerstyle')
    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
</head>

<body>
    <div class="wrapper">
        @include('template.header')
        <div class="shop-area pt-95 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="pro-sidebar-search mb-50 mt-25">
                            <form class="pro-sidebar-search-form" action="{{ route('searchByArtist', $artist->name) }}"
                                method="GET">
                                <input type="text" placeholder="Search here..." name="term">
                                <button>
                                    <i class="sli sli-magnifier"></i>
                                </button>
                            </form>
                        </div>
                        <div class="shop-bottom-area mt-35">
                            <div class="tab-content jump">
                                @if ($product->count() >= 1)
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
                                                                                    class="ht-product-action-tooltip">Add
                                                                                    to
                                                                                    Wishlist</span></a></li>
                                                                        <li><a href="#"><i
                                                                                    class="sli sli-bag"></i><span
                                                                                    class="ht-product-action-tooltip">Add
                                                                                    to
                                                                                    Cart</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="ht-product-content">
                                                                <div class="ht-product-content-inner">
                                                                    <div class="ht-product-categories"><a
                                                                            href="#">{{ $artist->name }}</a></div>
                                                                    <h4 class="ht-product-title"><a
                                                                            href="product-details.html">{{ $item->name }}</a>
                                                                    </h4>
                                                                    <div class="ht-product-price">
                                                                        <span class="new">@currency($item->price)</span>
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
                                @else
                                    <div id="shop-1" class="tab-pane active">
                                        <p>Sorry, no products matched your selection</p>
                                    </div>
                                @endif
                            </div>
                            <div class="col-md-12">
                                {{ $product->links('vendor.pagination.bootstrap-5') }}
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

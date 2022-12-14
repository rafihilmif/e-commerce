<header>
    <header class="header-area sticky-bar">
        <div class="main-header-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-xl-2 col-lg-2">
                        <div class="logo pt-40">
                            <a href="{{ route('landing') }}">
                                <img src="{{asset('assets/img/logo/noiseblod.png')}}" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7 ">
                        <div class="main-menu">
                            <nav>
                                <ul>
                                    @if (Auth::check())
                                    <li><a href="{{ route('landing') }}">HOME</a></li>
                                    @endif
                                    <li class="angle-shape"><a href="#">CATEGORIES</a>
                                        <ul class="mega-menu">
                                            <li><a class="menu-title" href="#">APPAREL</a>
                                                <ul>
                                                    <?php $category_1 = DB::table('category')
                                                        ->where('parent', '=', 'Apparel')
                                                        ->get(); ?>
                                                    @foreach ($category_1 as $item_1)
                                                        <li>
                                                            <a
                                                                href="{{ route('collection', $item_1->name) }}">{{ strtoupper($item_1->name) }}</a>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            </li>
                                            <li><a class="menu-title" href="#">MUSIC</a>
                                                <ul>
                                                    <?php $category_2 = DB::table('category')
                                                        ->where('parent', '=', 'Music')
                                                        ->get(); ?>
                                                    @foreach ($category_2 as $item_2)
                                                        <li>
                                                            <a
                                                                href="{{ route('collection', $item_2->name) }}">{{ strtoupper($item_2->name) }}</a>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            </li>
                                            <li><a class="menu-title" href="#">ACCESSORIES</a>
                                                <ul>
                                                    <?php $category_3 = DB::table('category')
                                                        ->where('parent', '=', 'Accessories')
                                                        ->get(); ?>
                                                    @foreach ($category_3 as $item_3)
                                                        <li>
                                                            <a
                                                                href="{{ route('collection', $item_3->name) }}">{{ strtoupper($item_3->name) }}</a>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="angle-shape"><a href="#">ARTIST
                                            STORES
                                        <ul class="mega-menu">
                                            <li><a class="menu-title" href="#">ARTIST (A-E)</a>
                                                <ul>
                                                    <?php $artist_1 = DB::table('artist')
                                                        ->where('name', 'LIKE', 'A%')
                                                        ->orWhere('name', 'LIKE', 'B%')
                                                        ->orWhere('name', 'LIKE', 'C%')
                                                        ->orWhere('name', 'LIKE', 'D%')
                                                        ->orWhere('name', 'LIKE', 'E%')
                                                        ->orderBy('name')
                                                        ->get();
                                                    ?>
                                                    @foreach ($artist_1 as $item_4)
                                                        <li>
                                                            <a
                                                                href="{{ route('artists', $item_4->name) }}">{{ strtoupper($item_4->name) }}</a>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            </li>
                                            <li><a class="menu-title" href="#">ARTIST (F-J)</a>
                                                <ul>
                                                    <?php $artist_2 = DB::table('artist')
                                                        ->where('name', 'LIKE', 'F%')
                                                        ->orWhere('name', 'LIKE', 'G%')
                                                        ->orWhere('name', 'LIKE', 'H%')
                                                        ->orWhere('name', 'LIKE', 'I%')
                                                        ->orWhere('name', 'LIKE', 'J%')
                                                        ->orderBy('name')
                                                        ->get();
                                                    ?>
                                                    @foreach ($artist_2 as $item_5)
                                                        <li>
                                                            <a
                                                                href="{{ route('artists', $item_5->name) }}">{{ strtoupper($item_5->name) }}</a>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            </li>
                                            <li><a class="menu-title" href="#">ARTIST (K-O)</a>
                                                <ul>
                                                    <?php $artist_3 = DB::table('artist')
                                                        ->where('name', 'LIKE', 'K%')
                                                        ->orWhere('name', 'LIKE', 'L%')
                                                        ->orWhere('name', 'LIKE', 'M%')
                                                        ->orWhere('name', 'LIKE', 'N%')
                                                        ->orWhere('name', 'LIKE', 'O%')
                                                        ->orderBy('name')
                                                        ->get();
                                                    ?>
                                                    @foreach ($artist_3 as $item_6)
                                                        <li>
                                                            <a
                                                                href="{{ route('artists', $item_6->name) }}">{{ strtoupper($item_6->name) }}</a>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            </li>
                                            <li><a class="menu-title" href="#">ARTIST (P-Z)</a>
                                                <ul>
                                                    <?php $artist_4 = DB::table('artist')
                                                        ->where('name', 'LIKE', 'P%')
                                                        ->orWhere('name', 'LIKE', 'Q%')
                                                        ->orWhere('name', 'LIKE', 'R%')
                                                        ->orWhere('name', 'LIKE', 'S%')
                                                        ->orWhere('name', 'LIKE', 'T%')
                                                        ->orWhere('name', 'LIKE', 'V%')
                                                        ->orWhere('name', 'LIKE', 'W%')
                                                        ->orWhere('name', 'LIKE', 'X%')
                                                        ->orWhere('name', 'LIKE', 'Y%')
                                                        ->orWhere('name', 'LIKE', 'Z%')
                                                        ->orderBy('name')
                                                        ->get();
                                                    ?>
                                                    @foreach ($artist_4 as $item_7)
                                                        <li>
                                                            <a
                                                                href="{{ route('artists', $item_7->name) }}">{{ strtoupper($item_7->name) }}</a>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="{{ route('contactus') }}">CONTACT</a></li>
                                    <li><a href="{{ route('aboutus') }}">ABOUT US</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3">
                        <div class="header-right-wrap pt-40">
                            <div class="header-search">
                                <a class="search-active" href="#"><i class="sli sli-magnifier"></i></a>
                            </div>
                            <?php
                                $cart = DB::table('cart')->where('id_customer', Auth::id())->get();
                            ?>
                            <div class="cart-wrap">
                                <button class="icon-cart-active">
                                    <span class="icon-cart">
                                        <i class="sli sli-bag"></i>
                                        <span class="count-style">{{ count($cart) }}</span>
                                    </span>
                                    <span class="cart-price">
                                    </span>
                                </button>
                                <div class="shopping-cart-content">
                                    <div class="shopping-cart-top">
                                        <h4><a href="{{ route('cart') }}">Shoping Cart</a></h4>
                                        <a class="cart-close" href="#"><i class="sli sli-close"></i></a>
                                    </div>
                                    @if (count($cart) < 1)
                                        <p>Your Cart Empty</p>
                                    @else
                                        @foreach ($cart as $c)
                                        <div class="row">
                                            <div class="col-sm-4"><img style="width: 50px; height: 50px;" src="{{ asset('assets/img/upload/product/' . $c->image) }}" alt="cart product imager"></div>
                                            <div class="col-sm-8">
                                                <h6 class="card-title">{{ $c->name }}</h6>
                                                <p class="card-text">{{ $c->qty }} item</p>
                                            </div>
                                        </div> <hr>
                                        @endforeach

                                        <div class="section-title text-center pb-60">
                                            <a href="{{ route('cart') }}">View All Cart</a>
                                        </div>
                                    @endif
                                </div>
                            </div>

                            @if (Auth::check())
                                <div class="setting-wrap">
                                    <button class="setting-active">
                                        <i class="sli sli-user"></i>
                                    </button>
                                    <div class="setting-content">
                                        <ul>
                                            <li>
                                                <h4>ACCOUNT</h4>
                                                <ul>
                                                    <li><a href="{{ route('profile') }}">PROFILE</a></li>
                                                    <li><a href="{{ route('wishlist') }}">WISHLIST</a></li>
                                                    <li><a href="">TRACK ORDER</a></li>
                                                    <li><a href="{{ route('logout') }}">LOG OUT</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            @else
                               <div class="setting-wrap">
                                    <button class="setting-active">
                                        <i class="sli sli-user"></i>
                                    </button>
                                    <div class="setting-content">
                                        <ul>
                                            <li>
                                                <h4>ACCOUNT</h4>
                                                <ul>
                                                    <li><a href="{{ route('login') }}">LOGIN/REGISTER</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            @endif

                        </div>
                    </div>
                </div>
            </div>
            <div class="main-search-active">
                <div class="sidebar-search-icon">
                    <button class="search-close"><span class="sli sli-close"></span></button>
                </div>
                <div class="sidebar-search-input">
                    <form>
                        <div class="form-search">
                            <input id="search" class="input-text" value="" placeholder="Search Now"
                                type="search">
                            <button>
                                <i class="sli sli-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </header>
</header>

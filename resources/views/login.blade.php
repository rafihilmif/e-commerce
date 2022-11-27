<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>@yield('title', $title)</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @include('customerstyle')
    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
    {{-- <script type="text/javascript">
        var citiesByProvince = {
            EastJava: ["Bhubaneswar", "Puri", "Cuttack"],
            CentralJava: ["Mumbai", "Pune", "Nagpur"],
            WestJava: ["kochi", "Kanpur"]
        }
        function makeSubmenu(value) {
            if (value.length == 0) document.getElementById("citySelect").innerHTML = "<option></option>";
            else {
                var citiesOptions = "";
                for (cityId in citiesByProvince[value]) {
                    citiesOptions += "<option>" + citiesByProvince[value][cityId] + "</option>";
                }
                document.getElementById("citySelect").innerHTML = citiesOptions;
            }
        }
        function resetSelection() {
            document.getElementById("provinceSelect").selectedIndex = 0;
            document.getElementById("citySelect").selectedIndex = 0;
        }
    </script> --}}
</head>

<body>
    <div class="wrapper">
        <header>
            <header class="header-area sticky-bar">
                <div class="main-header-wrap">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-2 col-lg-2">
                                <div class="logo pt-40">
                                    <a href="index.html">
                                        <img src="" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7 ">
                                <div class="main-menu">
                                    <nav>
                                        <ul>
                                            <li><a href="contact-us.html">BEST SELLER</a></li>
                                            <li class="angle-shape"><a href="shop.html">CATEGORIES<span>new</span> </a>
                                                <ul class="mega-menu">
                                                    <li><a class="menu-title" href="#">APPAREL</a>
                                                        <ul>
                                                            <li><a href="shop-grid-2-column.html">NEW</a></li>
                                                            <li><a href="shop-grid-4-column.html">PRE-ORDER</a></li>
                                                            <li><a href="shop-grid-fullwide.html">T-SHIRTS</a></li>
                                                            <li><a href="shop-right-sidebar.html">LONGSLEEVES </a></li>
                                                            <li><a href="shop-right-sidebar.html">SWEATSHIRTS</a></li>
                                                            <li><a href="shop-right-sidebar.html">JACKETS</a></li>
                                                            <li><a href="shop-right-sidebar.html">FAIRTRADE</a></li>
                                                            <li><a href="shop-right-sidebar.html">SALE</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="menu-title" href="#">MUSIC</a>
                                                        <ul>
                                                            <li><a href="shop-list-style1.html">NEW</a></li>
                                                            <li><a href="shop-list-style2.html">PRE-ORDER</a></li>
                                                            <li><a href="shop-list-style3.html">SOUNDTRACKS</a></li>
                                                            <li><a href="shop-list-fullwide.html">BUNDLE</a></li>
                                                            <li><a href="shop-list-sidebar.html">12" VINYL</a></li>
                                                            <li><a href="shop-list-sidebar.html">10" VINYL</a></li>
                                                            <li><a href="shop-list-sidebar.html">7" VINYL</a></li>
                                                            <li><a href="shop-list-sidebar.html">CD</a></li>
                                                            <li><a href="shop-list-sidebar.html">TAPE</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="menu-title" href="#">ACCESSORIES</a>
                                                        <ul>
                                                            <li><a href="product-details.html">NEW</a></li>
                                                            <li><a href="product-details-tab-2.html">BAGS</a></li>
                                                            <li><a href="product-details-tab-3.html">HATS</a></li>
                                                            <li><a href="product-details-gallery.html">PATCHES </a></li>
                                                            <li><a href="product-details-gallery-right.html">FLAGS</a>
                                                            </li>
                                                            <li><a href="product-details-gallery-right.html">PINS &
                                                                    BUTTONS</a></li>
                                                            <li><a href="product-details-gallery-right.html">POSTERS &
                                                                    PRINTS</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="angle-shape"><a href="shop.html">ARTIST
                                                    STORES<span>hot</span></a>
                                                <ul class="mega-menu">
                                                    <li><a class="menu-title" href="#">ARTIST STORES (A-C)</a>
                                                        <ul>
                                                            <li><a href="product-details.html">NEW</a></li>
                                                            <li><a href="product-details-tab-2.html">BAGS</a></li>
                                                            <li><a href="product-details-tab-3.html">HATS</a></li>
                                                            <li><a href="product-details-gallery.html">PATCHES </a></li>
                                                            <li><a href="product-details-gallery-right.html">FLAGS</a>
                                                            </li>
                                                            <li><a href="product-details-gallery-right.html">PINS &
                                                                    BUTTONS</a></li>
                                                            <li><a href="product-details-gallery-right.html">POSTERS &
                                                                    PRINTS</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="menu-title" href="#">ARTIST STORES (L-P)</a>
                                                        <ul>
                                                            <li><a href="product-details.html">NEW</a></li>
                                                            <li><a href="product-details-tab-2.html">BAGS</a></li>
                                                            <li><a href="product-details-tab-3.html">HATS</a></li>
                                                            <li><a href="product-details-gallery.html">PATCHES </a></li>
                                                            <li><a href="product-details-gallery-right.html">FLAGS</a>
                                                            </li>
                                                            <li><a href="product-details-gallery-right.html">PINS &
                                                                    BUTTONS</a></li>
                                                            <li><a href="product-details-gallery-right.html">POSTERS &
                                                                    PRINTS</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="menu-title" href="#">ARTIST STORES (Q-Z)</a>
                                                        <ul>
                                                            <li><a href="product-details.html">NEW</a></li>
                                                            <li><a href="product-details-tab-2.html">BAGS</a></li>
                                                            <li><a href="product-details-tab-3.html">HATS</a></li>
                                                            <li><a href="product-details-gallery.html">PATCHES </a></li>
                                                            <li><a href="product-details-gallery-right.html">FLAGS</a>
                                                            </li>
                                                            <li><a href="product-details-gallery-right.html">PINS &
                                                                    BUTTONS</a></li>
                                                            <li><a href="product-details-gallery-right.html">POSTERS &
                                                                    PRINTS</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3">
                                <div class="header-right-wrap pt-40">
                                    <div class="header-search">
                                        <a class="search-active" href="#"><i class="sli sli-magnifier"></i></a>
                                    </div>
                                    <div class="cart-wrap">
                                        <button class="icon-cart-active">
                                            <span class="icon-cart">
                                                <i class="sli sli-bag"></i>
                                                <span class="count-style">0</span>
                                            </span>
                                            <span class="cart-price">
                                            </span>
                                        </button>
                                        <div class="shopping-cart-content">
                                            <div class="shopping-cart-top">
                                                <h4>Shoping Cart</h4>
                                                <a class="cart-close" href="#"><i class="sli sli-close"></i></a>
                                            </div>
                                            <p>Your Cart Empty</p>
                                        </div>
                                    </div>
                                    <div class="setting-wrap">
                                        <button class="setting-active">
                                            <i class="sli sli-user"></i>
                                        </button>
                                        <div class="setting-content">
                                            <ul>
                                                <li>
                                                    <h4>ACCOUNT</h4>
                                                    <ul>
                                                        <li><a href="{{ url('/login') }}">LOGIN / REGISTER</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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
        <div class="login-register-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12 ms-auto me-auto">
                        <div class="login-register-wrapper">
                            <div class="login-register-tab-list nav">
                                <a class="active" data-bs-toggle="tab" href="#lg1">
                                    <h4>LOGIN</h4>
                                </a>
                                <a data-bs-toggle="tab" href="#lg2">
                                    <h4>REGISTER</h4>
                                </a>
                            </div>
                            <div class="tab-content">
                                <div id="lg1" class="tab-pane active">
                                    <div class="login-form-container">
                                        <div class="login-register-form">
                                            <form action="{{ route('doLogin') }}" method="POST">
                                                @csrf
                                                <input type="text" name="email" placeholder="Email"
                                                    value="{{ old('email') }}">
                                                @error('email')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <input type="password" name="password" placeholder="Password"
                                                    value="{{ old('password') }}">
                                                @error('password')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <div class="button-box">
                                                    <div class="login-toggle-btn">
                                                        <input type="checkbox" name="remember_me" value=" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}">
                                                        <label>Remember me</label>
                                                        <a href="#">Forgot Password?</a>
                                                    </div>
                                                    <button type="submit" style="width: 100%">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div id="lg2" class="tab-pane">
                                    <div class="login-form-container">
                                        <div class="login-register-form">
                                            <form action="/register" method="GET">
                                                @csrf
                                                <input type="email" name="email" placeholder="Email">
                                                @error('email')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <input type="text" name="name" placeholder="Name">
                                                @error('name')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <input type="text" name="address" placeholder="Address">
                                                @error('address')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <input type="text" name="phone" placeholder="Phone">
                                                @error('phone')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <input type="text" name="gender" list="genderList"
                                                    placeholder="Gender">
                                                <datalist id="genderList">
                                                    <option value="Male">
                                                    <option value="Female">
                                                </datalist>
                                                <input type="text" name="province" list="provinceSelect"
                                                    placeholder="Province" onload="resetSelection()">
                                                <datalist id="provinceSelect" size="1"
                                                    onchange="makeSubmenu(this.value)">
                                                    <option value="East Java">East Java</option>
                                                    <option value="Central Java">Central Java</option>
                                                    <option value="West Java">West Java</option>
                                                </datalist>
                                                <input type="text" name="city" list="citySelect"
                                                    placeholder="City">
                                                <datalist id="citySelect">
                                                    <option value="Surabaya">Surabaya</option>
                                                    <option value="Boyolali">Boyolali</option>
                                                    <option value="Bandung">Bandung</option>
                                                </datalist>
                                                <input type="text" onfocus="(this.type='date')"
                                                    placeholder="Birthdate" name="birthdate">
                                                <input type="password" name="password" placeholder="Password">
                                                @error('password')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <input type="password" name="confirmpassword"
                                                    placeholder="Confirm Password">
                                                @error('confirmpassword')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <div class="button-box">
                                                    <div class="login-toggle-btn">
                                                        <input type="checkbox" name="subscribe">
                                                        <label>Subscribe to our newsletter</label>
                                                    </div>
                                                    <button type="submit" style="width: 100%">Register</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('template.footer')
    </div>
    <script src="">
        @include('js')
    </script>
</body>

</html>

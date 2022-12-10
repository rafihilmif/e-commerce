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
    <script type="text/javascript">
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
    </script>
</head>

<body>
    <div class="wrapper">
        @include('template.header')
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
                                                        <input type="checkbox" name="remember_me"
                                                            value=" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}">
                                                        <label>Remember me</label>
                                                        <a href="#">Forgot Password?</a>
                                                    </div>
                                                </div>
                                                <button style="width: 100%;" type="submit"
                                                    class="btn btn-primary btn-lg btn-block">LOGIN</button>
                                                </form>
                                        </div>
                                    </div>
                                </div>
                                <div id="lg2" class="tab-pane">
                                    <div class="login-form-container">
                                        <div class="billing-info-wrap mr-50">
                                            <form action="/register" method="GET">
                                                @csrf
                                                <div class="billing-info mb-20">
                                                    <input type="email" name="email" placeholder="Email">
                                                </div>
                                                @error('email')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <div class="billing-info mb-20">
                                                    <input type="text" name="name" placeholder="Name">
                                                </div>
                                                @error('name')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <div class="billing-info mb-20">
                                                    <input type="text" name="address" placeholder="Address">
                                                </div>
                                                @error('address')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <div class="billing-info mb-20">
                                                    <input type="text" name="phone" placeholder="Phone">
                                                </div>
                                                @error('phone')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <div class="billing-info mb-20">
                                                    <input type="text" name="gender" list="genderList"
                                                        placeholder="Gender">
                                                    <datalist id="genderList">
                                                        <option value="Male">
                                                        <option value="Female">
                                                    </datalist>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="billing-select  mb-20">
                                                        <select id="provinceSelect" size="1"
                                                            onchange="makeSubmenu(this.value)" name="province">
                                                            <option  disabled selected>Select a Provice</option>
                                                            <option value="East Java">EastJava</option>
                                                            <option value="Central Java">Central Java</option>
                                                            <option value="West Java">West Java</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="billing-select  mb-20">
                                                        <select id="citySelect" size="1"
                                                             onload="resetSelection()" name="city">
                                                            <option disabled selected>Select City</option>
                                                            <option></option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="billing-info  mb-20">
                                                    <input type="text" onfocus="(this.type='date')"
                                                        placeholder="Birthdate" name="birthdate">
                                                </div>
                                                <div class="billing-info  mb-20">
                                                    <input type="password" name="password" placeholder="Password">
                                                </div>
                                                @error('password')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <div class="billing-info  mb-20">
                                                    <input type="password" name="confirmpassword"
                                                        placeholder="Confirm Password">
                                                </div>
                                                @error('confirmpassword')
                                                    <div class="error" style="color:red">{{ $message }}</div>
                                                @enderror
                                                <div>
                                                    <button style="width: 100%;" type="submit"
                                                        class="btn btn-primary btn-lg btn-block">REGISTER</button>
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

<!DOCTYPE html>
<html lang="en">

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
        <header>@include('template.header')</header>
        <div class="my-account-wrapper pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="myaccount-page-wrapper">
                            <div class="row">
                                <div class="col-lg-3 col-md-4">
                                    <div class="myaccount-tab-menu nav" role="tablist">
                                        <a href="#orders" data-bs-toggle="tab"><i class="fa fa-cart-arrow-down"></i>
                                            Orders</a>
                                        <a href="#address-edit" data-bs-toggle="tab"><i class="fa fa-map-marker"></i>
                                            Address</a>
                                        <a href="#account-info" data-bs-toggle="tab"><i class="fa fa-user"></i>
                                            Account Details</a>
                                    </div>
                                </div>

                                <div class="col-lg-9 col-md-8">
                                    <div class="tab-content" id="myaccountContent">

                                        <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
                                            <div class="myaccount-content">
                                                <h3>Dashboard</h3>
                                                <div class="welcome">
                                                    <p>Hello, <strong>{{ucfirst(Auth()->user()->name)}}</strong>
                                                </div>

                                                <p class="mb-0">From your profile. you can easily check &
                                                    view your recent orders, manage your billing address
                                                    and edit your password and account details.</p>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="orders" role="tabpanel">
                                            <div class="myaccount-content">
                                                <h3>Orders</h3>
                                                <div class="myaccount-table table-responsive text-center">
                                                    <table class="table table-bordered">
                                                        <thead class="thead-light">
                                                            <tr>
                                                                <th>Order</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                                <th>Total</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Aug 22, 2018</td>
                                                                <td>Pending</td>
                                                                <td>$3000</td>
                                                                <td><a href="cart.html"
                                                                        class="check-btn sqr-btn ">View</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>July 22, 2018</td>
                                                                <td>Approved</td>
                                                                <td>$200</td>
                                                                <td><a href="cart.html"
                                                                        class="check-btn sqr-btn ">View</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>June 12, 2017</td>
                                                                <td>On Hold</td>
                                                                <td>$990</td>
                                                                <td><a href="cart.html"
                                                                        class="check-btn sqr-btn ">View</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="download" role="tabpanel">
                                            <div class="myaccount-content">
                                                <h3>Downloads</h3>
                                                <div class="myaccount-table table-responsive text-center">
                                                    <table class="table table-bordered">
                                                        <thead class="thead-light">
                                                            <tr>
                                                                <th>Product</th>
                                                                <th>Date</th>
                                                                <th>Expire</th>
                                                                <th>Download</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Haven - Free Real Estate PSD Template</td>
                                                                <td>Aug 22, 2018</td>
                                                                <td>Yes</td>
                                                                <td><a href="#" class="check-btn sqr-btn "><i
                                                                            class="fa fa-cloud-download"></i> Download
                                                                        File</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>HasTech - Profolio Business Template</td>
                                                                <td>Sep 12, 2018</td>
                                                                <td>Never</td>
                                                                <td><a href="#" class="check-btn sqr-btn "><i
                                                                            class="fa fa-cloud-download"></i> Download
                                                                        File</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="payment-method" role="tabpanel">
                                            <div class="myaccount-content">
                                                <h3>Payment Method</h3>
                                                <p class="saved-message">You Can't Saved Your Payment Method yet.</p>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="address-edit" role="tabpanel">
                                            <div class="myaccount-content">
                                                <h3>Billing Address</h3>
                                                <address>
                                                    <p><strong>{{ucfirst(Auth()->user()->name)}}</strong></p>
                                                    <p>{{ucfirst(Auth()->user()->address)}}</p>
                                                    <p>{{ucfirst(Auth()->user()->province)}}</p>
                                                    <p>{{ucfirst(Auth()->user()->city)}}</p>
                                                    <p>Mobile: {{ucfirst(Auth()->user()->phone)}}</p>
                                                </address>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="account-info" role="tabpanel">
                                            <div class="myaccount-content">
                                                <h3>Account Details</h3>
                                                <div class="account-details-form">
                                                    <form action="{{ route('update') }}" method="POST">
                                                        @csrf
                                                        <div class="single-input-item">
                                                            <label for="email" class="required">Email</label>
                                                            <input type="email" id="email" readonly
                                                                value="{{ucfirst(Auth()->user()->email)}}" />
                                                        </div>
                                                        <div class="single-input-item">
                                                            <label for="display-name" class="required">Name</label>
                                                            <input type="text" id="display-name" name="name" />
                                                        </div>
                                                        <div class="single-input-item">
                                                            <label for="display-name" class="required">Address</label>
                                                            <input type="text" id="display-name" name="address" />
                                                        </div>
                                                        <div class="single-input-item">
                                                            <label for="display-name" class="required">Phone</label>
                                                            <input type="text" id="display-name" name="phone" />
                                                        </div>
                                                        <div class="single-input-item">
                                                            <label for="display-name" class="required">Gender</label>
                                                            <input type="text" id="display-name" name="gender"
                                                                list="genderList" />
                                                            <datalist id="genderList">
                                                                <option value="Male">
                                                                <option value="Female">
                                                            </datalist>
                                                        </div>
                                                        <div class="single-input-item">
                                                            <label for="display-name"
                                                                class="required">Province</label>
                                                            <input type="text" id="display-name" name="province"
                                                                list="provinceSelect" />
                                                            <datalist id="provinceSelect" size="1"
                                                                onchange="makeSubmenu(this.value)">
                                                                <option value="East Java">East Java</option>
                                                                <option value="Central Java">Central Java</option>
                                                                <option value="West Java">West Java</option>
                                                            </datalist>
                                                        </div>
                                                        <div class="single-input-item">
                                                            <label for="display-name" class="required">City</label>
                                                            <input type="text" id="display-name" name="city"
                                                                list="citySelect" />
                                                            <datalist id="citySelect">
                                                                <option value="Surabaya">Surabaya</option>
                                                                <option value="Boyolali">Boyolali</option>
                                                                <option value="Bandung">Bandung</option>
                                                            </datalist>
                                                        </div>
                                                        <div class="single-input-item">
                                                            <label for="display-name"
                                                                class="required">Birthdate</label>
                                                            <input type="text" id="display-name" name="birthdate"
                                                                onfocus="(this.type='date')" />
                                                        </div>
                                                        <fieldset>
                                                            <legend>Password change</legend>
                                                            <div class="single-input-item">
                                                                <label for="current-pwd" class="required">Current
                                                                    Password</label>
                                                                <input type="password" id="current-pwd"
                                                                    name="password" />
                                                            </div>
                                                            @error('password')
                                                                <div class="error" style="color:red">{{ $message }}
                                                                </div>
                                                            @enderror
                                                            <div class="row">
                                                                <div class="col-lg-6">
                                                                    <div class="single-input-item">
                                                                        <label for="new-pwd" class="required">New
                                                                            Password</label>
                                                                        <input type="password" id="new-pwd"
                                                                            name="new_password" />
                                                                    </div>
                                                                </div>
                                                                @error('new_password')
                                                                    <div class="error" style="color:red">
                                                                        {{ $message }}</div>
                                                                @enderror
                                                                <div class="col-lg-6">
                                                                    <div class="single-input-item">
                                                                        <label for="confirm-pwd"
                                                                            class="required">Confirm Password</label>
                                                                        <input type="password" id="confirm-pwd"
                                                                            name="new_confirm_password" />
                                                                    </div>
                                                                    @error('new_confirm_password')
                                                                        <div class="error" style="color:red">
                                                                            {{ $message }}</div>
                                                                    @enderror
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <div class="single-input-item">
                                                            <button class="check-btn sqr-btn ">Save Changes</button>
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
            </div>
        </div>

        <footer>@include('template.footer')</footer>
    </div>


    <script>
        @include('js')
    </script>


</body>

</html>

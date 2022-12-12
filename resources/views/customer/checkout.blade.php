<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
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
        <header>@include('template.header')</header>
        <div class="checkout-main-area pt-70 pb-70">
            <div class="container">
                <div class="checkout-wrap pt-30">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="billing-info-wrap mr-50">
                                <h3>Billing Details</h3>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="billing-info mb-20">
                                            <label>Name <abbr class="required" title="required">*</abbr></label>
                                            <input type="text" value="{{ucfirst(Auth()->user()->name)}}">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-select mb-20">
                                            <label>Province <abbr class="required" title="required">*</abbr></label>
                                            <select>
                                                <option>Select a province</option>
                                                <option>Azerbaijan</option>
                                                <option>Bahamas</option>
                                                <option>Bahrain</option>
                                                <option>Bangladesh</option>
                                                <option>Barbados</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-select mb-20">
                                            <label>City <abbr class="required" title="required">*</abbr></label>
                                            <select>
                                                <option>Select a city</option>
                                                <option>Azerbaijan</option>
                                                <option>Bahamas</option>
                                                <option>Bahrain</option>
                                                <option>Bangladesh</option>
                                                <option>Barbados</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-info mb-20">
                                            <label>Address <abbr class="required" title="required">*</abbr></label>
                                            <input class="billing-address" placeholder="House number and street name"
                                                type="text" value="{{ucfirst(Auth()->user()->address)}}">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="billing-info mb-20">
                                            <label>Postcode / ZIP <abbr class="required"
                                                    title="required">*</abbr></label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="billing-info mb-20">
                                            <label>Phone <abbr class="required" title="required">*</abbr></label>
                                            <input type="text"  value="{{Auth()->user()->phone}}">
                                        </div>
                                    </div>
                                </div>
                                <div class="additional-info-wrap">
                                    <label>Order notes</label>
                                    <textarea placeholder="Notes about your order, e.g. special notes for delivery. " name="message"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="your-order-area">
                                <?php
                                    $total = 0;
                                    $subtotal = 0;
                                    $item = 0;
                                ?>
                                <h3>Your order</h3>
                                <div class="your-order-wrap gray-bg-4">
                                    <div class="your-order-info-wrap">
                                        <div class="your-order-info">
                                            <ul>
                                                <li>Product <span>Total</span></li>
                                            </ul>
                                        </div>
                                        <div class="your-order-middle">
                                            <ul>
                                                @foreach ($carts as $cart)
                                                <?php
                                                    $product = DB::table('product')->where('id', $cart->id_product)->first();
                                                    $subtotal += $product->price * $cart->qty;
                                                    $item += $cart->qty;
                                                ?>
                                                <li>{{ $cart->name }} X {{ $cart->qty }} <span>@currency($product->price * $cart->qty)</span></li>
                                                @endforeach
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-subtotal">
                                            <ul>
                                                <li>Subtotal <span>@currency($subtotal)</span></li>
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-shipping">
                                            <ul>
                                                <li>Shipping <p>Enter your full address to see shipping <br>costs. </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-total">
                                            <ul>
                                                <li>Total <span>$273.00 </span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="payment-method">
                                        <div class="pay-top sin-payment">
                                            <input id="payment_method_1" class="input-radio" type="radio"
                                                value="cheque" checked="checked" name="payment_method">
                                            <label for="payment_method_1"> Direct Bank Transfer </label>
                                            <div class="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your
                                                    Order ID as the payment reference. Your order will not be shipped
                                                    until the funds have cleared in our account.</p>
                                            </div>
                                        </div>
                                        <div class="pay-top sin-payment">
                                            <input id="payment-method-2" class="input-radio" type="radio"
                                                value="cheque" name="payment_method">
                                            <label for="payment-method-2">Check payments</label>
                                            <div class="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your
                                                    Order ID as the payment reference. Your order will not be shipped
                                                    until the funds have cleared in our account.</p>
                                            </div>
                                        </div>
                                        <div class="pay-top sin-payment">
                                            <input id="payment-method-3" class="input-radio" type="radio"
                                                value="cheque" name="payment_method">
                                            <label for="payment-method-3">Cash on delivery </label>
                                            <div class="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your
                                                    Order ID as the payment reference. Your order will not be shipped
                                                    until the funds have cleared in our account.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="Place-order mt-40">
                                    <a href="#">Place Order</a>
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

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
    <title>@yield('title', $title)</title>
    @include('customerstyle')
    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>
<div class="wrapper">
    <header>@include('template.header')</header>
    <div class="cart-main-area pt-95 pb-100">
        <div class="container">
            <h3 class="cart-page-title">Your cart items</h3>
            <div class="row">
                <?php
                    $total = 0;
                    $item = 0;
                ?>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <form action="#">
                        <div class="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Until Price</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($carts as $cart)
                                    <tr>
                                        <?php
                                        $product = DB::table('product')->where('id', $cart->id_product)->first();
                                        $total += $product->price * $cart->qty;
                                        $item += $cart->qty;
                                        ?>
                                        <td class="product-thumbnail">
                                            <a href="#"><img style="width: 100px; height: 100px;" src="{{ asset('assets/img/upload/product/' . $cart->image) }}" alt="cart product imager"></a>
                                        </td>
                                        <td class="product-name"><a href="#">{{ $cart->name }}</a></td>
                                        <td class="product-price-cart"><span class="amount">@currency($product->price)</span></td>
                                        <td class="product-quantity">
                                            <div class="cart-plus-minus" id="{{ $cart->id }}">
                                                <input class="cart-plus-minus-box" type="text" name="qtybutton" id="qtybutton" value="{{ $cart->qty }}">
                                            </div>
                                        </td>
                                        <td class="product-subtotal">@currency($product->price * $cart->qty)</td>
                                        <td class="product-remove">
                                            <a href="{{ route('removeCart', $cart->id_product) }}"><i class="sli sli-close"></i></a>
                                       </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="cart-shiping-update-wrapper">
                                    <div class="cart-shiping-update">
                                        <a href="{{ route('landing') }}">Continue Shopping</a>
                                    </div>
                                    <div class="cart-clear">
                                        {{-- <button>Update Shopping Cart</button> --}}
                                        <a href="{{ route('removeAllCart') }}">Clear Shopping Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="grand-totall">
                        <h4 class="grand-totall-title">Grand Total  <span>@currency($total)</span></h4>
                        <p>{{ $item }} item</p>
                        <a href="{{ route('checkout') }}">Proceed to Checkout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>@include('template.footer')</footer>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script>
    $(".cart-plus-minus").click(function(){
        // alert($(this).find("input").val() + " - " + this.id);
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: "POST",
            url: "{{ route('updateCart') }}",
            data: {
                id: this.id,
                qty: $(this).find("input").val()
            },
            success: function() {
                location.reload();
            }
        });
    });
</script>
<script>
@include('js')
</script>

</body>

</html>

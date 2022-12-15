<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @include('customerstyle')
    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
    <script type="text/javascript">
        var citiesByState = {
            EastJava: ["Babat", "Balung", "Bangil", "Bangkalan", "Banyuwangi", "Batu", "Blitar", "Bojonegoro",
                "Bondowoso", "Jember", "Jombang", "Kediri", "Lamongan", "Lumajang", "Madiun", "Magetan", "Malang",
                "Mojokerto", "Nganjuk", "Ngawi", "Pacitan", "Pamekasan", "Pasuruan", " Ponorogo", "Probolinggo",
                "Sidoarjo", "Situbondo", "Sumenep", "Trenggalek", "Tuban", "Tulungagung", "Surabaya"
            ],
            CentralJava: ["Adiwerna", "Ambarawa", "Banyumas", "Batang", "Baturaden", "Blora", "Boyolali", "Prambanan",
                "Ceper", "Cepi", "Colomadu", "Delanggu", "Gatak", "Gebog", "Grogol", "Gombong", "Kartasura",
                "Magelang", "Magelang", "Salatiga", "Semarang", "Surakarta", "Tegal", "Kudus", "Lebaksiu",
                "Rembang", "Purwokerto", "Wonosobo"
            ],
            WestJava: ["Bandung", "Banjar", "Banjaran", "Bekasi", "Bogor", "Caringin", "Ciamis", "Ciampea",
                "Cibinong", "Cicurug", "Cikampek", "Cikarang", "Cileungsir", "Cirebon", "Garut", "Indramayu",
                "Majalengka", "Depok", "Sukabumi", "Tasikmalaya", "Kresek", "Margahayukencana",
                "Padalarang", "Pamulang", "Rengasdengklok", "Purwakarta", "Serpong", "Soreang", "Sumedang"
            ],
            EastKalimantan: ["Balikpapan", "Bontang", "Berau", "Kutai", "Kutai Kartanegara", "Mahakam Hulu", "Paser",
                "Balikpapan", "Samarinda", "Loa Janan"
            ],
            CentralKalimantan: ["Barito", "Gunung Mas", "Kapuas", "Katingan", "Kotawaringin", "Lamandau", "Murung Raya",
                "Pulang Pisau", "Seruyan", "Sukamara", "Palangka Raya", "Kualapuas", "Palangkaraya", "Pangkalbuun",
                "Sampit"
            ],
            SouthSulawesi: ["Galesong", "Banteng", "Barru", "Bone", "Bulukumba", "Enrekang", "Gowa", "Jeneponto",
                "Luwu", "Maros", "Pinrang", "Sidenreng Rappang", "Sinjai", "Soppeng", "Takalar", "Tana Toraja",
                "Wajo", "Makassar", "Maros", "Palopo", "Pare-Pare", "Rantepao", "Selayar", "Watampone"
            ],
            SoutheastSulawesi: ["Bombana", "Buton", "Kolaka", "Konawe", "Muna", "Katabu", "Kendari", "Bau-Bau",
                "Wakatobi"
            ],
            CentralSulawesi: ["Banggi", "Buol", "Donggala", "Morowali", "Parigi Muotong", "Poso", "Sigi", "Toli-Toli",
                "Palu", "Luwuk", "Morowali", "Poso", "Tojo Una-Una"
            ],
            NorthSulawesi: ["Bolang Mongondow", "Sangihe", "Minahasa", "Siau Tagulandan Biaro", "Bitung", "Kotamobagu",
                "Manado", "Tomohon", "Tondano"
            ],
            SouthSumatra: ["Baturaja", "Empat Lawang", "Musi", "Ogan Ilir", "Ogan Komering Ulu",
                "Penukal Abab Lematang Ilir", "Lubuklinggau", "Pagar Alam", "Palembang", "Prambulih", "Lahat",
                "Tanjugagung"
            ],
            WestSumatra: ["Bukit Tinggi", "Agam", "Dharmasraya", "Mentawai", "Lima Puluh", "Pasaman", "Pesisir",
                'Sijunjung', "Solok", "Tanah Datar", "Padang", "Pariaman"
            ]
        }

        function makeSubmenu(value) {
            if (value.length == 0) document.getElementById("citySelect").innerHTML = "<option></option>";
            else {
                var citiesOptions = "";
                for (cityId in citiesByState[value]) {
                    citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
                }
                document.getElementById("citySelect").innerHTML = citiesOptions;
            }
            estimatecost();
            cek();
        }

        function displaySelected() {
            var country = document.getElementById("countrySelect").value;
            var city = document.getElementById("citySelect").value;
            alert(country + "\n" + city);
        }

        function resetSelection() {
            document.getElementById("countrySelect").selectedIndex = 0;
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
                                            <input type="text" id="inputName" value="{{ ucfirst(Auth()->user()->name) }}" onchange="cek()">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-info mb-20">
                                            <label>Province <abbr class="required" title="required">*</abbr></label>
                                            <div class="billing-select  mb-20">
                                                <select id="countrySelect" size="1" onchange="makeSubmenu(this.value)"
                                                    name="province">
                                                    <option disabled selected value="">Select a Provice</option>
                                                    <option>EastJava</option>
                                                    <option>CentralJava</option>
                                                    <option>WestJava</option>
                                                    <option>EastKalimantan</option>
                                                    <option>CentralKalimantan</option>
                                                    <option>SouthSulawesi</option>
                                                    <option>SoutheastSulawesi</option>
                                                    <option>CentralSulawesi</option>
                                                    <option>NorthSulawesi</option>
                                                    <option>SouthSumatra</option>
                                                    <option>WestSumatra</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-info mb-20">
                                            <label>City <abbr class="required" title="required">*</abbr></label>
                                            <div class="billing-select  mb-20">
                                                <select id="citySelect" size="1" name="city" onchange="estimatecost()">
                                                    <option disabled selected value="">Select a City</option>
                                                    <option></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-info mb-20">
                                            <label>Address <abbr class="required" title="required">*</abbr></label>
                                            <input class="billing-address" placeholder="House number and street name"
                                                type="text" id="inputAddress" value="{{ ucfirst(Auth()->user()->address) }}" onchange="cek()">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="billing-info mb-20">
                                            <label>Postcode / ZIP <abbr class="required"
                                                    title="required">*</abbr></label>
                                            <input type="text" id="inputZip" onchange="cek()">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="billing-info mb-20">
                                            <label>Phone <abbr class="required" title="required">*</abbr></label>
                                            <input type="text" id="inputPhone" value="{{ Auth()->user()->phone }}" onchange="cek()">
                                        </div>
                                    </div>
                                </div>
                                <div class="additional-info-wrap">
                                    <label>Order notes</label>
                                    <textarea id="inputNote" placeholder="Notes about your order, e.g. special notes for delivery. " name="message" value=""></textarea>
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
                                                    $product = DB::table('product')
                                                        ->where('id', $cart->id_product)
                                                        ->first();
                                                    $subtotal += $product->price * $cart->qty;
                                                    $item += $cart->qty;
                                                    ?>
                                                    <li>{{ $cart->name }} X {{ $cart->qty }}
                                                        <span>@currency($product->price * $cart->qty)</span>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-subtotal">
                                            <ul>
                                                <li>Subtotal <span id="subtotal">@currency($subtotal)</span></li>
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-shipping">
                                            <ul>
                                                <li>Shipping <p>Enter your full address to see shipping costs. </p>
                                                </li>
                                                <li><br>
                                                    Courier
                                                    <span>
                                                        <select name="courier" id="courier" onchange="estimatecost()">
                                                            <option disabled selected>Select a Courier</option>
                                                            <option value="jne">JNE</option>
                                                            <option value="pos">POS Indonesia</option>
                                                            <option value="tiki">TIKI</option>
                                                        </select>
                                                    </span>
                                                </li>
                                                <li><br>
                                                    Delivery
                                                    <span>
                                                        <select name="delivery" id="delivery"" onchange="estimatecost2()">
                                                            <option disabled selected>Select a Delivery type</option>
                                                        </select>
                                                    </span>
                                                </li>
                                                <li><br>
                                                    Shipping Cost
                                                    <span id="estimatedCost">@currency(0)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-total">
                                            <ul>
                                                <li>Total <span id="total">@currency($subtotal) </span></li>
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
                                    <a href="#" onclick="placeOrder()" class="btn disabled" id="orderButton">Place Order</a>
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

<script>
    var cost = 0;
    var subtotal = 0;

    function cek() {
        if (
            $("#courier").val() != null &&
            $("#delivery").val() != null &&
            $("#inputName").val() != "" &&
            $("#countrySelect").val() != null &&
            $("#citySelect").val() != null &&
            $("#inputAddress").val() != "" &&
            $("#inputZip").val() != "" &&
            $("#inputPhone").val() != ""
        ) {
            $("#orderButton").removeClass("btn disabled");
        }else{
            $("#orderButton").addClass("btn disabled");
        }
        console.log($("#inputNote").val());
    }

    function estimatecost() {
        if ($("#countrySelect").val() != null && $("#citySelect").val() != null && $("#courier").val() != null) {
            // alert($("#countrySelect").val() + " - " + $("#citySelect").val() + " - " + $("#courier").val());
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                type: "POST",
                url: "{{ route('estimateCost') }}",
                data: {
                    province: $("#countrySelect").val(),
                    city: $("#citySelect").val(),
                    courier: $("#courier").val()
                },
                success: function(cost) {
                    // location.reload();
                    // $("#estimatedCost").html(cost['rajaongkir']['results'][0]['costs'][0]['cost'][0]['value']);

                    var deliveryOptions = "<option disabled selected>Select a Delivery type</option>";
                    cost['rajaongkir']['results'][0]['costs'].forEach(type => {
                        deliveryOptions += "<option value=" + type['cost'][0]['value'] + ">" + type['description'] + "</option>";
                    });
                    document.getElementById("delivery").innerHTML = deliveryOptions;
                    cek();
                }
            });
        }
    }

    function estimatecost2() {
        // var cost = number_format($("#delivery").val(),0,',','.');
        // $("#estimatedCost").html("@currency(0)");
        // var currency = number_format($("#delivery").val(),0,',','.');
        // alert(currency);

        cost = parseInt($("#delivery").val());
        subtotal = parseInt('<?php echo $subtotal; ?>');

        $("#estimatedCost").html("Rp. " + cost.toLocaleString());
        $("#total").html("Rp. " + (subtotal + cost).toLocaleString());
        cek();
    }

    function placeOrder() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: "POST",
            url: "{{ route('placeOrder') }}",
            data: {
                courier: $("#courier").val(),
                delivery_type: $("#delivery option:selected").text(),
                delivery_fee: cost,
                total: (subtotal + cost),
                name: $("#inputName").val(),
                province_order: $("#countrySelect").val(),
                city_order: $("#citySelect").val(),
                address_order: $("#inputAddress").val(),
                zip_code: $("#inputZip").val(),
                phone: $("#inputPhone").val(),
                note: $("#inputNote").val()
            },
            success: function(data) {
                // alert(data);
                window.location = "{{ route('landing') }}";
            }
        });
    }
</script>

</html>

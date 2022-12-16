<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seller</title>
    @include('adminsellerstyle')
</head>

<body>
    <div id="app">
        @include('template.sidebarseller')
        <div id="main">
            @if (Session::has('pesanSukses'))
                <div class="alert alert-success">
                    {{ Session::get('pesanSukses') }}
                </div>
            @endif

            @if (Session::has('pesanGagal'))
                <div class="alert alert-danger">
                    {{ Session::get('pesanGagal') }}
                </div>
            @endif
            <header class="mb-3">
                <a href="#" class="burger-btn d-block d-xl-none">
                    <i class="bi bi-justify fs-3"></i>
                </a>
            </header>
            <div class="page-content">
                <div class="col-12">
                    <div class="row"style="width: 100%;" id="table-striped">
                        <div class="col-12">
                            <section class="section">
                                <div class="row" id="basic-table">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title">List Order</h4>
                                            </div>
                                            <div class="card-content">
                                                <div class="table-responsive">
                                                    <table class="table mb-0 table-lg">
                                                        <thead>
                                                            <tr>
                                                                <th>Id</th>
                                                                <th>Customer</th>
                                                                <th>Address</th>
                                                                <th>Total</th>
                                                                {{-- <th>Status</th> --}}
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            @foreach ($orders as $order)
                                                                <tr>
                                                                    <td class="text-bold-500"> {{ strtoupper($order->id) }}</td>
                                                                    <td class="text-bold-500">{{ $order->name }}</td>
                                                                    <td class="text-bold-500">{{ $order->address_order }}</td>
                                                                    <td class="text-bold-500">@currency($order->total)</td>
                                                                    {{-- <td class="text-bold-500">{{ $order->status_order }}</td> --}}
                                                                    <td>
                                                                        <a href="{{ route('deliveryDetail', $order->id) }}"
                                                                            class="btn btn-primary">View</a>
                                                                        {{-- <a href="{{ route('deleteProduct', $order->id) }}"
                                                                            class="btn btn-danger">Delete</a> --}}
                                                                    </td>
                                                                </tr>
                                                            @endforeach
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    {{ $orders->links('vendor.pagination.bootstrap-5') }}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <script>
        @include('jsadminseller')
    </script>
</body>

</html>

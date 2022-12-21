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
                                                <form action="{{ route('showSort') }}" method="GET">
                                                    <div class="dataTable-top"
                                                        style="width: 10%; display: inline-block;">
                                                        <div class="dataTable-dropdown">
                                                            <select class="dataTable-selector form-select"
                                                                name="sorter">
                                                                <option value="asc">ASC</option>
                                                                <option value="desc">DESC</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary">Filter</button>
                                                </form>
                                                <div class="dataTable-top" style="margin-top: 0.5%;">
                                                    <button type="submit" class="btn btn-success">Export</button>
                                                </div>

                                            </div>
                                            <table class="table mb-0 table-lg">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Customer</th>
                                                        <th>Address</th>
                                                        <th>Delivery Price & Type</th>
                                                        <th>Cities</th>
                                                        <th>Province</th>
                                                        <th>Total</th>
                                                        {{-- <th>Status</th> --}}
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach ($orders as $order)
                                                        <tr>
                                                            <td> {{ strtoupper($order->id) }}</td>
                                                            <td>{{ $order->name }}</td>
                                                            <td>{{ $order->address_order }}</td>
                                                            <td>{{ $order->delivery_fee }} -
                                                                {{ $order->delivery_type }}</td>
                                                            <td>{{ $order->city_order }}</td>
                                                            <td>{{ $order->province_order }}</td>
                                                            <td>@currency($order->total)</td>
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

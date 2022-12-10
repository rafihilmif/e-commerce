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
            <div class="page-heading">
                <h3>Profile Statistics</h3>
            </div>
            <div class="page-content">

                <div class="col-12">
                    <div class="row">
                        <div class="col-6 col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body px-4 py-4-5">
                                    <div class="row">
                                        <div
                                            class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                                            <div class="stats-icon purple mb-2">

                                            </div>
                                        </div>
                                        <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                            <h6 class="text-muted font-semibold">Total Customer</h6>
                                            <h6 class="font-extrabold mb-0">{{ $customerCount }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row"style="width: 100%;" id="table-striped">
                        <div class="col-12">
                            <section class="section">
                                <div class="row" id="basic-table">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title">List Product</h4>
                                            </div>
                                            <div class="card-content">
                                                <div class="table-responsive">
                                                    <table class="table mb-0 table-lg">
                                                        <thead>
                                                            <tr>
                                                                <th>NAME</th>
                                                                <th>ARTIST</th>
                                                                <th>CATEGORY</th>
                                                                <th>TAG</th>
                                                                <th>MATERIAL</th>
                                                                <th>PRICE</th>
                                                                <th>ACTION</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            @foreach ($product as $item)
                                                                <tr>
                                                                    <td class="text-bold-500">
                                                                        {{ strtoupper($item->name) }}</td>
                                                                    <td class="text-bold-500">{{ $item->id_artist }}
                                                                    </td>
                                                                    <td class="text-bold-500">{{ $item->id_category }}
                                                                    </td>
                                                                    <td class="text-bold-500">
                                                                        {{ strtoupper($item->tag) }}</td>
                                                                    <td class="text-bold-500">
                                                                        {{ strtoupper($item->material) }}</td>
                                                                    <td class="text-bold-500">@currency($item->price)</td>
                                                                    <td>
                                                                        <a href="{{ route('updateProduct', $item->id) }}"
                                                                            class="btn btn-primary">Edit</a>
                                                                        <a href="{{ route('deleteProduct', $item->id) }}"
                                                                            class="btn btn-danger">Delete</a>
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
                                    {{ $product->links('vendor.pagination.bootstrap-5') }}
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-xl-4">
                            <div class="card">
                                <div class="card-header">
                                    <h4>Profile Visit</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="d-flex align-items-center">
                                                <svg class="bi text-primary" width="32" height="32"
                                                    fill="blue" style="width:10px">
                                                    <use xlink:href="assets/images/bootstrap-icons.svg#circle-fill" />
                                                </svg>
                                                <h5 class="mb-0 ms-3">Europe</h5>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <h5 class="mb-0">862</h5>
                                        </div>
                                        <div class="col-12">
                                            <div id="chart-europe"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="d-flex align-items-center">
                                                <svg class="bi text-success" width="32" height="32"
                                                    fill="blue" style="width:10px">
                                                    <use xlink:href="assets/images/bootstrap-icons.svg#circle-fill" />
                                                </svg>
                                                <h5 class="mb-0 ms-3">America</h5>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <h5 class="mb-0">375</h5>
                                        </div>
                                        <div class="col-12">
                                            <div id="chart-america"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="d-flex align-items-center">
                                                <svg class="bi text-danger" width="32" height="32" fill="blue"
                                                    style="width:10px">
                                                    <use xlink:href="assets/images/bootstrap-icons.svg#circle-fill" />
                                                </svg>
                                                <h5 class="mb-0 ms-3">Indonesia</h5>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <h5 class="mb-0">1025</h5>
                                        </div>
                                        <div class="col-12">
                                            <div id="chart-indonesia"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-8">
                            <div class="card">
                                <div class="card-header">
                                    <h4>Latest Comments</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-lg">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Comment</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="col-3">
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar avatar-md">
                                                                <img src="assets/images/faces/5.jpg">
                                                            </div>
                                                            <p class="font-bold ms-3 mb-0">Si Cantik</p>
                                                        </div>
                                                    </td>
                                                    <td class="col-auto">
                                                        <p class=" mb-0">Congratulations on your graduation!</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="col-3">
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar avatar-md">
                                                                <img src="assets/images/faces/2.jpg">
                                                            </div>
                                                            <p class="font-bold ms-3 mb-0">Si Ganteng</p>
                                                        </div>
                                                    </td>
                                                    <td class="col-auto">
                                                        <p class=" mb-0">Wow amazing design! Can you make another
                                                            tutorial for
                                                            this design?</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
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

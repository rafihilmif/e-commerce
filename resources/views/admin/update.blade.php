<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    @include('adminsellerstyle')
</head>
<body>
    @include('template.sidebaradmin')
    <div id="main">
        <header class="mb-3">
            <a href="#" class="burger-btn d-block d-xl-none">
                <i class="bi bi-justify fs-3"></i>
            </a>
        </header>
        <div class="page-heading">
            <div class="page-title">
                <h3>Ubah Customer</h3>
                <section id="multiple-column-form">
                    <div class="row match-height">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <form class="form" action="{{ url('admin/update/user') }}" method="POST"
                                            enctype="multipart/form-data">
                                            @csrf
                                            <div class="row">
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="first-name-column">Email</label>
                                                        <input type="text" id="first-name-column"
                                                            class="form-control" placeholder="Email" name="email">
                                                        @error('email')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="last-name-column">Name</label>
                                                        <input type="text" id="first-name-column"
                                                            class="form-control" placeholder="Name" name="name">
                                                        @error('name')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="city-column">Password</label>
                                                        <input type="password" id="first-name-column"
                                                        class="form-control" placeholder="Password" name="password">
                                                        @error('password')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="city-column">Gender</label>
                                                        <input type="radio" name="rbgender" id="">Laki-laki
                                                        <input type="radio" name="rbgender" id="">Perempuan
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label>Address</label>
                                                        <input type="text" id="first-name-column"
                                                        class="form-control" placeholder="Address" name="address">
                                                        @error('address')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label>Provinsi</label>
                                                        <input type="text" id="first-name-column"
                                                            class="form-control" placeholder="Provinsi" name="provinsi">
                                                        @error('provinsi')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label>City</label>
                                                        <input type="text" class="form-control" name="city">
                                                        @error('city')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label>BirthDate</label>
                                                        <input type="date" name="birthdate" id="" class="form-control">
                                                        @error('birthdate')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label>Phone</label>
                                                        <input type="text" name="phone" id="" class="form-control">
                                                        @error('phone')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <button type="submit"
                                                            class="btn btn-primary form-control">Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
    <script>
       @include('jsadminseller')
    </script>
</body>

</html>

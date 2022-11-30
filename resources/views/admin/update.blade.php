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

    @include('admincustomer')
</head>
<body>
    @include('template.sidebaradmin')
        <div class="page-heading">
            <div class="page-title">
                <h3 class="text-center">Update Customer</h3>
                <section id="multiple-column-form">
                    <div class="row match-height">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <form class="form text-center ml-10" action="{{ route('ubah') }}" method="POST">
                                            @csrf
                                            @if (Session::has('pesan'))
                                                <div class="sukses">{{ $Session::get('pesan') }}</div>
                                            @endif
                                            <div class="row">
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group" style="position: relative; left: 100px;">
                                                        <label for="">Email :</label>
                                                        <input type="text" name="email" id="">
                                                        @error('email')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="">Name :</label>
                                                        <input type="text" name="name" id="">
                                                        @error('name')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group" style="position: relative; left: 100px;">
                                                        <label for="">Password :</label>
                                                        <input type="password" name="password" id="">
                                                        @error('password')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="">Gender</label>
                                                        <input type="radio" name="rbgender" id="">Laki-laki
                                                        <input type="radio" name="rbgender" id="">Perempuan
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group" style="position: relative; left: 100px;">
                                                        <label for="">Address :</label>
                                                        <input type="text" name="address" id="">
                                                        @error('address')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="">Provinsi :</label>
                                                        <input type="text" name="provinsi" id="">
                                                        @error('provinsi')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group" style="position: relative; left: 350px;">
                                                        <label for="">City :</label>
                                                        <input type="text" name="city" id="">
                                                        @error('city')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group" style="position: relative; left: 350px;">
                                                        <label for="">Birthdate :</label>
                                                        <input type="date" name="birthdate" id="">
                                                        @error('birthdate')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group" style="position: relative; left: 350px;">
                                                        <label for="">Phone :</label>
                                                        <input type="text" name="phone" id="">
                                                        @error('phone')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <button type="submit"
                                                            class="btn btn-primary form-control" name="add">Edit</button>
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

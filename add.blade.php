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
        <div class="page-heading">
            <div class="page-title">
                <h3 class="text-center">Add Customer</h3>
                <section id="multiple-column-form">
                    <div class="row match-height">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <form class="form text-center ml-10" action="{{ route('addUser') }}" method="POST" style="margin-left: 200px;">
                                            @csrf
                                            {{-- @if (Session::has('pesan'))
                                                <div class="sukses">{{ $Session::get('pesan') }}</div>
                                            @endif --}}
                                            <div class="row">
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group" style="position: relative; left: 100px;">
                                                        <label for="last-name-column">Email :</label>
                                                        <input type="text" name="email" id="" class="form-control">
                                                        @error('email')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-12">
                                                    <div class="form-group" style="position: relative; left: 100px; width: 620px;">
                                                        <label for="first-name-column">Name :</label>
                                                        <input type="text" name="name" id="first-name-column" class="form-control">
                                                        @error('name')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group" style="position: relative; left: 100px;">
                                                        <label for="password-column">Password :</label>
                                                        <input type="password" name="password" id="password-column" class="form-control">
                                                        @error('password')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-12">
                                                    <div class="form-group" style="position: relative; left: 100px;">
                                                        <label for="rbgender-column">Gender</label><br>
                                                        <input type="radio" name="rbgender" id="">Laki-laki
                                                        <input type="radio" name="rbgender" id="">Perempuan
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group" style="position: relative; left: 100px;">
                                                        <label for="city-column">Address :</label>
                                                        <input type="text" name="address" id="city-column" class="form-control">
                                                        @error('address')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="form-group" style="position: relative; left: 100px; top: -270px; width: 500px;">
                                                        <label for="city-column">Provinsi :</label>
                                                        <input type="text" name="provinsi" id="city-column" class="form-control">
                                                        @error('provinsi')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group" style="position: relative; left: 750px; top: -270px; width: 500px;">
                                                        <label for="city-column">City :</label>
                                                        <input type="text" name="city" id="city-column" class="form-control">
                                                        @error('city')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group" style="position: relative; left: 750px; top: -270px; width: 500px;">
                                                        <label for="first-name-column">Birthdate :</label>
                                                        <input type="date" name="birthdate" id="first-name-column" class="form-control">
                                                        @error('birthdate')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group"  style="position: relative; left: 750px; top: -270px; width: 500px;">
                                                        <label for="first-name-column">Phone :</label>
                                                        <input type="text" name="phone" id="first-name-column" class="form-control">
                                                        @error('phone')
                                                            <div class="alert">{{ $message }}</div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group" style="position: relative; top: -200px">
                                                        <button type="submit"
                                                            class="btn btn-primary form-control" name="add">add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <table class="table" style="position: relative; top: -200px;">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Email</th>
                                                <th>Name</th>
                                                <th>Password</th>
                                                <th>gender</th>
                                                <th>address</th>
                                                <th>Provinsi</th>
                                                <th>Kota</th>
                                                <th>Tanggal Lahir</th>
                                                <th>Nomor Telepon</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @forelse ($daftarcustomer as $cust)
                                                <tr>
                                                    <td>{{ $cust->id }}</td>
                                                    <td>{{ $cust->email }}</td>
                                                    <td>{{ $cust->name }}</td>
                                                    <td>{{ $cust->password }}</td>
                                                    <td>{{ $cust->gender }}</td>
                                                    <td>{{ $cust->address }}</td>
                                                    <td>{{ $cust->province }}</td>
                                                    <td>{{ $cust->city }}</td>
                                                    <td>{{ $cust->birthdate }}</td>
                                                    <td>{{ $cust->phone }}</td>
                                                </tr>
                                            @empty

                                            @endforelse
                                        </tbody>
                                    </table>
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

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="description">
    <meta content="" name="keywords">
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
            <table class="table">
                <thead>
                    <tr>
                       <th>Nama Customer</th>
                       <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($daftarlogs as $log)
                        <tr>
                            <td>{{ $log->id_customer }}</td>
                            <td>{{ $log->keterangan }}</td>
                        </tr>
                    @empty
                        <tr>
                            <td>Tidak ada data</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </main>
    <script>
       @include('jsadminseller')
    </script>
</body>

</html>

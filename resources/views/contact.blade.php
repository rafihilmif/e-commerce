<!doctype html>
<html class="no-js" lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>@yield('title', $title)</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
    @include('customerstyle')
    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
</head>

<body>
    <div class="wrapper">

        <head>@include('template.header')</head>
        <div class="contact-area pt-100 pb-100">
            <div class="container">
                @if (session()->has('message'))
                    <div class="alert alert-success">
                        {{ session()->get('message') }}
                    </div>
                @endif
                <div class="row">
                    <div class="col-lg-5 col-md-6">
                        <div class="contact-info-area">
                            <h2>Our Contact</h2>
                            <p>LET US KNOW IF YOU HAVE A QUESTION. Send us a message and we will respond as soon as
                                possible.</p>
                            <div class="contact-info-wrap">
                                <div class="single-contact-info">
                                    <div class="contact-info-icon">
                                        <i class="sli sli-location-pin"></i>
                                    </div>
                                    <div class="contact-info-content">
                                        <p>Jl. Raya Gubeng No.66, Gubeng, Kec. Gubeng, Kota SBY, Jawa Timur 60281</p>
                                    </div>
                                </div>
                                <div class="single-contact-info">
                                    <div class="contact-info-icon">
                                        <i class="sli sli-envelope"></i>
                                    </div>
                                    <div class="contact-info-content">
                                        <p><a href="#">noiseblod@gmail.com</a></p>
                                    </div>
                                </div>
                                <div class="single-contact-info">
                                    <div class="contact-info-icon">
                                        <i class="sli sli-screen-smartphone"></i>
                                    </div>
                                    <div class="contact-info-content">
                                        <p> 0821 3000 1985</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6">
                        <div class="contact-from contact-shadow">
                            <form id="contact-form" action="{{ route('sendEmail') }}" method="POST">
                                @csrf
                                <input name="name" type="text" placeholder="Name">
                                @error('name')
                                    <span class="text-danger"> {{ $message }} </span>
                                @enderror
                                <input name="email" type="email" placeholder="Email">
                                @error('email')
                                    <span class="text-danger"> {{ $message }} </span>
                                @enderror
                                <input name="subject" type="text" placeholder="Subject">
                                @error('subject')
                                    <span class="text-danger"> {{ $message }} </span>
                                @enderror
                                <textarea name="content" placeholder="Your Message"></textarea>
                                @error('content')
                                    <span class="text-danger"> {{ $message }} </span>
                                @enderror
                                <button class="submit" type="submit">Send Message</button>
                            </form>
                            <p class="form-messege"></p>
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

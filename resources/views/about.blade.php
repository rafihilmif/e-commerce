<!doctype html>
<html class="no-js" lang="zxx">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>@yield('title', $title)</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @include('customerstyle')
</head>
<body>
    <div class="wrapper">
        @include('template.header')
        <div class="about-story-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="story-img">
                            <a href="#"><img src="{{ asset('assets/img/logo/flag-fix.jpg') }}" alt=""></a>
                            <div class="about-logo">
                                <h3>nblod</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="story-details pl-50">
                            <div class="story-details-top">
                                <h2>WELCOME TO <span>Noiseblod</span></h2>
                                <p style="text-align: justify;">Noiseblod is a gripping and unconventional
                                    clothing brand based in East Java since 2021.
                                    Represents not only a more refined and forward-thinking brand, we reflect
                                    our each
                                    issues like a musical albums and every articles is like a song we write.

                                </p>
                            </div>
                            <div class="story-details-bottom">
                                <h4>WE START AT 2021</h4>
                                <p style="text-align: justify;">Driven by the dream-quest of demon force that
                                    bore black mass hysteria, a carnal beast,
                                    living in a cosmos that is indifferent to our existence. Noiseblod is
                                    dangerous flame of
                                    brand that seemed lost for many years and that now once again has been set
                                    loose upon
                                    everyday society & to decipher the world objectively.</p>
                            </div>
                            <div class="story-details-bottom">
                                <h4>OUR SINS</h4>
                                <p style="text-align: justify;">Two young devils were brought together by our
                                    passion for music. Our first love has
                                    always been and will always be music, we try to give back to our roots
                                    through the
                                    products and opportunities we provide through the company. We remains
                                    extremely involved
                                    in the production and direction of Noiseblod, maintaining the respect over
                                    communities
                                    we continue to support our friends, which helps us fuel and inspire our
                                    original vision.
                                    Our goal for Noiseblod is to evoke emotions then create topics of discussion
                                    through our
                                    designs and boldly stated our idea at the hand of youth culture.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="feature-area pb-60">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <div class="single-feature mb-40">
                            <div class="feature-icon">
                                <img src="assets/img/icon-img/free-shipping.png" alt="">
                            </div>
                            <div class="feature-content">
                                <h4>Free Shipping</h4>
                                <p>Most product are free <br>shipping.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-4 col-md-4">
                        <div class="single-feature mb-40 pl-50">
                            <div class="feature-icon">
                                <img src="assets/img/icon-img/support.png" alt="">
                            </div>
                            <div class="feature-content">
                                <h4>Customer Support</h4>
                                <p>24x7 Customer Support</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-4">
                        <div class="single-feature mb-40">
                            <div class="feature-icon">
                                <img src="assets/img/icon-img/security.png" alt="">
                            </div>
                            <div class="feature-content">
                                <h4>Secure Payment</h4>
                                <p>Most Secure Payment <br>for customer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('template.footer')
    </div>
    <script>
        @include('js')
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <meta content="" name="description">
    <meta content="" name="keywords">

    @include('adminsellerstyle')
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
    @include('template.sidebaradmin')
    @include('flash-message')
    <div id="main">
        <header class="mb-3">
            <a href="#" class="burger-btn d-block d-xl-none">
                <i class="bi bi-justify fs-3"></i>
            </a>
        </header>
        <div class="page-heading">
            <div class="page-title">
                <h3>Add Customer</h3>
                <section id="multiple-column-form">
                    <div class="row match-height">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <form class="form" action="{{ route('doAddUser') }}" method="POST"
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
                                                        <label>Gender</label>
                                                        <select name="gender" class="form-control">
                                                            <option disabled selected>Select a Gender</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
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
                                                        <select id="countrySelect" size="1"
                                                            onchange="makeSubmenu(this.value)" name="provinsi"
                                                            class="form-control">
                                                            <option disabled selected>Select a Provice</option>
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
                                                    @error('provinsi')
                                                        <div class="alert">{{ $message }}</div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label>City</label>
                                                    <select id="citySelect" size="1" name="city"
                                                        class="form-control">
                                                        <option disabled selected>Select a City</option>
                                                        <option></option>
                                                    </select>
                                                </div>
                                                @error('city')
                                                    <div class="alert">{{ $message }}</div>
                                                @enderror
                                            </div>
                                           <div class="col-12">
                                                <div class="form-group">
                                                    <label>BirthDate</label>
                                                    <input type="date" name="birthdate" id=""
                                                        class="form-control">
                                                    @error('birthdate')
                                                        <div class="alert">{{ $message }}</div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label>Phone</label>
                                                    <input type="number" name="phone" id=""
                                                        class="form-control">
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

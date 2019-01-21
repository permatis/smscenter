<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Halo Sadeng</title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Halo Sadeng') }}</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <!-- plugins:css -->
    <link rel="stylesheet" href="{{ asset('vendors/iconfonts/mdi/css/materialdesignicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/vendor.bundle.base.css') }}">
    <link rel="stylesheet" href="{{ asset('css/vendor.bundle.addons.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

    <link rel="shortcut icon" href="{{ asset('images/favicon.png') }}" />

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/off-canvas.js') }}"></script>
    <script src="{{ asset('js/misc.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>
</head>

<body>
    <div>
        <div class="container-scroller">
            <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                    <a class="navbar-brand brand-logo" href="../../index.html">
                        Halo Sadeng
                    </a>
                    <a class="navbar-brand brand-logo-mini" href="../../index.html">
                        <img src="../../images/logo-mini.svg" alt="logo" />
                    </a>
                </div>
                <div class="navbar-menu-wrapper d-flex align-items-center">
                    <ul class="navbar-nav navbar-nav-right">
                        <li class="nav-item dropdown">
                            <a class="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                <i class="mdi mdi-bell"></i>
                                <!-- <span class="count">7</span> -->
                            </a>
                            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                <div class="dropdown-item">
                                    <p class="mb-0 font-weight-normal float-left">You have 7 unread mails
                                    </p>
                                    <span class="badge badge-info badge-pill float-right">View all</span>
                                </div>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                        <img src="../../images/faces/face4.jpg" alt="image" class="profile-pic">
                                    </div>
                                    <div class="preview-item-content flex-grow">
                                        <h6 class="preview-subject ellipsis font-weight-medium text-dark">David Grey
                                            <span class="float-right font-weight-light small-text">1 Minutes ago</span>
                                        </h6>
                                        <p class="font-weight-light small-text">
                                            The meeting is cancelled
                                        </p>
                                    </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                        <img src="../../images/faces/face3.jpg" alt="image" class="profile-pic">
                                    </div>
                                    <div class="preview-item-content flex-grow">
                                        <h6 class="preview-subject ellipsis font-weight-medium text-dark"> Johnson
                                            <span class="float-right font-weight-light small-text">18 Minutes ago</span>
                                        </h6>
                                        <p class="font-weight-light small-text">
                                            Upcoming board meeting
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li class="nav-item dropdown d-none d-xl-inline-block">
                            <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                <span class="profile-text">Hello, Kelurahan Sadeng</span>
                                <img class="img-xs rounded-circle" src="../../images/faces/face1.jpg" alt="Profile image">
                            </a>
                            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                <a class="dropdown-item mt-2">
                                    Manage Accounts
                                </a>
                                <a class="dropdown-item">
                                    Change Password
                                </a>
                                <a class="dropdown-item">
                                    Sign Out
                                </a>
                            </div>
                        </li>

                    </ul>
                    <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span class="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>

            <div class="container-fluid page-body-wrapper">

                @component('themes.staradmin.sidebar')
                @endcomponent

                <div class="main-panel" id="app"  v-cloak>
                    <div class="content-wrapper">
                        @yield('content')
                    </div>
                </div>
            </div>

            <!-- @component('themes.staradmin.pesanbaru')
            @endcomponent -->

            

            @yield('scripts')

        </div>
    </div>
    <script type="text/javascript">
    const app = new Vue({
        el: '#app',
        data: {
            showModal: true,
            balasSMS: false,
            hapusSMS: false,
            kirimSMS: false,
            messageId: '',
            modalTitle: 'Detail Pesan',
            judulNomor: 'Nomor Tujuan',
            nomorTlp: '',
            isiPesan: '',
            tglPesan: '',
            totalInbox: '',
            totalDayInbox: '',
            totalOutbox: '',
            totalDayOutbox: '',
            outbox: [],
            inbox: []
        },
        methods: {
            replyModal(balasSMS, hapusSMS, response) {
                if(balasSMS == true && hapusSMS == false) {
                //     this.judulNomor = 'Balas dari';
                //     this.modalTitle = 'Balas Pesan';
                }

                if(hapusSMS == true && balasSMS == false) {
                //     this.modalTitle = 'Konfirmasi Menghapus';
                }
                
                // this.nomorTlp = (response.dari == null) ? response.noTujuan : response.dari;
                // this.messageId = response.messageId;
                // this.isiPesan = response.isiPesan;
                // this.tglPesan = response.date;
            },
            balasPesan() {
                var nomorTlp = document.getElementById('nomorTlp');
                var isiPesan = document.getElementById('isiPesan');
                var params = {
                   userkey: 'ivghosvjssr0i4miopq7',
                    passkey: '52e77de9cf14d3c577fdb195',
                    nohp: nomorTlp.value,
                    pesan: isiPesan.value
                }
                this.$http.post(this.baseUrl + '/sendsms', params, { emulateJSON: true })
                    .then(response => {
                            $('#smsModal').modal('hide');
                            this.$swal('Pesan Terkirim', 'Silahkan cek pesan di handphone anda.', 'success');
                            setTimeout(function() {
                                location.reload();
                            }, 10000);
                    }, response => {
                            $('#smsModal').modal('hide');
                            this.$swal('Pesan Gagal', 'Maaf pesan anda tidak dapat terkirim!', 'success');
                    });
            },
            kirimPesan() {
                    var nohp = document.getElementById('nohp');
                    var isiPesan = document.getElementById('isiPesan');
console.log(nohp.value);
                    // var params = {
                    //     userkey: 'ivghosvjssr0i4miopq7',
                    //     passkey: '52e77de9cf14d3c577fdb195',
                    //     nohp: nohp.value,
                    //     pesan: isiPesan.value
                    // }
                    // this.$http.post(this.baseUrl + '/sendsms', params, { emulateJSON: true })
                    // .then(response => {
                    //         $('#smsModal').modal('hide');
                    //         this.$swal('Pesan Terkirim', 'Silahkan tunggu 5-10 detik.', 'success');
                    //         setTimeout(function() {
                    //             location.reload();
                    //         }, 10000);
                    // }, response => {
                    //         $('#smsModal').modal('hide');
                    //         this.$swal('Pesan Gagal', 'Maaf pesan anda tidak dapat terkirim!', 'success');
                    // });
                },
            getOutboxAll() {
                this.$http.get(this.baseUrl + '/getoutbox', {
                        params: this.allParams
                    })
                    .then(response => {
                        this.totalOutbox = response.body['msg-count'];
                        this.outbox = this.filterByDate(response);
                    }, response => {
                        console.log(response)
                    });
            },
            getInboxAll() {
                this.$http.get(this.baseUrl + '/getinbox', {
                        params: this.allParams
                    })
                    .then(response => {
                        this.totalInbox = response.body['msg-count'];
                        this.inbox = this.filterByDate(response);
                    }, response => {
                        console.log(response)
                    });
            },
            filterByDate(response) {
                var messageByDate = response.body.msg.sort((a, b) => parseFloat(b.messageId) - parseFloat(a.messageId));
                var message = new Array();

                for (var i = 0; i <= 4; i++) {
                    message[i] = messageByDate[i];
                }

                return message;
            },
            getOutbox() {
                this.$http.get(this.baseUrl + '/getoutbox', {
                        params: this.params
                    })
                    .then(response => {
                        this.totalDayOutbox = (response.body['msg-count']) == null ? 0 : response.body['msg-count'];
                    }, response => {
                        console.log(response)
                    });
            },
            getInbox() {
                this.$http.get(this.baseUrl + '/getinbox', {
                        params: this.params
                    })
                    .then(response => {
                        this.totalDayInbox = (response.body['msg-count']) == null ? 0 : response.body['msg-count'];
                    }, response => {
                        console.log(response)
                    });
            }
        },
        computed: {
            baseUrl() {
                return 'http://kecgunungpati.zenziva.co.id/api';
            },
            allParams() {
                return {
                    userkey: 'ivghosvjssr0i4miopq7',
                    passkey: '52e77de9cf14d3c577fdb195',
                    start_date: '01/01/2019',
                    end_date: this.getToday
                }
            },
            params() {
                return {
                    userkey: 'ivghosvjssr0i4miopq7',
                    passkey: '52e77de9cf14d3c577fdb195',
                    start_date: this.getToday,
                    end_date: this.getToday
                }
            },
            getToday() {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd;
                }

                if (mm < 10) {
                    mm = '0' + mm;
                }

                return dd + '/' + mm + '/' + yyyy;
            }
        },
        mounted() {
            this.getInbox();
            this.getOutbox();
            this.getInboxAll();
            this.getOutboxAll();
        }
    })
  </script>
</body>

</html>

@extends('themes.staradmin.app')

@section('content')
<div class="row">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
            <div class="card-body">
                <div class="clearfix">
                    <div class="float-left">
                        <i class="mdi mdi-cube text-danger icon-lg"></i>
                    </div>
                    <div class="float-right">
                        <p class="mb-0 text-right">Total SMS Masuk</p>
                        <div class="fluid-container">
                            <h3 class="font-weight-medium text-right mb-0">@{{ totalMessage }}</h3>
                        </div>
                    </div>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <!-- <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth -->
                </p>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
            <div class="card-body">
                <div class="clearfix">
                    <div class="float-left">
                        <i class="mdi mdi-receipt text-warning icon-lg"></i>
                    </div>
                    <div class="float-right">
                        <p class="mb-0 text-right">SMS Masuk Hari Ini</p>
                        <div class="fluid-container">
                            <h3 class="font-weight-medium text-right mb-0">0</h3>
                        </div>
                    </div>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <!-- <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise sales -->
                </p>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
            <div class="card-body">
                <div class="clearfix">
                    <div class="float-left">
                        <i class="mdi mdi-poll-box text-success icon-lg"></i>
                    </div>
                    <div class="float-right">
                        <p class="mb-0 text-right">Total SMS Keluar</p>
                        <div class="fluid-container">
                            <h3 class="font-weight-medium text-right mb-0">124</h3>
                        </div>
                    </div>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <!-- <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales -->
                </p>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
            <div class="card-body">
                <div class="clearfix">
                    <div class="float-left">
                        <i class="mdi mdi-account-location text-info icon-lg"></i>
                    </div>
                    <div class="float-right">
                        <p class="mb-0 text-right">Total Kontak</p>
                        <div class="fluid-container">
                            <h3 class="font-weight-medium text-right mb-0">124</h3>
                        </div>
                    </div>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <!-- <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales -->
                </p>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-6 grid-margin">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title mb-4">Kotak Masuk</h5>
                <div class="fluid-container">
                    <div class="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                        <div class="col-md-1 text-center">
                            <img class="img-sm rounded-circle mb-4 mb-md-0" src="images/faces/face1.jpg" alt="profile image">
                        </div>
                        <div class="ticket-details col-md-8">
                            <div class="d-flex">
                                <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Defri :</p>
                                <p class="text-primary mr-1 mb-0">+6281805889090</p>
                                <p class="mb-0 ellipsis">Bantuan Informasi</p>
                            </div>
                            <p class="text-gray ellipsis mb-2">Hello Sadeng. hari Sabtu, Kantor Kelurahan Sadeng apakah buka?
                            </p>
                            <div class="row text-gray d-md-flex d-none">
                                <div class="col-4 d-flex">
                                    <small class="mb-0 mr-2 text-muted text-muted">12/01/2019</small>
                                    <small class="Last-responded mr-2 mb-0 text-muted text-muted">08:00:42</small>
                                </div>
                            </div>
                        </div>
                        <div class="ticket-actions col-md-2">
                            <div class="btn-group btn-group-xs dropdown">
                                <button type="button" class="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Manage
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">
                                        <i class="fa fa-reply fa-fw"></i>Balas Pesan</a>
                                    <a class="dropdown-item" href="#">
                                        <i class="fa fa-times text-danger fa-fw"></i>Hapus Pesan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                        <div class="col-md-1 text-center">
                            <img class="img-sm rounded-circle mb-4 mb-md-0" src="images/faces/face2.jpg" alt="profile image">
                        </div>
                        <div class="ticket-details col-md-8">
                            <div class="d-flex">
                                <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Nuniek :</p>
                                <p class="text-primary mr-1 mb-0">+6285742436565</p>
                                <p class="mb-0 ellipsis">Laporan Warga</p>
                            </div>
                            <p class="text-gray ellipsis mb-2">Ijin laporan malam ini pertemuan paguyuban tokoh agama tokoh masyarakat membahas pembangunan lingkungan kerjanya Sadeng khususnya kelurahan Sadeng pada umumnya
                            </p>
                            <div class="row text-gray d-md-flex d-none">
                                <div class="col-4 d-flex">
                                    <small class="mb-0 mr-2 text-muted">06/01/2019</small>
                                    <small class="Last-responded mr-2 mb-0 text-muted">22:00:42</small>
                                </div>
                            </div>
                        </div>
                        <div class="ticket-actions col-md-2">
                            <div class="btn-group btn-group-xs dropdown">
                                <button type="button" class="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Manage
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">
                                        <i class="fa fa-reply fa-fw"></i>Balas Pesan</a>
                                    <a class="dropdown-item" href="#">
                                        <i class="fa fa-times text-danger fa-fw"></i>Hapus Pesan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-6 grid-margin">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title mb-4">Kotak Keluar</h5>
                <div class="fluid-container">
                    <div class="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                        <div class="col-md-1 text-center">
                            <img class="img-sm rounded-circle mb-4 mb-md-0" src="images/faces/face1.jpg" alt="profile image">
                        </div>
                        <div class="ticket-details col-md-8">
                            <div class="d-flex">
                                <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Sutrisman :</p>
                                <p class="text-primary mr-1 mb-0">+6285226389672</p>
                                <p class="mb-0 ellipsis">Undangan</p>
                            </div>
                            <p class="text-gray ellipsis mb-2">Diberitahukan kepada Ketua RW 1, mengingatkan bahwa nanti ada malam ada rapat RT RW.
                            </p>
                            <div class="row text-gray d-md-flex d-none">
                                <div class="col-4 d-flex">
                                    <small class="mb-0 mr-2 text-muted text-muted">12/01/2019</small>
                                    <small class="Last-responded mr-2 mb-0 text-muted text-muted">08:00:42</small>
                                </div>
                            </div>
                        </div>
                        <div class="ticket-actions col-md-2">
                            <div class="btn-group btn-group-xs dropdown">
                                <button type="button" class="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Manage
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">
                                        <i class="fa fa-reply fa-fw"></i>Balas Pesan</a>
                                    <a class="dropdown-item" href="#">
                                        <i class="fa fa-times text-danger fa-fw"></i>Hapus Pesan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                        <div class="col-md-1 text-center">
                            <img class="img-sm rounded-circle mb-4 mb-md-0" src="images/faces/face2.jpg" alt="profile image">
                        </div>
                        <div class="ticket-details col-md-8">
                            <div class="d-flex">
                                <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Tatik :</p>
                                <p class="text-primary mr-1 mb-0">+6281575662878</p>
                                <p class="mb-0 ellipsis">Undangan</p>
                            </div>
                            <p class="text-gray ellipsis mb-2">Diberitahukan kepada Tatik, mengingatkan bahwa nanti ada malam ada rapat FKK.
                            </p>
                            <div class="row text-gray d-md-flex d-none">
                                <div class="col-4 d-flex">
                                    <small class="mb-0 mr-2 text-muted">06/01/2019</small>
                                    <small class="Last-responded mr-2 mb-0 text-muted">22:00:42</small>
                                </div>
                            </div>
                        </div>
                        <div class="ticket-actions col-md-2">
                            <div class="btn-group btn-group-xs dropdown">
                                <button type="button" class="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Manage
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">
                                        <i class="fa fa-reply fa-fw"></i>Balas Pesan</a>
                                    <a class="dropdown-item" href="#">
                                        <i class="fa fa-times text-danger fa-fw"></i>Hapus Pesan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
  <script type="text/javascript">
    const app = new Vue({
      el : '#app',
      data : {
        totalMessage : '',
        totalDayMessage : '',
        totalOutbox: '',
        totalContact: ''
      },
      methods : {
        getInbox() {
          var config = {

          };
          // axios.get('https://reqres.in/api/users?page=2').then(response => {
          //   console.log(response)
          // });

          axios.get('http://kecgunungpati.zenziva.co.id/api/getinbox',{
            params: {
              userkey: 'ivghosvjssr0i4miopq7',
              passkey: '52e77de9cf14d3c577fdb195',
              start_date: '01/01/2019',
              end_date: this.getToday
            }
          })
          .then(response => {
            console.log(response)
          });
        },
        getOutbox() {

        }
      },
      computed : {
        getToday() {
          var today = new Date();
          var dd  = today.getDate();
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
      }
    })
  </script>
@endsection

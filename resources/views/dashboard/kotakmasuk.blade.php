<div class="col-6 grid-margin">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title mb-4">Kotak Masuk</h5>
            <div class="fluid-container">
                <div class="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3" v-for="out in inbox">
                    <div class="col-md-1 text-center">
                        <img class="img-sm rounded-circle mb-4 mb-md-0" src="images/faces-clipart/pic-4.png" alt="profile image">
                    </div>
                    <div class="ticket-details col-md-8">
                        <div class="d-flex">
                            <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap" v-html="out.dari"></p>
                            <!-- <p class="text-primary mr-1 mb-0">+6281805889090</p> -->
                            <!-- <p class="mb-0 ellipsis">Bantuan Informasi</p> -->
                        </div>
                        <p class="text-gray ellipsis mb-2" v-html="out.isiPesan">
                        </p>
                        <div class="row text-gray d-md-flex d-none">
                            <div class="col-6 d-flex">
                                <!-- <small class="mb-0 mr-2 text-muted text-muted"></small> -->
                                <small class="Last-responded mr-2 mb-0 text-muted text-muted">@{{ out.date | formatDate
                                    }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="ticket-actions col-md-2">
                        <div class="btn-group btn-group-xs dropdown">
                            <button type="button" class="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Manage
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" @click="replyModal(balasSMS=true, hapusSMS=false, out)" data-toggle="modal" data-target="#smsModal">
                                    <i class="fa fa-reply fa-fw"></i>Balas Pesan</a>
                                <a class="dropdown-item" @click="replyModal(balasSMS=false, hapusSMS=false, out)" data-toggle="modal" data-target="#smsModal">
                                    <i class="fa fa-reply fa-fw"></i>Tampikan Pesan</a>
                                <a class="dropdown-item"  @click="replyModal(balasSMS=false, hapusSMS=true, out)" data-toggle="modal" data-target="#smsModal">
                                    <i class="fa fa-times text-danger fa-fw"></i>Hapus Pesan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
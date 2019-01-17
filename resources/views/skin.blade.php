@extends('themes.staradmin.app')

@section('content')
<div class="row">
    @component('dashboard.totalsmsmasuk')
    @endcomponent
    @component('dashboard.totalsmshariini')
    @endcomponent
    @component('dashboard.totalsmskeluar')
    @endcomponent
    @component('dashboard.totalkeluarhariini')
    @endcomponent
</div>

<div class="row">
    @component('dashboard.kotakmasuk')
    @endcomponent

    @component('dashboard.kotakkeluar')
    @endcomponent
</div>

<div class="modal fade" id="smsModal" tabindex="-1" role="dialog" aria-labelledby="smsModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">@{{ modalTitle }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div v-if="balasSMS">
                    <input type="hidden" disabled class="form-control" id="messageId" name="id" required :value="this.messageId">
                    <div class="form-group">
                        <label>@{{ judulNomor }}</label>
                        <input type="email" class="form-control" id="nomorTlp" disabled :value="this.nomorTlp">
                    </div>
                    <div class="form-group">
                        <label>Isi Pesan</label>
                        <textarea class="form-control" rows="10" id="isiPesan" placeholder="Isi Pesan"></textarea>
                    </div>
                </div>
                <div v-else-if="hapusSMS">
                    <p>Apakah anda yakin menghapus pesan ini?</p>
                </div>
                <div v-else-if="kirimSMS">
                    <p>Kirim?</p>
                </div>
                <div v-else>
                @{{balasSMS  }}
                @{{hapusSMS  }}
                @{{kirimSMS  }}
                    <table>
                        <tr>
                            <th>@{{ judulNomor }}</th>
                            <td></td>
                            <td>@{{ this.nomorTlp }}</td>
                        </tr>
                        <tr>
                            <th>Isi Pesan</th>
                            <td></td>
                            <td>@{{ this.isiPesan }}</td>
                        </tr>
                        <tr>
                            <th>Tanggal</th>
                            <td></td>
                            <td>@{{ this.tglPesan | formatDate }}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-default" data-dismiss="modal"> Keluar</button>
                <button class="btn btn-info" v-if="balasSMS" @click="balasPesan()"> Balas Pesan </button>
                <button class="btn btn-danger" v-if="hapusSMS" @click="hapusPesan()"> Hapus Pesan</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">test</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <div class="form-group">
                    <label>@{{ judulNomor }}</label>
                    <input type="email" class="form-control" id="nohp"  placeholder="Nomor Tujuan">
                </div>
                <div class="form-group">
                    <label>Isi Pesan</label>
                    <textarea class="form-control" rows="10" id="isiPesan" placeholder="Isi Pesan"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-default" data-dismiss="modal"> Keluar</button>
                <button class="btn btn-info" @click="kirimPesan()"> Balas Pesan </button>
            </div>
        </div>
    </div>
</div>
@endsection
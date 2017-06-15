<template>
    <div class="itunes">
        <form class="form-inline" @submit.prevent="getMusicByArtist">
            <div class="form-group">
                <input type="text" class="form-control" v-model="artist" placeholder="Artist Name">
              <v-btn primary light class="btn--light-flat-focused" id="defaultBTN" type="submit">Get Music</v-btn>
            </div>
        </form>
        <div class="row">
            <div class="col-xs-6 text-center" v-for="song in songs">
                <div class="well">
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img :src="song.artworkUrl60" class="media-object thumbnail" >
                            </a>
                        </div>
                    </div>
                    <h2>{{song.artistName}}</h2>
                    <h4>{{song.trackName}}</h4>
                    <h5>{{song.collectionCensoredName}}</h5>
                    <h4>${{song.trackPrice}}</h4>
                    <audio controls><source :src="song.previewUrl" type="audio/mpeg"></audio>
                        <button  @click="addTunes(song)">Add to Playlist</button>                              
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>


<script>
import iservice from '../services/itunes-service'
import mytunes from '../services/mytunes-service'

export default {
    name: 'itunes',
    data(){
        return{
            songs: [],
            artist: ''
        }
    },
    computed: {},
    methods: {
          getMusicByArtist(){
            iservice.getMusicByArtist(this.artist).then(res=>{
            let resObj = JSON.parse(res)
            this.songs = resObj.results
      })
    },
        addTunes(song){
            mytunes.addTrack(song)
        }
    }
}
</script>

<style scoped>

form{
    padding: 20px;
    text-align: left;
}
h2{
    color: white;
    text-align: center;
}


button{
    color: white;
    background: #0066A4;
}

#defaultBTN{
    background: #0066A4;
    font-size: 18px;
    text-align: center;
    padding-right: 10px;
    padding-left: 10px;
    margin: 5px;
    color: white;
}


.well{
    text-align: center;
    color: white;
    background: #2E2E2E;
    margin: 10px;
}

audio{
    width: 100%;
}

.well:hover{
    background: #474747;
}
</style>
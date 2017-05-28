<template>
    <div class="my-tunes">
    <h1>Playlist</h1>
    
    <div class="row">
            <div class="col-xs-12 text-center" v-for="song in songs">
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
                    <div class="card-action">
                        <button @click="removeTrack(song)">Remove</button>
                        <button @click="promoteTrack(song)">Upvote</button>
                        <button @click="demoteTrack(song)">Downvote</button>
                        <div class="votes">
                            <span>{{ song.votes }}</span>
                        </div>
                    </div>                               
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>



<script>
import mytunes from '../services/mytunes-service'
export default {
  name: 'mytunes',
  data(){
    return {
      songs: mytunes.getTracks()
      
    }
  },
  computed:{},
  methods:{
    removeTrack(song){
      mytunes.removeTrack(song)
      
    },
   promoteTrack(song) {
     mytunes.promoteTrack(song)
    
    },
  demoteTrack(song) { 
    mytunes.demoteTrack(song)
  }
  },
  components:{}
}
</script>


<style scoped>
h2{
    color: #660066;
    text-align: center;
    text-decoration: underline white;
    width: 100%;
}
button{
    background: #660066;
}
.well{
    text-align: center;
    color: white;
    background: #ff66ff;
    margin: 20px;
    padding: 20px;
}
.well:hover{
    background: #ff7aff;
}
audio{
    width: 100%;
}
.votes{
    font-weight: bold;
    font-size: 30px;
}
</style>

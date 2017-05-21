<template>
  <div class="container-fluid">
    <div class="bg">
    <h1>My Tunes</h1>
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="row">
      <itunes class="col-sm-10"></itunes>
      <my-tunes class="col-sm-2"></my-tunes>
    </div>
    </div>
  </div>
</template>

<script>
import MyTunes from './MyTunes'
import Itunes from './Itunes'

export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: {
    MyTunes,
    Itunes
  }
}
</script>


<style>
/**
* YOU SHOULD PROBABLY MAKE THIS LOOK BETTER :)
* BOOTSTRAP IS FOR THE WEAK FLEXBOX IS KING
* -- McCall
**/

h1{
  text-align: center;
  color: white;
  font-weight: bolder;
}

.itunes{
  padding: 20px;
  color: white;
}

.bg{
  background-image: url(vue-music-bg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
    }


</style>

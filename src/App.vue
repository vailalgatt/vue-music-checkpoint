<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home'
import Itunes from '@/components/Itunes'
import MyTunes from '@/components/MyTunes'

export default {
  name: 'app',
  components: {
    Home,
    Itunes,
    MyTunes
  }
}
</script>

<style>
</style>

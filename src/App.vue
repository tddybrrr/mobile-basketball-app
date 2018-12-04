<template>
  <div >
    <v-app id="app">
      <v-content>
        <v-container>
        
          <v-btn to="/">Matchups</v-btn>
          <v-btn to="/standings">Standings</v-btn>
          <v-btn to="/chat">Chats</v-btn>
          <router-view></router-view>

        </v-container>
      </v-content>
    </v-app>

  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style>


</style>

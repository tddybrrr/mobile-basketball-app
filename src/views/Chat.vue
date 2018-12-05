<template>
    <v-content class="chat">
        <h1 class="display-2"> Chat Session</h1>
        <div v-for="i in 2">
            <v-container grid-list-sm>
                <v-card color="cyan">
                    <v-layout dark row>
                        <v-flex xs5 offset-xs6>
                            <v-card >
                                 <v-card color="yellow">LAKERS</v-card>
                                <v-avatar size="70">
                                <img src="http://content.sportslogos.net/logos/6/237/full/uig7aiht8jnpl1szbi57zzlsh.gif">
                                </v-avatar>
                                </v-card>
                        </v-flex>
                    </v-layout>
                    
                    <v-layout row align-center justify-center>
                        june 7
                    </v-layout>
                    <v-layout row>
                        <v-flex xs5 offset-xs1>
                            <v-card >
                                <v-avatar size="70">
                                <img src="http://i.cdn.turner.com/nba/nba/media/celtics_logo.gif">
                                </v-avatar>
                                  <v-card color="green">CELTICS</v-card>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-container>
        </div>
             <NavBar/>
    </v-content>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
    date(){
        return{
       
        }
    },
  components:{
    NavBar
  }
}
</script>

<style <style scoped>

.chat{
    text-align: center;
}
</style>

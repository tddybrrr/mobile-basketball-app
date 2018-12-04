<template>
  <v-content class="standings">
    <v-container>
      <h1>HERE ARE SOME STANDINGS BOI</h1>
      <ul v-for="each in currentStandings" :key="each.id">
          <li>{{each.team.city}} {{each.overallRank.rank}}</li>
      </ul>
      
    
   
    </v-container>
       <NavBar/>
  </v-content>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  data(){
    return{
      currentStandings: []
    }
  },
  components:{
    NavBar
  },
  mounted(){
    fetch('https://api.mysportsfeeds.com/v2.0/pull/nba/2018-2019-regular/standings.json', {
            method: 'GET',
            headers: {
                "Authorization": "Basic " + btoa("4550c8b8-fb7d-4686-b50b-162eea" + ":" + "MYSPORTSFEEDS")
            }
        })
        .then(test => {
            return test.json();
        })
        .then(standingData => {
          this.currentStandings=standingData.teams

            for (var i = 0; i < standingData.teams.length; i++) {
                console.log(standingData.teams[i].team.city + " " + standingData.teams[i].overallRank.rank)
            }
        }).catch(error => console.log(error));
  }
}
</script>



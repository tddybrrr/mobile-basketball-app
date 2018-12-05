<template>
  <v-content class="standings">
    <v-container>
      <h1 class="display-2">Season Standings (2018-2019) </h1>
      <p> Team Name (current ranking)</p>
      <div class="rankings" v-for="one in rankedTeams" :key="one.id">
          <p>{{one.team.city}} ( {{one.overallRank.rank}} )</p>
      </div>
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
  computed:{
      rankedTeams: function(){
        return this.currentStandings.sort(function(a,b){
          return a.overallRank.rank - b.overallRank.rank
        })
      }
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
          console.log(standingData.teams)
          this.currentStandings=standingData.teams
        }).catch(error => console.log(error));
  }
}
</script>

<style>
.tableZone{
  float: right;
}
td, th{
  border: solid 1px black;
  border-radius: 10px;
     width: 200px;
}

.playOffs{
  background-color: red;
}
.standings{
  text-align: center;
}

</style>



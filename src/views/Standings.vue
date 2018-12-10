<template>
    <v-content class="standings">
      <v-container>
          <v-card class="mb-1">
              <h1 class="display-5">Season Standings </h1>
          </v-card>
           <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-list subheader>
                            <v-subheader class="cyan--text">2018-2019 
                              <v-btn small class="cyan--text" round> Conference</v-btn>
                              <v-btn small class="cyan--text" round> Playoffs</v-btn>
                            </v-subheader>
                             <v-divider> </v-divider>
                             <div v-if="isReady">
                                   <div v-for="(one, index) in rankedTeams" :key="index" avatar>
                                     <eachRank :standingsFromStandings="one">  </eachRank>
                                   </div>
                             </div>
                         
                             <div v-else>
                               <v-progress-circular
                                  indeterminate
                                  color="primary"
                                ></v-progress-circular>
                             </div>
                        </v-list>
                       
                    </v-card>
                  
                </v-flex>
            </v-layout>
      </v-container>
        <NavBar/>
    </v-content>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import eachRank from '@/components/eachRank.vue'
export default {
  data(){
    return{
      currentStandings: [],
      isReady: false
    }
  },
  components:{
    NavBar,
    eachRank
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
          this.isReady=true;
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



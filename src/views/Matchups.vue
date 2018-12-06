<template>
  <div class="matchups">
      <v-container>
        <v-card>
          <h1 class="display-5">Today's Matchups </h1>
        </v-card>
        <v-card color="cyan">
          <v-container>
            <div v-for="(eachMatchup, index) in todaysMatchups" :key="index">
              <MatchupCard :matchupsFromMatchups="eachMatchup">
              </MatchupCard>
                          
            </div>
          </v-container>
        </v-card>
      </v-container>
      <NavBar/>
  </div>
</template>
<script>

import MatchupCard from '@/components/MatchupCard.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  data(){
    return{
      todaysMatchups: []
    }
  },
  components:{
    MatchupCard,
    NavBar
  },
  mounted(){
// returns today's date in yyyymmdd format to feed into fetch URL
    Date.prototype.yyyymmdd = function() {
          var mm = this.getMonth() + 1; // getMonth() is zero-based
          var dd = this.getDate();
          return [this.getFullYear(),
                  (mm>9 ? '' : '0') + mm,
                  (dd>9 ? '' : '0') + dd
                ].join('');
        };
    var date = new Date();
    
    var url = 'https://api.mysportsfeeds.com/v2.0/pull/nba/2018-2019-regular/date/' + date.yyyymmdd() + '/games.json'
    fetch(url, {
            method: 'GET',
            headers: {
                "Authorization": "Basic " + btoa("4550c8b8-fb7d-4686-b50b-162eea" + ":" + "MYSPORTSFEEDS")
            }
        })
        .then(test => {
            return test.json();
        })
        .then(matchupData => {
          this.todaysMatchups=matchupData.games
        }).catch(error => console.log(error));
  }
  
}
</script>

<style>
.matchups{
   text-align: center;
}

</style>

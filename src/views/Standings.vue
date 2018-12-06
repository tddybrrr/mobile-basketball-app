<template>
    <v-content class="standings">
      <v-container>
          <v-card>
              <h1 class="display-5">Season Standings </h1>
          </v-card>
           <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-list subheader>
                            <v-subheader>2018-2019</v-subheader>
                            <v-list-tile v-for="one in rankedTeams" :key="one.id" avatar>
                                <v-list-tile-avatar>
                                  <!-- {{ currentTeam = one.team.name }} -->
                                  <img :src="correctLogo" alt="logo">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="one.team.name"></v-list-tile-title>
                                    <v-list-tile-title v-html="one.overallRank.rank"></v-list-tile-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <v-icon>info</v-icon>
                                </v-list-tile-action>
                            </v-list-tile>
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
import nbaTeams from '@/assets/nbaTeams.json'
export default {
  data(){
    return{
      currentStandings: [],
      nbaTeams,
      logoSRC: '',
      currentTeam: ''
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
      },

// psuedo code: Take the abbreviation of the current NBA team being created. Search the JSON of nbateam objects for the same abbreviation. When you find the
// matching object, take the URL of that object and return it. 

      correctLogo: function(){
        // for (var i=0; i<nbaTeams.teams.length; i++){
        //         if (nbaTeams.teams[i].abbrev == this.rankedTeams[i].team.abbreviation) {
        //           console.log("theres a match")
        //         }
        //     }   
            // console.log(this.currentTeam)
            return 'https://www.gstatic.com/webp/gallery3/1_webp_ll.sm.png' 
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
          console.log(standingData)
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



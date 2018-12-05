<template>
  <div class="matchups">
      <v-container>
        <h1 class="display-2">Today's Matchups </h1>
        <div v-for="each in todaysMatchups" :key="each.id">
            <MatchupCard :homeTeam="each.schedule.homeTeam.abbreviation"  :homeLogo="logoHome" 
                         :awayTeam="each.schedule.awayTeam.abbreviation"  :awayLogo="logoAway" 
                         :venue="each.schedule.venue.name" :gameTime="each.schedule.startTime">
            </MatchupCard>
        </div>
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
      todaysMatchups: [],
      logoHome: 'https://78.media.tumblr.com/bd360d3d0ac3d21380b90e98da5a4e3f/tumblr_nz26ruXERA1ufhi8uo2_r1_1280.png',
      logoAway: 'https://78.media.tumblr.com/bd360d3d0ac3d21380b90e98da5a4e3f/tumblr_nz26ruXERA1ufhi8uo2_r1_1280.png'
    }
  },
  components:{
    MatchupCard,
    NavBar
  },
  mounted(){
    fetch('https://api.mysportsfeeds.com/v2.0/pull/nba/2018-2019-regular/date/20181204/games.json', {
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
          console.log(matchupData.references.teamReferences[0].officialLogoImageSrc)
        }).catch(error => console.log(error));
  }
}
</script>

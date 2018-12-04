<template>
  <div class="matchups">
      <v-container>
        <h1>here are today's matchups </h1>
        <MatchupCard homeTeam="wow" awayTeam="really"> </MatchupCard>
        <MatchupCard homeTeam="warriors" awayTeam="rockets"> </MatchupCard>
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
      coolString: "cool",
      maxList: 5
    }
  },
  components:{
    MatchupCard,
    NavBar
  }
}
</script>

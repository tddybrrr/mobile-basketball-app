<template>
  <div class="matchups">
    <h1>here are today's matchups </h1>
  <div :v-for"team in aTester">
      <MatchupCard homeTeam="wow" awayTeam="really"> </MatchupCard>
  </div>
   
  </div>
</template>

<script>

import MatchupCard from '@/components/MatchupCard.vue'

export default {
  data(){
    return{
      coolString: "cool",
      cardLimit: 10
    }
  },
  computed:{
    aTester(){
      return this.$parent.teamStandings.teams;
    }

  },
  components:{
    MatchupCard
  }
}
</script>

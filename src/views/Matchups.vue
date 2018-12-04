<template>
  <div class="matchups">
    <h1>here are today's matchups </h1>

      <MatchupCard homeTeam="wow" awayTeam="really"> </MatchupCard>
      <MatchupCard homeTeam="wow" awayTeam="really"> </MatchupCard>
      <MatchupCard homeTeam="wow" awayTeam="really"> </MatchupCard>

  </div>
</template>

<script>

import MatchupCard from '@/components/MatchupCard.vue'

export default {
  data(){
    return{
      coolString: "cool",
      maxList: 5
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

<template>
  <div class="matchups">
    <v-container>
      <v-card class="mb-1">
        <h1 class="display-5">Matchups </h1>

      </v-card>
      <v-menu :close-on-content-click="false" v-model="menu" lazy  transition="scale-transition">
        <v-text-field slot="activator" v-model="date" prepend-icon="date_range" readonly>
        </v-text-field>
        <v-date-picker v-model="date" color="black" >
          <v-btn color="black" class="cyan--text" @click="fetchData()">GO !</v-btn>
        </v-date-picker>

      </v-menu>

      <v-card color="cyan">

        {{date}}

        <v-container>
          <div v-for="(eachMatchup, index) in todaysMatchups" :key="index">
            <MatchupCard :matchupsFromMatchups="eachMatchup"> </MatchupCard>
          </div>
        </v-container>
      </v-card>
    </v-container>
    <NavBar />
  </div>
</template>
<script>
  import MatchupCard from '@/components/MatchupCard.vue'
  import NavBar from '@/components/NavBar.vue'

  export default {
    data() {
      return {
        todaysMatchups: [],
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        testDate: 20181210
      }
    },
    filters: {
      lolDate: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.replace(/-/g, "")
      }
    },
    methods: {
      fetchData: function () {
        var url = 'https://api.mysportsfeeds.com/v2.0/pull/nba/2018-2019-regular/date/' + this.date.replace(/-/g, "") +
          '/games.json'
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
            this.todaysMatchups = matchupData.games
          }).catch(error => console.log(error));
          this.menu = false
      }
    },
    mounted() {
      this.fetchData();
    },
    components: {
      MatchupCard,
      NavBar
    }

  }
</script>

<style>
  .matchups {
    text-align: center;
  }
</style>
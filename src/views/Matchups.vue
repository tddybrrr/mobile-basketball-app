<template>
  <div class="matchups">
    <v-container>
      <v-card class="mb-1">
        <h1 class="display-5">Matchups </h1>
      </v-card>

      <v-menu :close-on-content-click="false" v-model="menu" lazy transition="scale-transition">
        <v-text-field slot="activator" :label="getTheDate(todaysMatchups[0].schedule.startTime)" append-icon="date_range"
          readonly>
        </v-text-field>
        <v-date-picker v-model="date" color="black">
          <v-btn color="black" class="cyan--text" @click="fetchData()">GO !</v-btn>
        </v-date-picker>
      </v-menu>

      <p>{{todaysMatchups.length + ' games this day.' }}</p>
      <div v-if="isReady">
        <v-card color="cyan">
          <v-container>
            <div v-for="(eachMatchup, index) in todaysMatchups" :key="index">
              <MatchupCard :matchupsFromMatchups="eachMatchup"> </MatchupCard>
            </div>
          </v-container>
        </v-card>
      </div>
      <div v-else>
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
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
        isReady: false
      }
    },
    methods: {
      fetchData: function () {
        this.isReady=false;
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
            console.log(this.isReady)
            this.isReady=true;
          }).catch(error => console.log(error));
        this.menu = false
      },
      getTheDate: function (someDate) {
        var todaysDate = new Date(someDate);
       
        return todaysDate.toDateString();
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
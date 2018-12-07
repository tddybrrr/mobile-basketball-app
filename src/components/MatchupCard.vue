<template>
    <div class="matchupCard">
<v-hover>
    <v-card
    slot-scope="{ hover }"
    :class="`elevation-${hover ? 12 : 2}`"
    >
        <div class="box">
            <div class="logo">
                <v-avatar size=55>
                    <img :src="homerLogo" alt="homeLogo">
            </v-avatar>
                <p>{{addLogos()}} {{matchupsFromMatchups.schedule.homeTeam.abbreviation}}</p>
            </div>
            <div class="date">
                <p>{{matchupsFromMatchups.schedule.venue.name}}</p>
                <p>{{matchupsFromMatchups.schedule.startTime | readableDate }}</p>
                <p>{{matchupsFromMatchups.schedule.startTime | readableTime }}</p>
            </div>
            <div class="logo">
                <v-avatar size=55>
                    <img :src="awayLogo" alt="awayLogo">
                </v-avatar>
                <p>{{matchupsFromMatchups.schedule.awayTeam.abbreviation}}</p>
            </div>
        </div>
   </v-card>
   </v-hover>
    </div>
</template>

<script>
import nbaTeams from '@/assets/nbaTeams.json'
    export default {
        name: 'MatchupCard',
        props: ['matchupsFromMatchups'],
        data() {
            return {
              homerLogo: '',
              awayLogo: ''
            }
        },
        mounted(){
            this.addLogos();     
        },
        methods:{
            addLogos: function(){
                for (var i=0; i<30; i++){
                if(this.matchupsFromMatchups.schedule.homeTeam.abbreviation == nbaTeams.teams[i].abbrev){
                   this.homerLogo=nbaTeams.teams[i].imgURL
                } else if(this.matchupsFromMatchups.schedule.awayTeam.abbreviation == nbaTeams.teams[i].abbrev){
                   this.awayLogo=nbaTeams.teams[i].imgURL
                }
            }      
            }
        },
        filters: {
            readableDate: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.slice(0,10) 
            },
            readableTime: function (value) {
                if (!value) return ''
                value = value.toString()
                return  value.slice(11,19) + "CET"
            }
        }   
      
}
</script>


<style>
    .box {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 5px 5px;
    }
    img{
        border: solid 3px black;
        padding: 2px;
   }
    .logo{
        display: flex;
        flex-direction: column;
        flex-flow: column-reverse;
       
    }
    .date{
        display: flex;
        flex-direction: column;
        height: 100px;
        width: 120px;
    }


</style>
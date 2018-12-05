<template>
    <div class="matchupCard">
        <div class="box">
            <div class="logo">
                <v-avatar size="50">
                    <img :src="homeLogo" alt="homeLogo">
                </v-avatar>
                <p>{{homeTeam}}</p>
            </div>
            <div class="date">
                <p>{{venue}}</p>
                <p>{{gameTime}}</p>
            </div>
            <div class="logo">
                <v-avatar size="50">
                    <img :src="awayLogo" alt="awayLogo">
                </v-avatar>
                <p>{{awayTeam}}</p>

            </div>
            <!-- <div>
                    <p>{{this.nbaTeams.teams[0].imgURL}}</p>
            </div> -->
          
        </div>
    </div>

</template>

<script>
import nbaTeams from '@/assets/nba-teams.json'
    export default {
        
        name: 'MatchupCard',
        props: ['homeTeam', 'homeLogo', 'awayLogo', 'awayTeam', 'gameTime', 'venue', ''],
        data() {
            return {
                nbaTeams
            }
        }
    }
</script>


<style>
    .box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: solid 2px black;
        border-radius: 11px;
        margin-top: 10px;
    }
</style>
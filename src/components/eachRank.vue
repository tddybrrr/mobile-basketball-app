<template>
    <v-layout column>
        <v-list-tile>
            <v-list-tile-avatar>
                <img :src="correctLogo" alt="logo">
            </v-list-tile-avatar>
            <v-list-tile-content>
                <v-list-tile-title>{{standingsFromStandings.overallRank.rank}} </v-list-tile-title>
                <v-list-tile-title >{{standingsFromStandings.team.name}}</v-list-tile-title>
                <div class="hidden-sm-and-down">
                    <p v-if="standingsFromStandings.overallRank.gamesBack != 0">Games back: {{standingsFromStandings.overallRank.gamesBack}}<p/>
                    
                    </div>
            </v-list-tile-content>
            <v-list-tile-action>
                <v-icon>info</v-icon>
            </v-list-tile-action>
        </v-list-tile>
        <v-divider> </v-divider>
    </v-layout>

</template>

<script>
    import nbaTeams from '@/assets/nbaTeams.json'
    export default {
        props: ['standingsFromStandings'],
        data() {
            return {
                correctLogo: ''
            }
        },
        mounted() {
            for (var i = 0; i < 30; i++) {
                if (this.standingsFromStandings.team.abbreviation == nbaTeams.teams[i].abbrev) {
                    this.correctLogo = nbaTeams.teams[i].imgURL
                }
            }

        }
    }
</script>
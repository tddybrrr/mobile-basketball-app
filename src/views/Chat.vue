<template>
    <v-content class="chat">
        <v-container>
            <v-card>
                <h1 class="display-5"> Chat Session</h1>
            </v-card>
           
        </v-container>
        <NavBar />
    </v-content>
</template>

<script>
    import nbaTeams from '@/assets/nbaTeams.json'
    import NavBar from '@/components/NavBar.vue'
    export default {
        data() {
            return {
                nbaTeams
            }
        },
        computed: {
            testFunction: function () {
                console.log("it worked!!!!")
            }
        },
        components: {
            NavBar
        }
    }
</script>

<style <style scoped>
    .chat {
        text-align: center;
    }
</style>
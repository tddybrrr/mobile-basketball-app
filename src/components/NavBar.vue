<template>
    <div class="navigation">
        <v-content>
               <v-card class="black" >
                    <v-btn  class="cyan--text" outline round to="/matchups" >Matchups</v-btn>
                    <v-btn class="cyan--text" outline round to="/standings">Standings</v-btn>
                    <v-btn  class="cyan--text" outline round to="/chat" >Chat</v-btn>  
                </v-card>           
        </v-content>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style>
.navigation{
    position:fixed;
    bottom: 0px;
    width: 100%;
    border-top: solid 5px #00BCD4;
}

</style>
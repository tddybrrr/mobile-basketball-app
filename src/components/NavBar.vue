<template>
    <div class="navigation">
        <v-content>
           <v-container>
                <!-- <div class="navy"> -->
                    <v-btn outline round to="/" >Matchups</v-btn>
                    <v-btn  outline round to="/standings">Standings</v-btn>
                    <v-btn  outline round to="/chat" >Chat</v-btn>           
                  <!-- </div> -->
            </v-container>
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
    bottom: 1px;
}
.navy{
    display: flex;
    flex: row;
}
v-btn{
    color: red;
}

</style>
<template>
    <div class="matchupCard">


   
      <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="black" class="white--text">
                <v-layout>
                  <v-flex xs3>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                      height="125px"
                      contain
                    ></v-img>
                    <p>{{homeTeam}}</p>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">TUESDAY 2018</div>
                        <div>Oracle arena</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                    <v-flex xs3>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                      height="125px"
                      contain
                    ></v-img>
                    <p>{{awayTeam}}</p>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
              </v-card>
            </v-flex>
            
          </v-layout>
        </v-container>
      </v-card>
    </div>
 
</template>

<script>
export default {
    name: 'MatchupCard',
    props: ['homeTeam', 'awayTeam'],
    data(){
        return{
           
        }
    }
}

</script>


<style>

</style>






  
<template>
    <div class="matchupCard">

        <div class="box">
            <div class="homeTeam">
                <p>homeTeam</p>
                <p>{{homeTeam}}</p>
            </div>
            <div class="date">
                JUNE 6 2018
            </div>
            <div class="awayTeam">
                <p>awayTeam</p>
                <p>{{awayTeam}}</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'MatchupCard',
    props: ['homeTeam', 'awayTeam'],
    data(){
        return{
            homeTeam: '',
            awayTeam:''
        }
    }
}





</script>


<style>
.date{
    
}
.box{
    border: solid 1px red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    margin-top: 10px;
}
.homeTeam, .awayTeam{
    border: solid 1px black;
}
</style>





// <div id="app">
//   <v-app id="inspire">
//     <div
//       id="e3"
//       style="max-width: 400px; margin: auto;"
//       class="grey lighten-3"
//     >
//       <v-card>
//         <v-container
//           fluid
//           grid-list-lg
//         >
//           <v-layout row wrap>
//             <v-flex xs12>
//               <v-card color="black" class="white--text">
//                 <v-layout>
//                   <v-flex xs3>
//                     <v-img
//                       src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
//                       height="125px"
//                       contain
//                     ></v-img>
//                   </v-flex>
//                   <v-flex xs6>
//                     <v-card-title primary-title>
//                       <div>
//                         <div class="headline">TUESDAY 2018</div>
//                         <div>Oracle arena</div>
//                       </div>
//                     </v-card-title>
//                   </v-flex>
//                     <v-flex xs3>
//                     <v-img
//                       src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
//                       height="125px"
//                       contain
//                     ></v-img>
//                   </v-flex>
//                 </v-layout>
//                 <v-divider light></v-divider>
//               </v-card>
//             </v-flex>
//             <v-flex xs12>
//               <v-card color="grey" class="white--text">
//                 <v-layout row>
//                   <v-flex xs7>
//                     <v-card-title primary-title>
//                       <div>
//                         <div class="headline">Halycon Days</div>
//                         <div>Ellie Goulding</div>
//                         <div>(2013)</div>
//                       </div>
//                     </v-card-title>
//                   </v-flex>
//                   <v-flex xs5>
//                     <v-img
//                       src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
//                       height="125px"
//                       contain
//                     ></v-img>
//                   </v-flex>
//                 </v-layout>
//                 <v-divider light></v-divider>
//               </v-card>
//             </v-flex>
//               <v-flex xs12>
//               <v-card color="black" class="white--text">
//                 <v-layout>
//                   <v-flex xs5>
//                     <v-img
//                       src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
//                       height="125px"
//                       contain
//                     ></v-img>
//                   </v-flex>
//                   <v-flex xs7>
//                     <v-card-title primary-title>
//                       <div>
//                         <div class="headline">Supermodel</div>
//                         <div>Foster the People</div>
//                         <div>(2014)</div>
//                       </div>
//                     </v-card-title>
//                   </v-flex>
//                 </v-layout>
//                 <v-divider light></v-divider>
//               </v-card>
//             </v-flex>
//           </v-layout>
//         </v-container>
//       </v-card>
//     </div>
//   </v-app>
// </div>
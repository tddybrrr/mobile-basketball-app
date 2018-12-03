<template>
    <div class="matchupCard">

        <div class="box">
            <div class="homeTeam">
                <p>homeTeam</p>
                <p>{{homeTeam}}</p>
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
.box{
    border: solid 1px red;
    display: flex;
    flex-direction: row;
}
.homeTeam, .awayTeam{
    border: solid 1px black;
}
</style>

<template>
    <v-content class="chat">
        <v-container>
            <v-card>
                <h1 class="display-5"> Chat </h1>
            </v-card>
        </v-container>
        <NavBar/>
    </v-content>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    export default {
        data() {
            return {
            }
        },
        components:{
            NavBar
        }
    }
</script>

<style <style scoped>
    .chat {
        text-align: center;
    }
</style>
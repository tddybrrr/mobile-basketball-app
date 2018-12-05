<template>
    <v-content class="chat">
        <v-container>
        <h1 class="display-2"> Chat Session</h1>
        </v-container>
             <NavBar/>
    </v-content>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components:{
    NavBar
  }
}
</script>

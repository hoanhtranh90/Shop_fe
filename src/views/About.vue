<template>
  <div class="container" >
    <div class="row">
      <div class="col"></div>
      <div class="col-8">
    <div v-for="(title,index) in titles" :key="index">
      <h2>{{title.title}}</h2>
     
       <h5> By: {{title.user.name}}</h5>
       <h8> By: {{title.content}}</h8>

    </div>
    </div>
      <div class="col"></div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'


  export default {
    data() {
      return {
        titles:[],
      }
    },
    name: 'Home',
    components: {
      //
    },
    mounted() {
      axios
        .get("/article")
        .then(response => (this.titles= response.data));
  },
    computed: {

    }
  }
</script>
<template>
<div>
  <table>
  <tr>
    <th>Name</th>
    <th>img</th>
    <th>Price</th>
    <th></th>
  </tr>
  <tr v-for="(item,index) in items" :key="index">
    <td>{{item.name}}</td>
    <td><img :src="images[index]" width="200px" height="150px"></td>
    <td>{{item.price}}</td>
    <td>{{item.count}}</td>
   
    
    
    
  </tr>
  
</table>
</div>
</template>

<script>

  import { mapGetters } from 'vuex'
import axios from "axios";

  export default {
     data() {
      return {
        fields: ['name', 'price', 'count'],
        items: [],
        images:[],
      }
    },
     mounted() {
    axios.get("/api/order_product_succes").then((response) => {
      this.items = response.data;
      this.items.forEach((item) => {
        this.images.push(
          require("../../../backend/public/uploads/product/" + item.img)
        );
      });
    });
 
  },
  methods: {
    remove_data: function ($id_get) {
     axios.post('/admin/delete_order_product',{
       id:$id_get
     }).then((response) => {
        this.items.splice(response,1);
        })
    },
   
  },
  computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      })
    },
  
  }
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
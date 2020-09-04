<template>
<div>
  <table>
  <tr>
    <th>Name</th>
    <th>img</th>
    <th>Price</th>
    <th>Count</th>
    <th><b-button variant="primary" @click="Order_succes(items)">Đặt hàng</b-button> </th>
  </tr>
  <tr v-for="(item,index) in items" :key="index">
    <td v-if="item.user_id==user.id">{{item.name}}</td>
    <td v-if="item.user_id==user.id"><img :src="images[index]" width="200px" height="150px"></td>
    <td v-if="item.user_id==user.id">{{item.price}}</td>
    <td v-if="item.user_id==user.id">{{item.count}}</td>
    <td v-if="item.user_id==user.id">

          <b-button variant="danger" @click="remove_data(item.id)">Xóa</b-button> 
    </td>
    
    
    
  </tr>
  
</table>
</div>
</template>

<script>


import axios from "axios";
  import { mapGetters } from 'vuex'
  export default {
     data() {
      return {
        fields: ['name', 'price', 'count'],
        items: [],
        images:[],
      }
    },
     computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      })
    },
     mounted() {
    axios.get("/api/order_product").then((response) => {
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
    Order_succes: function (items) {
    axios.post('/admin/order_succes',{
       data:items,
     })
     .then(() => {
                    alert("đặt hàng thành công");
                    this.$router.replace({ name: 'Order_history' });
                })
  }
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
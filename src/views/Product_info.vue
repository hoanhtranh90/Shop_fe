<template>
  <div class="container">
    <!-- <div>{{ $route.params.id }}</div> -->
    <div v-for="(product,index) in products" :key="index">
      <div class="grid-item" v-if=" $route.params.id == product.id">
        <div class="item0">
          <img :src="images[index]" width="400px" height="500px" />
        </div>
        <div class="item1">{{product.name}}</div>
        <div class="item2">{{product.price}}</div>
        <div class="item6">
          <b-button variant="success">Thêm</b-button>

          <b-button variant="danger" @click="add_data">Mua</b-button>
        </div>
        <div class="item3">
          Chi tiết sản phẩm
          <br />
          {{product.Product_Description}}
        </div>
        <div class="item4" v-if=" $route.params.id == product.id">
          Mô tả sản phẩm
          <br />
          {{product.product_content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      images: [],
      category: "",
    };
  },
  mounted() {
    axios.get("/api/product").then((response) => {
      this.products = response.data;
      this.products.forEach((item) => {
        this.images.push(
          require("../../../backend/public/uploads/product/" + item.img)
        );
      });
    });
    axios.get("/api/category").then((response) => {
      this.category = response.data;
    });
  },
  methods: {
    add_data(){
      axios.post('/admin/add_order_product',
      {
        id:this.$route.params.id,
      }) .then(() => {
                    alert("Thêm Giỏ thành công");
                    this.$router.replace({ name: 'Cart' });
                })
      
    }
  }
};
</script>

<style scoped>
* {
  pad: 0px;
  margin: 0;
  box-sizing: border-box;
}
.grid-item {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 100px);
}
.item0 {
  grid-column: 0/2;
}
.item1 {
  grid-column: 2/4;
  grid-row: 0/1;
  padding-top: 20px;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5rem;
  padding-left: 40px;
  font-size: 2.25rem;
}
.item2 {
  grid-row: 0/1;
  grid-column: 2/3;
  font-size: 2.25rem;
  padding-left: 40px;
}
.item3 {
  grid-row: 3/5;
  padding-left: 40px;
  grid-column: 2/5;
}
.item6 {
  grid-row: 5/5;
  grid-column: 2/3;

}
.item6>button {
    margin:  10px;
}
.item4 {
  padding-top: 150px;
  grid-column: 0/1;
  grid-row: 5/5;
}
</style>>
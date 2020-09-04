<template>
  <div>
    <banner />
    <!-- <img src="../../abc dd.png">  two level -->

    <div class="container">
      <h1 class="title">{{category[0].name}}</h1>

      <div class="hot_product">
        <div v-for="(product,index) in products" :key="index"  v-show="product.category.id==category[0].id">
         <router-link :to="'/product_info/' + product.id " >
          <div class="item">
            <img :src="images[index]" width="200px" height="250px" />
            <p class="name">{{product.name}}</p>
            <p class="price">{{product.price}}</p>
          </div>
         </router-link>
        </div>
      </div>
    </div>

    <!-- banner 2 -->
    <div class="banner2">
      <div class="banner2-text">
        <div class="banner2-grid">
          <div class="banner2-item1">FreeShip</div>
          <div class="banner2-item2">Giảm 50%</div>
          <div class="banner2-item3">Bảo Hành 2 năm</div>
        </div>
      </div>
    </div>

    <!-- Danh muc B -->
    <div class="container">
      <h1 class="title">{{category[1].name}}</h1>

      <div class="hot_product">
        <div v-for="(product,index) in products" :key="index" v-show="product.category.id==category[1].id">
         <router-link :to="'/product_info/' + product.id " >
          
          <div  class="item"> 
            <img :src="images[index]" width="200px" height="250px" />
            <p class="name">{{product.name}}</p>
            <p class="price">{{product.price}}</p>
          </div>
         </router-link>
        </div>
      </div>
    </div>

    <!-- banner 3 -->
    <div class="banner2">
      <div class="banner2-text">
        <div class="banner2-grid">
          <div class="banner2-item1">FreeShip</div>
          <div class="banner2-item2">Giảm 50%</div>
          <div class="banner2-item3">Bảo Hành 2 năm</div>
        </div>
      </div>
    </div>

    <!-- Danh muc C -->
    <div class="container">
      <h1 class="title">{{category[2].name}}</h1>

      <div class="hot_product">
        <div v-for="(product,index) in products" :key="index"  v-show="product.category.id==category[2].id">
         <router-link :to="'/product_info/' + product.id ">
          
          <div class="item" >
            <img :src="images[index]" width="200px" height="250px" />
            <p class="name">{{product.name}}</p>
            <p class="price">{{product.price}}</p>
          </div>
         </router-link>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="footer">
      <div class="footer-grid">
        <div class="footer-item1">
          Footer Content
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        </div>
        <div class="footer-item2">
          Links
          <div class="links">link 1</div>
          <div class="links">link 2</div>
          <div class="links">link 3</div>
          <div class="links">link 4</div>
        </div>
        <div class="footer-item3">
          Links
          <div class="links">link 1</div>
          <div class="links">link 2</div>
          <div class="links">link 3</div>
          <div class="links">link 4</div>
        </div>
        <div class="footer-item4">
          Links
          <div class="links">link 1</div>
          <div class="links">link 2</div>
          <div class="links">link 3</div>
          <div class="links">link 4</div>
        </div>
        <div class="footer-item5">
          Contact
        </div>
      </div>
        
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue";

import axios from "axios";

export default {
  name: "Home",

  components: {
    Banner,
  },
  data() {
    return {
      active: false,
      products: [],
      images: [],
      category:'',
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
  })
  },
  
};
</script>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  text-decoration: none;
}
a:hover{
  text-decoration: none;
}



#nav a.router-link-exact-active {
  color: lightgreen;
}
.navbar.transparent.navbar-inverse .navbar-inner {
  border-width: 0px;
  -webkit-box-shadow: 0px 0px;
  box-shadow: 0px 0px;
  background-color: rgba(0, 0, 0, 0);
  background-image: -webkit-gradient(
    linear,
    50% 0%,
    50% 100%,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(100%, rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
.title {
  text-align: center;
  margin: 40px;
  font-weight: lighter;
}
.hot_product {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 70px;
}
.item {
  height: 260px;
  width: 210px;
  background: #ababab;
  border: solid 4px #4b4b4b;
  border-radius: 4px;
  color: black;
}

.item:hover > img {
  opacity: 0.7;
  transition: 0.5s;
}
.price {
  font-size: 25px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;

  text-align: center;
}
.name {
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  text-align: center;
}
.item:hover >  .name {
  color: lightsalmon;
}

.banner2 {
  background: black;
  height: 200px;
  margin-top: 120px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;
  font-size: 25px;
}
.banner2-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 66.7px);
  text-align: center;
}
.banner2-item1 {
  grid-column: 3/4;
  grid-row: 2/3;
  padding-top: 20px;
}
.banner2-item2 {
  grid-row: 2/3;
  grid-column: 4/5;
  padding-top: 20px;
}
.banner2-item3 {
  grid-column: 5/6;
  grid-row: 2/3;
  padding-top: 20px;
}
.footer {
  background: black;
  height: 200px;
  margin-top: 120px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;
  font-size: 25px;
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  padding-top: 15px;
}
.footer-item1 {
  grid-column: 1/3;
}
.footer-item1 > div {
  font-size: 15px;
  font-style: italic;
}
.footer-item2 {
  grid-column: 3/4;
}
.footer-item3 {
  grid-column: 4/5;
}
.footer-item4 {
  grid-column: 5/6;
}
.footer-item5 {
  grid-column: 6/8;
}
.links {
  font-size: 20px;
}
</style>
<template>
  <div id="app">
    <hr>
    
    <b class="nava" toggleable="lg"  type="dark" variant="light" >
    <div id="nav">
      
      <router-link to="/" class="home">Home</router-link> 
      <template v-if="!authenticated">
        <router-link to="/signin" class="signin">Sign in</router-link> 
        <router-link to="/register" class="register">Register</router-link> 
      </template>
      <template v-else>
        <router-link to="/cart" class="name">Giỏ hàng</router-link> 
        <router-link to="/order_history" class="order_history">Lich Sử Đặt Hàng</router-link> 
        <a class="logout" href="#" @click.prevent="signOut" >Sign out</a>
      </template>
    </div>
    </b>
    <hr>
    <router-view/>
    <div>
    </div>
   

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
   
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      })
    },

    methods: {
      ...mapActions({
        signOutAction: 'auth/signOut'
      }),

      async signOut () {
        await this.signOutAction()

        this.$router.replace({ name: 'home' })
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
.logout {
  grid-column: 20/20;
}
.name {
  grid-column: 2/3;
  padding-left: 6px;
}
.order_history {
  grid-column: 3/5;
  justify-self: end;
}
.home {
  text-align: center;
}
.signin {
  grid-column: 19/20;

}
.register {
  grid-column: 20/20;

}
#nav {
  display: grid;
  width: 100%;
  line-height: 50px;
  grid-template-columns: repeat(20,5%);
  border: 1px solid #cecece;
  background: #EEEEEE;
}

#nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}
#nav a:hover {
  color: lightseagreen;
}


</style>

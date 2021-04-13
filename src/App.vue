<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">Student List</router-link>
    <router-link :to="{ name: 'Jobs' }">Charts</router-link>
    <router-link :to="{ name: 'Contact' }">Grades</router-link>
        <router-link :to="{ name: 'Achievement' }">Achievements</router-link>
  
  </div>

<div class="nav2">
  <button @click="redirect">Go to Home </button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go Forward</button>
</div>
     
  

  <router-view />
</template>
<script>



export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
 
 
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background-color: crimson;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

.nav2{
  color: antiquewhite;
}
</style>

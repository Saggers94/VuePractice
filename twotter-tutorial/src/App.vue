<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div id="navigation_logo">Twotter</div>
      </router-link>
      <router-link to="/user/:userId">
        <div class="navigation_user">{{ user.username }}</div>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      user: {
        username: "__SagarParmar",
      },
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: deeppink;
    color: white;

    .navigation_logo {
      font-weight: bold;
      font-size: 24px;
    }

    .navigation_user {
      font-weight: bold;
    }
  }
}
</style>

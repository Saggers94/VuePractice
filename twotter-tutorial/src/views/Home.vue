<template>
  <div class="home">
    <h1>Home</h1>
    <div class="users-list">
      <router-link
        v-for="user in users"
        :to="{ name: 'UserProfile', params: { userId: user.id } }"
        v-bind:key="user.id"
        >{{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { users } from "../assets/users";
export default {
  name: "Home",
  setup() {
    return {
      users,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;
}
.users-list {
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 2.6em;
  flex-direction: column;
  text-decoration: underline;
}
</style>

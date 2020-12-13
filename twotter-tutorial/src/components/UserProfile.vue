<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ state.user.username }}</h1>
        <div class="user-profile__admin_badge" v-if="state.user.is_admin">
          Admin
        </div>

        <!-- <div class="user-profile__admin_badge" v-else>
        Regular User
      </div>
      <div class="user-profile__admin_badge" v-elsse-if="!user.is_admin">
        Something Else
      </div> -->

        <div class="user-profile__follower-count">
          <strong>Followers: </strong> {{ state.followers }}
        </div>
      </div>

      <CreateTwootPanel @add-twoot="addTwoot" />
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in state.user.twoots"
        v-bind:key="twoot.id"
        v-bind:twoot="twoot"
        v-bind:username="state.user.username"
      ></TwootItem>
    </div>
  </div>
</template>

<script>
import CreateTwootPanel from "./CreateTwootPanel.vue";
import TwootItem from "./TwootItem";
import { reactive } from "vue";

export default {
  name: "UserProfile",
  components: { CreateTwootPanel, TwootItem },
  setup() {
    const state = reactive({
      followers: 0,
      user: {
        id: 1,
        username: "_SagarParmar",
        firstname: "Saggers",
        lastname: "Par",
        email: "sagar@gmail.com",
        is_admin: true,
        twoots: [
          { id: 1, content: "Twooter is amazing!" },
          { id: 2, content: "Don't forget to subscribe to earth is square!" },
        ],
      },
    });

    function addTwoot(twoot) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot,
      });
    }

    return {
      state,
      addTwoot,
    };
  },
  //Old way of doing things.
  // data() {
  //   return {
  //     followers: 0,
  //     user: {
  //       id: 1,
  //       username: "_SagarParmar",
  //       firstname: "Saggers",
  //       lastname: "Par",
  //       email: "sagar@gmail.com",
  //       is_admin: true,
  //       twoots: [
  //         { id: 1, content: "Twooter is amazing!" },
  //         { id: 2, content: "Don't forget to subscribe to earth is square!" },
  //       ],
  //     },
  //   };
  // },
  // watch: {
  //   followers(newFollowerCount, oldFollowerCount) {
  //     if (newFollowerCount > oldFollowerCount) {
  //       console.log(`${this.user.username} has gained follower`);
  //     }
  //   },
  // },
  // computed: {
  //   fullName() {
  //     return this.user.firstname + " " + this.user.lastname;
  //   },
  // },
  // methods: {
  // followUser() {
  //   this.followers++;
  // },
  // toggleFavourite(id) {
  //   console.log(`Favourite Tweeet #${id}`);
  // },
  //   addTwoot(twoot) {
  //     this.user.twoots.unshift({
  //       id: this.user.twoots.length + 1,
  //       content: twoot,
  //     });
  //   },
  // },
  // mounted() {
  //   this.followUser();
  // },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding-left: 50px;
  padding-top: 20px;
  box-sizing: border-box;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    padding-bottom: 5px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #dfe3eb;

    h1 {
      margin: 0;
    }

    .user-profile__admin_badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin: 5px 0;
      padding: 3px 10px;
      margin-bottom: 10px;
      margin-right: auto;
    }
  }

  .user-profile_twoots-wrapper {
    display: grid;
    grid-gap: 10px;
  }
}
</style>

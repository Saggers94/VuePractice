<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div class="user-profile__admin_badge" v-if="user.is_admin">
        Admin
      </div>

      <!-- <div class="user-profile__admin_badge" v-else>
        Regular User
      </div>
      <div class="user-profile__admin_badge" v-elsse-if="!user.is_admin">
        Something Else
      </div> -->

      <div class="user-profile__follower-count">
        <strong>Followers: </strong> {{ followers }}
      </div>
      <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot">
        <label for="newTwoot"><strong>New Twoot</strong></label>
        <textarea
          id="newTwoot"
          name="newTwoot"
          rows="4"
          v-model="newTwootContent"
        />
        <div class="user-profile__create-twoot-type">
          <label for="newTwootType"><strong>Type: </strong></label>
          <select id="newTwootType" v-model="selectedTwootType">
            <option
              :value="option.value"
              v-for="(option, index) in twootTypes"
              :key="index"
              >{{ option.name }}</option
            >
          </select>
        </div>
        <button>Twoot!</button>
      </form>
    </div>

    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        v-bind:key="twoot.id"
        v-bind:twoot="twoot"
        v-bind:username="user.username"
        v-on:favourite="toggleFavourite"
      ></TwootItem>
    </div>
  </div>
</template>

<script>
import TwootItem from "./TwootItem";

export default {
  name: "UserProfile",
  components: { TwootItem },
  data() {
    return {
      newTwootContent: "",
      selectedTwootType: "instant",
      twootTypes: [
        { value: "draft", name: "Draft" },
        { value: "instant", name: "Instant Twoot" },
      ],
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
    };
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (newFollowerCount > oldFollowerCount) {
        console.log(`${this.user.username} has gained follower`);
      }
    },
  },
  computed: {
    fullName() {
      return this.user.firstname + " " + this.user.lastname;
    },
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavourite(id) {
      console.log(`Favourite Tweeet #${id}`);
    },
    createNewTwoot() {
      if (this.newTwootContent != "" && this.selectedTwootType !== "draft") {
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent,
        });
      }
      this.newTwootContent = "";
    },
  },
  mounted() {
    this.followUser();
  },
};
</script>

<style>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding-left: 50px;
  padding-top: 20px;
  box-sizing: border-box;
}

.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3eb;
}

h1 {
  margin: 0;
}

.user-profile__admin_badge {
  background: rebeccapurple;
  color: white;
  border-radius: 5px;
  margin: 5px 0;
  padding: 3px 10px;
  margin-bottom: 20px;
  margin-right: auto;
}

.user-profile__create-twoot {
  padding-top: 20px;
  border-top: 1px solid #dfe3eb;
  display: flex;
  flex-direction: column;
}
</style>

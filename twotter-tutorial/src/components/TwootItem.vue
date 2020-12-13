<template>
  <div class="twoot-item" v-on:click="favouriteTwoot(twoot.id)">
    <div class="user-profile__twoot">@{{ username }}</div>
    <div class="twoot-item__user">
      {{ twoot.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TwootItem",
  props: {
    username: {
      type: String,
      required: true,
    },
    twoot: {
      type: Object,
      required: true,
    },
  },
  methods: {
    favouriteTwoot(id) {
      this.$emit("favourite", id);
    },
  },
};
</script>

<style>
.twoot-item {
  padding: 20px;
  backgorund-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3eb;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
}

.twoot-item:hover {
  transform: scale(1.1, 1.1);
}

.twoot-item__user {
  font-weight: bold;
}
</style>

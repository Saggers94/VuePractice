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

<style lang="scss" scoped>
.twoot-item {
  padding: 20px;
  margin-top: 20px;
  margin-right: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3eb;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;

  &:first-child {
    margin-top: 0;
  }
  //'&' in scss would add hovering on to the main class name inside which the hovering is nested
  &:hover {
    transform: scale(1.1, 1.1);
  }

  .twoot-item__user {
    font-weight: bold;
  }
}
</style>

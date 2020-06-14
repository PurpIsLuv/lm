<template lang="pug">
    li
      button.category
        img.icon(:src='require("@/assets/svg/project-categories/" + img)' alt="")
        p.title {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    img: {
      type: String,
      required: true,
      default: ""
    }
  },
  name: "CategoryProject"
};
</script>

<style lang="scss" scoped>
// Category
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #FFFFFF;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  transition: 0.25s;
  &:hover {
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }
}
.icon {
  margin-bottom: 15px;
}
.title {
  color: $Main;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}
</style>

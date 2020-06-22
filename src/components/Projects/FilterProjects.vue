<template lang="pug">
  .container.filter
    .top
      h2.title Проекты
      button.filter-btn Фильтр
    .categories-top
      h3.categories-title Категории:
      .control-arrows
        button.control-button.prev
          img.control-icon(src="@/assets/svg/prev-arrow.svg" alt="")
        button.control-button.next
          img.control-icon(src="@/assets/svg/next-arrow.svg" alt="")
    ul.categories-list
      category-project(v-for="(filter, index) in filters"
                      :title="filter.title"
                      :img="filter.img"
                      :key="index")
</template>

<script>
import data from "./data";
import CategoryProject from "./CategoryProject";

export default {
  name: "FilterProjects",
  data() {
    return {
      filters: data.categories
    };
  },
  components: {
    CategoryProject
  }
};
</script>

<style lang="scss" scoped>
// Filter
.filter {
  padding: 35px 0;
}
// Filter Top
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  color: $Main;
  font-size: 32px;
  font-weight: bold;
  margin: 0;
}
.filter-btn {
  color: $White;
  font-size: 14px;
  font-weight: 450;
  background: linear-gradient(180deg, #4770fc 0%, #4b9ef8 100%);
  border-radius: 3px;
  padding: 10px;
  min-width: 150px;
  border: none;
  cursor: pointer;
  outline: none;
}
// Categories Top
.categories-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
}
.categories-title {
  margin: 0;
  color: $Main;
  font-size: 24px;
  font-weight: bold;
}
// Control
.control-arrows {
  display: flex;
  align-items: center;
}
.control-button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 15px;
  border-radius: 3px;
}
.control-button.next {
  background: linear-gradient(
    180deg,
    #f4f4f4 0%,
    rgba(244, 244, 244, 0.47) 100%
  );
  padding: 7px 30px;
}
// Categories List
.categories-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  list-style: none;
  margin: 35px 0;
  padding: 0;
}
</style>

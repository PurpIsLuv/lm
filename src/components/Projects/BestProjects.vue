<template lang="pug">
  .container.best
    .top
      h2.title Лучшие за год
      router-link.more(to="/projects?best") Смотреть все
      .control-arrows
        button.control-button.prev
          img.control-icon(src="@/assets/svg/prev-arrow.svg" alt="")
        button.control-button.next
          img.control-icon(src="@/assets/svg/next-arrow.svg" alt="")
    .projects
      main-project-card
      main-project-card
</template>

<script>
import MainProjectCard from "../MainProjectCard";

export default {
  name: "BestProjects",
  components: {
    MainProjectCard
  }
};
</script>

<style lang="scss" scoped>
// Best
.best {
  padding-bottom: 50px;
}
// Top
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  margin: 0;
  color: $Main;
  font-size: 24px;
  font-weight: bold;
}
.more {
  margin-left: 15px;
  margin-right: auto;
  color: $ProjectThird;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
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
// Projects
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin-top: 30px;
}
</style>

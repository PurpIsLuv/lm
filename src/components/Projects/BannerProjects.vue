<template lang="pug">
  .container.banner
    .left
      h2.title
        | Хочешь внести свой вклад в
        br
        | развитие перспективных проектов?
      p.description
        | Всего в несколько кликов вы можете начать инвестировать крупные проекты
        br
        | или создать с нуля и запустить свою кампанию,
        br
        | собирая средства быстрее и эффективнее, чем когда-либо.
      .buttons
        router-link.button.invest(to="/invest") Инвестировать
        router-link.button.create(to="/create") Создать проект
    .right
      .icons
        img.banner-icon(src="@/assets/svg/diagram.svg" alt="")
        img.banner-icon(src="@/assets/svg/team.svg" alt="")
        img.banner-icon(src="@/assets/svg/graph.svg" alt="")
      .image
        img.banner-img(src="@/assets/image/Projects/banner.png" alt="")
      img.bg(src="@/assets/svg/projects-banner-bg.svg" alt="")
</template>

<script>
export default {
  name: "BannerProjects"
};
</script>

<style lang="scss" scoped>
// Banner
.banner {
  display: flex;
  justify-content: space-between;
  padding: 70px 0;
}
// Banner Left
.left {
  min-width: 50%;
  width: 50%;
}
.title {
  color: $Main;
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 35px;
  margin-top: 0;
}
.description {
  color: $ProjectMain;
  font-size: 24px;
  margin: 0;
}
.buttons {
  margin-top: 45px;
  display: flex;
  align-items: center;
}
.button {
  padding: 10px;
  margin-right: 30px;
  font-size: 18px;
  border-radius: 3px;
  min-width: 185px;
  text-align: center;
}
.button.invest {
  color: $White;
  background: linear-gradient(22.11deg, #4560FE 18.91%, #50CDF3 150.1%);
}
.button.create {
  color: $ProjectSecond;
  border: 2px solid $ProjectSecond;
  padding: 8px;
}
// Banner Right
.right {
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
}
// Right Icons
.icons {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.banner-icon {
  background: $White;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: absolute;
  &:nth-child(1) {
    padding: 14px;
    width: 21px;
    top: 25px;
    left: 75px;
  }
  &:nth-child(2) {
    padding: 23px 25px;
    width: 62px;
    left: 200px;
    bottom: -50px;
  }
  &:nth-child(3) {
    padding: 45px;
    width: 74px;
    right: -200px;
    top: 80px;
  }
}
// Right Banner
.image {
  width: 100%;
  height: 328px;
  position: relative;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.banner-img {
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}
// Right Background
.bg {
  position: absolute;
  z-index: -1;
  top: -30px;
  left: 0;
}
</style>

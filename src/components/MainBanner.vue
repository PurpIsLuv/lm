<template lang="pug">
  .container.banner
    p.description
      | Воплощайте в жизнь
      br
      | проекты и развивайте бизнес
      br
      | вместе с тысячами единомышленников!
    .line
    h2.title
      | Надежная
      br
      | краудфандинговая
      br
      | платформа в России
    ul.social-list
      li.social(v-for="social in social")
        router-link.social-link(to="social.link"
                                title="social.name")
          img.social-icon(:src='"@/assets/image/Footer/" + social.name + ".svg"' alt="")
    img.bg(src="@/assets/image/MainBanner/bg.png" alt="")
</template>

<script>
export default {
  name: "MainBanner",
  data() {
    return {
      social: [
        { name: "Facebook", link: "#" },
        { name: "Twitter", link: "#" },
        { name: "Gmail", link: "#" },
        { name: "Instagram", link: "#" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// Banner
.banner {
  padding: 30px 0 200px;
}
.description {
  margin: 0;
  color: $MainBanner;
  font-size: 18px;
  font-weight: 450;
}
.line {
  width: 256px;
  height: 5px;
  background: $Main;
  margin: 45px 0 30px;
}
.title {
  color: $Main;
  margin: 0;
  font-size: 46px;
  font-weight: 600;
}
.social-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 100px;
}
.social {
  margin-right: 20px;
}
.social-link {
  display: flex;
  align-items: center;
}
.social-icon {
  width: 12px;
  height: auto;
}
// Bg
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
}
</style>

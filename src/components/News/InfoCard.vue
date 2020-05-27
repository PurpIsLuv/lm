<template lang="pug">
  .InfoCard
    .row
      .title
        img.title__img(
          :src='require("@/assets/image/News/" + infoCardData.imgName)'
        )
    .row
      .subtitle {{ infoCardData.subtitle }} 
      a.connect(href='#')
        img(src='@/assets/image/News/Link.svg')
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    infoCardData: Object
  },
  data() {
    return {
      defaultImgPath: "assets/image/News/"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/settings.scss";

@mixin main($maxWidth) {
  .InfoCard {
    margin: 3rem 0;
    width: 270px;
    height: 360px;
    background-color: $White;
    border-radius: 3px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
    font-family: Futura PT;
    font-style: normal;
  }
  .row {
    display: flex;
    align-items: center;
  }
  .title {
    width: 270px;
    height: 268px;
    overflow: hidden;
  }
  .subtitle {
    margin: 1rem 0.8rem;
    @include afs(14px, 12px, 10px);
    width: 207px;
    height: 54px;
    overflow: hidden;
    color: $SilverThird;
  }
  .connect {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0 0.3rem;
    height: 54px;
  }
}

@media screen and (min-width: 0px) and (max-width: $PhoneWidth) {
  @include main(0px);
}
@media screen and (min-width: 0px) and (max-width: $PhoneWidth) {
  @include main($PhoneWidth);
}
@media screen and (min-width: $PhoneWidth) and (max-width: $TabletWidth) {
  @include main($TabletWidth);
}
@media screen and (min-width: $TabletWidth) and (max-width: $SmDesktopWidth) {
  @include main($SmDesktopWidth);
}
@media screen and (min-width: $SmDesktopWidth) and (max-width: $DesktopWidth) {
  @include main($DesktopWidth);
}
@media screen and (min-width: $DesktopWidth) {
  @include main($DesktopWidth);
}
</style>

<template lang="pug">
  .Footer-item
    .title {{ title }} 
    .subtitle(v-for="(item, index) of subtitles" 
    :key="index") 
      a.subtitle__a(:href='item.link') {{ item.subtitle }}
</template>

<script>
export default {
  name: "FooterItem",
  props: {
    title: String,
    subtitles: Array
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/settings.scss";

@mixin main($maxWidth) {
  .Footer-item {
    display: flex;
    flex-direction: column;
    margin: 1rem 0.5rem;
  }
  .title {
    font-family: Gotham Pro;
    @include afs(18px, 16px, 14px);
    line-height: 17px;
    color: $FooterBlue;
    margin-bottom: 14px;
  }
  .subtitle {
    color: $FooterSilverDark;
    font-weight: 300;
    @include afs(16px, 14px, 12px);
    line-height: 21px;
    .subtitle__a {
      color: $FooterSilverDark;
      font-weight: 300;
      @include afs(16px, 14px, 12px);
      line-height: 21px;
      text-decoration: none;
    }
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

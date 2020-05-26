<template lang="pug">
  .Footer-item(v-if="!logoItem && !emailItem")
    .title {{ title }} 
    .subtitle(v-for="(item, index) of subtitles" :key="index") 
      a(:href='item.link') {{ item.subtitle }}

  .Footer-item(v-else-if="logoItem")
    img(src='@/assets/image/Footer/Logo.svg' class='title')
    .subtitle
      | Автоинформатор:
      br
      | +7 (495) 181-05-05

  .Footer-item(v-else-if="emailItem")
    .title Подпишитесь на наши рассылку:
    label(class='subtitle__input')
      img(src='@/assets/image/Footer/Message.svg')
      input(type='text' placeholder='Укажите свой email' @change="event => $emit('inputValue', event.target.value)")
</template>

<script>
export default {
  name: "FooterItem",
  props: {
    title: String,
    subtitles: Array,
    logoItem: Boolean,
    emailItem: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/settings.scss";

@mixin titleFont {
  color: $FooterSilverDark;
  font-weight: 300;
  @include afs(16px, 14px, 12px);
  line-height: 21px;
}
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
    @include titleFont;
    a {
      @include titleFont;
      text-decoration: none;
    }
  }
  .subtitle__input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border: 0.1rem solid $FooterSilver;
    border-radius: 2px;
    cursor: pointer;
    input {
      height: 49px;
      border: none;
      width: 120px;
      cursor: pointer;
    }
    input:focus {
      outline: none;
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

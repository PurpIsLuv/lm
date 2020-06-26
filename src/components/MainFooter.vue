<template lang="pug">
  .Footer
    .container
      .row.main
        .Footer-item
          img.title__img(src='@/assets/image/Footer/Logo.svg')
          .subtitle
            | {{ $t("autoinformator") }}:
            br
            | +7 (495) 181-05-05

        footer-item(
          v-for="(item, index) of getLinksItem()" 
          :key="index" 
          :title='item.title' 
          :subtitles='item.subtitles'
        )

        .Footer-item
          .title {{ $t("subscribe") }}:
          label.subtitle-message
            img(src='@/assets/image/Footer/Message.svg')
            input.subtitle-message__input(
              type='text' 
              :placeholder="$t('yourEmail')"
              v-model="inputValue"
            )
      .row
        .license @ 2020 {{ $t("license") }}
        .links
          a.links__a(
            href='#' 
            v-for="(item, index) of getLinksSocial()" 
            :key="index"
          )
            img.links__img(
              :src='"@/" + defaultImgPath + item.name + ".svg"'
            )
</template>

<script>
import FooterItem from "./FooterItem";

import { mapGetters } from "vuex";

export default {
  components: {
    FooterItem
  },
  name: "MainFooter",
  data() {
    return {
      defaultImgPath: "assets/image/Footer/",
      inputValue: ""
    };
  },
  methods: {
    ...mapGetters(["getLinksSocial", "getLinksItem"])
  }
};
</script>

<style lang="scss" scoped>
@mixin main($maxWidth) {
  .Footer {
    font-family: Futura PT;
    font-style: normal;
    font-weight: bold;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    @if ($maxWidth == $DesktopWidth) {
      justify-content: space-between;
    } @else if ($maxWidth >= $PhoneWidth) and ($maxWidth <= $SmDesktopWidth) {
      justify-content: space-around;
    }
    align-items: center;
    margin: 0.3rem 0;
    max-width: 1170px;
  }
  .main {
    border-bottom: solid 0.1rem $WhiteFirst;
  }
  .Footer-item {
    display: flex;
    flex-direction: column;
    margin: 1rem 0.5rem;
  }
  .title {
    font-family: Gotham Pro;
    @include afs(18px, 16px, 14px);
    line-height: 17px;
    color: $BlueFirst;
    margin-bottom: 14px;
  }
  .subtitle {
    color: $SilverThird;
    font-weight: 300;
    @include afs(16px, 14px, 12px);
    line-height: 21px;
  }
  .subtitle-message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border: 0.1rem solid $SilverFirst;
    border-radius: 2px;
    cursor: pointer;
    .subtitle-message__input {
      height: 49px;
      border: none;
      width: 120px;
      cursor: pointer;
    }
    .subtitle-message__input:focus {
      outline: none;
    }
  }
  .license {
    font-family: Gotham Pro;
    @include afs(14px, 12px, 10px);
    color: $SilverThird;
  }
  .links {
    display: flex;
    justify-content: space-between;
    width: 155px;
    .links__a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .links__img {
      width: 20px;
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

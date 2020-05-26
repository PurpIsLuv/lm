<template lang="pug">
  .Footer
    .container
      .row.main
        FooterItem(:logoItem='true')
        FooterItem(v-for="(item, index) of footerItem" :key="index" :title='item.title', :subtitles='item.subtitles')
        FooterItem(:emailItem='true' @inputValue="updInputValue")

      .row
        .license @ 2020 Все права защищены
        .links
          a(href='#' v-for="(item, index) of links" :key="index")
            img(:src='"@/" + defaultImgPath + item.name + ".svg"')
</template>

<script>
import FooterItem from "./FooterItem";
export default {
  components: {
    FooterItem
  },
  name: "MainFooter",
  data() {
    return {
      defaultImgPath: "assets/image/Footer/",
      links: [
        { name: "Facebook", link: "#" },
        { name: "Twitter", link: "#" },
        { name: "Gmail", link: "#" },
        { name: "Instagram", link: "#" }
      ],
      footerItem: [
        {
          title: "НАШИ ПРОЕКТЫ",
          subtitles: [
            { link: "#", subtitle: "Сайт деловых знакомств" },
            { link: "#", subtitle: "Глобальная игра" },
            { link: "#", subtitle: "Благотворительность" }
          ]
        },
        {
          title: "О НАС",
          subtitles: [
            { link: "#", subtitle: "Спецпроекты" },
            { link: "#", subtitle: "Партнеры" },
            { link: "#", subtitle: "Контакты" }
          ]
        },
        {
          title: "ПОМОЩЬ",
          subtitles: [
            { link: "#", subtitle: "Частые вопросы" },
            { link: "#", subtitle: "Правила сервиса" },
            { link: "#", subtitle: "Задать вопрос" }
          ]
        }
      ]
    };
  },
  methods: {
    updInputValue: function(value) {
      return value;
    }
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
@mixin containerWrap($maxWidth) {
  @if ($maxWidth == $DesktopWidth) {
    justify-content: space-between;
  } @else if ($maxWidth >= $PhoneWidth) and ($maxWidth <= $SmDesktopWidth) {
    justify-content: space-around;
  }
}
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
    @include containerWrap($maxWidth);
    align-items: center;
    margin: 0.3rem 0;
    max-width: 1170px;
  }
  .main {
    border-bottom: solid 0.1rem $FooterSilverWhite;
  }
  .license {
    font-family: Gotham Pro;
    @include afs(14px, 12px, 10px);
    color: $FooterSilverDark;
  }
  .links {
    display: flex;
    justify-content: space-between;
    width: 155px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
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

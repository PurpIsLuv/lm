<template lang="pug">
  .MainProjectCard
    .MainProjectCard-header
      .bg
        img(
          src='@/assets/image/ProjectCard/bg.png'
        )
      .row
        a.title(href='#') {{ title }}
      .row
        .subtitle {{ subtitle }}
      .row
        ul.lang(v-if="countrys.length <= 2")
          li.lang-item(
            v-for="(item, index) of countrys" :key="index"
          )
            img.lang-item__img(
              :src='require(`@/assets/image/ProjectCard/country/${item}.svg`)'
            )
        ul.lang(v-else)
          li.lang-item
            img.lang-item__img(src='@/assets/image/ProjectCard/country/Int.svg')
            span.lang-item__span &#10008; {{ countrys.length }}
        button.btn Перейти к проекту
    .MainProjectCard-body
      .row
        span.info {{ info }}
    .MainProjectCard-footer
      .row
        .loading
          .track(ref="track")
      .row
        .total 
          | Необходимые средства:
          br
          .price {{ total }} &#x20bd;
        .sum
          | До запуска проекта осталось:
          br
          .price {{ total - sum }} &#x20bd; ({{ 100 - (100 * sum / total) }}%)
    .MainProjectCard-graphic
      img(src='../assets/image/ProjectCard/graphic.png')
</template>

<script>
export default {
  name: "MainProjectCard",
  data() {
    return {
      title: "Медицина",
      subtitle: "Создание мобильного приложения для записи ко врачу онлайн",
      info:
        "Мы ищем поддержки в решении целого пласта проблем здравоохранения. Ведь это нужно каждому из нас. «Коллектив врачей и программистов». Мы ищем поддержки в решении целого пласта проблем здравоохранения. Ведь это нужно каждому из нас. «Коллектив врачей и программистов». Мы ищем поддержки в решении целого пласта проблем здравоохранения.",
      total: 120000,
      sum: 108000,
      countrys: ["Rus", "Isl"]
    };
  },
  methods: {
    /**
     * Функция подсчитывает ширину трэка
     */
    renderLoading() {
      const sumPercent = (this.sum * 100) / this.total;
      this.$refs.track.style.width = `${(sumPercent * 510) / 100}px`;
    }
  },
  mounted() {
    this.renderLoading();
  }
};
</script>

<style lang="scss" scoped>
@mixin main($maxWidth) {
  .MainProjectCard {
    width: 570px;
    height: 457px;
    border-radius: 10px;
    box-shadow: 2px 4px 10px rgba($color: $Black, $alpha: 0.1);
    background-color: $White;
    margin: 20px 50px;
  }
  .MainProjectCard:hover .MainProjectCard-body,
  .MainProjectCard:hover .MainProjectCard-footer {
    display: none;
  }
  .MainProjectCard:hover .MainProjectCard-graphic {
    display: block;
    animation: Card-animate 0.3s;
  }
  .bg {
    position: absolute;
    z-index: 0;
  }
  .row {
    display: flex;
    align-items: center;
    margin: 1rem 1rem;
  }
  //MainProjectCard-header
  .MainProjectCard-header {
    display: block;
  }
  .title {
    margin-top: 1rem;
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    @include afs(14px, 12px, 10px);
    line-height: 18px;
    text-decoration: underline;
    color: $White;
    cursor: pointer;
    z-index: 1;
  }
  .subtitle {
    padding-right: 8rem;
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    @include afs(16px, 14px, 12px);
    line-height: 21px;
    color: $White;
    z-index: 1;
  }
  .lang {
    display: flex;
    justify-content: space-between;
    margin-top: 3.5rem;
    padding: 0rem;
    list-style-type: none;
    z-index: 1;
  }
  .lang-item {
    display: flex;
    align-items: center;
    margin: 0 0.2rem;
  }
  .lang-item__span {
    margin: 0 0.3rem;
    font-family: Futura PT;
    font-style: normal;
    font-weight: 600;
    @include afs(16px, 14px, 12px);
    line-height: 21px;
    color: $White;
  }
  .btn {
    margin-top: 2.5rem;
    margin-left: auto;
    width: 152px;
    height: 34px;
    background: linear-gradient(
      20.49deg,
      $BlueSecond 18.91%,
      $AquaFirst 150.1%
    );
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    @include afs(14px, 12px, 10px);
    line-height: 18px;
    color: $White;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    z-index: 1;
  }
  //MainProjectCard-body
  .MainProjectCard-body {
    display: block;
    padding-top: 0.1rem;
    padding-left: 1rem;
    animation: Card-animate 0.3s;
  }
  .info {
    width: 480px;
    height: 126px;
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    @include afs(16px, 14px, 12px);
    line-height: 21px;
    color: $SilverThird;
  }
  //MainProjectCard-footer
  .MainProjectCard-footer {
    margin: 0 1rem;
    animation: Card-animate 0.3s;
  }
  .loading {
    width: 510px;
    height: 6px;
    margin: auto;
    background-color: $SilverSixth;
    border-radius: 100px;
  }
  .track {
    height: 6px;
    background: linear-gradient(
      117.14deg,
      $AquaSecond 14.06%,
      $BlueSecond 89.37%
    );
    border-radius: 100px;
  }
  .total,
  .sum {
    font-family: Futura PT;
    font-style: normal;
    font-weight: 300;
    @include afs(14px, 12px, 10px);
    line-height: 18px;
  }
  .sum {
    margin-left: auto;
  }
  .price {
    margin: 0.5rem 0;
    font-weight: 600;
    @include afs(16px, 14px, 12px);
    line-height: 21px;
    color: $BlueThird;
  }
  .MainProjectCard-graphic {
    display: none;
    width: 570px;
    height: 250px;
    overflow: hidden;
  }
}

@keyframes Card-animate {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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

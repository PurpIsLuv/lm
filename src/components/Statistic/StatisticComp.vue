<template lang="pug">
  .StatisticComp
    .container
      .Line
        .figure
          .figure__square
            .info Статистика:
          .figure__peas
            img(
              src="@/assets/image/Statistic/Peas.png"
              alt=""
            )
        .card
          .card__title Мы ценим ваши вложения и многократно преумножаем их.
          .card__subtitle 
            span После того как проект начал выполняться, руководитель должен с определенной частотой предоставлять руководству и заказчику отчеты о ходе проекта. MS Project содержит набор готовых отчетов, которые можно использовать в этих случаях, и предлагает возможности по созданию собственных отчетов. 
            br 
            br
            span Отчеты удобно использовать и самому руководителю проекта, поскольку с помощью некоторых из них можно получить данные, которые невозможно просмотреть в представлениях. Например, с помощью одного из отчетов.
          button.card__button Начать инвестировать
      .Line.Second
        .card.Second__card
          .card__title Мы гарантируем, что каждый проект получит достойную поддержку. 
          .card__subtitle После того как проект начал выполняться, руководитель должен с определенной частотой предоставлять руководству и заказчику отчеты о ходе проекта. MS Project содержит набор готовых отчетов, которые можно использовать в этих случаях, и предлагает возможности по созданию собственных отчетов.
          .card__button Стать участником
        .graphic  
          .graphic__peas
            img(
              src="@/assets/image/Statistic/Peas.png"
              alt=""
            )
          .graphic__image
            linear-chart-medium
          .graphic__square
</template>

<script>
import LinearChartMedium from "@/components/Charts/LinearChartMedium";
export default {
  components: {
    LinearChartMedium
  },
  name: "StatisticComp"
};
</script>

<style lang="scss" scoped>
@mixin main($maxWidth) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .StatisticComp {
    padding: 4rem 0;
  }
  .Line {
    display: flex;
    justify-content: space-between;
  }
  .figure {
    height: 490px;
  }
  .figure__square {
    position: absolute;
    width: 480.21px;
    height: 489.06px;
    background: linear-gradient(
      264.53deg,
      $SilverSeventh -6.59%,
      $White 127.51%
    );
    border-radius: 72px;
    transform: rotate(23.04deg);
  }
  .info {
    transform: translate(-40px, -40px) rotate(-23.04deg);
    @include afs(32px, 30px, 28px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 31px;
    color: $Main;
  }
  .figure__peas {
    margin-left: 8.5rem;
  }
  .card {
    display: flex;
    flex-direction: column;
    width: 442px;
  }
  .card__title {
    margin-top: auto;
    @include afs(24px, 22px, 20px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 34px;
    color: $Main;
  }
  .card__subtitle {
    margin: 1rem 0;
    @include afs(16px, 14px, 12px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 21px;
    color: $SilverThird;
  }
  .card__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 152px;
    height: 34px;
    @include afs(14px, 12px, 10px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    border: none;
    border-radius: 3px;
    outline: none;
    background: linear-gradient(
      20.49deg,
      $BlueSecond 18.91%,
      $AquaFirst 150.1%
    );
    color: $White;
    cursor: pointer;
  }
  .Second {
    margin-top: 10rem;
  }
  .Second__card {
    margin-bottom: 3rem;
  }
  .graphic__peas {
    position: absolute;
    margin-top: 4rem;
    margin-left: 8rem;
  }
  .graphic__image {
    margin-left: -4rem;
    position: absolute;
    width: 566px;
    height: 425px;
    background-color: $White;
    overflow: hidden;
    z-index: 1;
  }
  .graphic__square {
    width: 476.64px;
    height: 465.22px;
    background: linear-gradient(
      264.29deg,
      $SilverSeventh -6.59%,
      $White 127.51%
    );
    border-radius: 72px;
    transform: rotate(23.04deg);
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

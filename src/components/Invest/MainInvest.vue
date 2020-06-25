<template lang="pug">
  .MainInvest
    .container
      .title Инвестирование проекта “Новые технологии”
      ul.investCards
        li(
          v-for="(card, index) of cards" :key="index"
        )
          invest-card(
            :amount="card.amount"
            :image="card.image"
            :title="card.title"
            :subtitle="card.subtitle"
          )
      .content
        statistic-graph(
          :successful="40"
          :unfinish="30"
          :fail="20"
        )
        .content-info
          .content-info__title Как получить вознаграждение?
          ul.content-info__subtitle
            li.subtitle-item
              .subtitle-item__number 01.
              .subtitle-item__text Нужно провести предварительную работу по обоснованию экономической выгоды инвестиций, определиться со сроком вкладов и их объёмом, учесть все риски и просчитать рентабельность предприятия.
            li.subtitle-item
              .subtitle-item__number 02.
              .subtitle-item__text На этой стадии критическому анализу подвергается вся информация относительно сроков реализации проекта, объёма привлеченных средств, окупаемости инвестиций, уровня конкуренции.
            li.subtitle-item
              .subtitle-item__number 03.
              .subtitle-item__text Обязательно анализируются цены на аналогичные товары (услуги, работы) у будущих конкурентов, выясняется маркетинговая и экономическая политика.
</template>

<script>
import InvestCard from "@/components/Invest/InvestCard";
import StatisticGraph from "@/components/Statistic/StatisticGraph";

export default {
  components: {
    InvestCard,
    StatisticGraph
  },
  name: "MainInvest",
  data() {
    return {
      cards: [
        {
          amount: 2424,
          image: "hand",
          title: "Безвозмездное пожертвование",
          subtitle:
            "Вы можете поддержать проект любой комфортной для Вас суммой в целях благотворительной деятельности"
        },
        {
          amount: 10000,
          image: "document",
          title: "10 наборов нашего продукта",
          subtitle:
            "Вы можете поддержать проект суммой, окупаемой в будущем, или даже быть в выйгрышном положении"
        },
        {
          amount: 100000,
          image: "award",
          title: "100 наборов нашего продукта",
          subtitle:
            "Вы можете поддержать проект суммой, окупаемой в будущем, или даже быть в выйгрышном положении"
        },
        {
          amount: 500000,
          image: "trophy",
          title: "Набор привилегированных акций",
          subtitle:
            "Вы можете поддержать проект суммой, окупаемой в будущем, или даже быть в выйгрышном положении"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@mixin main($maxWidth) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .MainInvest {
    padding: 1rem 0;
  }
  .title {
    @include afs(32px, 30px, 28px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 31px;
    letter-spacing: 0.03em;
    color: $Main;
  }
  .investCards {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    list-style-type: none;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content-info {
    margin-left: 2rem;
  }
  .content-info__title {
    @include afs(24px, 22px, 20px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: $Main;
  }
  .content-info__subtitle {
    list-style-type: none;
  }
  .subtitle-item {
    display: flex;
    margin-top: 2rem;
  }
  .subtitle-item__number {
    @include afs(16px, 14px, 12px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.03em;
    color: $Main;
  }
  .subtitle-item__text {
    margin: 0 1rem;
    @include afs(14px, 12px, 10px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    color: $StatText;
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

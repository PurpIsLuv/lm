<template lang="pug">
  .News
    .News-head
      .container
        .row
          .title Новости:
          .arrows
            .button.left
              img(src='@/assets/image/News/Arrow-left.svg')
            .button.right
              img(src='@/assets/image/News/Arrow-right.svg')
    .News-body
      .container
        .cards
          person-card(:personCardData="personCards[0]")
          info-card(:infoCardData="infoCards[0]")
          person-card(:personCardData="personCards[1]")
          info-card(:infoCardData="infoCards[1]")
</template>

<script>
import PersonCard from "@/components/News/PersonCard";
import InfoCard from "@/components/News/InfoCard";

export default {
  components: {
    PersonCard,
    InfoCard
  },
  name: "MainNews",
  data() {
    return {
      infoCards: [
        {
          imgName: "card-1.png",
          subtitle:
            "Краудфандинг является одной из наиболее активно развивающихся финансовых систем."
        },
        {
          imgName: "card-2.png",
          subtitle:
            "Сегодня в этой сфере организовано свыше 30 платформ коллективного финансирования."
        }
      ],
      personCards: [
        {
          title: "Уварова Татьяна",
          subtitle:
            "Сейчас краудфандинг является одной из наиболее активно развивающихся финансовых систем в России. За прошедшие годы работы с помощью платформ российского краудфандинга был собран 1 миллиард рублей.",
          date: "12.05.2020",
          isSubscribe: true
        },
        {
          title: "Семенов Константин",
          subtitle:
            "Сегодня в этой сфере организовано свыше 30 платформ коллективного финансирования, многие из которых ориентированы на развитие определенных направлений — творческих, технологических, социальных и т.д.",
          date: "12.05.2020",
          isSubscribe: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/settings.scss";

@mixin main($maxWidth) {
  .News {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    background-color: $White;
  }
  .title {
    @include afs(32px, 28px, 24px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 31px;
    color: $Main;
  }
  .arrows {
    display: flex;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 101px;
    height: 34px;
    cursor: pointer;
  }
  .left {
    background: linear-gradient(
      180deg,
      $White 0%,
      rgba(244, 244, 244, 0.47) 100%
    );
  }
  .right {
    background: linear-gradient(
      180deg,
      $WhiteSecond 0%,
      rgba(244, 244, 244, 0.47) 100%
    );
  }
  .News-body {
    background: linear-gradient(
      351.01deg,
      $SilverSecond -88.68%,
      #fbfbfc 117.44%
    );
  }
  .cards {
    display: flex;
    @if ($maxWidth <= $TabletWidth) {
      justify-content: space-around;
    } @else {
      justify-content: space-between;
    }
    flex-wrap: wrap;
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

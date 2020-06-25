<template lang="pug">
  .InvestCard
    .amount {{ amount || amountFilter }}
    .image
      img(
        :src="require(`@/assets/image/Invest/${image}.png`)"
        alt=""
      )
    .title {{ title }}
    .subtitle {{ subtitle }}
</template>

<script>
export default {
  props: {
    amount: Number,
    image: String,
    title: String,
    subtitle: String
  },
  name: "InvestCard",
  filters: {
    amountFilter(number) {
      const formatter = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return formatter.format(number);
    }
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
  .InvestCard {
    padding: 2rem 0;
    width: 270px;
    height: 328px;
    border-radius: 10px;
    background: $White;
    box-shadow: 2px 4px 10px rgba($color: $Black, $alpha: 0.1);
  }
  .amount {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    @include afs(18px, 16px, 14px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: 900;
    line-height: 20px;
    letter-spacing: 0.04em;
    background: $AquaFourth;
    color: $Main;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    width: 74px;
    height: 74px;
    overflow: hidden;
  }
  .title {
    @include afs(14px, 12px, 10px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
    text-align: center;
    color: $Main;
  }
  .subtitle {
    margin: 0 auto;
    margin-top: 0.6rem;
    width: 230px;
    height: 54px;
    @include afs(14px, 12px, 10px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    text-align: center;
    color: $StatText;
    overflow: hidden;
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

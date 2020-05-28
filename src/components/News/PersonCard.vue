<template lang="pug">
  .PersonCard
    .row
      .btn(
        :class="{ subscribe:isSubscribe, unsubscribe:!isSubscribe }"
      )
        img(
          v-if="isSubscribe"
          src='@/assets/image/News/Cross.svg'
        )
        img(
          v-else
          src='@/assets/image/News/Plus.svg'
        )
    .row
      .title {{ title }}
    .row
      .subtitle {{ subtitle }}
    .row
      .date {{ date }}
      a.connect(href='#')
        img(src='@/assets/image/News/Link.svg')
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    title: String,
    subtitle: String,
    date: String,
    isSubscribe: Boolean
  }
};
</script>

<style lang="scss" scoped>
@mixin main($maxWidth) {
  .PersonCard {
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
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    width: 34px;
    height: 34px;
    border-radius: 3px;
    cursor: pointer;
  }
  .subscribe {
    background-color: $SilverFourth;
  }
  .unsubscribe {
    background: linear-gradient(
      59.09deg,
      $BlueSecond 18.91%,
      $AquaFirst 150.1%
    );
  }
  .title {
    margin: 1.5rem auto;
    @include afs(18px, 16px, 14px);
    font-weight: 450;
    line-height: 23px;
    color: $Main;
  }
  .subtitle {
    margin: 0 auto;
    @include afs(14px, 12px, 10px);
    width: 174px;
    height: 200px;
    font-weight: normal;
    line-height: 18px;
    color: $SilverThird;
    text-align: center;
    overflow: hidden;
  }
  .date {
    @include afs(12px, 10px, 8px);
    font-weight: 450;
    line-height: 15px;
    margin: 1rem;
  }
  .connect {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    margin-left: auto;
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

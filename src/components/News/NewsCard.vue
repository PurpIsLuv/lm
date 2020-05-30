<template lang="pug">
  .Card(
    @mouseenter="toggleCard" 
    @mouseleave="toggleCard" 
  )
    div(v-if="isCardSide")
      .Card-head
      .Card-body.row
        .date {{ date }}
        a.connect(href='#')
          img(src='@/assets/image/News/Link.svg')
    div(v-else)
      .Card-head
      .Card-body.row
        .subtitle {{ subtitle }} 
        a.connect(href='#')
          img(src='@/assets/image/News/Link.svg')
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    date: String,
    isSubscribe: Boolean,
    imgName: String,
    isSide: Boolean
  },
  data() {
    return {
      isCardSide: this.isSide
    };
  },
  methods: {
    toggleCard: function() {
      this.isCardSide ? (this.isCardSide = false) : (this.isCardSide = true);
      /**
       * hover event
       */
    },
    btnImgPath: function() {
      return `@/assets/image/News/${
        this.isSubscribe == true ? "Cross.svg" : "Plus.svg"
      }`;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin main($maxWidth) {
  .Card {
    margin: 3rem 0;
    width: 270px;
    height: 360px;
    border-radius: 3px;
    background-color: $White;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
    font-family: Futura PT;
    font-style: normal;
    cursor: default;
  }
  .row {
    display: flex;
    align-items: center;
  }
  .Card-head {
    height: 268px;
  }
  .Card__img {
    overflow: hidden;
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
  .name {
    margin: 1.5rem auto;
    @include afs(18px, 16px, 14px);
    font-weight: 450;
    line-height: 23px;
    color: $Main;
  }
  .info {
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
  .Card-body {
    height: 92px;
    margin: 0 1rem;
  }
  .date {
    @include afs(12px, 10px, 8px);
    font-weight: 450;
    line-height: 15px;
  }
  .subtitle {
    @include afs(14px, 12px, 10px);
    width: 207px;
    height: 54px;
    color: $SilverThird;
    overflow: hidden;
  }
  .connect {
    display: flex;
    justify-content: center;
    align-items: center;
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

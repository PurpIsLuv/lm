<template lang="pug">
  .Success(ref="Success")
    .Success-block
      img.Success-block__true(
        src="@/assets/image/Freelance/true-big.svg"
        alt=""
      )
      .Success-block__title Ваш предложение успешно оформлено и находится на рассмотрении!
      .Success-block__subtitle За статусом проекта следите в личном кабинете.
      router-link(to="/main").Success-block__button Готово
</template>

<script>
export default {
  name: "Success",
  mounted() {
    const body = document.querySelector("body");
    this.$refs["Success"].style.height = body.offsetHeight + "px";
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
  .Success {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: rgba($color: $BlueFourth, $alpha: 0.5);
  }
  .Success-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    margin-right: -50%;
    padding: 4rem 9rem;
    width: 1170px;
    height: 508px;
    background: $White;
  }
  .Success-block__title {
    @include afs(32px, 30px, 28px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 42px;
    text-align: center;
    letter-spacing: 0.03em;
    color: $Main;
  }
  .Success-block__subtitle {
    @include afs(24px, 22px, 20px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 42px;
    text-align: center;
    color: $StatText;
  }
  .Success-block__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 152px;
    height: 34px;
    border-radius: 3px;
    background: linear-gradient(
      20.49deg,
      $BlueSecond 18.91%,
      $AquaFirst 150.1%
    );
    color: $White;
    cursor: pointer;
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

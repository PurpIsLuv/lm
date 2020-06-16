<template lang="pug">
  .Success
    img.Success__image(
      src="@/assets/image/CreateProject/Success.svg"
      alt=""
    )
    .Success__title Ваш проект успешно оформлен и находится на рассмотрении!
    .Success__subtitle За статусом проекта следите в личном кабинете.
    button.Success__button Готово
</template>

<script>
export default {
  name: "Success"
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;
    background: $WhiteFirst;
  }
  .Success__title {
    margin: 2rem 0;
    @include afs(32px, 30px, 28px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 42px;
    letter-spacing: 0.03em;
    text-align: center;
    color: $Main;
  }
  .Success__subtitle {
    @include afs(24px, 22px, 20px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 42px;
    text-align: center;
    color: $StatText;
  }
  .Success__button {
    margin-top: 2rem;
    width: 152px;
    height: 34px;
    background: linear-gradient(
      20.49deg,
      $BlueSecond 18.91%,
      $AquaFirst 150.1%
    );
    border: none;
    border-radius: 5px;
    outline: none;
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

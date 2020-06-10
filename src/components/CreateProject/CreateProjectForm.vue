<template lang="pug">
  .CreateProjectForm
    .header
      input.header-inputFile(
        type="file"
        id="cover"
      )
      label.header-cover(for="cover")
        img(src="@/assets/image/CreateProject/Cloud.png")
      .header-params
        .header-params-item
          label.header-params-item__label(for="header__input")
            .label__text Название проекта
            .label__stick |
          input.header-params-item__input(
            type="text"
            id="header__input"
          ) 
        .header-params-item(
          @click="toggleSelect = !toggleSelect"
        )
          .header-params-item__label
            .label__text Отрасль деятельности
            .label__stick |
          .header-params-item-option(v-show="toggleSelect")
            .header-params-item-option__item
              .option__text test1
            .header-params-item-option__item
              .option__text test1
            .header-params-item-option__item
              .option__text test1
            .header-params-item-option__item
              .option__text test1
</template>

<script>
export default {
  name: "CreateProjectForm",
  data() {
    return {
      projectCover: new Object(),
      toggleSelect: false
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin main($maxWidth) {
  .CreateProjectForm {
    padding: 4rem 8rem;
    background: $WhiteFirst;
  }
  //header
  .header {
    display: flex;
    justify-content: space-between;
  }
  .header-inputFile {
    display: none;
  }
  .header-cover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 171px;
    border-radius: 10px;
    background: $White;
    box-shadow: 2px 4px 10px rgba($color: #000000, $alpha: 0.1);
    cursor: pointer;
  }
  .header-params {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .header-params-item {
    display: flex;
    justify-content: space-between;
    width: 570px;
    height: 69px;
    border-radius: 10px;
    background: $White;
    box-shadow: 2px 4px 10px rgba($color: #000000, $alpha: 0.1);
    cursor: pointer;
  }
  .header-params-item__label {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 285px;
    height: 69px;
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    border-radius: 10px 0 0 10px;
    color: $Main;
    cursor: pointer;
  }
  .label__text {
    margin: 0 1rem;
  }
  .label__stick {
    margin-right: 4rem;
    margin-left: auto;
    color: $Support;
  }
  .header-params-item__input,
  .header-params-item__select {
    margin: 0;
    padding: 0;
    width: 310px;
    height: 69px;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    border: none;
    border-radius: 0 10px 10px 0;
    color: $Main;
  }
  .header-params-item__input::placeholder {
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    color: $Main;
  }
  .header-params-item__input:focus,
  .header-params-item__select:focus {
    outline: none;
  }
  .header-params-item-option {
    position: absolute;
    width: 570px;
    height: 207px;
    overflow-y: scroll;
    transform: translateY(69px);
  }
  .header-params-item-option::-webkit-scrollbar {
    width: 20px;
  }
  .header-params-item-option::-webkit-scrollbar-track {
    width: 10px;
    background: linear-gradient(0deg, $White, $White), $WhiteThird;
    border: 1px solid rgba(220, 220, 220, 0.8);
    border-radius: 10px;
  }
  .header-params-item-option::-webkit-scrollbar-thumb {
    background: #1A4B93;
    border: 1px solid rgba(220, 220, 220, 0.8);
    border-radius: 10px;
  }
  .header-params-item-option__item {
    display: flex;
    align-items: center;
    width: 550px;
    height: 69px;
    border-top: solid 1px #E7E7E7;
    border-radius: 10px 0 0 10px;
    background: $White;
    box-shadow: 2px 4px 10px rgba($color: #000000, $alpha: 0.1);
    cursor: pointer;
  }
  .option__text {
    margin: 0 1rem;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
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

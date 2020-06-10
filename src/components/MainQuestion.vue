<template lang="pug">
  .MainQuestion
    .container
      .row
        .title Остались вопросы?
      .row
        .subtitle Заполните заявку, и мы ответим Вам в ближайшее время.
      form(
        @submit.prevent="sendQuestion"
      )
        .form.row
          .info
            input.info__input(
              type="text"
              placeholder="Контактное лицо"
              v-model="name"
            )
            input.info__input(
              type="email"
              placeholder="E-mail"
              v-model="email"
            )
          textarea.message(
            v-model="message"
          )
        .form.row
          .check
            input.checkbox(
              type="checkbox"
              id="checkboxId"
              v-model="checkbox"
            )
            label.checkbox-wrapper(for="checkboxId")
            .license 
              span Я ознакомелен с 
              a.license__link(href="#") политикой конфиденциальности 
              span и согласен на обработку 
              a.license__link(href="#") персональных данных
          input.btn(type="submit")
</template>

<script>
export default {
  name: "MainQuestion",
  data() {
    return {
      name: "",
      email: "",
      checkbox: false,
      message: ""
    };
  },
  methods: {
    sendQuestion() {
      console.log({
        name: this.name,
        email: this.email,
        checkbox: this.checkbox,
        message: this.message
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin main($maxWidth) {
  .MainQuestion {
    padding: 2.5rem 0;
    background: $WhiteFirst;
  }
  .row {
    display: flex;
  }
  .title {
    @include afs(24px, 22px, 20px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 23px;
    color: $Main;
  }
  .subtitle {
    margin: 1rem 0;
    @include afs(16px, 14px, 12px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 26px;
    color: $VioletFirst;
  }
  .form {
    margin: 1rem 0;
    justify-content: space-between;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .info__input {
    padding: 0 1rem;
    width: 500px;
    height: 65px;
    border: none;
    border-radius: 10px;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 450;
    line-height: 24px;
    color: $Main;
    background-color: $White;
    box-shadow: 2px 4px 10px rgba($color: $Black, $alpha: 0.1);
  }
  .info__input:focus {
    outline: none;
  }
  .info__input::placeholder {
    color: $Main;
  }
  .message {
    padding: 1rem;
    max-width: 500px;
    min-width: 500px;
    max-height: 160px;
    min-height: 160px;
    border: none;
    border-radius: 10px;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 450;
    line-height: 24px;
    color: $Main;
    background-color: $White;
    box-shadow: 2px 4px 10px rgba($color: $Black, $alpha: 0.1);
  }
  .message:focus {
    outline: none;
  }
  .check {
    display: flex;
    align-items: center;
  }
  .checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .checkbox + .checkbox-wrapper {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  .checkbox + .checkbox-wrapper::before {
    content: "";
    width: 34px;
    height: 34px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 2px 2px 6px rgba($color: $Black, $alpha: 0.1);
  }
  .checkbox:checked + .checkbox-wrapper::before {
    background-image: url("../assets/image/Question/ok.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
  .license {
    margin: 0 1rem;
    width: 420px;
    @include afs(16px, 14px, 12px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    color: $VioletFirst;
  }
  .license__link {
    color: $VioletFirst;
    text-decoration: underline;
  }
  .btn {
    width: 152px;
    height: 34px;
    border: none;
    border-radius: 3px;
    background: linear-gradient(
      20.49deg,
      $BlueSecond 18.91%,
      $AquaFirst 150.1%
    );
    color: $White;
    cursor: pointer;
  }
  .btn:focus {
    outline: none;
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

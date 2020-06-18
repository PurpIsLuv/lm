<template lang="pug">
  .MainFreelance
    .container
      success(v-if="isShowSuccess")
      .title Проект “Новые технологии”
      .content
        .body
          .body__image
            img(
              src="@/assets/image/Freelance/project-image.png"
              alt=""
            )
          .body__title Задание:
          .body__subtitle {{ task }}
          .body__title Описание:
          .body__subtitle {{ description }}
          .body__title Вознаграждение:
          .body__subtitle {{ price | rubFormatter }}
        form.form(
          @submit.prevent="sendForm"
        )
          .form__title Выберите критерии:
          label.form__item(for="input_1")
            .placeholder Ваше имя:
            input.input(
              id="input_1"
              v-model="name"
              placeholder="Ответить"
            )
          label.form__item(for="input_2")
            .placeholder Сроки выполнения:
            input.input(
              id="input_2"
              v-model="daysOnComplete"
              placeholder="Ответить"
            )
          label.form__item(for="input_3")
            .placeholder Опыт работы:
            input.input(
              id="input_3"
              v-model="experience"
              placeholder="Ответить"
            )
          label.form__item(for="input_4")
            .placeholder Критерий отбора:
            input.input(
              id="input_4"
              v-model="criterion"
              placeholder="Ответить"
            )
          textarea.form__item.textarea__item(
            placeholder="Коментарий:"
          )
          .checkbox-wrapper
            input.checkbox(
              type="checkbox"
              id="checkbox"
              v-model="agree"
            )
            label.checkbox__label(for="checkbox") 
              img(
                src="@/assets/image/Freelance/true.svg"
                alt=""
                v-if="agree"
              )
            .license
              span Я ознакомелен с 
              a.license__link(href="#") политикой конфиденциальности 
              span 
                | и согласен 
                br 
                | на обработку 
              a.license__link(href="#") персональных данных
          .button
            input.button__submit(
              type="submit"
              value="Предложить помощь"
            )
</template>

<script>
import Success from "@/components/Freelance/Success";

export default {
  components: {
    Success
  },
  name: "MainFreelance",
  data() {
    return {
      //перенести в пропс
      task: "Создать логотип",
      description:
        "Вам нужно сделать: на этой стадии критическому анализу подвергается вся информация относительно сроков реализации проекта, объёма привлеченных средств, окупаемости инвестиций, уровня конкуренции. Необходимо рассмотреть все варианты изменения рыночной ситуации и оценить степень их влияния на доходность.",
      price: 7000,
      name: "",
      daysOnComplete: "",
      experience: "",
      criterion: "",
      agree: false,
      isShowSuccess: false
    };
  },
  filters: {
    rubFormatter(number) {
      const formatter = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return formatter.format(number);
    }
  },
  methods: {
    sendForm() {
      if (this.agree == false) {
        alert("Подтвердите согласие");
      } else {
        //запрос
        this.isShowSuccess = !this.isShowSuccess;
      }
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
  .MainFreelance {
    padding: 2rem 0;
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
  .content {
    display: flex;
    justify-content: space-between;
  }
  .body {
    width: 500px;
  }
  .body__image {
    margin-top: 2rem;
    width: 500px;
    height: 252px;
    border-radius: 3px;
    overflow: hidden;
  }
  .body__title {
    margin-top: 2.5rem;
    @include afs(18px, 16px, 14px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 17px;
    letter-spacing: 0.01em;
    color: $Main;
  }
  .body__subtitle {
    margin-top: 0.7rem;
    @include afs(16px, 14px, 12px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 450;
    line-height: 16px;
    color: $StatText;
  }
  //form
  .form {
    margin-top: 2rem;
    padding: 1rem 2rem;
    width: 600px;
    height: 586px;
    border-radius: 3px;
    background: $WhiteFirst;
  }
  .form__title {
    @include afs(24px, 22px, 20px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 600;
    line-height: 31px;
    color: $Main;
  }
  .form__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding: 0 1rem;
    width: 540px;
    height: 40px;
    background: $White;
    border-radius: 3px;
    cursor: pointer;
  }
  .placeholder {
    @include afs(14px, 12px, 10px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 450;
    line-height: 18px;
    color: $SilverThird;
  }
  .input {
    width: 300px;
    @include afs(14px, 12px, 10px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 450;
    line-height: 18px;
    text-align: right;
    border: none;
    outline: none;
    color: $Main;
    &::placeholder {
      font-weight: normal;
      color: $StatText;
      text-decoration-line: underline;
    }
  }
  .form__item.textarea__item {
    align-items: flex-start;
    padding: 1rem 1rem;
    height: 154px;
    font-family: Futura PT;
    font-style: normal;
    font-weight: 450;
    font-size: 14px;
    line-height: 18px;
    color: $SilverThird;
    border: none;
    outline: none;
    resize: none;
  }
  .checkbox-wrapper {
    display: flex;
    margin-top: 0.5rem;
  }
  .checkbox {
    display: none;
  }
  .checkbox__label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    background: $White;
    border-radius: 3px;
    box-shadow: 2px 2px 6px rgba($color: $Black, $alpha: 0.1);
    cursor: pointer;
  }
  .license {
    margin-left: 1rem;
    @include afs(16px, 14px, 12px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    color: $StatText;
  }
  .license__link {
    font-size: 16px;
    color: $StatText;
    text-decoration-line: underline;
  }
  .button {
    margin-top: 0.5rem;
    margin-left: auto;
    width: 152px;
    height: 34px;
  }
  .button__submit {
    width: 152px;
    height: 34px;
    @include afs(14px, 14px, 14px);
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

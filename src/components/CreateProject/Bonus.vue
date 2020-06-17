<template lang="pug">
  .Bonus
    .Bonus-header(v-if="bonusArr.length > 0")
      .Bonus-header__item Сумма ивнестиций
      .Bonus-header__item Вознаграждение
    ul.Bonus-body
      li.Bonus-body__item(
        v-for="(item, index) of bonusArr" :key="index"
      )
        .element
          input.element__input(
            autocomplete="off"
            v-model="item.total"
            @change="formatterTotal(index)"
            placeholder="Введите сумму инвестиций"
            
          )
        .element
          input.element__input(
            autocomplete="off"
            v-model="item.bonus"
            placeholder="Введите вознаграждение"
            @change="transferBonusArr"
          )
          .element__button(
            @click="removeBonus(index)"
          )
            img.element__img(
              src="@/assets/image/CreateProject/Remove.svg"
              alt=""
            )
    .Bonus-footer
      .Bonus-add
        button.Bonus-add__button(
          @click.prevent="addBonus"
          id="buttonId"
        )
          img(
            src="@/assets/image/CreateProject/Add.svg"
            alt=""
          )
        label.Bonus-add__label(for="buttonId") Добавить другое вознаграждение
      .Bonus-noAdd(
        :class="{ opacity: checkRadio }"
      )
        .Bonus-noAdd__wrapper(
          @click="noAddBonus"
          id="radio-wrapper"
        )
          .Bonus-noAdd__check(
            :class="{ checked: checkRadio }"
          )
        .Bonus-noAdd__label(
          @click="noAddBonus"
        ) Не вознаграждать
</template>

<script>
export default {
  name: "Bonus",
  data() {
    return {
      bonusArr: [],
      checkRadio: false
    };
  },
  methods: {
    formatterTotal(index) {
      const formatter = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      this.bonusArr[index].total = formatter.format(
        Number.parseInt(this.bonusArr[index].total)
      );
    },
    removeBonus(index) {
      this.bonusArr.splice(index, 1);
    },
    addBonus() {
      if (this.checkRadio == false) {
        const defaultBonusObj = { total: "", bonus: "" };
        this.bonusArr.push(defaultBonusObj);
      } else {
        alert("Ошибка!!!");
      }
    },
    noAddBonus() {
      this.checkRadio = !this.checkRadio;
      this.checkRadio == true
        ? this.bonusArr.splice(0, this.bonusArr.length)
        : () => {};
    },
    transferBonusArr() {
      this.$emit("changeData", {
        key: "bonusArr",
        value: this.bonusArr
      });
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
  .Bonus {
    margin: 3rem 0;
  }
  //header
  .Bonus-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 770px;
    height: 69px;
    border-radius: 10px 10px 0 0;
    background: $White;
    box-shadow: 2px 4px 10px rgba($color: $Black, $alpha: 0.1);
  }
  .Bonus-header__item {
    margin-left: 2rem;
    width: 50%;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    color: $StatText;
  }
  .Bonus-header__item:first-child {
    border-right: solid 1px;
  }
  //body
  .Bonus-body {
    list-style-type: none;
  }
  .Bonus-body__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 770px;
    height: 69px;
    background: $White;
    box-shadow: 2px 4px 10px rgba($color: $Black, $alpha: 0.1);
  }
  .Bonus-body__item:last-child {
    border-radius: 0 0 10px 10px;
  }
  .element {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2rem;
    margin-left: 2rem;
    width: 50%;
  }
  .element__input {
    @include afs(18px, 16px, 14px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 28px;
    border: none;
    color: $Main;
  }
  .element__input:focus {
    outline: none;
  }
  .element__input::placeholder {
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: $StatText;
    opacity: 0.5;
  }
  .element__button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
  }
  .element__img {
    display: none;
    animation: defaultAnimate 0.5s;
  }
  .Bonus-body__item:hover .element__img {
    display: block;
    animation: defaultAnimate 0.5s;
  }
  @keyframes defaultAnimate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  //footer
  .Bonus-footer {
    margin: 2rem 0;
  }
  .Bonus-add {
    display: flex;
    align-items: center;
  }
  .Bonus-add__button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }
  .Bonus-add__button:focus {
    outline: none;
  }
  .Bonus-add__label {
    margin: 0 1.5rem;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    color: $Main;
    cursor: pointer;
  }
  .Bonus-add__label:hover {
    text-decoration-line: underline;
  }
  .Bonus-noAdd {
    display: flex;
    align-items: center;
    margin: 2rem 0;
    opacity: 0.5;
    transition: 0.3s;
  }
  .Bonus-noAdd:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
  .Bonus-noAdd.opacity {
    opacity: 1;
  }
  .Bonus-noAdd__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border: solid 3px $Main;
    border-radius: 20px;
    cursor: pointer;
  }
  .Bonus-noAdd__check {
    display: none;
    width: 18px;
    height: 18px;
    background: $Main;
    border-radius: 20px;
  }
  .Bonus-noAdd__check.checked {
    display: block;
    opacity: 1;
  }
  .Bonus-noAdd__label {
    margin: 0 1.5rem;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    color: $Main;
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

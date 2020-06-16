<template lang="pug">
  .BasicData
    .row
      .item(ref="item")
        label.item__label.description(for="textarea")
          .label__text Краткое описание
          .label__stick .
        .item__textarea(
          id="textarea"
          ref="textareaWrapper"
          @keyup="changeTextArea"
        )
          .textarea(
            contentEditable="true"
            ref="textarea"
          )
    .row
      .addImage
        label.addImage__label(for="addImageId")
          span Добавить фото/видео проекта
          span (max 5 МБ, до 10 файлов)
        label.addImage__button(for="addImageId") Выбрать файл
          input.addImage__input(
            type="file"
            id="addImageId"
            accept=".png, .jpg, .jpeg"
            multiple
            @change="loadFiles"
          )
    .row
      ul.loadImage
        li.loadImage__wrapper(
          v-for="(item, index) of loadImages" :key="index"
        )
          img.loadImage__file(
            :src="item"
            alt=""
          )
          .loadImage__delete(
            @click="deleteImage(index)"
          )
            img(
              src="@/assets/image/CreateProject/Delete-image.svg"
              alt=""
            )
    .row
      .slider-buttons(v-if="loadImages.length > 0")
        button.slider-buttons__left(
          @click.prevent="changeSlider(-1)"
        )
          img(
            src="@/assets/image/CreateProject/Left.svg"
            alt=""
          )
        button.slider-buttons__right(
          @click.prevent="changeSlider(1)"
        )
          img(
            src="@/assets/image/CreateProject/Right.svg"
            alt=""
          )
    .row
      .item(@click="toggleSelect = !toggleSelect")
        .item__label
          .label__text Страна реализации
          .label__stick .
        .item__selected {{ currentCountry }}
        ul.options(
          v-show="toggleSelect"
          @click="toggleSelect = !toggleSelect"
        )
          li.options__item(
            v-for="(item, index) of parentData.countrys" :key="index"
            @click="changeCountry(index)"
          )
            .options__text {{ item }}
    .row
      .item
        label.item__label(for="budget")
          .label__text Требуемый бюджет
          .label__stick .
        input.item__budget(
          type="text"
          id="budget"
          autocomplete="off"
          v-model="budget"
          @change="changeBudget"
        )
    .row
      calendar(
        @updCalendar="transferCalendarDate"
      )
</template>

<script>
import Calendar from "@/components/CreateProject/Calendar";

export default {
  props: {
    parentData: new Object()
    /**
     * parentData: {
     *    countrys: new Array()
     * }
     */
  },
  components: {
    Calendar
  },
  name: "BasicData",
  data() {
    return {
      currentCountry: "",
      toggleSelect: false,
      budget: "",
      loadImages: []
    };
  },
  methods: {
    closeSelect() {
      if (this.toggleSelect == true) {
        this.toggleSelect = !this.toggleSelect;
      }
    },
    //все изменения в текстареа
    changeTextArea() {
      this.resizeTextarea();
      this.updTextAreaValue();
    },
    //изменение значения в текстареа
    updTextAreaValue() {
      const textarea = this.$refs["textarea"];
      this.$emit("changeData", {
        key: "shortDescription",
        value: textarea.innerHTML
      });
    },
    /**
     *  изменение высоты в текстареа
     **/
    resizeTextarea() {
      const textareaWrapper = this.$refs["textareaWrapper"];
      const textarea = this.$refs["textarea"]; //сам инпут
      const item = this.$refs["item"]; //wrapper для инпута
      textareaWrapper.style.height =
        textarea.getBoundingClientRect().height + 41 + "px";
      item.style.height = textareaWrapper.getBoundingClientRect().height + "px";
    },
    /**
     *  изменение текущей страны для селекта
     **/
    changeCountry(index) {
      this.currentCountry = this.parentData.countrys[index];
      this.$emit("changeData", {
        key: "country",
        value: this.currentCountry
      });
    },
    /**
     *  все изменения в инпуте с бюджетом
     **/
    changeBudget() {
      this.formatterBudget();
      this.$emit("changeData", {
        key: "budget",
        value: this.budget
      });
    },
    /**
     *  преобразование строки в число с валютой
     **/
    formatterBudget() {
      const formatter = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      this.budget = formatter.format(Number.parseInt(this.budget));
    },
    /**
     *  загрузка файлов в общий массив
     **/
    loadFiles(event) {
      this.loadImages = [];
      event.srcElement.files.forEach(file => {
        const fileURL = URL.createObjectURL(file);
        this.loadImages.push(fileURL);
      });
      //перенос в родительский компонент
      this.$emit("changeData", {
        key: "loadImages",
        value: this.loadImages
      });
    },
    /**
     *  слайдер
     **/
    changeSlider(step) {
      alert(step);
    },
    /**
     *  удаление картинки
     **/
    deleteImage(index) {
      this.loadImages.splice(index, 1);
      //перенос в родительский компонент
      this.$emit("changeData", {
        key: "loadImages",
        value: this.loadImages
      });
    },
    /**
     *  передача даты из календаря
     **/
    transferCalendarDate({ key, value }) {
      this.$emit("changeData", {
        key,
        value
      });
    }
  },
  created() {
    this.$parent.$on("closeSelectEvent", this.closeSelect);
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
  .BasicData {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;
  }
  .item {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    width: 770px;
    height: 69px;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    border-radius: 10px;
    background: $White;
    color: $Main;
    box-shadow: 2px 4px 10px rgba($color: #000000, $alpha: 0.1);
  }
  .item__label {
    display: flex;
    align-items: center;
    padding: 0;
    width: 200px;
  }
  .item__label.description {
    margin: 20px 0;
    align-items: flex-start;
  }
  .label__text {
    margin-left: 1rem;
  }
  .label__stick {
    margin-left: auto;
    color: $White;
    border-right: solid 1px $Support;
  }
  .item__textarea {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    padding: 0;
    width: 540px;
    text-align: left;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    border: none;
    overflow: hidden;
    color: $Main;
    resize: none;
  }
  .textarea {
    display: inline-block;
    min-height: 18px;
    width: 540px;
    border: none;
    outline: none;
  }
  .item__textarea:focus {
    outline: none;
  }
  .addImage {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    width: 770px;
  }
  .addImage__label {
    margin-left: 1rem;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    cursor: pointer;
  }
  .addImage__label > :first-child {
    color: $Main;
  }
  .addImage__label > :last-child {
    color: $StatText;
  }
  .addImage__label > :first-child:hover {
    border-bottom: solid 1px $Main;
  }
  .addImage__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 152px;
    height: 34px;
    font-family: Futura PT;
    line-height: 28px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(
      20.49deg,
      $BlueSecond 18.91%,
      $AquaFirst 150.1%
    );
    color: $White;
    cursor: pointer;
  }
  .addImage__input {
    display: none;
  }
  .loadImage {
    display: flex;
    width: 770px;
  }
  .loadImage__wrapper {
    position: relative;
    margin-right: 30px;
    width: 170px;
    height: 116px;
    border-radius: 10px;
    overflow: hidden;
  }
  .loadImage__wrapper:last-child {
    margin-right: 0;
  }
  .loadImage__file {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s;
  }
  .loadImage__wrapper:hover .loadImage__file {
    opacity: 0.5;
    transition: 0.3s;
  }
  .loadImage__delete {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    justify-content: center;
    align-items: center;
    width: 63px;
    height: 63px;
    background: none;
    border: 4px solid $Main;
    border-radius: 60px;
    opacity: 0;
    transition: 0.3s;
    cursor: pointer;
  }
  .loadImage__wrapper:hover .loadImage__delete {
    display: flex;
    opacity: 1;
    transition: 0.3s;
  }
  .slider-buttons {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    width: 770px;
  }
  .slider-buttons__left,
  .slider-buttons__right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 34px;
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
  }
  .slider-buttons__left {
    margin-left: auto;
    background: $WhiteFirst;
  }
  .slider-buttons__right {
    background: linear-gradient(
      180deg,
      $White 0%,
      rgba($color: $WhiteThird, $alpha: 0.53) 100%
    );
  }
  .item__selected {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 570px;
    height: 69px;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }
  .options {
    position: absolute;
    transform: translateY(69px);
    margin: 0;
    padding: 0;
    width: 770px;
    height: 207px;
    list-style-type: none;
    overflow-y: scroll;
    z-index: 2;
  }
  .options::-webkit-scrollbar {
    width: 20px;
  }
  .options::-webkit-scrollbar-track {
    background: linear-gradient(0deg, $White, $White), $WhiteThird;
    border: 1px solid rgba($color: $WhiteThird, $alpha: 0.8);
    border-radius: 10px;
  }
  .options::-webkit-scrollbar-thumb {
    background: $Main;
    border: 1px solid rgba($color: $WhiteThird, $alpha: 0.8);
    border-radius: 10px;
  }
  .options__item {
    display: flex;
    align-items: center;
    width: 750px;
    height: 69px;
    border-top: solid 1px $Support;
    border-radius: 10px 0 0 10px;
    background: $White;
    box-shadow: 2px 4px 10px rgba($color: $Black, $alpha: 0.1);
    cursor: pointer;
  }
  .options__text {
    margin: 0 1rem;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    color: $StatText;
  }
  .item__budget {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    width: 570px;
    height: 30px;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    border: none;
    color: $Main;
    text-align: center;
  }
  .item__budget:focus {
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

<template lang="pug">
  .Details
    .description
      .description-header
          label.description__label(for="description") Полное описание
          ul.description-elements
            li.description-elements__item(
              v-for="(item, index) of descriptionStyles" :key="index"
              @click="changeDescriptionStyle(index)"
            )
              img.item__img(
                :src="require(`@/assets/image/CreateProject/${item}.svg`)"
                alt=""
              )
            .addImage__container
              img.item__img(src="@/assets/image/CreateProject/AddFile.svg" alt="")
              input.addImage__input(
                type="file"
                id="addImageId"
                accept=".png, .jpg, .jpeg"
                multiple
                @change="loadFiles"
              )
      .description-body
        .description__textarea(
          contenteditable=true
          id="description"
          ref="description"
          ) {{ description }}
</template>

<script>
export default {
  props: {
    parentData: new Object()
  },
  name: "Details",
  data() {
    return {
      descriptionStyles: [
        "Bold",
        "Italic",
        "Underline",
        "Text-left",
        "Text-center",
        "Text-right",
        "Text-justify",
        "List"
      ],
      description: this.parentData.description,
      loadImages: []
    };
  },
  mounted() {
    this.$refs["description"].innerHTML = this.description;
  },
  methods: {
    /**
     * логика иконок .svg
     */
    changeDescriptionStyle(index) {
      const description = this.$refs["description"];
      //логика для Bold Italic Underline
      if (index >= 0 && index < 3) {
        description.classList.toggle(this.descriptionStyles[index]);
      }
      //Логика для Text-left, Text-right и тд
      if (index >= 3 && index < 7) {
        description.classList.contains(this.descriptionStyles[index])
          ? () => {}
          : this.addTextAlignDescription(index, description);
      }

      //Логика для List
      if (index === 7) {
        //Создаем список
        const list = document.createElement("ul");
        const item = document.createElement("li");
        const br = document.createElement("br");

        //FIX under
        list.style.padding = "0";
        list.style.margin = "5px 0";

        //Собираем
        list.append(item);
        description.append(list);
        description.append(br);
      }
    },
    /**
     * Логика для картинок
     */
    loadFiles(event) {
      // Загрузка фото
      this.loadImages = [];
      event.srcElement.files.forEach(file => {
        const fileURL = URL.createObjectURL(file);
        this.loadImages.push(fileURL);
      });

      //Создание img
      const photo = document.createElement("img");
      photo.src = this.loadImages[0];
      photo.alt = "";
      photo.style.width = "30%";

      //Вставка в текст
      this.$refs["description"].append(photo);
    },
    /**
     * Добавление 1-го из 4 стилей
     */
    addTextAlignDescription(index, element) {
      for (let i = 3; i < 7; i++) {
        element.classList.remove(this.descriptionStyles[i]);
      }
      element.classList.add(this.descriptionStyles[index]);
    },
    /**
     * Передача полного описания
     */
    transferDescription() {
      this.$emit("changeData", {
        key: "longDescription",
        value: this.$refs["description"].innerHTML
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
  .Details {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  .row {
    display: flex;
  }
  .description {
    cursor: pointer;
  }
  .description-header {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    width: 770px;
    height: 69px;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    border-radius: 10px 10px 0 0;
    background: $White;
    color: $Main;
    box-shadow: 2px 4px 10px rgba($color: #000000, $alpha: 0.1);
  }
  .description-elements {
    display: flex;
    align-items: center;
    margin-left: auto;
    list-style-type: none;
  }
  .description-elements__item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem;
  }
  .item__button {
    border: none;
  }
  .item__button:focus {
    outline: none;
  }
  .addImage__container {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
  }
  .addImage__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .description-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 770px;
    height: 400px;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    border-radius: 0 0 10px 10px;
    background: $White;
    color: $Main;
    box-shadow: 2px 4px 10px rgba($color: #000000, $alpha: 0.1);
  }
  .description__textarea {
    width: 100%;
    height: 100%;
    padding: 25px;
    cursor: text;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    color: $Main;
    overflow-y: scroll;
  }
  .description__textarea:focus {
    outline: none;
  }
  .Bold {
    font-weight: bold;
  }
  .Italic {
    font-style: italic;
  }
  .Underline {
    text-decoration: underline;
  }
  .Text-left {
    text-align: left;
  }
  .Text-center {
    text-align: center;
  }
  .Text-right {
    text-align: right;
  }
  .Text-justify {
    text-align: justify;
  }
  .List {
    list-style-type: disc;
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

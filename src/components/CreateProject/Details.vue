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
      .description-body
        textarea.description__textarea(
          id="description"
          ref="description"
        )
</template>

<script>
export default {
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
        "List",
        "AddFile"
      ]
    };
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
    },
    /**
     * Добавление 1-го из 4 стилей
     */
    addTextAlignDescription(index, element) {
      for (let i = 3; i < 7; i++) {
        element.classList.remove(this.descriptionStyles[i]);
      }
      element.classList.add(this.descriptionStyles[index]);
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
    width: 720px;
    height: 350px;
    border: none;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    color: $Main;
    resize: none;
    overflow: hidden;
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

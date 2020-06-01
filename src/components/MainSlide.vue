<template lang="pug">
  .container.slide
    .image-wrapper
      img.image(:src="this.slides[slideId].image" alt="")
    p.title {{ this.slides[slideId].title }}
</template>

<script>
export default {
  props: {
    slideId: {
      type: Number,
      required: true,
      default: 1
    }
  },
  data() {
    return {
      slides: [
        {
          title: "Способствуем коллективному сотрудничеству людей",
          image: require("@/assets/image/MainSlider/slide-1.png")
        },
        {
          title: "Стань инвестром и помоги в развитии интересных проектов!",
          image: require("@/assets/image/MainSlider/slide-2.png")
        },
        {
          title: "Стань разработчиком - присоеденись к успешной команде!",
          image: require("@/assets/image/MainSlider/slide-3.png")
        },
        {
          title: "Размести свое предложение и получи поддержку и результат!",
          image: require("@/assets/image/MainSlider/slide-4.png")
        }
      ]
    };
  },
  mounted() {

  }
};
</script>

<style lang="scss" scoped>
// Slide
.image-wrapper {
  position: relative;
  width: 388px;
  height: 388px;
  border-radius: 10px;
  margin-left: 200px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
}
.image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  border-radius: 10px;
}
.title {
  margin-left: 50px;
  font-size: 36px;
  font-weight: bold;
  color: $Main;
}
</style>

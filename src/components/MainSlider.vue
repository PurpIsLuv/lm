<template lang="pug">
  .container.main
    img.bg(src="@/assets/image/Header/bg.png" alt="")
    .info
      p.description
        | Мы рады приветстовать Вас
        br
        | на нашей краудфандинговой платформе
      h1.title Лидеры Управления!
      p.label
        | Пожалуйста,
        br
        | выберите цель своего посещения:
      router-link.already(to="/") У меня уже есть аккаунт
      form.target_form(@submit.prevent="submit")
        .target_item
          input.target_input(type="radio" id="investor" v-model="target" value="investor")
          label.target_name(for="investor") Инвестор
        .target_item
          input.target_input(type="radio" id="developer" v-model="target" value="developer")
          label.target_name(for="developer") Разработчик
        .submit
          input.submit_btn(type="submit" value="Войти")
          input.submit_btn(type="submit" value="Регистрация")
    .slider
      .icons
        img.slider-icon(src="@/assets/svg/diagram.svg" alt="")
        img.slider-icon(src="@/assets/svg/team.svg" alt="")
        img.slider-icon(src="@/assets/svg/graph.svg" alt="")
      .controls
        button.control_btn(v-for="btn in 4" @click="changeSlide(btn-1)" :class="{ active: slideId === btn-1}") {{ `0${btn}` }}
        button.control_btn.next_arrow(@click="nextSlide")
          img(src="@/assets/svg/slide-arrow.svg" alt="")
      main-slide(:slideId="slideId" @click="changeSlide(btn)") btn
</template>

<script>
import MainSlide from "./MainSlide";

export default {
  data() {
    return {
      target: "investor",
      slideId: 0
    };
  },
  components: {
    MainSlide
  },
  methods: {
    submit() {
      console.log(this.target);
    },
    changeSlide(id) {
      this.slideId = id;
    },
    nextSlide() {
      if (this.slideId >= 3) {
        this.slideId = 0;
      } else {
        this.slideId++;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
// Main BG
.bg {
  position: absolute;
  right: -390px;
  top: -98px;
  z-index: -1;
}
// Main
.main {
  display: flex;
  justify-content: space-between;
  padding-top: 35px;
  padding-bottom: 110px;
}
// Main Info
.info {
  min-width: 39%;
}
.description {
  color: $Third;
  font-size: 24px;
}
.title {
  margin-top: 15px;
  color: $Main;
  font-size: 43px;
  font-weight: 600;
}
.label {
  margin-top: 50px;
  color: $Third;
  font-size: 24px;
  margin-bottom: 10px;
}
.already {
  text-decoration: underline;
  color: $Main;
  font-weight: 450;
  font-size: 23px;
}
.already:hover {
  text-decoration: none;
}
// Main Form
.target_form {
  margin-top: 50px;
}
.target_item {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }
}
.target_input {
  margin: 0 20px 0 0;
  border-radius: 50%;
  transition: 0.25s;
}
.target_input:checked {
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
}
.target_name {
  color: $SliderBtn;
  font-size: 24px;
  font-weight: 600;
  transition: 0.25s;
}
.target_input:checked + .target_name {
  color: $Main;
}
.submit {
  margin-top: 60px;
  display: flex;
  align-items: center;
}
.submit_btn {
  font-size: 18px;
  color: $White;
  padding: 15px;
  min-width: 185px;
  margin-right: 37px;
  border-radius: 3px;
  background: linear-gradient(22.11deg, #4560fe 18.91%, #50cdf3 150.1%);
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
}
// Main Slider
.slider {
  width: 61%;
  position: relative;
}
.slide {
  width: 100%;
}
// Controls
.controls {
  position: absolute;
  top: 0;
  left: 200px;
  display: flex;
  transform: translateX(-100%);
  flex-direction: column;
  align-items: center;
  padding-right: 35px;
  z-index: 9;
}
.control_btn {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: $Support;
  font-size: 16px;
  margin-bottom: 30px;
  transition: 0.25s;
  &:hover {
    color: $SliderBtn;
  }
}
.control_btn.active {
  color: $SliderBtn;
}
// Icons
.icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slider-icon {
  position: absolute;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: -1;
  &:nth-child(1) {
    padding: 23px;
    width: 34px;
    bottom: 190px;
    left: 50px;
  }
  &:nth-child(2) {
    padding: 23px 25px;
    width: 62px;
    bottom: 100px;
    right: -60px;
  }
  &:nth-child(3) {
    padding: 48px 45px;
    width: 74px;
    top: 62px;
    right: -145px;
  }
}
</style>

<template lang="pug">
  .MainCreateProject(
    @mouseup="closeSelect"
  )
    .container
      .title(
        :class="{ default__opacity: currentStep == 3 }"
      ) Создать проект 
      .subtitle(
        :class="{ default__opacity: currentStep == 3 }"
      ) Заполни форму о проекте  и запусти свою компанию
      form.CreateProjectForm
        .header(
          :class="{ default__opacity: currentStep == 3 }"
        )
          input.header-inputFile(
            type="file"
            accept=".png, .jpg, .jpeg"
            id="cover"
            @change="downloadCover"
            :disabled="currentStep == 3"
          )
          label.header-cover(for="cover")
            img.header-cover__img(
              src="@/assets/image/CreateProject/Cloud.png"
              alt=""
              ref="cover"
            )
          .header-params
            .header-params-item
              label.header-params-item__label(for="header__input")
                .label__text Название проекта
                .label__stick 
              input.header-params-item__input(
                type="text"
                autocomplete="off"
                id="header__input"
                :disabled="currentStep == 3"
                v-model="projectName"
              ) 
            .header-params-item(
              @click="toggleSelect = !toggleSelect"
            )
              .header-params-item__label
                .label__text Отрасль деятельности
                .label__stick 
              .label__selected {{ currentIndustry }}
              transition(name="option-transition")
                ul.header-params-item-option(
                  v-show="toggleSelect"
                  @click="toggleSelect = !toggleSelect"
                )
                  li.header-params-item-option__item(
                    v-for="(item, index) of industryArr" :key="index"
                    @click="changeIndustry(index)"
                  )
                    .option__text {{ item }}
        .body
          ul.titles(ref="titles")
            li.titles__item(
              v-for="(item, index) of steps" :key="index"
              :ref="'step-' + index"
            ) {{ item }}
          component(
            :is="stepsComponent[currentStep]"
            :parentData="parentData(currentStep)"
            @changeData="updateData"
          ) 
        .footer(
          :class="{ default__opacity: currentStep == 3 }"
        )
          .prevStep-wrapper(
            v-if="currentStep != 0"
            @click="prevStep()"
            :disabled="currentStep == 3"
          )
            .prevStep Назад
          button.nextStep(
            @click.prevent="nextStep()"
            :disabled="currentStep == 3"
          ) Далее
</template>

<script>
import BasicData from "@/components/CreateProject/BasicData";
import Details from "@/components/CreateProject/Details";
import Bonus from "@/components/CreateProject/Bonus";
import Success from "@/components/CreateProject/Success";

export default {
  components: {
    BasicData,
    Details,
    Bonus,
    Success
  },
  name: "CreateProjectForm",
  data() {
    return {
      toggleSelect: false,
      //Перенести в пропс
      industryArr: ["Медицина", "Религия", "Образование", "Новые технологии"],
      steps: ["Основные данные", "Детали", "Вознаграждение"],
      stepsComponent: [BasicData, Details, Bonus, Success],
      currentStep: 0,
      //данные формы
      coverImage: new Object(), //обложка
      projectName: "", //название проекта
      currentIndustry: "", //отрасль деятельности
      shortDescription: "", // короткое описание
      country: "", //страна
      choiceDate: "", // срок исполнения
      longDescription: "", // полное описание
      bosusArr: [] //бонусы
    };
  },
  methods: {
    /**
     * Скрытие селекта по нажатию вне селекта
     */
    closeSelect() {
      if (this.toggleSelect == true) {
        this.toggleSelect = !this.toggleSelect;
      }
      this.$emit("closeSelectEvent");
    },
    /**
     * Загрузка обложки
     */
    downloadCover(e) {
      this.coverImage = URL.createObjectURL(e.srcElement.files[0]);
      this.$refs.cover.src = this.coverImage;
    },
    /**
     *  Изменение отрасли деятельности
     */
    changeIndustry(index) {
      this.currentIndustry = this.industryArr[index];
    },
    /**
     *  Стилизация заголовка шага
     */
    styledCurrentStep(index) {
      if (this.currentStep != 3) {
        this.$refs[`step-${index}`][0].classList.add("active");
      }
    },
    /**
     *  Следующий шаг
     */
    nextStep() {
      this.$refs[`step-${this.currentStep}`][0].classList.remove("active"); //Удаление класса у пред.шага
      this.currentStep++; //след шаг
      this.styledCurrentStep(this.currentStep);
      if (this.currentStep == 3) {
        //тут post
        alert("Request");
      }
    },
    prevStep() {
      this.$refs[`step-${this.currentStep}`][0].classList.remove("active");
      this.currentStep--;
      this.styledCurrentStep(this.currentStep);
    },
    //данные для передечи в дочерние компоненты
    parentData(currentStep) {
      switch (currentStep) {
        case 0:
          return {
            countrys: ["Россия", "Абхазия", "Австралия", "Австрия"]
          };
        case 1:
          return {
            description: this.longDescription
          };
      }
    },
    //обновление данных из дочернего компонента
    updateData(obj) {
      if (obj.key == "shortDescription") {
        this.shortDescription = obj.value;
      } else if (obj.key == "country") {
        this.country = obj.value;
      } else if (obj.key == "choiceDate") {
        this.choiceDate = obj.value;
      } else if (obj.key == "longDescription") {
        this.longDescription = obj.value;
      } else if (obj.key == "bosusArr") {
        this.bosusArr = obj.value;
      }
      // DEBUG
      // console.log({
      //   coverImage: this.coverImage,
      //   projectName: this.projectName,
      //   industry: this.currentIndustry,
      //   shortDescription: this.shortDescription,
      //   country: this.country,
      //   choiceDate: this.choiceDate,
      //   longDescription: this.longDescription,
      //   bosusArr: this.bosusArr
      // });
    }
  },
  mounted() {
    this.styledCurrentStep(this.currentStep);
  }
};
</script>

<style lang="scss" scoped>
@mixin main($maxWidth) {
  .default__opacity {
    opacity: 0.5;
  }
  .MainCreateProject {
    padding: 3rem 3rem;
  }
  .title {
    @include afs(32px, 30px, 28px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 31px;
    color: $Main;
  }
  .subtitle {
    margin: 2rem 0;
    @include afs(24px, 22px, 20px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 31px;
    color: $SilverThird;
  }
  .CreateProjectForm {
    padding: 4rem 11.5rem;
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
    position: relative;
    width: 170px;
    height: 171px;
    border-radius: 10px;
    background: $White;
    box-shadow: 2px 4px 10px rgba($color: #000000, $alpha: 0.1);
    overflow: hidden;
    cursor: pointer;
  }
  .header-cover__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    margin: 1.3rem 0;
    padding: 0;
    width: 285px;
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
    border-right: solid 1px $Support;
  }
  .header-params-item__input {
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
    outline: none;
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
  .label__selected {
    display: flex;
    align-items: center;
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
  .option-transition-enter-active,
  .option-transition-enter-leave {
    animation: option-transition-animate 0.5s;
  }
  @keyframes option-transition-animate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .header-params-item-option {
    position: absolute;
    transform: translateY(69px);
    margin: 0;
    padding: 0;
    width: 570px;
    height: 207px;
    overflow-y: scroll;
    z-index: 2;
  }
  .header-params-item-option::-webkit-scrollbar {
    width: 20px;
  }
  .header-params-item-option::-webkit-scrollbar-track {
    background: linear-gradient(0deg, $White, $White), $WhiteThird;
    border: 1px solid rgba($color: $WhiteThird, $alpha: 0.8);
    border-radius: 10px;
  }
  .header-params-item-option::-webkit-scrollbar-thumb {
    background: $Main;
    border: 1px solid rgba($color: $WhiteThird, $alpha: 0.8);
    border-radius: 10px;
  }
  .header-params-item-option__item {
    display: flex;
    align-items: center;
    width: 550px;
    height: 69px;
    border-top: solid 1px $Support;
    border-radius: 10px 0 0 10px;
    background: $White;
    box-shadow: 2px 4px 10px rgba($color: $Black, $alpha: 0.1);
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
  //body
  .body {
    margin-top: 3rem;
  }
  .titles {
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .titles__item {
    padding: 1rem 3rem;
    @include afs(24px, 22px, 20px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 23px;
    letter-spacing: 0.01em;
    border-bottom: 1px solid $SilverSeventh;
    color: $Main;
    opacity: 0.5;
  }
  .titles__item.active {
    border-bottom: 5px solid $Main;
    opacity: 1;
  }
  //footer
  .footer {
    display: flex;
  }
  .prevStep-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 152px;
    height: 34px;
    background: linear-gradient(
      20.49deg,
      $BlueSecond 18.91%,
      $AquaFirst 150.1%
    );
    border-radius: 5px;
    cursor: pointer;
  }
  .prevStep {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 148px;
    height: 30px;
    border-radius: 4px;
    background: $WhiteFirst;
    color: $BlueSecond;
  }
  .nextStep {
    margin-left: auto;
    width: 152px;
    height: 34px;
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
  .nextStep:focus,
  .prevStep:focus {
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

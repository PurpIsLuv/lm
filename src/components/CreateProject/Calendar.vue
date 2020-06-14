<template lang="pug">
  .Calendar
    .item(
      @click="toggleCalendar = !toggleCalendar"
      :class="{ borderRadius: !toggleCalendar }"
    )
      .item__label
        .label__text Срок исполнения
        .label__stick 
      .item__date 
        .item__children {{ choiceDate | filterDay }}
        span /
        .item__children {{ choiceDate | filterMonth }}
        span /
        .item__children {{ choiceDate | filterYear }}
    .Calendar-body(
      v-if="toggleCalendar"
    )
      .months
        button.months__btn(
          @click.prevent="toogleMonth(-1)"
        )
          img(
            src="@/assets/image/CreateProject/Arrow.svg"
            alt=""
          )
        .months__info {{ months[currentDate.getMonth()] }} {{ currentDate.getYear() - 100 }}
        button.months__btn(
          @click.prevent="toogleMonth(1)"
        )
          img.transform__img(
            src="@/assets/image/CreateProject/Arrow.svg"
            alt=""
          )
      .week
        .week__item(
          v-for="(item, index) of dayOfTheWeek" 
          :key="index"
        ) {{ item }}
      .days
        .days__item(
          v-for="(day, index) of arrRenderCalendar" 
          :class="{ noVisible: day == 0, currentDate: currentDate.getDate() == day }"
          @click="updChoiceDate(day)"
        ) {{ day }}
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      toggleCalendar: false,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      dayOfTheWeek: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      currentDate: new Date(),
      currentDayOfTheWeek: "",
      currentIndexDayOfTheWeek: new Number(),
      currentDayCountMonth: new Number(),
      arrRenderCalendar: [],
      choiceDate: new Date()
    };
  },
  filters: {
    /**
     * Фильтрация даты
     */
    filterDay(date) {
      return date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
    },
    filterMonth(date) {
      return date.getMonth() + 1 >= 10
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1);
    },
    filterYear(date) {
      return date.getYear() - 100;
    }
  },
  methods: {
    /**
     * Получение сегодняшнего дня недели
     */
    getDayOfTheWeek(date) {
      return String(date)
        .slice(0, 3)
        .toUpperCase();
    },
    /**
     * Получение индекса сегодняшнего дня недели
     */
    getCurrentIndexDayOfTheWeek() {
      return this.dayOfTheWeek.findIndex((el, index) => {
        if (el == this.currentDayOfTheWeek) {
          return index + 1;
        }
      });
    },
    /**
     * Получение индекса 1го дня месяца
     */
    getIndexFirstDayOfTheMonth() {
      const currentDay = this.currentDate.getDate() % 7;
      if (currentDay <= this.currentIndexDayOfTheWeek) {
        return this.currentIndexDayOfTheWeek - currentDay + 1;
      } else if (currentDay > this.currentIndexDayOfTheWeek) {
        return this.currentIndexDayOfTheWeek + 8 - currentDay;
      }
    },
    /**
     * Кол-во дней в текущем месяце
     */
    getDayCount() {
      return (
        33 -
        new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
          33
        ).getDate()
      );
    },
    /**
     * Обновление массива для календаря
     */
    updArrRenderCalendar() {
      const length = this.indexFirstDayOfTheMonth + this.getDayCount();
      for (let i = 0; i < length; i++) {
        if (i < this.indexFirstDayOfTheMonth) {
          this.arrRenderCalendar.push(0);
        } else {
          this.arrRenderCalendar.push(i - this.indexFirstDayOfTheMonth + 1);
        }
      }
      this.filterArrRenderCalendar();
    },
    /**
     * Фильтрация массива дней (фикс бага с 7-ю 0-ми)
     */
    filterArrRenderCalendar() {
      const zeroCount = this.arrRenderCalendar.reduce((acc, current) => {
        if (current == 0) {
          acc++;
          return acc;
        } else {
          return acc;
        }
      }, 0);
      if (zeroCount == 7) {
        this.arrRenderCalendar = this.arrRenderCalendar.splice(
          6,
          this.arrRenderCalendar.length
        );
      }
    },
    /**
     * Полный рендеринг календаря
     */
    renderCalendar() {
      this.arrRenderCalendar = [];
      this.currentDayOfTheWeek = this.getDayOfTheWeek(this.currentDate);
      this.currentIndexDayOfTheWeek = this.getCurrentIndexDayOfTheWeek();
      this.indexFirstDayOfTheMonth = this.getIndexFirstDayOfTheMonth();
      this.updArrRenderCalendar();
      //DEBUG
      // console.log({
      //   "дата": this.currentDate,
      //   "общий массив": this.arrRenderCalendar,
      //   "тек день недели": this.currentDayOfTheWeek,
      //   "индекс тек дня недели": this.currentIndexDayOfTheWeek,
      //   "индекс 1го дня месяца": this.indexFirstDayOfTheMonth
      // });
    },
    /**
     * Смена месяца
     */
    toogleMonth(step) {
      this.currentDate.setMonth(this.currentDate.getMonth() + step);
      this.renderCalendar();
    },
    /**
     * Выбор даты
     */
    updChoiceDate(day) {
      this.choiceDate = new Date();
      this.choiceDate.setDate(day);
      this.choiceDate.setMonth(this.currentDate.getMonth());
      this.choiceDate.setFullYear(this.currentDate.getFullYear());
      this.toggleCalendar = !this.toggleCalendar;
    }
  },
  mounted() {
    this.renderCalendar();
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
  .item {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    width: 770px;
    height: 69px;
    @include afs(18px, 16px, 14px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    border-radius: 10px 10px 0 10px;
    background: $White;
    color: $Main;
    box-shadow: 2px 4px 10px rgba($color: $Black, $alpha: 0.1);
    cursor: pointer;
  }
  .borderRadius {
    border-radius: 10px;
  }
  .item__label {
    display: flex;
    margin: 1.3rem 0;
    padding: 0;
    width: 200px;
  }
  .item__date {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }
  .item__children {
    margin: 0 0.3rem;
  }
  .label__text {
    margin-left: 1rem;
  }
  .label__stick {
    margin-left: auto;
    color: $Support;
    border-right: solid 1px $Support;
  }
  .Calendar-body {
    width: 328px;
    margin-left: auto;
    padding: 0 3px;
    border-radius: 0 0 10px 10px;
    background: $White;
  }
  .months {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }
  .months__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }
  .months__info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    width: 100px;
    @include afs(16px, 14px, 12px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    color: $Main;
  }
  .transform__img {
    transform: rotate(180deg);
  }
  .week,
  .days {
    display: flex;
    @include afs(10px, 8px, 6px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
  .week__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 26px;
  }
  .days__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
  }
  .week__item {
    color: $FirstStat;
  }
  .days {
    flex-wrap: wrap;
  }
  .days__item {
    @include afs(14px, 12px, 10px);
    line-height: 22px;
    color: $StatText;
    border-radius: 30px;
    cursor: pointer;
  }
  .days__item:hover {
    transition: 0.3s;
    background: linear-gradient(180deg, $FirstStat 0%, $AquaThird 100%);
    color: $White;
  }
  .noVisible {
    opacity: 0;
    cursor: default;
  }
  .currentDate {
    color: $BlueSecond;
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

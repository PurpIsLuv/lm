<template lang="pug">
  .container.choose
    .image
      img.img(src="@/assets/image/Projects/choose.png" alt="")
    .description
      h3.title Как выбрать проект для инвестирования?
      ul.list
        li.item
          span.number 01.
          p.text Нужно провести предварительную работу по обоснованию экономической выгоды инвестиций, определиться со сроком вкладов и их объёмом, учесть все риски и просчитать рентабельность предприятия.
        li.item
          span.number 02.
          p.text На этой стадии критическому анализу подвергается вся информация относительно сроков реализации проекта, объёма привлеченных средств, окупаемости инвестиций, уровня конкуренции. Необходимо рассмотреть все варианты изменения рыночной ситуации и оценить степень их влияния на доходность.
        li.item
          span.number 03.
          p.text Обязательно анализируются цены на аналогичные товары (услуги, работы) у будущих конкурентов, выясняется маркетинговая и экономическая политика таких компаний. Эти мероприятия помогут оценить жизнеспособность проекта и определить его перспективы.
        li.item
          span.number 04.
          p.text Обращаем внимание на уникальность идеи проекта, анализируем динамику роста компании, обращаем внимание на рекламную кампанию, знакомимся с отзывами других инвесторов.
        li.item
          span.number 05.
          p.text Допустим, вы – начинающий инвестор и хотите выбрать достойный объект для своих вложений. Можно двигаться вслепую, рискуя потерять капитал, а можно воспользоваться профессиональной помощью. Обратиться к специалистам могут и сами создатели проекта, желающие выяснить его реальный инвестиционный потенциал.
      .buttons
        router-link.button.question(to="/quest") Задать вопрос
        router-link.button.recomend(to="/rec") Рекомендации
    img.bg(src="@/assets/svg/choose-project-bg.svg" alt="")
</template>

<script>
export default {
  name: "ChooseProjects"
};
</script>

<style lang="scss" scoped>
// Choose
.choose {
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 110px;
  position: relative;
}
// Choose Image
.image {
  min-width: 570px;
}
.img {
  width: 100%;
}
// Choose Description
.description {
  text-align: left;
  width: 100%;
  padding-left: 30px;
}
.title {
  margin: 0 0 40px 0;
  color: $Main;
  font-size: 24px;
  font-weight: bold;
}
// Choose List
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.item {
  display: flex;
  margin-bottom: 20px;
}
.number {
  margin-right: 15px;
  color: $Main;
  font-size: 24px;
  font-weight: 600;
}
.text {
  font-weight: 450;
  font-size: 16px;
  margin: 0;
  color: $Third;
}
// Buttons
.buttons {
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 50px;
}
.button {
  min-width: 150px;
  border-radius: 3px;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  margin-right: 40px;
}
.button.question {
  color: $White;
  background: linear-gradient(20.49deg, #4560fe 18.91%, #50cdf3 150.1%);
}
.button.recomend {
  color: $ProjectSecond;
  border: 2px solid $ProjectSecond;
  padding: 8px 10px;
}
// Bg
.bg {
  position: absolute;
  bottom: 30px;
  left: -340px;
  z-index: -1;
}
</style>

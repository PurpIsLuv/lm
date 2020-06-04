<template lang="pug">
  .desc
    h3.title Мы ценим ваши вложения и многократно преумножаем их.
    p.description
      | После того как проект начал выполняться, руководитель должен с определенной частотой предоставлять руководству и заказчику отчеты о ходе проекта. MS Project содержит набор готовых отчетов, которые можно использовать в этих случаях, и предлагает возможности по созданию собственных отчетов.
      br
      br
      | Отчеты удобно использовать и самому руководителю проекта, поскольку с помощью некоторых из них можно получить данные, которые невозможно просмотреть в представлениях. Например, с помощью одного из отчетов.
    router-link.start_btn(to="/start") Начать инвестировать
</template>

<script>
export default {
  name: 'StatisticDesc'
};
</script>

<style lang="scss" scoped>
.desc {
  width: 50%;
  padding-left: 150px;
}
.title {
  color: $Main;
  font-size: 24px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 20px;
}
.description {
  font-size: 16px;
  color: $SilverThird;
  margin-bottom: 45px;
}
.start_btn {
  color: $White;
  font-size: 14px;
  padding: 10px;
  min-width: 150px;
  background: linear-gradient(20.49deg, #4560FE 18.91%, #50CDF3 150.1%);
  border-radius: 3px;
}
</style>

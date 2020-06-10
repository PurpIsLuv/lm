<template lang="pug">
  .desc
    h3.title {{ title }}
    p.description {{ description }}
    router-link.start_btn(to="/start") Начать инвестировать
</template>

<script>
export default {
  name: "StatisticDesc",
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    description: {
      type: String,
      required: true,
      default: ""
    }
  }
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
  background: linear-gradient(20.49deg, #4560fe 18.91%, #50cdf3 150.1%);
  border-radius: 3px;
}
</style>

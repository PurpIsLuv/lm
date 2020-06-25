<template lang="pug">
  .graph
    img.graph_icon(src="@/assets/svg/stat.svg" alt="")
    ul.stat
      li.stat-item
        span.percent.first-color {{ successful }}%
        p.title Успешных проектов
      li.stat-item
        span.percent.second-color {{ unfinish }}%
        p.title Неоконченных проектов
      li.stat-item
        span.percent.third-color {{ fail }}%
        p.title Неудавшихся проектов
</template>

<script>
export default {
  name: "StatisticGraph",
  props: {
    successful: {
      type: Number,
      required: true,
      default: 0
    },
    unfinish: {
      type: Number,
      required: true,
      default: 0
    },
    fail: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
// Graphic
.graph {
  min-width: calc(50% - 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background: $White;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.graph_icon {
  width: 260px;
}
// Statistic
.stat {
  list-style: none;
  margin: 0 0 0 35px;
  padding-left: 0;
}
.stat-item {
  margin-bottom: 35px;
}
.percent {
  color: $Main;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  align-items: center;
  &:before {
    content: "";
    width: 20px;
    float: left;
    height: 20px;
    border-radius: 50%;
    margin-right: 15px;
  }
}
.percent.first-color:before {
  background-color: $Main;
}
.percent.second-color:before {
  background-color: $FirstStat;
}
.percent.third-color:before {
  background-color: $SecondStat;
}
.title {
  margin: 0;
  font-size: 24px;
  color: $StatText;
}
</style>

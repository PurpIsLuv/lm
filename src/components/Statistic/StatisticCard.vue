<template lang="pug">
  .container.statistic(:class="bgPosition")
    statistic-graph
    statistic-desc
</template>

<script>
import StatisticDesc from "./StatisticDesc";
import StatisticGraph from "./StatisticGraph";

export default {
  name: "StatisticCard",
  props: {
    bgPosition: {
      type: String,
      required: true,
      default: "left",
      validator: function(value) {
        if (value !== "left" && value !== "right") {
          return "left";
        }
      }
    }
  },
  components: {
    StatisticGraph,
    StatisticDesc
  }
};
</script>

<style lang="scss" scoped>
.statistic {
  display: flex;
  justify-content: space-between;
  padding: 75px 0;
  background-image: url('../../assets/svg/statistic-bg.svg');
  background-repeat: no-repeat;
  background-size: auto 100%;
}
.statistic.left {
  background-position: left;
}
.statistic.right {
  background-position: right;
}
</style>

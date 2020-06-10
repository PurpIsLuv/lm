<template lang="pug">
  .container.statistic(:class="bgPosition")
    statistic-graph(:successful="successful"
                    :unfinish="unfinish"
                    :fail="fail")
    statistic-desc(:title="title"
                  :description="description"
                  )
    img.bg(src="@/assets/svg/statistic-bg.svg" alt="")
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
      default: "left"
    },
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
    },
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
  },
  components: {
    StatisticGraph,
    StatisticDesc
  }
};
</script>

<style lang="scss" scoped>
// Statistic
.statistic {
  display: flex;
  justify-content: space-between;
  padding: 75px 0;
  position: relative;
}
// Background
.bg {
  position: absolute;
  z-index: -1;
  top: -65px;
  left: -140px;
}
.statistic.right .bg {
  left: auto;
  right: -240px;
}
</style>

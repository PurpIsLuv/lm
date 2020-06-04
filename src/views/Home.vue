<template lang="pug">
  main-layout
    main-slider
    statistic-card(:bgPosition="'left'")
    statistic-card(:bgPosition="'right'")
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import MainSlider from "@/components/MainSlider";
import StatisticCard from "@/components/Statistic/StatisticCard";

export default {
  components: {
    MainLayout,
    MainSlider,
    StatisticCard
  }
};
</script>

<style lang="scss" scoped></style>

<template lang="pug">
  main-layout
    main-banner
    statistic-comp
    main-news
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import MainBanner from "@/components/MainBanner";
import StatisticComp from "@/components/Statistic/StatisticComp";
import MainNews from "@/components/News/MainNews";

export default {
  name: "Main",
  components: {
    MainBanner,
    MainLayout,
    StatisticComp,
    MainNews
  }
};
</script>

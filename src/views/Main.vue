<template lang="pug">
  main-layout
    main-banner
    statistic-comp
    main-news
</template>

<script>
import MainBanner from "@/components/MainBanner";
import StatisticComp from "@/components/Statistic/StatisticComp";
import MainNews from "@/components/News/MainNews";

export default {
  name: "Main",
  components: {
    MainBanner,
    StatisticComp,
    MainNews
  }
};
</script>

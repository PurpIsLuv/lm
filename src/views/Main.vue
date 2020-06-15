<template lang="pug">
  main-layout
    statistic-comp
    main-news
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import StatisticComp from "@/components/Statistic/StatisticComp";
import MainNews from "@/components/News/MainNews";

export default {
  name: "Main",
  components: {
    MainLayout,
    StatisticComp,
    MainNews
  }
};
</script>

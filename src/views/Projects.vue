<template lang="pug">
  main-layout
    banner-projects
    filter-projects
    best-projects
    new-projects
    recomended-projects
    choose-projects
    main-question
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import BannerProjects from "@/components/Projects/BannerProjects";
import FilterProjects from "@/components/Projects/FilterProjects";
import BestProjects from "@/components/Projects/BestProjects";
import NewProjects from "@/components/Projects/NewProjects";
import RecomendedProjects from "@/components/Projects/RecomendedProjects";
import ChooseProjects from "@/components/Projects/ChooseProjects";
import MainQuestion from "@/components/MainQuestion";

export default {
  components: {
    MainLayout,
    BannerProjects,
    FilterProjects,
    BestProjects,
    NewProjects,
    RecomendedProjects,
    ChooseProjects,
    MainQuestion
  }
};
</script>

<style lang="scss" scoped></style>

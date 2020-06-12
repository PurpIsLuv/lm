<template lang="pug">
  main-layout
    banner-projects
    filter-projects
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import BannerProjects from "@/components/Projects/BannerProjects";
import FilterProjects from "@/components/Projects/FilterProjects";

export default {
  components: {
    MainLayout,
    BannerProjects,
    FilterProjects
  }
};
</script>

<style lang="scss" scoped>
</style>
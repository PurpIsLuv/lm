<template lang="pug">
  main-layout
    main-create-project
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import MainCreateProject from "@/components/CreateProject/MainCreateProject";

export default {
  name: "CreateProject",
  components: {
    MainLayout,
    MainCreateProject
  }
};
</script>

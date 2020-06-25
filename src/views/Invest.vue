<template lang="pug">
  main-layout
    main-invest
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import MainInvest from "@/components/Invest/MainInvest";

export default {
  components: {
    MainLayout,
    MainInvest
  },
  name: "Invest"
};
</script>

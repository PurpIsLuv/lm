<template lang="pug">

.MainLayout
  main-header

  slot

  main-footer

</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

export default {
  components: {
    MainHeader,
    MainFooter
  }
};
</script>

<style lang="scss" scoped></style>

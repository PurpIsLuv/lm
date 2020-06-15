<template lang="pug">
  .MainCreateProject
    .container
      .title Создать проект 
      .subtitle Заполни форму о проекте  и запусти свою компанию
      create-project-form
</template>

<script>
import CreateProjectForm from "@/components/CreateProject/CreateProjectForm";

export default {
  name: "MainCreateProject",
  components: {
    CreateProjectForm
  }
};
</script>

<style lang="scss" scoped>
@mixin main($maxWidth) {
  .MainCreateProject {
    padding: 3rem 0;
  }
  .title {
    @include afs(32px, 30px, 28px);
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 31px;
    color: $Main;
  }
  .subtitle {
    margin: 2rem 0;
    @include afs(24px, 22px, 20px);
    font-family: Futura PT;
    font-style: normal;
    font-weight: normal;
    line-height: 31px;
    color: $SilverThird;
  }
}

@media screen and (min-width: 0px) and (max-width: $PhoneWidth) {
  @include main(0px);
}
@media screen and (min-width: 0px) and (max-width: $PhoneWidth) {
  @include main($PhoneWidth);
}
@media screen and (min-width: $PhoneWidth) and (max-width: $TabletWidth) {
  @include main($TabletWidth);
}
@media screen and (min-width: $TabletWidth) and (max-width: $SmDesktopWidth) {
  @include main($SmDesktopWidth);
}
@media screen and (min-width: $SmDesktopWidth) and (max-width: $DesktopWidth) {
  @include main($DesktopWidth);
}
@media screen and (min-width: $DesktopWidth) {
  @include main($DesktopWidth);
}
</style>

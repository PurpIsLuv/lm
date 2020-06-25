<template lang="pug">
  .container.header
    a.logo(href="/")
      img.logo-icon(src="@/assets/logo/logo.svg")
      p.logo-name {{ $t("logo__leader") }}
        br
        span.logo-name_span {{ $t("logo_managment") }}
    .right
      .top
        .contacts
          .contact
            img.contact-icon(src="@/assets/svg/phone.svg")
            a.contact-href(href="tel:+7495777777") +7 495 777-777
          .contact
            img.contact-icon(src="@/assets/svg/mail.svg")
            a.contact-href(href="mailto:max@mail.ru") max@mail.ru
        select.lang
          option(value="RU" selected) {{ $t("langs[0]") }}
          option(value="EN") {{ $t("langs[1]") }}
        button.auth-btn {{ $t("enter") }}
        button.auth-btn {{ $t("reg") }}
      .bottom
        nav.menu
          ul
            li.menu-li(v-for="page in getNavigationPages()")
              router-link.menu-link(:to="page.link") {{ page.title }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapGetters(["getNavigationPages"])
  }
};
</script>

<style lang="scss" scoped>
// Header
.header {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
// Logo
.logo {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
.logo-icon {
  width: 37px;
  margin-right: 7px;
}
.logo-name {
  color: $Second;
  margin: 0;
}
.logo-name_span {
  color: $Main;
}
// Right Header
.right {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
// Right Top Header
.top {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
.contacts {
  display: flex;
  align-items: center;
}
.contact {
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 5px 20px 5px 0;
  border-right: 1px solid $Support;
}
.contact-icon {
  width: 14px;
  margin-right: 16px;
}
.contact-href {
  color: $Second;
  font-size: 12px;
}
.lang {
  background: none;
  border: none;
  color: $Second;
  font-size: 12px;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
}
.auth-btn {
  border-radius: 3px;
  color: $White;
  border: none;
  font-size: 14px;
  font-weight: 450;
  padding: 10px 0;
  min-width: 103px;
  background: linear-gradient(40deg, #4560fe 7.85%, #50cdf3 145.9%);
  margin-right: 15px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
}
// Right Bottom Header
.bottom {
  padding-top: 10px;
  border-top: 1px solid $Support;
}
.menu ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu-li {
  margin-left: 30px;
}
.menu-link {
  font-weight: 450;
  color: $Main;
  font-size: 16px;
}
</style>

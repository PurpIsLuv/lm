<template lang="pug">
  .container.header
    a.logo(href="/")
      img.logo-icon(src="@/assets/logo/logo.svg")
      p.logo-name Лидеры
        br
        span Управления
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
          option(value="RU" selected) RU
          option(value="EN") EN
        button.auth-btn Вход
        button.auth-btn Регистрация
      .bottom
        nav.menu
          ul
            li
              router-link(to="/") Главная
            li
              router-link(to="/about") О проекте
            li
              router-link(to="/about") Создать проект
            li
              router-link(to="/about") Партнерам
            li
              router-link(to="/about") Участникам
            li
              router-link(to="/about") Проекты
            li
              router-link(to="/about") Контакты
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
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
  span {
    color: $Main;
  }
}
.right{
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
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
  background: linear-gradient(40deg, #4560FE 7.85%, #50CDF3 145.9%);
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
}
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
  li {
    margin-left: 30px;
    a {
      font-weight: 450;
      color: $Main;
      font-size: 16px;
    }
  }
}
</style>
<template>
  <div class="app">
    <header :class="{ 'scrolled': isScrolled }">
      <div class="container">
        <div class="content">
          <div class="logo">
            <router-link to="/"><img src="/src/assets/logo.svg" alt="" id="logo"></router-link>
          </div>
          <div class="link">
            <router-link to="/about">About</router-link>
            <router-link to="/careers">Careers</router-link>
            <router-link to="/event">Events</router-link>
            <router-link to="/product">Products</router-link>
            <router-link to="/support">Supports</router-link>
          </div>
          <button class="menu"><img src="/src/assets/icon-hamburger.svg" alt=""></button>
        </div>
      </div>
    </header>
    <main><router-view></router-view></main>
    <footer>
      <div class="container">
        <div class="footer_content">
          <div class="logo_menu">
            <img src="/src/assets/logo.svg" alt="">
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Events</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">Supports</a></li>
            </ul>
          </div>
          <div class="social_icon">
            <div class="icons">
              <img src="/src/assets/icon-facebook.svg" alt="">
              <img src="/src/assets/icon-twitter.svg" alt="">
              <img src="/src/assets/icon-pinterest.svg" alt="">
              <img src="/src/assets/icon-instagram.svg" alt="">
            </div>
            <p>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
const isScrolled = ref(false)
const scrolledWindow = () => {
  isScrolled.value = window.scrollY > 50
}
onMounted(() => {
  window.addEventListener('scroll', scrolledWindow)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrolledWindow)
})
</script>

<style scoped>
.app {
  width: 100%;
  padding: 0;
  margin: 0;
}
a:hover{
  border-bottom: 1px solid #fff;
  padding-bottom: 2px;
}
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.scrolled {
  background-color: #000;
}

.container {
  max-width: 1044px;
  margin: 0 auto;
}

#logo {
  width: 70%;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
}
.link{
  display: flex;
  align-items: center;
  gap: 30px;
}
main {
  width: 100%;
  margin: 0;
  padding: 0;
}

footer {
  width: 100%;
  background-color: #000;
  padding: 30px 0;
}

.footer_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo_menu {
  width: 50%;
}

.logo_menu img {
  width: 25%;
}

ul {
  display: flex;
  gap: 20px;
  padding: 0;
}

li {
  list-style: none;
}

.icons {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: end;
}

.social_icon p {
  font-size: 13px;
  color: hsl(0, 0%, 55%);
}
.menu{
  border: none;
  background-color: inherit;
  cursor: pointer;
  display: none;
}
</style>

<template>
  <nav>
    <h1 class="logo">Phantom Wares</h1>
    <div class="nav">
      <router-link class="nav-item" to="/">Home</router-link> |
      <router-link class="nav-item" to="/counter">Counter Task</router-link> |
      <router-link class="nav-item" to="/notfound">About</router-link>
    </div>
  </nav>
  <hr />

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fbfbfb;
  background-image: linear-gradient(
      to bottom,
      rgba(1, 1, 25, 0.969),
      rgba(54, 8, 43, 0.73),
      rgba(19, 16, 1, 0.8)
    ),
    url("./assets/store.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px;
  background-attachment: fixed;
  height: 100%;
}
template {
  width: 40%;
}

.nav-item {
  margin: 30px;
  text-decoration: none;
}
.nav {
  margin: auto;
}
nav {
  display: flex;
  gap: 50px;
  margin: auto;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}
.logo {
  font-size: 20px;
  text-align: left;
  margin: left;
}

nav a.router-link-exact-active {
  color: #ec1d1d;
  border-bottom: 2px solid red;
  padding: 10px;
}
@media (min-width: 350px) and (max-width: 950px) {
  #app {
    padding: 20px;
    height: 100vh;
    height: auto;
  }
  nav {
    display: block;
    margin: auto;
    text-align: center;
    margin-bottom: 20px;
  }

  .logo {
    font-size: 30px;
    text-align: center;
    margin-bottom: 10%;
  }

  .nav-item {
    margin: 9px;
  }
}
</style>

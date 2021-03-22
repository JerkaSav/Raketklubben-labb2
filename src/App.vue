<template>
  <div id="app">
    <div class="container">
      <div class="container-sm links">
        <router-link
          to="/"
          v-if="this.$store.state.questions.paulina[0] === 'empty'"
          >Testa igen</router-link
        >
        <router-link to="/" v-else>Till Spelet </router-link>
        <router-link to="/result">Resultat</router-link>
      </div>
      <img alt="RK logo" src="./assets/RK-logo.svg" />

      <router-view />
      <div
        class="starta-om"
        v-if="
          $route.name === 'Home' &&
            $store.state.questions.paulina[0] === 'empty'
        "
      >
        <router-link to="/result">Tillbaka till resultatet</router-link>
        <b-button @click="$router.go(0)" class="starta-om-button"
          >STARTA OM SPELET</b-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .starta-om {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    top: 0;
    left: 0;
    .starta-om-button {
      margin: auto;
      height: 200px;
      width: 200px;
    }
  }
  .links {
    position: absolute;
  }
  div {
    display: flex;
    flex-direction: column;
    img {
      margin: auto;
    }
  }
</style>

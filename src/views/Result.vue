<template>
  <div>
    <div v-if="this.$store.state.questions.paulina.length > 1">
      <h1>Ojsan {{ $store.state.globalUserName }}!</h1>
      <h3>
        Du måste spela klart
        <strong><router-link to="/">spelet</router-link></strong> för att få se
        resultatet
      </h3>
    </div>

    <div class="container-all" v-else>
      <div v-if="onOff === false" class="result-show">
        <h1 v-if="onOff === false">
          {{ $store.state.globalUserName }} =

          {{
            $store.state.winner.charAt(0).toUpperCase() +
            $store.state.winner.slice(1)
          }}
        </h1>
      </div>

      <div v-else>
        <div class="flex-row">
          <div>
            <h1>
              {{
                $store.state.winner.charAt(0).toUpperCase() +
                $store.state.winner.slice(1)
              }}
            </h1>

            <img id="winner-img" :src="img" alt="some-img" />
          </div>
          <div class="chart-container">
            <Chart />
          </div>
        </div>
        <p v-if="$store.state.winner === 'paulina'">
          {{ $store.state.quotes[0] }}
        </p>
        <p v-if="$store.state.winner === 'linn'">
          {{ $store.state.quotes[1] }}
        </p>
        <p v-if="$store.state.winner === 'alex'">
          {{ $store.state.quotes[2] }}
        </p>
        <p v-if="$store.state.winner === 'lukas'">
          {{ $store.state.quotes[3] }}
        </p>
        <p v-if="$store.state.winner === 'erik'">
          {{ $store.state.quotes[4] }}
        </p>
        <div class="chart-container-small">
          <Chart />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Chart from "@/components/Chart.vue";
export default {
  created() {
    setTimeout(() => {
      this.onOff = true;
    }, 1500);
  },
  methods: {},
  data() {
    return {
      img: require("../assets/" + this.$store.state.winner + "-small.jpg"),
      onOff: false,
    };
  },
  components: {
    Chart,
  },
};
</script>

<style lang="scss" scoped>
.result-show {
  background-color: rgba(200, 97, 118, 1);
  border-radius: 15px;
  margin: auto;
}
.chart-container-small {
  display: none;
}
.container-all {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  background-color: #157a6e;
  border-radius: 25px;
  padding-left: 50px;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
h1,
h3 {
  text-align: center;
  padding-top: 10px;
}
#winner-img {
  order: 1;
  height: 100%;
  width: 100%;
  max-height: 500px;
  max-width: 500px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
.chart-container {
  padding-top: 50px;
  order: 2;
  margin: auto;
  height: 100%;
  width: 100%;
  max-height: 400px;
  max-width: 400px;
}

p {
  order: 3;
  margin-top: 20px;
  width: 500px;
}

@media (max-width: 980px) {
  .chart-container-small {
    display: block;
    order: 4;
  }
  .flex-row {
    display: flex;
  }
  .chart-container {
    display: none;
  }
  p {
    width: 100%;
    padding-left: 10px;
  }
  .container-all {
    display: block;
    padding-left: 0;
  }

  #winner-img {
    max-height: 400px;
    max-width: 400px;
  }
}
</style>

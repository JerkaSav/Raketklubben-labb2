<template>
  <div>
    <div class="flex">
      <div class="bg-color big-block flex-enabled">
        <h1>Välkommen {{ userName }}!</h1>
        <h2>Vem i raketklubben är du?</h2>
      </div>
      <h3 class="bg-color medium-block">
        Välj ett av påståenden som passar bäst på dig!
      </h3>
    </div>
    <div v-if="onOff === false" class="icon-block">
      <b-icon
        class="b-icon"
        icon="arrow-clockwise"
        animation="spin"
        font-scale="10"
      ></b-icon>
    </div>
    <div class="medium-block" v-else>
      <ul>
        <li
          :key="question"
          v-for="(question, index) in Object.keys($store.state.questions)"
        >
          <!-- <b-skeleton
            v-if="onOff === false"
            type="button"
            width="100%"
            height="48px"
            class="button-questions"
            animation="fade"
          >
          </b-skeleton> -->
          <b-button
            block
            size="lg"
            @click="$store.commit('pickQuestions', index + 1), loadAnimation()"
            class="button-questions"
          >
            <p>{{ $store.state.questions[question][0] }}</p>
          </b-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loadAnimation() {
      this.onOff = false;
      setTimeout(() => {
        this.onOff = true;
      }, 1000);
    },
  },
  data() {
    return {
      paulina: this.$store.state.questions.paulina,
      alex: this.$store.state.questions.alex,
      linn: this.$store.state.questions.linn,
      lukas: this.$store.state.questions.lukas,
      erik: this.$store.state.questions.erik,
      onOff: true,
    };
  },
  props: {
    userName: String,
  },
};
</script>


<style scoped lang='scss'>
$button-color: #157a6e;
$radius: 25px;

.icon-block {
  height: 300px;
  padding-top: 50px;
  margin: auto;
}
h1,
h2 {
  margin: auto;
  text-align: center;
  // padding-top: 3rem;
}
h3 {
  text-align: center;
  padding-top: 2rem;
}
.flex {
  display: flex;
  flex-direction: column;
  height: 350px;
}
.flex-enabled {
  display: flex;
}
.big-block {
  border-radius: $radius;
  height: 200px;
  width: 100%;
  margin: auto;
}
.medium-block {
  border-radius: $radius;
  height: 100px;
  width: 90%;
  margin: auto;
  ul {
    list-style: none;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    li {
      text-align: center;
      margin-top: 10px;
      .button-questions {
        border-radius: 15px;
        p {
          margin: 0;
        }
      }
    }
  }
}
.bg-color {
  background-color: $button-color;
}
</style>

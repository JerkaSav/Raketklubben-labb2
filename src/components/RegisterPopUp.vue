<template>
  <div class="register" v-if="axios">
    <div>
      <b-form class="form">
        <b-form-group
          label-for="användarnamn"
          label="Skriv in ett användarnamn:"
        >
          <b-form-input
            v-model="userName"
            id="användarnamn"
            placeholder="namn"
          ></b-form-input>
        </b-form-group>
      </b-form>

      <b-dropdown dropright text="Random genererade namn" class="random-name">
        <b-dropdown-item-button
          :key="index"
          v-for="(button, index) in toggle"
          @click="fillToggle(index)"
          size="sm"
          variant="secondary"
        >
          {{ button.caption }}
        </b-dropdown-item-button>
      </b-dropdown>
      <b-container>
        <b-button
          @click="
            $emit('closePopUp', {
              bool: false,
              userName: userName,
            })
          "
          class="spara-button"
          >Spara</b-button
        >
      </b-container>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    this.axios
      .get("https://random-data-api.com/api/name/random_name?size=10")
      .then((response) => this.fillToggle(response))
      .catch((error) => console.log(error));
  },
  methods: {
    fillToggle(x) {
      if (this.toggle[0] === undefined) {
        for (this.i = 0; this.i < x.data.length; this.i++) {
          this.toggle.push({ caption: x.data[this.i].name, state: false });
        }
      } else {
        this.userName = this.toggle[x].caption;
      }
    },
  },
  data() {
    return {
      userName: "",
      toggle: [],
    };
  },
};
</script>


<style lang="scss" scoped>
.register {
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  top: 396.5px;
  border-radius: 25px;
  position: absolute;
  height: 200px;
  width: 20rem;
  padding-top: 20px;
  background-color: rgba(200, 97, 118, 0.74);
}
.random-name {
  margin-bottom: 10px;
}
.spara-button {
  width: 100px;
  margin: auto;
}
</style>
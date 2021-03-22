<template>
  <div class="home">
    <b-button @click="toggle" id="register-button"> {{ buttonMsg }} </b-button>

    <register-pop-up v-if="onOff" @closePopUp="onClosePopUp" />
    <questions :userName="userName" />
  </div>
</template>

<script>
  import questions from '@/components/questions.vue';
  import RegisterPopUp from '@/components/RegisterPopUp.vue';
  export default {
    data() {
      return {
        onOff: false,
        buttonMsg: 'Välj användarnamn',
        userName: this.$store.state.globalUserName
      };
    },
    methods: {
      toggle() {
        if (this.onOff) {
          this.onOff = false;
          if (this.userName === 'Anonym') {
            this.buttonMsg = 'Välj användarnamn';
          } else {
            this.buttonMsg = 'Byt användarnamn';
          }
        } else {
          this.onOff = true;
          this.buttonMsg = 'Stäng';
        }
      },
      onClosePopUp(x) {
        if (x.userName[0] === undefined) {
          alert(
            `Skriv in ett användarnamn eller
          tryck på Stäng knappen om du vill vara anonym`
          );
        } else {
          this.onOff = x.bool;
          this.buttonMsg = 'Byt användarnamn';
          this.userName = x.userName;
          this.$store.state.globalUserName = x.userName;
        }
      }
    },
    name: 'Home',
    components: {
      questions,
      RegisterPopUp
    }
  };
</script>

<style lang="scss" scoped>
  #register-button {
    width: 200px;
  }
</style>

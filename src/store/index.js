import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: {
      paulina: ["Snus är fan livet de!", "Min bästa vän är en hund", "Är hellre i skogen än storstan", "Fryser in alla matrester, Inget får gå till spillo", "Behöver något lagas, fixas eller byggas, jag fixar det själv", "Påbörjar många projekt, glömmer ibland bort att slutföra", "Hanterar lågt blodsocker... lite sådär.", "Byter ofta frisyr.", "Behärskar det instrument som ställs framför mig."],
      linn: ["Tycker att höga ljud är lite läskigt", "Jobbar på - utan luft, mat eller pauser.", "Har 8 timmars skärmtid om dagen, i snitt!", "Tycker att allt som min hjärna kommer på är det absolut vikigaste i hela världen, alltid.", "Har alltid något freak efter sig.", "Hatar mellansnack.", "Tar alltid med en bild på Benjamin Ingrosso till frisören.", "Vägrar leva utan eller för långt ifrån mamma.", "Hade en blogg när bloggar var en grej."],
      alex: ["Blir av någon anledning den som andra människor tyr sig till.", "Är en kärlekskrank av rang.", "Är en periodare i allt eller inget gällande allt.", "Tycker att nässpray är den bästa uppfinningen människan någonsin gjort.", "Långsam men noggrann, men långsam.", "Har absolut en gitarrkille-aura.", "Är anti sociala-medier.", "Har ett medicinskåp utöver det vanliga.", "Upprepar ofta skämt som bara jag uppskattar."],
      lukas: ["Alla vill att jag ska vara med i deras band/gäng.", "Kämpar på med körkortet.", "Är ett ess på skateboard.", "Går i min pappas fotspår.", "Är alltid på.", "Är alltid yngst.", "Hatar kläder som sitter åt.", "Går inte utan ryggsäck.", "Tar gärna skjuts.",],
      erik: ["Lördagen ska spenderas i soffan", "Ska prompt duscha på fyllan.", "Övar aldrig.", "Tycker att svart jeansskjorta och svarta tighta jeans funkar i alla lägen, i alla sammanhang, alltid.", "Extremt fotogenisk.", "Ger ett lätt, slappt intryck.", "Har ett ofattbart skratt.", "Kan drömma om grillad korv", "Att sitta vid en brasa är gott, men att gå dit är ett helvete",]
    },
    quotes: [
      "Du tycker skogen och djur är det bästa, du är kreativ och har ett hemskt blodsocker. Men     med socker antidepp och snus tar du sig igenom livet utan större svårigheter",

      `Du är stjärnan, som har det viktigaste att säga, såklart!
       Du vill gärna verka farlig, men är en mammagri(n)s med känslor stora som moln.
        Målmedvetet jobbar du utan mat, luft och vatten, med nosen i mobilen, nonstop.
        Som den stjärna du är flyger du som en raket framåt, med fans och/eller freaks i hasorna.`,

      `Du ger allt i allt som du ger dig in på, minutiöst uträknat.  
        Får andra att skratta, gärna åt dig, så länge de älskar dig. 
        Du lever ett gott liv med koll på mode och farmaci och har noll koll på sociala medier.`,

      `Du rullar fram i livet, antingen i någon annans bil, eller ditt egna fordon skateboard. 
        Du säger ja till allt, alltid pepp, alltid på,  du fyller på ryggsäcken med erfarenheter en ju behöver som youngster.   Iklädd bekväm normcore fashion, säger du Ja, ja, JAA!! För nu kör vi (så fort körkortet är taget dvs)`,

      `Du tar det ba lugnt, behöver inte förbereda eller öva för allt bara flyter ändå. 
          Om blodsockret hålls i en jämn kurva, och om en dusch finns att tillgå på fyllan, så kommer minsann Jerka-skutan fortsätta flyta på i lagom takt.`
    ],
    globalUserName: 'Anonym',
    paulinaScore: 0,
    linnScore: 0,
    alexScore: 0,
    lukasScore: 0,
    erikScore: 0,
    winner: "erik",
    trueOrFalse: false,
    equalNumber: null,
    value: null,
    equal: []
  },
  mutations: {
    pickQuestions(state, x) {
      // let calculate = Math.floor(Math.random() * (6 - 1) + 1)
      // Check what button was pressed
      if (x === 1) {
        this.state.paulinaScore++
      }
      if (x === 2) {
        this.state.linnScore++
      }
      if (x === 3) {
        this.state.alexScore++
      }
      if (x === 4) {
        this.state.lukasScore++
      }
      if (x === 5) {
        this.state.erikScore++
      }

      // Refresh all questions when 1 button is pressed
      for (this.i = 0; this.i < Object.keys(this.state.questions).length; this.i++) {

        //check if all questions has been displayed
        if (this.state.questions.paulina[0] === undefined && this.state.questions.linn[0] === undefined && this.state.questions.alex[0] === undefined && this.state.questions.lukas[0] === undefined && this.state.questions.erik[0] === undefined) {
          this.state.questions.paulina.push('empty')
          this.state.questions.linn.push('empty')
          this.state.questions.alex.push('empty')
          this.state.questions.lukas.push('empty')
          this.state.questions.erik.push('empty')
          this.commit('checkResult', {
            paulina: this.state.paulinaScore,
            linn: this.state.linnScore,
            alex: this.state.alexScore,
            lukas: this.state.lukasScore,
            erik: this.state.erikScore,

          })

          // Force the page to become Result to display the result of the game
          router.push({ name: 'Result' })

          //Refresh all questions by removing one from the array
        } else {
          if (this.i === 0) {
            this.state.questions.paulina.splice(0, 1)
            this.state.questions.linn.splice(0, 1)
            this.state.questions.alex.splice(0, 1)
            this.state.questions.lukas.splice(0, 1)
            this.state.questions.erik.splice(0, 1)
          }
        }
      }

    },

    // Check how got the highest score
    checkResult(state, x) {

      // the start reference for comparison on who got the highest score
      this.state.value = 0
      this.key = 'placeholder'


      // the result is passed as an object and the loop checks all the keys and values of that object
      for (const [key, value] of Object.entries(x)) {
        // if the start comparison is larger than the value in the object
        if (this.state.value > value) {
          if (this.state.value > this.checkerValue) {
            console.log('oHYÄ')
            if (Object.keys(this.state.equal).length > 0) {
              this.state.equal.splice(0, Object.keys(this.state.equal).length)

            }

            this.state.equal.push({ [this.key]: this.state.value })
            this.checkerKey = this.key

          }
          console.log(this.key + ' ' + this.state.value + ' är större än ' + value + ' ' + key)
        }

        // if they are equal we put them in an new object
        else if (key !== this.key && this.state.value === value) {

          console.log(this.key + ' ' + this.state.value + ' är samma ' + value + ' ' + key)
          this.checkerValue = value
          if (this.state.value > this.checkerValue) {
            console.log('OhYÄ')
          }
          else if (this.key === 'placeholder' || key === 'placeholder') {
            console.log('Hello')
          }
          else {
            if (this.checkerKey !== this.key) {
              this.state.equal.push({ [this.key]: this.state.value })

              this.checkerKey = key
            }
            if (key !== this.key) {
              this.state.equal.push({ [key]: value })
            }
            console.log(this.checkerValue)
          }
          this.state.value = value
          this.key = key
        }

        //  if the start comparison is Lower than the value in the object
        else {
          if (value > this.checkerValue) {
            console.log('OHNO')
            if (Object.keys(this.state.equal).length > 0) {
              this.state.equal.splice(0, Object.keys(this.state.equal).length)
            }
            this.state.equal.push({ [key]: value })
            this.checkerKey = key
          }
          console.log(this.key + ' ' + this.state.value + ' är mindre än ' + value + ' ' + key)
          this.state.value = value
          this.key = key
        }
      }

      console.log(this.state.equal);


      // checks if the equalObject needs to be checked
      if (this.state.equal.length !== 0) {

        for (this.n = 0; this.n < this.state.equal.length; this.n++) {

          // gives out a random number to give ous a "winner"
          this.calculate = Math.floor(Math.random() * (this.state.equal.length - 1))
        }
        // adds that winner
        this.key = Object.keys(this.state.equal[this.calculate])[0]
        console.log(this.key)

      }

      // Adds the winner and sets the right image
      this.state.winner = this.key
      this.state.img = '../assets/' + this.key + '-small.jpg'
    },
  },
  actions: {
  },
  modules: {
  }
})

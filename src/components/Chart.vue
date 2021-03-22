

  



<script>
import { Doughnut, mixins } from "vue-chartjs";
export default {
  data() {
    return {
      chartdata: {
        labels: ["Paulina", "Linn", "Alex", "Lukas", "Erik"],
        datasets: [
          {
            label: "RESULTAT",
            data: [
              this.$store.state.paulinaScore,
              this.$store.state.linnScore,
              this.$store.state.alexScore,
              this.$store.state.lukasScore,
              this.$store.state.erikScore,
            ],
            backgroundColor: [
              "#FFFACC",
              "#C83E4D",
              "#FF9914",
              "#688E26",
              "#14080E",
            ],
          },
        ],
      },
      chartOptions: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              display: false,
              tricks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
  props: ["chartData"],
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  mounted() {
    this.renderChart(this.chartdata, this.chartOptions);
  },
};
</script>
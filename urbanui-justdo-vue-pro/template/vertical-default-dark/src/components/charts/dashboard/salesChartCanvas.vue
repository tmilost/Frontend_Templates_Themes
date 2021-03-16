<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  data() {
    return {
      datacollection: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Offline Sales",
            data: [480, 230, 470, 210, 330],
            backgroundColor: "#ffc100"
          },
          {
            label: "Online Sales",
            data: [400, 340, 550, 480, 170],
            backgroundColor: "#f5a623"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        scales: {
          yAxes: [
            {
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false,
                min: 0,
                max: 500
              }
            }
          ],
          xAxes: [
            {
              stacked: false,
              ticks: {
                beginAtZero: true,
                fontColor: "#9fa0a2"
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: 1
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  }
};
</script>

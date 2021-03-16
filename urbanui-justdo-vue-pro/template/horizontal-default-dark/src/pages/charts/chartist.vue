<template>
  <section class="chartist">
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Line chart</h4>
            <chartist
              ratio="ct-major-second"
              type="Line"
              :data="simplelinechartData"
              :options="simplelinechartOptions"
            ></chartist>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Stacked Bar chart</h4>
            <chartist
              ratio="ct-major-second"
              type="Bar"
              :data="stackedbarchartData"
              :options="stackedbarchartOptions"
              id="stackedBar"
            ></chartist>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Horizontal Bar chart</h4>
            <chartist
              ratio="ct-major-second"
              type="Bar"
              :data="horizontalbarchartData"
              :options="horizontalbarchartOptions"
              id="horizontalBarChart"
            ></chartist>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Pie chart</h4>
            <chartist
              ratio="ct-major-second"
              type="Pie"
              :data="piechartData"
              :options="piechartOptions"
            ></chartist>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Donut</h4>
            <chartist
              ratio="ct-major-second"
              type="Pie"
              :data="donutchartData"
              :options="donutchartOptions"
            ></chartist>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
Vue.use(require("vue-chartist"));

export default {
  name: "app",
  data() {
    return {
      simplelinechartData: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      },
      simplelinechartOptions: {
        lineSmooth: false,
        fullWidth: true,
        axisY: {
          onlyInteger: true
        }
      },
      stackedbarchartData: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        series: [
          ["800000", "1200000", "1400000", "1300000"],
          ["200000", "400000", "500000", "300000"],
          ["100000", "200000", "400000", "600000"],
          ["400000", "600000", "200000", "0000"]
        ]
      },
      stackedbarchartOptions: {
        stackBars: true,
        axisY: {
          labelInterpolationFnc: function(value) {
            return value / 1000 + "k";
          }
        }
      },
      horizontalbarchartData: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        series: [
          [5, 4, 3, 7, 5, 10, 3],
          [3, 2, 9, 5, 4, 6, 4],
          [2, 6, 7, 1, 3, 5, 9],
          [2, 6, 7, 1, 3, 5, 19]
        ]
      },
      horizontalbarchartOptions: {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
          offset: 20
        }
      },
      piechartData: {
        series: [50, 30, 20]
      },
      piechartOptions: {
        labelInterpolationFnc: function(value) {
          return value + "%";
        }
      },
      donutchartData: {
        labels: ["safari", "chrome", "explorer", "firefox"],
        series: [20, 40, 10, 30]
      },
      donutchartOptions: {
        donut: true,
        donutWidth: 60,
        donutSolid: true,
        startAngle: 270,
        showLabel: true
      }
    };
  },
  mounted() {}
};
</script>
<style>
#stackedBar .ct-series-a .ct-bar,
#stackedBar .ct-series-b .ct-bar,
#stackedBar .ct-series-c .ct-bar,
#stackedBar .ct-series-d .ct-bar {
  stroke-width: 30px;
}
#horizontalBarChart .ct-series-a .ct-bar,
#horizontalBarChart .ct-series-b .ct-bar,
#horizontalBarChart .ct-series-c .ct-bar,
#horizontalBarChart .ct-series-d .ct-bar {
  stroke-width: 10px;
}
</style>

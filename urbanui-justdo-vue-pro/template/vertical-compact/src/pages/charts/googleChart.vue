<template>
  <section class="chartjs">
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Line chart</h4>
            <googleLineChart></googleLineChart>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Column chart</h4>
            <googleBarChart></googleBarChart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Area chart</h4>
            <googleAreaChart></googleAreaChart>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Scatter chart</h4>
            <googleScatterChart></googleScatterChart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Pie chart</h4>
            <googlePieChart></googlePieChart>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import googleLineChart from "../../components/charts/google-chart/lineChart";
import googleBarChart from "../../components/charts/google-chart/barChart";
import googleAreaChart from "../../components/charts/google-chart/areaChart";
import googleScatterChart from "../../components/charts/google-chart/scatterChart";
import googlePieChart from "../../components/charts/google-chart/pieChart";
export default {
  components: {
    googleLineChart,
    googleBarChart,
    googleAreaChart,
    googleScatterChart,
    googlePieChart
  }
};
</script>

<template>
  <section class="c3">
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Line chart</h4>
            <line-c3></line-c3>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Spline chart</h4>
            <spline-c3></spline-c3>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Step chart</h4>
            <step-c3></step-c3>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bar chart</h4>
            <bar-c3></bar-c3>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Pie chart</h4>
            <pie-c3></pie-c3>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Donut chart</h4>
            <donut-c3></donut-c3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import lineC3 from "../../components/charts/c3-chart/line-c3";
import splineC3 from "../../components/charts/c3-chart/spline-c3";
import barC3 from "../../components/charts/c3-chart/bar-c3";
import stepC3 from "../../components/charts/c3-chart/step-c3";
import pieC3 from "../../components/charts/c3-chart/pie-c3";
import donutC3 from "../../components/charts/c3-chart/donut-c3";

export default {
  name: "c3",
  components: {
    lineC3,
    splineC3,
    barC3,
    stepC3,
    pieC3,
    donutC3
  }
};
</script>

<template>
  <section class="loader">
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Range Sliders</h4>
            <div class="row">
              <div class="col-md-6">
                <p class="mb-0">Range Sliders</p>
                <simple-slider />
                <div class="mt-4 pt-4">
                  <p class="mb-0">Range With Label</p>
                  <range-label-slider />
                </div>
                <div class="mt-4 pt-4">
                  <p class="mb-0">Loading Label Sliders</p>
                  <loading-value-slider />
                </div>
              </div>
              <div class="col-md-6">
                <p class="mb-0">Custom Primary Sliders</p>
                <custom-primary-slider />
                <div class="mt-4 pt-4">
                  <p class="mb-0">Custom Success Sliders</p>
                  <custom-success-slider />
                </div>
                <div class="mt-4 pt-4">
                  <p class="mb-0">Custom Danger Sliders</p>
                  <custom-danger-slider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import simpleSlider from "../../components/forms/sliders/simpleSlider";
import rangeLabelSlider from "../../components/forms/sliders/rangeLabelSlider";
import customSuccessSlider from "../../components/forms/sliders/customSuccessSlider";
import customDangerSlider from "../../components/forms/sliders/customDangerSlider";
import customPrimarySlider from "../../components/forms/sliders/customPrimarySlider";
import loadingValueSlider from "../../components/forms/sliders/loadingValueSlider";
export default {
  components: {
    simpleSlider,
    rangeLabelSlider,
    customSuccessSlider,
    customDangerSlider,
    customPrimarySlider,
    loadingValueSlider
  },
  data() {
    return {
      value: 10
    };
  }
};
</script>


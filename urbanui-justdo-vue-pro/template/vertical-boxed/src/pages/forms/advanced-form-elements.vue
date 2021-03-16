<template>
  <section class="advanced-form-elements">
    <div class="row">
      <div class="col-md-4 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Star Rating</h4>
            <star-rating
              class="mx-auto"
              v-bind:increment="0.5"
              v-bind:rating="2.5"
              v-bind:max-rating="5"
              v-bind:star-size="15"
              v-bind:show-rating="false"
            ></star-rating>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Star Rating (Read Only)</h4>
            <star-rating
              class="mx-auto"
              v-bind:increment="0.5"
              v-bind:rating="2.5"
              v-bind:max-rating="5"
              v-bind:star-size="15"
              v-bind:show-rating="false"
              v-bind:read-only="true"
            ></star-rating>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Star Rating (Large Size)</h4>
            <star-rating
              class="mx-auto"
              v-bind:increment="0.5"
              v-bind:rating="2.5"
              v-bind:max-rating="5"
              v-bind:star-size="25"
              v-bind:show-rating="false"
            ></star-rating>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 grid-margin d-flex align-items-stretch">
        <div class="row flex-grow">
          <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Date Picker</h4>
                <date-picker v-model="time1" valuetype="format" placeholder="Select Date"></date-picker>
              </div>
            </div>
          </div>
          <div class="col-md-12 stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Tag Input</h4>
                <tag-input></tag-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Date Picker (Inline)</h4>
            <date-picker v-model="time2" valuetype="format" inline></date-picker>
          </div>
        </div>
      </div>
    </div>
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
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Code Mirror</h4>
            <code-mirror-editor />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Ace Editor</h4>
            <ace-editor />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import codeMirrorEditor from '../../components/forms/codeMirrorEditor'
import DatePicker from 'vue2-datepicker';
import tagInput from '../../components/forms/tagInput'
import StarRating from 'vue-star-rating'
import aceEditor from '../../components/forms/aceEditor'
import simpleSlider from '../../components/forms/sliders/simpleSlider'
import rangeLabelSlider from '../../components/forms/sliders/rangeLabelSlider'
import customSuccessSlider from '../../components/forms/sliders/customSuccessSlider'
import customDangerSlider from '../../components/forms/sliders/customDangerSlider'
import customPrimarySlider from '../../components/forms/sliders/customPrimarySlider'
import loadingValueSlider from '../../components/forms/sliders/loadingValueSlider'
export default {
  name: 'advancedFormElements',
  components: {
    codeMirrorEditor,
    DatePicker,
    tagInput,
    StarRating,
    aceEditor,
    simpleSlider,
    rangeLabelSlider,
    customSuccessSlider,
    customDangerSlider,
    customPrimarySlider,
    loadingValueSlider
  },
  data() {
    return {
      time1: null,
      time2: null
    };
  }
}
</script>
<template>
  <div class="google-map">
    <div class="row">
      <div class="col-md-12 col-lg-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Basic Map</h6>
            <div class="map-container">
              <GmapMap
                :center="{lat:10, lng:10}"
                :zoom="7"
                map-type-id="terrain"
                style="width: 100%; height: 500px"
              ></GmapMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAT9uAsuQPTgLew4c2CmAceEeaLXYeHhsk",
    libraries: "places"
  }
});
export default {};
</script>
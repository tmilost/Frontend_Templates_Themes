
<template>
  <div>
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sample</h4>
            <justgage></justgage>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Random Refresh</h4>
            <div class="container text-center">
              <justgageRefresh></justgageRefresh>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import justgage from "../../components/charts/justgage/justgage";
import justgageRefresh from "../../components/charts/justgage/justgageRefresh";

export default {
  components: {
    justgage,
    justgageRefresh
  }
};
</script> 
<template>
  <section class="notifications">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                <div class="wrapper text-center">
                  <h4 class="card-title">Alerts Popups</h4>
                  <p class="card-description">A basic message</p>
                  <alert-default />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                <div class="wrapper text-center">
                  <h4 class="card-title mt-3 mt-sm-0">Error Alert</h4>
                  <p class="card-description">Alert With Error Message</p>
                  <alert-error />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 d-flex justify-content-center">
                <div class="wrapper text-center">
                  <h4 class="card-title mt-3 mt-sm-0">Alerts Prompt</h4>
                  <p class="card-description">Alert with prompt text</p>
                  <alert-prompt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                <div class="wrapper text-center">
                  <h4 class="card-title">Custom HTML</h4>
                  <p class="card-description">Alert With Custom HTML</p>
                  <alert-custom-html />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                <div class="wrapper text-center">
                  <h4 class="card-title mt-3 mt-sm-0">Animated Alert</h4>
                  <p class="card-description">Alert With Animations</p>
                  <alert-animated />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 d-flex justify-content-center">
                <div class="wrapper text-center">
                  <h4 class="card-title mt-3 mt-sm-0">Alerts Content</h4>
                  <p class="card-description">Alert with Images</p>
                  <alert-with-image />
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
import alertDefault from "../../components/alerts/sweet-alert/alertDefault";
import alertError from "../../components/alerts/sweet-alert/alertError";
import alertPrompt from "../../components/alerts/sweet-alert/alertPrompt";
import alertCustomHtml from "../../components/alerts/sweet-alert/alertCustomHTML";
import alertAnimated from "../../components/alerts/sweet-alert/alertAnimated";
import alertWithImage from "../../components/alerts/sweet-alert/alertWithImage";
export default {
  name: "notifications",
  components: {
    alertDefault,
    alertError,
    alertPrompt,
    alertCustomHtml,
    alertAnimated,
    alertWithImage
  }
};
</script>

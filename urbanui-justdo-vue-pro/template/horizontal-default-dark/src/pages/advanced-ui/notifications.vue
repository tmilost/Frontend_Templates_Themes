<template>
  <section class="notifications">
    <div class="row">
      <div class="col-md-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Snotify Notifications - success</h4>
            <simpleSnotifysuccess />
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Snotify Notifications - warning</h4>
            <simpleSnotifyWarning />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Snotify Notifications - info</h4>
            <simpleSnotifyInfo />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bootstrap alert</h4>
            <div>
              <b-alert show variant="primary">Primary Alert</b-alert>
              <b-alert show variant="secondary">Secondary Alert</b-alert>
              <b-alert show variant="success">Success Alert</b-alert>
              <b-alert show variant="danger">Danger Alert</b-alert>
              <b-alert show variant="warning">Warning Alert</b-alert>
              <b-alert show variant="info">Info Alert</b-alert>
              <b-alert show variant="light">Light Alert</b-alert>
              <b-alert show variant="dark">Dark Alert</b-alert>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Color of links within alerts</h4>
            <div>
              <b-alert show variant="primary">
                <a href="javascript:void(0);" class="alert-link">Primary Alert</a>
              </b-alert>
              <b-alert show variant="secondary">
                <a href="javascript:void(0);" class="alert-link">Secondary Alert</a>
              </b-alert>
              <b-alert show variant="success">
                <a href="javascript:void(0);" class="alert-link">Success Alert</a>
              </b-alert>
              <b-alert show variant="danger">
                <a href="javascript:void(0);" class="alert-link">Danger Alert</a>
              </b-alert>
              <b-alert show variant="warning">
                <a href="javascript:void(0);" class="alert-link">Warning Alert</a>
              </b-alert>
              <b-alert show variant="info">
                <a href="javascript:void(0);" class="alert-link">Info Alert</a>
              </b-alert>
              <b-alert show variant="light">
                <a href="javascript:void(0);" class="alert-link">Light Alert</a>
              </b-alert>
              <b-alert show variant="dark">
                <a href="javascript:void(0);" class="alert-link">Dark Alert</a>
              </b-alert>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dismissible alerts</h4>
            <div>
              <b-alert show dismissible>
                Dismissible Alert! Click the close button
                <b>&rArr;</b>
              </b-alert>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Auto dismissing alerts</h4>
            <div>
              <b-alert
                :show="dismissCountDown"
                dismissible
                variant="warning"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
              >This alert will dismiss after {{ dismissCountDown }} seconds...</b-alert>
              <b-button
                @click="showAlert"
                variant="info"
                class="m-1"
              >Show alert with count-down timer</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import simpleSnotifysuccess from "../../components/alerts/snotify/simpleSnotifysuccess";
import simpleSnotifyWarning from "../../components/alerts/snotify/simpleSnotifyWarning";
import simpleSnotifyInfo from "../../components/alerts/snotify/simpleSnotifyInfo";
export default {
  name: "notifications",
  components: {
    simpleSnotifysuccess,
    simpleSnotifyWarning,
    simpleSnotifyInfo
  },
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>

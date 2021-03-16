<template>
  <section class="wizard">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body custom-wizard">
            <vue-good-wizard :steps="steps" :onNext="nextClicked" :onBack="backClicked">
              <div slot="page1">
                <section>
                  <h3>Account</h3>
                  <div class="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small
                      id="emailHelp"
                      class="form-text text-muted"
                    >We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password" />
                  </div>
                  <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control" placeholder="Confirm password" />
                  </div>
                </section>
              </div>
              <div slot="page2">
                <section>
                  <h3>Profile</h3>
                  <div class="form-group">
                    <label>First name</label>
                    <input
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div class="form-group">
                    <label>Last name</label>
                    <input type="password" class="form-control" placeholder="Last name" />
                  </div>
                  <div class="form-group">
                    <label>Profession</label>
                    <input type="password" class="form-control" placeholder="Profession" />
                  </div>
                </section>
              </div>
              <div slot="page3">
                <section>
                  <h3>Comments</h3>
                  <div class="form-group">
                    <label>Comments</label>
                    <textarea class="form-control" rows="3"></textarea>
                  </div>
                </section>
              </div>
              <div slot="page4">
                <section>
                  <h3>Finish</h3>
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input" />
                      I agree with the Terms and Conditions.
                      <i
                        class="input-helper"
                      ></i>
                    </label>
                  </div>
                </section>
              </div>
            </vue-good-wizard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { GoodWizard } from "vue-good-wizard";
export default {
  name: "wizard",
  components: {
    "vue-good-wizard": GoodWizard
  },
  data() {
    return {
      steps: [
        {
          label: "Account",
          slot: "page1"
        },
        {
          label: "Profile",
          slot: "page2"
        },
        {
          label: "Comments",
          slot: "page3"
        },
        {
          label: "Finish",
          slot: "page4",
          options: {
            nextDisabled: true
          }
        }
      ]
    };
  },
  methods: {
    nextClicked() {
      return true;
    },
    backClicked() {
      return true;
    }
  }
};
</script>
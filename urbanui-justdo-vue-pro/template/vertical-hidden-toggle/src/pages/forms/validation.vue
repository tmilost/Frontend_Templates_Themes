<template>
  <section class="validation">
    <div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Complete form validation</h4>
              <b-form @submit.stop.prevent="onSubmit">
                <b-form-group
                  id="example-input-group-1"
                  label="First Name"
                  label-for="example-input-1"
                >
                  <b-form-input
                    id="example-input-1"
                    name="example-input-1"
                    v-model="$v.form.name.$model"
                    :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
                    aria-describedby="input-1-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback
                    id="input-1-live-feedback"
                  >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  id="example-input-group-2"
                  label="Last Name"
                  label-for="example-input-2"
                >
                  <b-form-input
                    id="example-input-2"
                    name="example-input-2"
                    v-model="$v.form.lname.$model"
                    :state="$v.form.lname.$dirty ? !$v.form.lname.$error : null"
                    aria-describedby="input-2-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback
                    id="input-2-live-feedback"
                  >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  id="example-input-group-3"
                  label="User Name"
                  label-for="example-input-3"
                >
                  <b-form-input
                    id="example-input-3"
                    name="example-input-3"
                    v-model="$v.form.uname.$model"
                    :state="$v.form.uname.$dirty ? !$v.form.uname.$error : null"
                    aria-describedby="input-3-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback
                    id="input-3-live-feedback"
                  >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  id="example-input-group-4"
                  label="Password"
                  label-for="example-input-4"
                >
                  <b-form-input
                    id="example-input-4"
                    name="example-input-4"
                    v-model="$v.form.password.$model"
                    :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
                    aria-describedby="input-4-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback
                    id="input-4-live-feedback"
                  >This is a required field and must be at least 6 characters.</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  id="example-input-group-5"
                  label="Confirm Password"
                  label-for="example-input-5"
                >
                  <b-form-input
                    id="example-input-5"
                    name="example-input-5"
                    type="password"
                    v-model="$v.form.repeatPassword.$model"
                    :state="$v.form.repeatPassword.$dirty ? !$v.form.repeatPassword.$error : null"
                    aria-describedby="input-5-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback
                    id="input-5-live-feedback"
                  >Please enter the same password as above.</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="example-input-group-6" label="Email" label-for="example-input-6">
                  <b-form-input
                    id="example-input-6"
                    name="example-input-6"
                    v-model="$v.form.email.$model"
                    :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
                    aria-describedby="input-6-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback
                    id="input-6-live-feedback"
                  >Please enter a valid email address</b-form-invalid-feedback>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: null,
        lname: null,
        uname: null,
        password: null,
        cpassword: null,
        email: null,
        repeatPassword: null
      }
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      lname: {
        required,
        minLength: minLength(3)
      },
      uname: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        sameAsPassword: sameAs("password")
      },
      cpassword: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      // Form submit logic
    }
  }
};
</script>
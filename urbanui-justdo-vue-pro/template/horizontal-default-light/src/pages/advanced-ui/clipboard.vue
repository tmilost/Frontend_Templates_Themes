<template id="clipboard">
  <section class="loader">
    <div class="row">
      <div class="col-12 grid-margin">
        <div>
          <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">clipboard on text input</h4>
                  <p class="card-description">copy from text input</p>
                  <input type="text" v-model="txtBoxModel" class="form-control" />
                  <div class="mt-3">
                    <button
                      type="button"
                      class="btn btn-info btn-clipboard"
                      @click="doCopyTxtBox"
                    >Copy</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Clipboard on textarea</h4>
                  <p class="card-description">copy from textarea</p>
                  <textarea
                    id="clipboardExample2"
                    class="form-control"
                    v-model="txtAreaModel"
                    rows="3"
                  >Hello</textarea>
                  <div class="mt-3">
                    <button
                      type="button"
                      class="btn btn-info btn-clipboard"
                      @click="doCopyTxtArea"
                    >Copy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Clipboard On Paragraph</h4>
                  <p class="card-description">Copy paragraph</p>
                  <p>{{txtParagraph}}</p>
                  <div class="mt-3">
                    <button
                      type="button"
                      class="btn btn-info btn-clipboard"
                      @click="doCopyParagraph"
                    >Copy</button>
                  </div>
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
import Vue from "vue";
import VueClipboard from "vue-clipboard2";

VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);

export default {
  data: function() {
    return {
      txtBoxModel: "Copied text box content",
      txtAreaModel: "Copied text area content",
      txtParagraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    };
  },
  methods: {
    doCopyTxtBox: function() {
      this.$copyText(this.txtBoxModel).then(function() {});
    },
    doCopyTxtArea: function() {
      this.$copyText(this.txtAreaModel).then(function() {});
    },
    doCopyParagraph: function() {
      this.$copyText(this.txtParagraph).then(function() {});
    }
  }
};
</script>


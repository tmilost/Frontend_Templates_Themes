<template>
  <section class="advanced-form-elements">
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
            <h4 class="card-title">Vue-Trix Text Editor</h4>
            <VueTrix v-model="editorContent" placeholder="Enter content" localStorage />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

import codeMirrorEditor from '../../components/forms/codeMirrorEditor'
import VueTrix from "vue-trix";
export default {
  name: 'textEditor',
  components: {
    codeMirrorEditor,
    VueTrix
  },
  data () {
      return {
        editorContent: "<h1>Editor contents</h1>"
      }
  }
}
</script>
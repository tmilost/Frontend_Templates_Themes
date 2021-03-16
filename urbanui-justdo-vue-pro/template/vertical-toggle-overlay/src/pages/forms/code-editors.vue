<template>
  <section class="advanced-form-elements">
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Ace Editor</h4>
            <div class="row">
              <div class="col-sm-6">
                <h5 class="card-subtitle">HTML Mode</h5>
                <ace-editor />
              </div>
              <div class="col-sm-6">
                <h5 class="card-subtitle">Javascript Mode</h5>
                <aceEditorJavascript />
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6">
                <h5 class="card-subtitle">CSS Mode</h5>
                <aceEditorCss />
              </div>
              <div class="col-sm-6">
                <h5 class="card-subtitle">SCSS Mode</h5>
                <aceEditorScss />
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6">
                <h5 class="card-subtitle">JSON Mode</h5>
                <aceEditorJson />
              </div>
              <div class="col-sm-6">
                <h5 class="card-subtitle">PHP Mode</h5>
                <aceEditorPhp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import aceEditor from '../../components/forms/aceEditor'
import aceEditorJavascript from '../../components/forms/aceEditorJavascript'
import aceEditorCss from '../../components/forms/aceEditorCss'
import aceEditorScss from '../../components/forms/aceEditorScss'
import aceEditorJson from '../../components/forms/aceEditorJson'
import aceEditorPhp from '../../components/forms/aceEditorPhp'
export default {
  name: 'codeEditor',
  components: {
    aceEditor,
    aceEditorJavascript,
    aceEditorCss,
    aceEditorScss,
    aceEditorJson,
    aceEditorPhp
  }
}
</script>
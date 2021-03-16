<template>
  <div>
    <div>
      <p @contextmenu.prevent="$refs.menu.open">Right click on me</p>
    </div>
    <vue-context ref="menu">
      <li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)">
          <i class="ti-world"></i> edit
        </a>
      </li>
      <li></li>
      <li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)">
          <i class="ti-cut"></i> cut
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)">
          <i class="ti-files"></i> copy
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)">
          <i class="ti-clipboard"></i> paste
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)">
          <i class="ti-trash"></i> delete
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)">
          <i class="ti-power-off"></i> quit
        </a>
      </li>
    </vue-context>
  </div>
</template>
<script>
import { VueContext } from "vue-context";
export default {
  components: {
    VueContext
  },
  methods: {
    onClick(text) {
      alert(`You clicked ${text}!`);
    }
  }
};
</script>
<style>
@import "~vue-context/dist/css/vue-context.css";
</style>

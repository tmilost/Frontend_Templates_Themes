<template>
  <section class="dragula">
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Simple Dragula</h4>
            <div class="examples">
              <div class="parent">
                <p class="card-description">Drag and drop between Team A and Team B</p>
                <div class="row">
                  <div class="container col-md-6">
                    <h6 class="card-title">Team A</h6>
                    <div class="bg-secondary p-4" v-dragula="colOne" drake="first">
                      <div v-for="text in colOne" :key="text" @click="onClick">
                        <div class="card rounded mb-2">
                          <div class="card-body p-3">
                            <div class="media">
                              <div class="d-flex">
                                <div>
                                  <h6 class="mb-1">{{text}}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container col-md-6">
                    <h6 class="card-title mt-3 mt-sm-0">Team B</h6>
                    <div class="bg-secondary p-4" v-dragula="colTwo" drake="first">
                      <div v-for="text in colTwo" :key="text">
                        <div class="card rounded mb-2">
                          <div class="card-body p-3">
                            <div class="media">
                              <div class="d-flex">
                                <div>
                                  <h6 class="mb-1">{{text}}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
import { Vue2Dragula } from "vue2-dragula";

Vue.use(Vue2Dragula, {
  logging: {
    service: true // to only log methods in service (DragulaService)
  }
});
export default {
  name: "globalService",

  data() {
    return {
      colOne: ["Rebecca young", "Jacob march", "Catherine"],
      colTwo: ["Keto Philip", "Jacob Stephen", "March Creg"],
      categories: [
        [1, 2, 3],
        [4, 5, 6]
      ]
    };
  },
  created() {
    // console.log('GLOBAL SERVICE: created')
    let service = this.$dragula.$service;

    // IMPORTANT!! setup empty named drakes matching
    // directive drake configs in template
    // otherwise may (currently) result in conflict

    service.options("first", {});

    service.options("second", {});

    service.options("third", {
      copy: true
    });

    // console.log('GLOBAL SERVICE: ready')
  },
  methods: {
    onClick() {
      window.alert("click event");
    },
    testModify() {
      this.categories = [
        ["a", "b", "c"],
        ["d", "e", "f"]
      ];
    }
  }
};
</script>

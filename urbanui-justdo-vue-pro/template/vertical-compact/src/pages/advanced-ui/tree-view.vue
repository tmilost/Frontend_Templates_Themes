<template>
  <section class="loader">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <b-tree-view :data="treeData" :contextMenuItems="contextMenuItems"></b-tree-view>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { bTreeView } from "bootstrap-vue-treeview";
export default {
  components: {
    bTreeView
  },
  data() {
    return {
      treeData: [
        {
          id: 2,
          name: "Food",
          children: [
            { id: 3, name: "Vegetable" },
            {
              id: 4,
              name: "Fruites",
              children: [
                { id: 41, name: "Apple" },
                { id: 42, name: "Orange" },
                { id: 43, name: "Grapes" },
                { id: 44, name: "Lemon" },
                { id: 45, name: "Pineapple" },
                { id: 46, name: "Jackfruit" }
              ]
            },
            {
              id: 5,
              name: "Snacks",
              children: [
                { id: 51, name: "Juice" },
                { id: 52, name: "Cakes" },
                { id: 53, name: "Chocolates" },
                { id: 54, name: "Bevarages" }
              ]
            }
          ]
        }
      ],
      contextMenuItems: [
        { code: "DELETE_NODE", label: "Delete node" },
        { code: "RENAME_NODE", label: "Rename node" }
      ]
    };
  }
};
</script>
<style>
.tree-node {
  font-size: 14px;
  padding: 5px;
}
</style>

<template>
  <div id="app">
    <section class="section">
      <div class="d-flex flex-column flex-md-row align-items-center">
        <h4 class="mb-md-0 mb-4">Design Board</h4>
        <div class="wrapper d-flex align-items-center">
          <div class="image-grouped ml-md-4">
            <img src="https://via.placeholder.com/36x36" alt="profile image" />
            <img src="https://via.placeholder.com/36X36" alt="profile image" />
            <img src="https://via.placeholder.com/36X36" alt="profile image" />
          </div>
          <button type="button" class="btn private-btn btn-dark btn-fw ml-4">
            <i class="ti-lock"></i>Private
          </button>
        </div>
        <div
          class="wrapper ml-md-auto d-flex flex-column flex-md-row kanban-toolbar ml-n2 ml-md-0 mt-4 mt-md-0"
        >
          <div class="d-flex">
            <button type="button" class="btn btn-icons btn-dark d-none d-xl-block">
              <i class="ti-zoom-in"></i>
            </button>
            <button type="button" class="btn btn-icons btn-dark d-none d-xl-block">
              <i class="ti-filter"></i>
            </button>
            <button type="button" class="btn btn-icons d-none d-xl-block btn-dark">
              <i class="ti-bell"></i>
            </button>
            <button type="button" class="btn btn-gradient-primary">Boards</button>
          </div>
          <div class="d-flex mt-4 mt-md-0">
            <button type="button" class="btn btn-gradient-success">Create New</button>
          </div>
        </div>
      </div>
      <div class="board-wrapper pt-5">
        <Kanban :stages="statuses" :blocks="blocks">
          <div v-for="stage in statuses" :slot="stage" :key="stage">
            <h2>{{ stage }}</h2>
          </div>
          <div v-for="item in blocks" :slot="item.id" :key="item.id">
            <div>
              <b-progress :value="25" :variant="item.progressVariant"></b-progress>
              <div class="d-flex justify-content-between">
                <p class="task-date">{{item.date}}</p>
                <b-dropdown class="transparent" right>
                  <template slot="button-content">
                    <i class="ti-more text-light"></i>
                  </template>
                  <b-dropdown-item>Edit</b-dropdown-item>
                  <b-dropdown-item>Delete</b-dropdown-item>
                </b-dropdown>
              </div>
              <h4 class="task-title">{{item.taskName}}</h4>
              <div class="image-grouped">
                <img v-bind:src="item.img1URL" alt="profile image" />
                <img v-bind:src="item.img2URL" alt="profile image" />
                <img v-bind:src="item.img3URL" alt="profile image" />
              </div>
              <div class="d-lg-flex justify-content-between">
                <b-badge :variant="item.progressVariant">{{item.priority}}</b-badge>
                <p class="due-date">{{item.dueDate}}</p>
              </div>
            </div>
          </div>
          <div v-for="stage in statuses" :key="stage" :slot="`footer-${stage}`">
            <span href>+ Add new block</span>
          </div>
        </Kanban>
      </div>
    </section>
  </div>
</template>

<script>
import Kanban from "../../components/apps/Kanban";
export default {
  name: "gallery",
  components: {
    Kanban
  },
  data() {
    return {
      statuses: ["Todo", "In-progress", "On Hold"],
      blocks: [
        {
          id: "task-1",
          status: "Todo",
          name: "Rebecca young",
          taskName: "Server gateway",
          date: "20 Feb 2019",
          img1URL: "https://via.placeholder.com/27x27",
          img2URL: "https://via.placeholder.com/27x27",
          img3URL: "https://via.placeholder.com/27x27",
          priority: "important",
          dueDate: "Due 10 days",
          progressVariant: "success"
        },
        {
          id: "task-2",
          status: "In-progress",
          name: "Jacob march",
          taskName: "Server gateway",
          date: "20 Feb 2019",
          img1URL: "https://via.placeholder.com/27x27",
          img2URL: "https://via.placeholder.com/27x27",
          img3URL: "https://via.placeholder.com/27x27",
          priority: "important",
          dueDate: "Due 10 days",
          progressVariant: "info"
        },
        {
          id: "task-3",
          status: "On Hold",
          name: "Catherine",
          taskName: "Software update",
          date: "20 Feb 2019",
          img1URL: "https://via.placeholder.com/27x27",
          img2URL: "https://via.placeholder.com/27x27",
          img3URL: "https://via.placeholder.com/27x27",
          priority: "important",
          dueDate: "Due 10 days",
          progressVariant: "dark"
        },
        {
          id: "task-4",
          status: "In-progress",
          name: "Network maintenance",
          taskName: "Director",
          date: "20 Feb 2019",
          img1URL: "https://via.placeholder.com/27x27",
          img2URL: "https://via.placeholder.com/27x27",
          img3URL: "https://via.placeholder.com/27x27",
          priority: "important",
          dueDate: "Due 10 days",
          progressVariant: "danger"
        },
        {
          id: "task-5",
          name: "Keto Philip",
          status: "On Hold",
          taskName: "Attached Preview Icon",
          date: "20 Feb 2019",
          img1URL: "https://via.placeholder.com/27x27",
          img2URL: "https://via.placeholder.com/27x27",
          img3URL: "https://via.placeholder.com/27x27",
          priority: "important",
          dueDate: "Due 10 days",
          progressVariant: "danger"
        },
        {
          id: "task-6",
          status: "Todo",
          name: "Jacob Stephen",
          taskName: "UI Design Started",
          date: "20 Feb 2019",
          img1URL: "https://via.placeholder.com/27x27",
          img2URL: "https://via.placeholder.com/27x27",
          img3URL: "https://via.placeholder.com/27x27",
          priority: "important",
          dueDate: "Due 10 days",
          progressVariant: "info"
        },
        {
          id: "task-7",
          name: "March Creg",
          status: "Todo",
          taskName: "New IOS Design",
          date: "20 Feb 2019",
          img1URL: "https://via.placeholder.com/27x27",
          img2URL: "https://via.placeholder.com/27x27",
          img3URL: "https://via.placeholder.com/27x27",
          priority: "important",
          dueDate: "Due 10 days",
          progressVariant: "success"
        },
        {
          id: "task-8",
          status: "In progress",
          name: "Peter Beckham",
          taskName: "Retail Order",
          date: "20 Feb 2019",
          img1URL: "https://via.placeholder.com/27x27",
          img2URL: "https://via.placeholder.com/27x27",
          img3URL: "https://via.placeholder.com/27x27",
          priority: "important",
          dueDate: "Due 10 days",
          progressVariant: "secondar"
        },
        {
          id: "task-9",
          status: "On Hold",
          name: "John Doe",
          taskName: "HTML/CSS templates",
          date: "20 Feb 2019",
          img1URL: "https://via.placeholder.com/27x27",
          img2URL: "https://via.placeholder.com/27x27",
          img3URL: "https://via.placeholder.com/27x27",
          priority: "important",
          dueDate: "Due 10 days",
          progressVariant: "primary"
        }
      ]
    };
  }
};
</script>


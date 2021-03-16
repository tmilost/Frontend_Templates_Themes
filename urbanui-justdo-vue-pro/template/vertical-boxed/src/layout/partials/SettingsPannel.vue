<template>
  <div id="right-sidebar" class="settings-panel">
    <i class="settings-close ti-close" @click="closePannel()"></i>

    <b-tabs>
      <b-tab title="Home" active>
        <div class="p-3">
          <todoList></todoList>
          <div>
            <h4 class="px-3 text-muted mt-5 font-weight-light mb-0">Events</h4>
            <div class="events pt-4 px-3">
              <div class="wrapper d-flex mb-2">
                <i class="ti-control-record text-primary mr-2"></i>
                <span>Feb 11 2018</span>
              </div>
              <p class="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
              <p class="text-gray mb-0">The total number of sessions</p>
            </div>
            <div class="events pt-4 px-3">
              <div class="wrapper d-flex mb-2">
                <i class="ti-control-record text-primary mr-2"></i>
                <span>Feb 7 2018</span>
              </div>
              <p class="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
              <p class="text-gray mb-0">Call Sarah Graves</p>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Profile">
        <div class="d-flex align-items-center justify-content-between border-bottom">
          <p class="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
          <small
            class="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal"
          >See All</small>
        </div>
        <ul class="chat-list">
          <li class="list active">
            <div class="profile">
              <img src="https://via.placeholder.com/36X36" alt="image" />
              <span class="online"></span>
            </div>
            <div class="info">
              <p>Thomas Douglas</p>
              <p>Available</p>
            </div>
            <small class="text-muted my-auto">19 min</small>
          </li>
          <li class="list">
            <div class="profile">
              <img src="https://via.placeholder.com/36X36" alt="image" />
              <span class="offline"></span>
            </div>
            <div class="info">
              <div class="wrapper d-flex">
                <p>Catherine</p>
              </div>
              <p>Away</p>
            </div>
            <div class="badge badge-success badge-pill my-auto mx-2">4</div>
            <small class="text-muted my-auto">23 min</small>
          </li>
          <li class="list">
            <div class="profile">
              <img src="https://via.placeholder.com/36X36" alt="image" />
              <span class="online"></span>
            </div>
            <div class="info">
              <p>Daniel Russell</p>
              <p>Available</p>
            </div>
            <small class="text-muted my-auto">14 min</small>
          </li>
          <li class="list">
            <div class="profile">
              <img src="https://via.placeholder.com/36X36" alt="image" />
              <span class="offline"></span>
            </div>
            <div class="info">
              <p>James Richardson</p>
              <p>Away</p>
            </div>
            <small class="text-muted my-auto">2 min</small>
          </li>
          <li class="list">
            <div class="profile">
              <img src="https://via.placeholder.com/36X36" alt="image" />
              <span class="online"></span>
            </div>
            <div class="info">
              <p>Madeline Kennedy</p>
              <p>Available</p>
            </div>
            <small class="text-muted my-auto">5 min</small>
          </li>
          <li class="list">
            <div class="profile">
              <img src="https://via.placeholder.com/36X36" alt="image" />
              <span class="online"></span>
            </div>
            <div class="info">
              <p>Sarah Graves</p>
              <p>Available</p>
            </div>
            <small class="text-muted my-auto">47 min</small>
          </li>
        </ul>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import todoList from "../../components/apps/todoList";
export default {
  name: "SettingsPannel",
  components: {
    todoList
  },
  methods: {
    closePannel: () => {
      document.querySelector("#right-sidebar").classList.toggle("open");
    }
  }
};
</script>
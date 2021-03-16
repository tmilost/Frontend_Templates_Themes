<template>
  <div id="right-sidebar" class="settings-panel">
    <i class="settings-close ti-close" @click="closePannel()"></i>

    <b-tabs>
      <b-tab title="Home" active>
        <div class="p-3">
          <todoList></todoList>
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

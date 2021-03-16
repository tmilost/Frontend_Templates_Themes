<template>
  <b-navbar
    id="template-header"
    class="default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
    toggleable="lg"
  >
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <router-link class="navbar-brand brand-logo mr-5" to="/">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </router-link>
      <router-link class="navbar-brand brand-logo-mini" to="/">
        <img src="@/assets/images/logo-mini.svg" alt="logo" />
      </router-link>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
      <button
        class="navbar-toggler navbar-toggler align-self-center d-lg-block"
        type="button"
        @click="toggleSidebar()"
      >
        <span class="ti-layout-grid2"></span>
      </button>
      <div class="nav-search d-none d-lg-block">
        <form action="#">
          <div class="input-group">
            <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
              <span class="input-group-text" id="search">
                <i class="ti-search"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              id="navbar-search-input"
              placeholder="Search now"
              aria-label="search"
              aria-describedby="search"
            />
          </div>
        </form>
      </div>
      <b-navbar-nav class="navbar-nav-right ml-auto">
        <b-nav-item-dropdown right class="preview-list mr-1">
          <template slot="button-content">
            <div class="nav-link count-indicator dropdown-toggle">
              <i class="ti-email mx-0"></i>
            </div>
          </template>
          <h6 class="p-3 mb-0">Messages</h6>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img src="https://via.placeholder.com/36X36" alt="image" class="profile-pic" />
            </div>
            <div class="preview-item-content flex-grow">
              <h6 class="preview-subject ellipsis font-weight-normal">David Grey</h6>
              <p class="font-weight-light small-text text-muted mb-0">The meeting is cancelled</p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img src="https://via.placeholder.com/36X36" alt="image" class="profile-pic" />
            </div>
            <div class="preview-item-content flex-grow">
              <h6 class="preview-subject ellipsis font-weight-normal">Tim Cook</h6>
              <p class="font-weight-light small-text text-muted mb-0">New product launch</p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img src="https://via.placeholder.com/36X36" alt="image" class="profile-pic" />
            </div>
            <div class="preview-item-content flex-grow">
              <h6 class="preview-subject ellipsis font-weight-normal">Johnson</h6>
              <p class="font-weight-light small-text text-muted mb-0">Upcoming board meeting</p>
            </div>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
            <div class="nav-link count-indicator dropdown-toggle">
              <i class="ti-bell mx-0"></i>
              <span class="count"></span>
            </div>
          </template>
          <h6 class="p-3 mb-0">Notifications</h6>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-success">
                <i class="ti-info-alt mx-0"></i>
              </div>
            </div>
            <div class="preview-item-content">
              <h6 class="preview-subject font-weight-normal">Application Error</h6>
              <p class="font-weight-light small-text mb-0 text-muted">Just now</p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-warning">
                <i class="ti-settings mx-0"></i>
              </div>
            </div>
            <div class="preview-item-content">
              <h6 class="preview-subject font-weight-normal">Settings</h6>
              <p class="font-weight-light small-text mb-0 text-muted">Private message</p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-info">
                <i class="ti-user mx-0"></i>
              </div>
            </div>
            <div class="preview-item-content">
              <h6 class="preview-subject font-weight-normal">New user registration</h6>
              <p class="font-weight-light small-text mb-0 text-muted">2 days ago</p>
            </div>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right class="nav-profile">
          <template slot="button-content">
            <span
              class="nav-link dropdown-toggle"
              id="profileDropdown"
              href="javascript:void(0);"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="nav-profile-img">
                <img src="https://via.placeholder.com/36X36" alt="image" />
              </div>
            </span>
          </template>
          <b-dropdown-item class="preview-item">
            <i class="ti-settings text-primary"></i> Settings
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <i class="ti-power-off text-primary"></i> Logout
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="nav-logout d-none d-lg-block nav-settings">
          <i class="ti-more" @click="togglesettingsPannel()"></i>
        </b-nav-item>
      </b-navbar-nav>
      <button
        class="navbar-toggler navbar-toggler-right align-self-center"
        type="button"
        @click="toggleMobileSidebar()"
      >
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "app-header",
  methods: {
    toggleSidebar: () => {
      document.querySelector("body").classList.toggle("sidebar-hidden");
    },
    toggleMobileSidebar: () => {
      document.querySelector("#sidebar").classList.toggle("active");
    },
    togglesettingsPannel: () => {
      document.querySelector("#right-sidebar").classList.toggle("open");
    }
  }
};
</script>

<style scoped></style>

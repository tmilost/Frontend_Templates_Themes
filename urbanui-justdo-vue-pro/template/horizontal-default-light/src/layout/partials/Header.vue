<template>
  <b-navbar id="template-header" class="navbar default-layout-navbar p-0 fixed-top" toggleable="lg">
    <div class="horizontal-menu">
      <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="container">
          <div
            class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"
          >
            <router-link class="navbar-brand brand-logo" to="/">
              <img src="@/assets/images/logo-white.svg" alt="logo" />
            </router-link>
            <router-link class="navbar-brand brand-logo-mini" to="/">
              <img src="@/assets/images/logo-mini.svg" alt="logo" />
            </router-link>
          </div>
          <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
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
              <b-nav-item class="nav-logout d-none d-lg-flex nav-settings">
                <i class="ti-more" @click="togglesettingsPannel()"></i>
              </b-nav-item>
            </b-navbar-nav>
            <button
              class="navbar-toggler navbar-toggler-right align-self-center"
              type="button"
              @click="toggleMobileSidebar()"
            >
              <span class="ti-menu"></span>
            </button>
          </div>
        </div>
      </nav>
      <nav class="bottom-navbar">
        <div class="container">
          <ul class="nav page-navigation">
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                <i class="ti-home menu-icon menu-icon"></i>
                <span class="menu-title">Dashboard</span>
              </router-link>
            </li>
            <li class="nav-item mega-menu">
              <a href="javascript:void(0);" class="nav-link">
                <i class="ti-palette menu-icon"></i>
                <span class="menu-title">UI Elements</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="submenu">
                <div class="col-group-wrapper row">
                  <div class="col-group col-md-4">
                    <div class="row">
                      <div class="col-12">
                        <p class="category-heading">Basic Elements</p>
                        <div class="submenu-item">
                          <div class="row">
                            <div class="col-md-6">
                              <ul>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/basic-ui/accordions/">Accordion</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/basic-ui/alerts/">Alerts</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/basic-ui/badges/">Badges</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link
                                    class="nav-link"
                                    to="/basic-ui/breadcrumbs/"
                                  >Breadcrumbs</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/basic-ui/buttons/">Buttons</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/basic-ui/dropdowns/">Dropdowns</router-link>
                                </li>
                              </ul>
                            </div>
                            <div class="col-md-6">
                              <ul>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/basic-ui/modals/">Modals</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link
                                    class="nav-link"
                                    to="/basic-ui/paginations/"
                                  >Paginations</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/basic-ui/progress/">Progress</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/basic-ui/tabs/">Tabs</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link
                                    class="nav-link"
                                    to="/basic-ui/tooltips/"
                                  >Tooltips & Popovers</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link
                                    class="nav-link"
                                    to="/basic-ui/typography/"
                                  >Typography</router-link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-group col-md-4">
                    <div class="row">
                      <div class="col-12">
                        <p class="category-heading">Advanced Elements</p>
                        <div class="submenu-item">
                          <div class="row">
                            <div class="col-md-6">
                              <ul>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/advanced-ui/dragula/">Dragula</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/advanced-ui/carousel/">Carousel</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/advanced-ui/loaders/">Loaders</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link class="nav-link" to="/advanced-ui/slider/">Slider</router-link>
                                </li>
                              </ul>
                            </div>
                            <div class="col-md-6">
                              <ul>
                                <li class="nav-item">
                                  <router-link
                                    class="nav-link"
                                    to="/advanced-ui/clipboard/"
                                  >Clipboard</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link
                                    class="nav-link"
                                    to="/advanced-ui/tree-view/"
                                  >Tree View</router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link
                                    class="nav-link"
                                    to="/advanced-ui/context-menu/"
                                  >Context Menu</router-link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-group col-md-4">
                    <p class="category-heading">Icons</p>
                    <ul class="submenu-item">
                      <li class="nav-item">
                        <router-link class="nav-link" to="/icons/flag-icons/">Flag icons</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/icons/fontawesome/">Font Awesome</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/icons/mdi-icons/">MDI</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/icons/simpleline/">Simple line icons</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/icons/themify-icons/">Themify icons</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0);" class="nav-link">
                <i class="ti-clipboard menu-icon"></i>
                <span class="menu-title">Forms</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="submenu">
                <ul class="submenu-item">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/forms/basic-elements/">Basic Elements</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/forms/advanced-elements/">Advanced Elements</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/forms/wizard/">Wizard</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/forms/validation/">Validation</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/text-editors/">Text Editors</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/code-editors/">Code Editors</router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item mega-menu">
              <a href="javascript:void(0);" class="nav-link">
                <i class="ti-bar-chart menu-icon"></i>
                <span class="menu-title">Data</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="submenu">
                <div class="col-group-wrapper row">
                  <div class="col-group col-md-6">
                    <p class="category-heading">Charts</p>
                    <div class="submenu-item">
                      <div class="row">
                        <div class="col-md-6">
                          <ul>
                            <li class="nav-item">
                              <router-link class="nav-link" to="/charts/chartjs/">Chart js</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link class="nav-link" to="/charts/c3/">C3 charts</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link class="nav-link" to="/charts/chartist/">Chartist</router-link>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <ul>
                            <li class="nav-item">
                              <router-link class="nav-link" to="/charts/googleChart/">Google Chart</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link class="nav-link" to="/charts/justgage/">Justgage</router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-group col-md-3">
                    <p class="category-heading">Table</p>
                    <ul class="submenu-item">
                      <li class="nav-item">
                        <router-link class="nav-link" to="/tables/basic-tables/">Basic Table</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/tables/advanced-tables/">Advanced Table</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-group col-md-3">
                    <p class="category-heading">Maps</p>
                    <ul class="submenu-item">
                      <li class="nav-item">
                        <router-link class="nav-link" to="/maps/google-map/">Google Maps</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item mega-menu">
              <a href="javascript:void(0);" class="nav-link">
                <i class="ti-files menu-icon"></i>
                <span class="menu-title">Sample Pages</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="submenu">
                <div class="col-group-wrapper row">
                  <div class="col-group col-md-2">
                    <p class="category-heading">User Pages</p>
                    <ul class="submenu-item">
                      <li class="nav-item">
                        <router-link class="nav-link" to="/auth-pages/login/">Login</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/auth-pages/login-2/">Login - 2</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          class="nav-link"
                          to="/auth-pages/multi-level-login/"
                        >Multi Level Login</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/auth-pages/register/">Register</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/auth-pages/register-2/">Register - 2</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/auth-pages/lock-screen/">Lockscreen</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-group col-md-2">
                    <p class="category-heading">Error Pages</p>
                    <ul class="submenu-item">
                      <li class="nav-item">
                        <router-link class="nav-link" to="/error-pages/error-404/">404</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/error-pages/error-500/">500</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-group col-md-3">
                    <p class="category-heading">E-commerce</p>
                    <ul class="submenu-item">
                      <li class="nav-item">
                        <router-link class="nav-link" to="/e-commerce/invoice/">Invoice</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/e-commerce/orders/">Orders</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/e-commerce/pricing-table/">Pricing Table</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          class="nav-link"
                          to="/e-commerce/product-catalogue/"
                        >Product Catalogue</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/e-commerce/project-list/">Project list</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-group col-md-5">
                    <p class="category-heading">General</p>
                    <div class="row">
                      <div class="col-md-6">
                        <ul class="submenu-item">
                          <li class="nav-item">
                            <router-link class="nav-link" to="/general-pages/blank-page/">Blank Page</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/general-pages/profile/">Profile</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/general-pages/faq-1/">FAQ</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/general-pages/faq-2/">FAQ 2</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/general-pages/news-grid/">News Grid</router-link>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6">
                        <ul>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/general-pages/timeline/">Timeline</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link
                              class="nav-link"
                              to="/general-pages/search-result/"
                            >Search Result</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/general-pages/portfolio/">Portfolio</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link
                              class="nav-link"
                              to="/general-pages/user-listing/"
                            >User Listing</router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0);" class="nav-link">
                <i class="ti-package menu-icon"></i>
                <span class="menu-title">Apps</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="submenu">
                <ul class="submenu-item">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/apps/calendar/">Calendar</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/apps/email/">E-mail</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/apps/todo/">To-do</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/apps/gallery/">Gallery</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/apps/tickets/">Tickets</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/apps/kanban/">Kanban Board</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/apps/chat/">Chat</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/widgets/">Widgets</router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/popups/">
                <i class="ti-comment-alt menu-icon"></i>
                <span class="menu-title">Popups</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/notifications/">
                <i class="ti-bell menu-icon"></i>
                <span class="menu-title">Notifications</span>
              </router-link>
            </li>
            <li class="nav-item">
              <a
                href="http://www.bootstrapdash.com/demo/justdo-vue-pro/documentation/documentation.html"
                class="nav-link"
                target="_blank"
              >
                <i class="ti-file menu-icon"></i>
                <span class="menu-title">Docs</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "app-header",
  mounted() {
    var navItems = document.querySelectorAll(
      ".horizontal-menu .page-navigation >.nav-item"
    );
    document
      .querySelectorAll(".horizontal-menu .page-navigation >.nav-item")
      .forEach(function(el) {
        el.addEventListener("click", function() {
          for (var i = 0; i < navItems.length; i++) {
            if (navItems[i] == el) {
              el.classList.toggle("show-submenu");
            } else {
              navItems[i].classList.remove("show-submenu");
            }
          }
        });
      });
  },
  methods: {
    toggleMobileSidebar: () => {
      document
        .querySelector(".bottom-navbar")
        .classList.toggle("header-toggled");
    },
    togglesettingsPannel: () => {
      document.querySelector("#right-sidebar").classList.toggle("open");
    },
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
    handleSCroll() {
      let header = document.querySelector("body");
      if (window.scrollY > 70) {
        header.classList.add("fixed-on-scroll");
      } else {
        header.classList.remove("fixed-on-scroll");
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleSCroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleSCroll);
  },
  watch: {
    $route() {
      document
        .querySelector(".bottom-navbar")
        .classList.remove("header-toggled");
    }
  }
};
</script>

<style scoped></style>

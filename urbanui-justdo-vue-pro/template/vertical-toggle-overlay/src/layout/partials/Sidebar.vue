<template>
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/">
            <i class="ti-home menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/widgets/">
            <i class="ti-settings menu-icon"></i>
            <span class="menu-title">Widgets</span>
          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'ui-basic'">
            <i class="ti-palette menu-icon"></i>
            <span class="menu-title">UI Elements</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-basic">
            <ul class="nav flex-column sub-menu">
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
                <router-link class="nav-link" to="/basic-ui/breadcrumbs/">Breadcrumbs</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/buttons/">Buttons</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/dropdowns/">Dropdowns</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/modals/">Modals</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/paginations/">Paginations</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/progress/">Progress</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/tabs/">Tabs</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/tooltips/">Tooltips & Popovers</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/typography/">Typography</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'ui-advanced'">
            <i class="ti-view-list menu-icon"></i>
            <span class="menu-title">Advanced UI</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-advanced">
            <ul class="nav flex-column sub-menu">
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
              <li class="nav-item">
                <router-link class="nav-link" to="/advanced-ui/clipboard/">Clipboard</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/advanced-ui/tree-view/">Tree View</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/advanced-ui/context-menu/">Context Menu</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'charts-dropdown'">
            <i class="ti-bar-chart-alt menu-icon"></i>
            <span class="menu-title">Charts</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="charts-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartjs/">Chart js</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/c3/">C3 charts</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartist/">Chartist</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/googleChart/">Google Chart</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/justgage/">Justgage</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'maps-dropdown'">
            <i class="ti-map menu-icon"></i>
            <span class="menu-title">Maps</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="maps-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/maps/google-map/">Google Maps</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'table-dropdown'">
            <i class="ti-layout menu-icon"></i>
            <span class="menu-title">Tables</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="table-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/tables/basic-tables/">Basic Table</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/tables/advanced-tables/">Advanced Table</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'apps'">
            <i class="ti-shopping-cart menu-icon"></i>
            <span class="menu-title">Apps</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="apps">
            <ul class="nav flex-column sub-menu">
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
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'user-page-dropdown'">
            <i class="ti-layers-alt menu-icon"></i>
            <span class="menu-title">User Pages</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="user-page-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/auth-pages/login/">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/auth-pages/login-2/">Login - 2</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/auth-pages/multi-level-login/">Multi Level Login</router-link>
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
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'error-page-dropdown'">
            <i class="ti-help-alt menu-icon"></i>
            <span class="menu-title">Error pages</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="error-page-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/error-pages/error-404/">404</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/error-pages/error-500/">500</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'general-page-dropdown'">
            <i class="ti-layers menu-icon"></i>
            <span class="menu-title">General Pages</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="general-page-dropdown">
            <ul class="nav flex-column sub-menu">
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
              <li class="nav-item">
                <router-link class="nav-link" to="/general-pages/timeline/">Timeline</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/general-pages/search-result/">Search Result</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/general-pages/portfolio/">Portfolio</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/general-pages/user-listing/">User Listing</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/popups/">
            <i class="ti-export menu-icon"></i>
            <span class="menu-title">Popups</span>
          </router-link>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/notifications/">
            <i class="ti-bell menu-icon"></i>
            <span class="menu-title">Notifications</span>
          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'form-elements'">
            <i class="ti-clipboard menu-icon"></i>
            <span class="menu-title">Forms</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="form-elements">
            <ul class="nav flex-column sub-menu">
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
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/text-editors/">
            <i class="ti-eraser menu-icon"></i>
            <span class="menu-title">Text Editors</span>
          </router-link>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/code-editors/">
            <i class="ti-pencil-alt2 menu-icon"></i>
            <span class="menu-title">Code Editors</span>
          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'icons-dropdown'">
            <i class="ti-face-smile menu-icon"></i>
            <span class="menu-title">Icons</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="icons-dropdown">
            <ul class="nav flex-column sub-menu">
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
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'e-commerce-page-dropdown'">
            <i class="ti-shopping-cart menu-icon"></i>
            <span class="menu-title">E-commerce</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="e-commerce-page-dropdown">
            <ul class="nav flex-column sub-menu">
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
                <router-link class="nav-link" to="/e-commerce/product-catalogue/">Product Catalogue</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/e-commerce/project-list/">Project list</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            target="_blank"
            href="http://www.bootstrapdash.com/demo/justdo-vue-pro/documentation/documentation.html"
          >
            <i class="ti-notepad menu-icon"></i>
            <span class="menu-title">Documentation</span>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      collapses: [{ show: false }, { show: false }, { show: false }]
    };
  },
  methods: {
    collapseAll() {
      var exp_elm = document.getElementsByClassName("show");
      if (exp_elm.length > 0) {
        var elm_id = exp_elm[0].id;
        this.$root.$emit("bv::toggle::collapse", elm_id);
      }
    }
  },
  mounted() {
    const body = document.querySelector("body");
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll(".sidebar .nav-item").forEach(function(el) {
      el.addEventListener("mouseover", function() {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function() {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  },
  watch: {
    $route() {
      document.querySelector("#sidebar").classList.toggle("active");
    }
  }
};
</script>

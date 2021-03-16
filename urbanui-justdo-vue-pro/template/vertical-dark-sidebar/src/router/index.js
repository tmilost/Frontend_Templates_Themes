import Vue from "vue";
import Router from "vue-router";

import layout from "../layout";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  mode: "history",
  base: "/demo/justdo-vue-pro/preview/vertical-dark-sidebar/",
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: () => import("@/pages/dashboard")
        }
      ]
    },
    {
      path: "/widgets",
      component: layout,
      children: [
        {
          path: "",
          name: "widgets",
          component: () => import("@/pages/widgets")
        }
      ]
    },
    {
      path: "/basic-ui",
      component: layout,
      children: [
        {
          path: "accordions",
          name: "accordions",
          component: () => import("@/pages/basic-ui/accordions")
        },
        {
          path: "badges",
          name: "badges",
          component: () => import("@/pages/basic-ui/badges")
        },
        {
          path: "alerts",
          name: "alerts",
          component: () => import("@/pages/basic-ui/alerts")
        },
        {
          path: "breadcrumbs",
          name: "breadcrumbs",
          component: () => import("@/pages/basic-ui/breadcrumbs")
        },
        {
          path: "buttons",
          name: "buttons",
          component: () => import("@/pages/basic-ui/buttons")
        },
        {
          path: "dropdowns",
          name: "dropdowns",
          component: () => import("@/pages/basic-ui/dropdowns")
        },
        {
          path: "modals",
          name: "modals",
          component: () => import("@/pages/basic-ui/modals")
        },
        {
          path: "paginations",
          name: "paginations",
          component: () => import("@/pages/basic-ui/paginations")
        },
        {
          path: "progress",
          name: "progress",
          component: () => import("@/pages/basic-ui/progress")
        },
        {
          path: "tabs",
          name: "tabs",
          component: () => import("@/pages/basic-ui/tabs")
        },
        {
          path: "tooltips",
          name: "tooltips",
          component: () => import("@/pages/basic-ui/tooltips")
        },
        {
          path: "typography",
          name: "typography",
          component: () => import("@/pages/basic-ui/typography")
        }
      ]
    },
    {
      path: "/advanced-ui",
      component: layout,
      children: [
        {
          path: "dragula",
          name: "dragula",
          component: () => import("@/pages/advanced-ui/dragula")
        },
        {
          path: "carousel",
          name: "carousel",
          component: () => import("@/pages/advanced-ui/carousel")
        },
        {
          path: "loaders",
          name: "loaders",
          component: () => import("@/pages/advanced-ui/loaders")
        },
        {
          path: "slider",
          name: "slider",
          component: () => import("@/pages/advanced-ui/slider")
        },
        {
          path: "context-menu",
          name: "context-menu",
          component: () => import("@/pages/advanced-ui/context-menu")
        },
        {
          path: "clipboard",
          name: "clipboard",
          component: () => import("@/pages/advanced-ui/clipboard")
        },
        {
          path: "tree-view",
          name: "tree-view",
          component: () => import("@/pages/advanced-ui/tree-view")
        }
      ]
    },
    {
      path: "/charts",
      component: layout,
      children: [
        {
          path: "chartjs",
          name: "chartjs",
          component: () => import("@/pages/charts/chartjs")
        },
        {
          path: "c3",
          name: "c3",
          component: () => import("@/pages/charts/c3")
        },
        {
          path: "chartist",
          name: "chartist",
          component: () => import("@/pages/charts/chartist")
        },
        {
          path: "googleChart",
          name: "googleChart",
          component: () => import("@/pages/charts/googleChart")
        },
        {
          path: "justgage",
          name: "justgage",
          component: () => import("@/pages/charts/justgage")
        }
      ]
    },
    {
      path: "/maps",
      component: layout,
      children: [
        {
          path: "google-map",
          name: "google-map",
          component: () => import("@/pages/maps/google-map")
        }
      ]
    },
    {
      path: "/tables",
      component: layout,
      children: [
        {
          path: "basic-tables",
          name: "basic-tables",
          component: () => import("@/pages/tables/basic-tables")
        },
        {
          path: "advanced-tables",
          name: "advanced-tables",
          component: () => import("@/pages/tables/advanced-tables")
        }
      ]
    },
    {
      path: "/auth-pages",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("@/pages/samples/auth-pages/login")
        },
        {
          path: "login-2",
          name: "login-2",
          component: () => import("@/pages/samples/auth-pages/login-2")
        },
        {
          path: "multi-level-login",
          name: "multi-level-login",
          component: () =>
            import("@/pages/samples/auth-pages/multi-level-login")
        },
        {
          path: "register",
          name: "register",
          component: () => import("@/pages/samples/auth-pages/register")
        },
        {
          path: "register-2",
          name: "register-2",
          component: () => import("@/pages/samples/auth-pages/register-2")
        },
        {
          path: "lock-screen",
          name: "lock-screen",
          component: () => import("@/pages/samples/auth-pages/lock-screen")
        }
      ]
    },
    {
      path: "/error-pages",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "error-404",
          name: "error-404",
          component: () => import("@/pages/samples/error-pages/error-404")
        },
        {
          path: "error-500",
          name: "error-500",
          component: () => import("@/pages/samples/error-pages/error-500")
        }
      ]
    },
    {
      path: "/general-pages",
      component: layout,
      children: [
        {
          path: "blank-page",
          name: "blank-page",
          component: () => import("@/pages/samples/general-pages/blank-page")
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("@/pages/samples/general-pages/profile")
        },
        {
          path: "faq-1",
          name: "faq-1",
          component: () => import("@/pages/samples/general-pages/faq-1")
        },
        {
          path: "faq-2",
          name: "faq-2",
          component: () => import("@/pages/samples/general-pages/faq-2")
        },
        {
          path: "news-grid",
          name: "news-grid",
          component: () => import("@/pages/samples/general-pages/news-grid")
        },
        {
          path: "timeline",
          name: "timeline",
          component: () => import("@/pages/samples/general-pages/timeline")
        },
        {
          path: "search-result",
          name: "search-result",
          component: () => import("@/pages/samples/general-pages/search-result")
        },
        {
          path: "portfolio",
          name: "portfolio",
          component: () => import("@/pages/samples/general-pages/portfolio")
        },
        {
          path: "user-listing",
          name: "user-listing",
          component: () => import("@/pages/samples/general-pages/user-listing")
        }
      ]
    },
    {
      path: "/notifications",
      component: layout,
      children: [
        {
          path: "",
          name: "notifications",
          component: () => import("@/pages/advanced-ui/notifications")
        }
      ]
    },
    {
      path: "/popups",
      component: layout,
      children: [
        {
          path: "",
          name: "popups",
          component: () => import("@/pages/advanced-ui/popups")
        }
      ]
    },
    {
      path: "/forms",
      component: layout,
      children: [
        {
          path: "basic-elements",
          name: "basic-elements",
          component: () => import("@/pages/forms/basic-form-elements")
        },
        {
          path: "advanced-elements",
          name: "advanced-elements",
          component: () => import("@/pages/forms/advanced-form-elements")
        },
        {
          path: "wizard",
          name: "wizard",
          component: () => import("@/pages/forms/wizard")
        },
        {
          path: "validation",
          name: "validation",
          component: () => import("@/pages/forms/validation")
        }
      ]
    },
    {
      path: "/text-editors",
      component: layout,
      children: [
        {
          path: "",
          name: "text-editors",
          component: () => import("@/pages/forms/text-editors")
        }
      ]
    },
    {
      path: "/code-editors",
      component: layout,
      children: [
        {
          path: "",
          name: "code-editors",
          component: () => import("@/pages/forms/code-editors")
        }
      ]
    },
    {
      path: "/icons",
      component: layout,
      children: [
        {
          path: "flag-icons",
          name: "flag-icons",
          component: () => import("@/pages/icons/flag-icons")
        },
        {
          path: "fontawesome",
          name: "fontawesome",
          component: () => import("@/pages/icons/fontawesome")
        },
        {
          path: "mdi-icons",
          name: "mdi-icons",
          component: () => import("@/pages/icons/mdi-icons")
        },
        {
          path: "simpleline",
          name: "simpleline",
          component: () => import("@/pages/icons/simple-line")
        },
        {
          path: "themify-icons",
          name: "themify-icons",
          component: () => import("@/pages/icons/themify")
        }
      ]
    },
    {
      path: "/e-commerce",
      component: layout,
      children: [
        {
          path: "invoice",
          name: "invoice",
          component: () => import("@/pages/samples/e-commerce/invoice")
        },
        {
          path: "orders",
          name: "orders",
          component: () => import("@/pages/samples/e-commerce/orders")
        },
        {
          path: "pricing-table",
          name: "pricing-table",
          component: () => import("@/pages/samples/e-commerce/pricing-table")
        },
        {
          path: "product-catalogue",
          name: "product-catalogue",
          component: () =>
            import("@/pages/samples/e-commerce/product-catalogue")
        },
        {
          path: "project-list",
          name: "project-list",
          component: () => import("@/pages/samples/e-commerce/project-list")
        }
      ]
    },
    {
      path: "/apps",
      component: layout,
      children: [
        {
          path: "calendar",
          name: "calendar",
          component: () => import("@/pages/apps/calendar")
        },
        {
          path: "email",
          name: "email",
          component: () => import("@/pages/apps/email")
        },
        {
          path: "todo",
          name: "todo",
          component: () => import("@/pages/apps/todo")
        },
        {
          path: "gallery",
          name: "gallery",
          component: () => import("@/pages/apps/gallery")
        },
        {
          path: "tickets",
          name: "tickets",
          component: () => import("@/pages/apps/tickets")
        },
        {
          path: "kanban",
          name: "kanban",
          component: () => import("@/pages/apps/kanban")
        },
        {
          path: "chat",
          name: "chat",
          component: () => import("@/pages/apps/chat")
        }
      ]
    },
    {
      path: "*",
      redirect: "/error-404",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "error-404",
          component: () => import("@/pages/samples/error-pages/error-404")
        }
      ]
    }
  ]
});

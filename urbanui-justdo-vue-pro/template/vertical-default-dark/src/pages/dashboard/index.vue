<template>
  <section class="dashboard">
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="row">
          <div class="col-12 col-xl-5 mb-4 mb-xl-0">
            <h4 class="font-weight-bold">Hi, Welcomeback!</h4>
            <h4 class="font-weight-normal mb-0">JustDo Dashboard,</h4>
          </div>
          <div class="col-12 col-xl-7">
            <div class="d-flex align-items-center justify-content-between flex-wrap">
              <div class="border-right pr-4 mb-3 mb-xl-0">
                <p class="text-muted">Balance</p>
                <h4 class="mb-0 font-weight-bold">$40079.60 M</h4>
              </div>
              <div class="border-right pr-4 mb-3 mb-xl-0">
                <p class="text-muted">Today’s profit</p>
                <h4 class="mb-0 font-weight-bold">$175.00 M</h4>
              </div>
              <div class="border-right pr-4 mb-3 mb-xl-0">
                <p class="text-muted">Purchases</p>
                <h4 class="mb-0 font-weight-bold">4006</h4>
              </div>
              <div class="pr-3 mb-3 mb-xl-0">
                <p class="text-muted">Downloads</p>
                <h4 class="mb-0 font-weight-bold">4006</h4>
              </div>
              <div class="mb-3 mb-xl-0">
                <button class="btn btn-warning rounded-0 text-white">Downloads</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <p class="card-title text-md-center text-xl-left">Number of Meetings</p>
            <div
              class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center"
            >
              <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">34040</h3>
              <i class="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
            </div>
            <p class="mb-0 mt-2 text-warning">
              2.00%
              <span class="ml-1">
                <small>(30 days)</small>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <p class="card-title text-md-center text-xl-left">Number of Clients</p>
            <div
              class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center"
            >
              <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">47033</h3>
              <i class="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
            </div>
            <p class="mb-0 mt-2 text-danger">
              0.22%
              <span class="ml-1">
                <small>(30 days)</small>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <p class="card-title text-md-center text-xl-left">Today’s Bookings</p>
            <div
              class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center"
            >
              <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">40016</h3>
              <i class="ti-agenda icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
            </div>
            <p class="mb-0 mt-2 text-success">
              10.00%
              <span class="ml-1">
                <small>(30 days)</small>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <p class="card-title text-md-center text-xl-left">Total Items Bookings</p>
            <div
              class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center"
            >
              <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">61344</h3>
              <i class="ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
            </div>
            <p class="mb-0 mt-2 text-success">
              22.00%
              <span class="ml-1">
                <small>(30 days)</small>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="card bg-primary border-0 position-relative">
          <div class="card-body">
            <p class="card-title text-white">Performance Overview</p>

            <slick ref="slick" :options="slickOptions" class="performance-overview pt-2">
              <div>
                <template>
                  <div class="row">
                    <div class="col-md-4 item">
                      <div class="d-flex flex-column flex-xl-row mt-4 mt-md-0">
                        <div class="icon icon-a text-white mr-3">
                          <i class="ti-cup icon-lg ml-3"></i>
                        </div>
                        <div class="content text-white">
                          <div class="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                            <h3 class="font-weight-light mr-2 mb-1">Revenue</h3>
                            <h3 class="mb-0">34040</h3>
                          </div>
                          <div
                            class="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3"
                          >
                            <h5 class="mb-0">+34040</h5>
                            <div class="d-flex align-items-center">
                              <i class="ti-angle-down mr-2"></i>
                              <h5 class="mb-0">0.036%</h5>
                            </div>
                          </div>
                          <p class="text-white font-weight-light pr-lg-2 pr-xl-5">
                            The total number of sessions within the date range.
                            It is the period time a user is actively engaged
                            with your website, page or app, etc
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 item">
                      <div class="d-flex flex-column flex-xl-row mt-5 mt-md-0">
                        <div class="icon icon-b text-white mr-3">
                          <i class="ti-bar-chart icon-lg ml-3"></i>
                        </div>
                        <div class="content text-white">
                          <div class="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                            <h3 class="font-weight-light mr-2 mb-1">Sales</h3>
                            <h3 class="mb-0">$9672471</h3>
                          </div>
                          <div
                            class="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3"
                          >
                            <h5 class="mb-0">-7.34567</h5>
                            <div class="d-flex align-items-center">
                              <i class="ti-angle-down mr-2"></i>
                              <h5 class="mb-0">2.036%</h5>
                            </div>
                          </div>
                          <p class="text-white font-weight-light pr-lg-2 pr-xl-5">
                            The total number of sessions within the date range.
                            It is the period time a user is actively engaged
                            with your website, page or app, etc
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 item">
                      <div class="d-flex flex-column flex-xl-row mt-5 mt-md-0">
                        <div class="icon icon-c text-white mr-3">
                          <i class="ti-shopping-cart-full icon-lg ml-3"></i>
                        </div>
                        <div class="content text-white">
                          <div class="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                            <h3 class="font-weight-light mr-2 mb-1">Purchases</h3>
                            <h3 class="mb-0">6358</h3>
                          </div>
                          <div
                            class="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3"
                          >
                            <h5 class="mb-0">+9082</h5>
                            <div class="d-flex align-items-center">
                              <i class="ti-angle-down mr-2"></i>
                              <h5 class="mb-0">35.54%</h5>
                            </div>
                          </div>
                          <p class="text-white font-weight-light pr-lg-2 pr-xl-5">
                            The total number of sessions within the date range.
                            It is the period time a user is actively engaged
                            with your website, page or app, etc
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
              <div>
                <template>
                  <div class="row">
                    <div class="col-md-4 item">
                      <div class="d-flex flex-column flex-xl-row mt-4 mt-md-0">
                        <div class="icon icon-a text-white mr-3">
                          <i class="ti-cup icon-lg ml-3"></i>
                        </div>
                        <div class="content text-white">
                          <div class="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                            <h3 class="font-weight-light mr-2 mb-1">Clients</h3>
                            <h3 class="mb-0">49076</h3>
                          </div>
                          <div
                            class="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3"
                          >
                            <h5 class="mb-0">+59238</h5>
                            <div class="d-flex align-items-center">
                              <i class="ti-angle-down mr-2"></i>
                              <h5 class="mb-0">0.056%</h5>
                            </div>
                          </div>
                          <p class="text-white font-weight-light pr-lg-2 pr-xl-5">
                            The total number of sessions within the date range.
                            It is the period time a user is actively engaged
                            with your website, page or app, etc
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 item">
                      <div class="d-flex flex-column flex-xl-row mt-5 mt-md-0">
                        <div class="icon icon-b text-white mr-3">
                          <i class="ti-bar-chart icon-lg ml-3"></i>
                        </div>
                        <div class="content text-white">
                          <div class="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                            <h3 class="font-weight-light mr-2 mb-1">Order</h3>
                            <h3 class="mb-0">$308656</h3>
                          </div>
                          <div
                            class="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3"
                          >
                            <h5 class="mb-0">-6.20967</h5>
                            <div class="d-flex align-items-center">
                              <i class="ti-angle-down mr-2"></i>
                              <h5 class="mb-0">2.389%</h5>
                            </div>
                          </div>
                          <p class="text-white font-weight-light pr-lg-2 pr-xl-5">
                            The total number of sessions within the date range.
                            It is the period time a user is actively engaged
                            with your website, page or app, etc
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 item">
                      <div class="d-flex flex-column flex-xl-row mt-5 mt-md-0">
                        <div class="icon icon-c text-white mr-3">
                          <i class="ti-shopping-cart-full icon-lg ml-3"></i>
                        </div>
                        <div class="content text-white">
                          <div class="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                            <h3 class="font-weight-light mr-2 mb-1">Purchases</h3>
                            <h3 class="mb-0">6358</h3>
                          </div>
                          <div
                            class="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3"
                          >
                            <h5 class="mb-0">+9082</h5>
                            <div class="d-flex align-items-center">
                              <i class="ti-angle-down mr-2"></i>
                              <h5 class="mb-0">35.54%</h5>
                            </div>
                          </div>
                          <p class="text-white font-weight-light pr-lg-2 pr-xl-5">
                            The total number of sessions within the date range.
                            It is the period time a user is actively engaged
                            with your website, page or app, etc
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </slick>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <p class="card-title">Order and Downloads</p>
            <p class="text-muted font-weight-light">
              The total number of sessions within the date range. It is the
              period time a user is actively engaged with your website, page or
              app, etc
            </p>
            <div class="d-flex flex-wrap mb-5">
              <div class="mr-5 mt-3">
                <p class="text-muted">Order value</p>
                <h3>12.3k</h3>
              </div>
              <div class="mr-5 mt-3">
                <p class="text-muted">Orders</p>
                <h3>14k</h3>
              </div>
              <div class="mr-5 mt-3">
                <p class="text-muted">Users</p>
                <h3>71.56%</h3>
              </div>
              <div class="mt-3">
                <p class="text-muted">Downloads</p>
                <h3>34040</h3>
              </div>
            </div>
            <!-- <canvas id="order-chart"></canvas> -->
            <OrderChartCanvas :height="200"></OrderChartCanvas>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <p class="card-title">Sales Report</p>
            <p class="text-muted font-weight-light">
              The total number of sessions within the date range. It is the
              period time a user is actively engaged with your website, page or
              app, etc
            </p>
            <div id="sales-legend" class="chartjs-legend mt-4 mb-2">
              <ul>
                <li>
                  <span></span>Offline Sales
                </li>
                <li>
                  <span></span>Online Sales
                </li>
              </ul>
            </div>
            <!-- <canvas id="sales-chart"></canvas> -->
            <salesChartCanvas :height="200"></salesChartCanvas>
          </div>
          <div class="card border-right-0 border-left-0 border-bottom-0">
            <div class="d-flex justify-content-center justify-content-md-end">
              <b-dropdown id="ddown19" variant="outline-light border">
                <template slot="button-content">Today</template>
                <b-dropdown-item>January - March</b-dropdown-item>
                <b-dropdown-item>March - June</b-dropdown-item>
                <b-dropdown-item>June - August</b-dropdown-item>
                <b-dropdown-item>August - November</b-dropdown-item>
              </b-dropdown>
              <button
                class="btn btn-lg btn-outline-light text-primary rounded-0 border-0 d-none d-md-block"
                type="button"
              >View all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-7 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <p class="card-title mb-0">Top Products</p>
            <div class="table-responsive">
              <table class="table table-striped table-borderless">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Search Engine Marketing</td>
                    <td class="font-weight-bold">$362</td>
                    <td>21 Sep 2018</td>
                    <td class="font-weight-medium text-success">Completed</td>
                  </tr>
                  <tr>
                    <td>Search Engine Optimization</td>
                    <td class="font-weight-bold">$116</td>
                    <td>13 Jun 2018</td>
                    <td class="font-weight-medium text-success">Completed</td>
                  </tr>
                  <tr>
                    <td>Display Advertising</td>
                    <td class="font-weight-bold">$551</td>
                    <td>28 Sep 2018</td>
                    <td class="font-weight-medium text-warning">Pending</td>
                  </tr>
                  <tr>
                    <td>Pay Per Click Advertising</td>
                    <td class="font-weight-bold">$523</td>
                    <td>30 Jun 2018</td>
                    <td class="font-weight-medium text-warning">Pending</td>
                  </tr>
                  <tr>
                    <td>E-Mail Marketing</td>
                    <td class="font-weight-bold">$781</td>
                    <td>01 Nov 2018</td>
                    <td class="font-weight-medium text-danger">Cancelled</td>
                  </tr>
                  <tr>
                    <td>Referral Marketing</td>
                    <td class="font-weight-bold">$283</td>
                    <td>20 Mar 2018</td>
                    <td class="font-weight-medium text-warning">Pending</td>
                  </tr>
                  <tr>
                    <td>Social media marketing</td>
                    <td class="font-weight-bold">$897</td>
                    <td>26 Oct 2018</td>
                    <td class="font-weight-medium text-success">Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">To Do Lists</h4>
            <todoList></todoList>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card position-relative">
          <div class="card-body">
            <p class="card-title">Detailed Reports</p>

            <slick ref="slick" :options="slickOptions" class="detailed-report">
              <div>
                <template>
                  <div class="row">
                    <div class="col-md-12 col-xl-3 d-flex flex-column justify-content-center">
                      <div class="ml-xl-4">
                        <h1>$34040</h1>
                        <h3 class="font-weight-light mb-xl-4">North America</h3>
                        <p class="text-muted mb-2 mb-xl-0">
                          The total number of sessions within the date range. It
                          is the period time a user is actively engaged with
                          your website, page or app, etc
                        </p>
                      </div>
                    </div>
                    <div class="col-md-12 col-xl-9">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="table-responsive mb-3 mb-md-0">
                            <table class="table table-borderless report-table">
                              <tr>
                                <td class="text-muted">Illinois</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-success"
                                      role="progressbar"
                                      style="width: 70%"
                                      aria-valuenow="70"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">713</h5>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-muted">Washington</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-warning"
                                      role="progressbar"
                                      style="width: 30%"
                                      aria-valuenow="30"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">583</h5>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-muted">Mississippi</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-danger"
                                      role="progressbar"
                                      style="width: 95%"
                                      aria-valuenow="95"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">924</h5>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-muted">California</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-primary"
                                      role="progressbar"
                                      style="width: 60%"
                                      aria-valuenow="60"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">664</h5>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-muted">Maryland</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-success"
                                      role="progressbar"
                                      style="width: 40%"
                                      aria-valuenow="40"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">560</h5>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-muted">Alaska</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-danger"
                                      role="progressbar"
                                      style="width: 75%"
                                      aria-valuenow="75"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">793</h5>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                        <div class="col-md-6 mt-3 aligner-wrapper">
                          <div class="absolute absolute-center text-center">
                            <h1 class="m-0">90</h1>
                          </div>
                          <dougnutNorth :height="192"></dougnutNorth>
                          <div id="north-america-legend" class="circle-america-legend">
                            <div class="report-chart">
                              <div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div class="d-flex align-items-center">
                                  <span class="circle-dot bg-success"></span>
                                  <p class="mb-0">Offline sales</p>
                                </div>
                                <p class="mb-0">88333</p>
                              </div>
                              <div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div class="d-flex align-items-center">
                                  <span class="circle-dot bg-warning"></span>
                                  <p class="mb-0">Online sales</p>
                                </div>
                                <p class="mb-0">66093</p>
                              </div>
                              <div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div class="d-flex align-items-center">
                                  <span class="circle-dot bg-info"></span>
                                  <p class="mb-0">Returns</p>
                                </div>
                                <p class="mb-0">39836</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
              <div>
                <template>
                  <div class="row">
                    <div class="col-md-12 col-xl-3 d-flex flex-column justify-content-center">
                      <div class="ml-xl-4">
                        <h1>$61321</h1>
                        <h3 class="font-weight-light mb-xl-4">South America</h3>
                        <p class="text-muted mb-2 mb-xl-0">
                          It is the period time a user is actively engaged with
                          your website, page or app, etc. The total number of
                          sessions within the date range.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-12 col-xl-9">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="table-responsive mb-3 mb-md-0">
                            <table class="table table-borderless report-table">
                              <tr>
                                <td class="text-muted">Brazil</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-success"
                                      role="progressbar"
                                      style="width: 70%"
                                      aria-valuenow="70"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">613</h5>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-muted">Argentina</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-warning"
                                      role="progressbar"
                                      style="width: 30%"
                                      aria-valuenow="30"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">483</h5>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-muted">Peru</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-danger"
                                      role="progressbar"
                                      style="width: 95%"
                                      aria-valuenow="95"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">824</h5>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-muted">Chile</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-primary"
                                      role="progressbar"
                                      style="width: 60%"
                                      aria-valuenow="60"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">564</h5>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-muted">Colombia</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-success"
                                      role="progressbar"
                                      style="width: 40%"
                                      aria-valuenow="40"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">460</h5>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-muted">Uruguay</td>
                                <td class="w-100 px-0">
                                  <div class="progress progress-md mx-4">
                                    <div
                                      class="progress-bar bg-danger"
                                      role="progressbar"
                                      style="width: 75%"
                                      aria-valuenow="75"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </td>
                                <td>
                                  <h5 class="font-weight-bold mb-0">693</h5>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                        <div class="col-md-6 mt-3 aligner-wrapper">
                          <div class="absolute absolute-center text-center">
                            <h1 class="m-0">70</h1>
                          </div>
                          <dougnutSouth :height="192"></dougnutSouth>
                          <div id="South-america-legend" class="circle-america-legend">
                            <div class="report-chart">
                              <div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div class="d-flex align-items-center">
                                  <span class="circle-dot bg-success"></span>
                                  <p class="mb-0">Offline sales</p>
                                </div>
                                <p class="mb-0">88333</p>
                              </div>
                              <div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div class="d-flex align-items-center">
                                  <span class="circle-dot bg-warning"></span>
                                  <p class="mb-0">Online sales</p>
                                </div>
                                <p class="mb-0">66093</p>
                              </div>
                              <div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div class="d-flex align-items-center">
                                  <span class="circle-dot bg-info"></span>
                                  <p class="mb-0">Returns</p>
                                </div>
                                <p class="mb-0">39836</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </slick>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 stretch-card grid-margin grid-margin-md-0">
        <div class="card">
          <div class="card-body">
            <p class="card-title mb-0">Projects</p>
            <div class="table-responsive">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th class="pl-0 border-bottom">Places</th>
                    <th class="border-bottom">Orders</th>
                    <th class="border-bottom">Users</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-muted pl-0">Kentucky</td>
                    <td>
                      <p class="mb-0">
                        <span class="font-weight-bold mr-2">65</span>(2.15%)
                      </p>
                    </td>
                    <td class="text-muted">65</td>
                  </tr>
                  <tr>
                    <td class="text-muted pl-0">Ohio</td>
                    <td>
                      <p class="mb-0">
                        <span class="font-weight-bold mr-2">54</span>(3.25%)
                      </p>
                    </td>
                    <td class="text-muted">51</td>
                  </tr>
                  <tr>
                    <td class="text-muted pl-0">Nevada</td>
                    <td>
                      <p class="mb-0">
                        <span class="font-weight-bold mr-2">22</span>(2.22%)
                      </p>
                    </td>
                    <td class="text-muted">32</td>
                  </tr>
                  <tr>
                    <td class="text-muted pl-0">North Carolina</td>
                    <td>
                      <p class="mb-0">
                        <span class="font-weight-bold mr-2">46</span>(3.27%)
                      </p>
                    </td>
                    <td class="text-muted">15</td>
                  </tr>
                  <tr>
                    <td class="text-muted pl-0">Montana</td>
                    <td>
                      <p class="mb-0">
                        <span class="font-weight-bold mr-2">17</span>(1.25%)
                      </p>
                    </td>
                    <td class="text-muted">25</td>
                  </tr>
                  <tr>
                    <td class="text-muted pl-0">Nevada</td>
                    <td>
                      <p class="mb-0">
                        <span class="font-weight-bold mr-2">52</span>(3.11%)
                      </p>
                    </td>
                    <td class="text-muted">71</td>
                  </tr>
                  <tr>
                    <td class="text-muted pl-0 pb-0">Louisiana</td>
                    <td class="pb-0">
                      <p class="mb-0">
                        <span class="font-weight-bold mr-2">25</span>(1.32%)
                      </p>
                    </td>
                    <td class="text-muted pb-0">14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 stretch-card">
        <div class="row">
          <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <p class="card-title">Charts</p>
                <div class="charts-data">
                  <div class="mt-3">
                    <p class="text-muted mb-0">Orders</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="progress progress-md flex-grow-1 mr-4">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 95%"
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="text-muted mb-0">5k</p>
                    </div>
                  </div>
                  <div class="mt-3">
                    <p class="text-muted mb-0">Users</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="progress progress-md flex-grow-1 mr-4">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 35%"
                          aria-valuenow="35"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="text-muted mb-0">3k</p>
                    </div>
                  </div>
                  <div class="mt-3">
                    <p class="text-muted mb-0">Downloads</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="progress progress-md flex-grow-1 mr-4">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 48%"
                          aria-valuenow="48"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="text-muted mb-0">992</p>
                    </div>
                  </div>
                  <div class="mt-3">
                    <p class="text-muted mb-0">Visitors</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="progress progress-md flex-grow-1 mr-4">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 25%"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="text-muted mb-0">687</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 stretch-card grid-margin grid-margin-md-0">
            <div class="card data-icon-card-primary">
              <div class="card-body">
                <p class="card-title text-white">Number of Meetings</p>
                <div class="row">
                  <div class="col-8 text-white">
                    <h3>3404</h3>
                    <p class="text-white font-weight-light mb-0">
                      The total number of sessions within the date range. It is
                      the period time
                    </p>
                  </div>
                  <div class="col-4 background-icon">
                    <i class="ti-calendar"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 stretch-card">
        <div class="card">
          <div class="card-body">
            <p class="card-title">Notifications</p>
            <ul class="icon-data-list">
              <li>
                <p class="text-primary mb-1">Isabella Becker</p>
                <p class="text-muted">Sales dashboard have been created</p>
                <small class="text-muted">9:30 am</small>
              </li>
              <li>
                <p class="text-primary mb-1">Adam Warren</p>
                <p class="text-muted">You have done a great job #TW11109872</p>
                <small class="text-muted">10:30 am</small>
              </li>
              <li>
                <p class="text-primary mb-1">Leonard Thornton</p>
                <p class="text-muted">Sales dashboard have been created</p>
                <small class="text-muted">11:30 am</small>
              </li>
              <li>
                <p class="text-primary mb-1">George Morrison</p>
                <p class="text-muted">Sales dashboard have been created</p>
                <small class="text-muted">8:50 am</small>
              </li>
              <li>
                <p class="text-primary mb-1">Ryan Cortez</p>
                <p class="text-muted">Herbs are fun and easy to grow.</p>
                <small class="text-muted">9:00 am</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slick from "vue-slick";
//import `node_modules/slick-carousel/slick/slick.css`;

import OrderChartCanvas from "../../components/charts/dashboard/OrderChartCanvas";
import salesChartCanvas from "../../components/charts/dashboard/salesChartCanvas";
import dougnutNorth from "../../components/charts/dashboard/dougnutNorth";
import dougnutSouth from "../../components/charts/dashboard/dougnutSouth";
import todoList from "../../components/apps/todoList";

export default {
  name: "dashboard",
  components: {
    Slick,
    OrderChartCanvas,
    salesChartCanvas,
    dougnutNorth,
    dougnutSouth,
    todoList
  },
  data() {
    return {
      time1: null,
      slickOptions: {
        slidesToShow: 1,
        prevArrow: this.$refs.prevArrow,
        nextArrow: this.$refs.nextArrow
        // Any other options that can be got from plugin documentation
      }
    };
  }
};
</script>

<style scoped></style>

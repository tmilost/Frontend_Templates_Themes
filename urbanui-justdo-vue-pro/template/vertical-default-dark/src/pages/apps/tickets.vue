<template>
  <section class="gallery">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Tickets</h4>
            <div class="d-sm-flex pb-4 mb-4 border-bottom justify-content-between">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="page-title mb-n2">Open Tickets</h5>
                <p class="mt-2 mb-n1 ml-3 text-muted">230 Tickets</p>
              </div>
              <form class="d-lg-flex pt-2 pt-md-0 align-items-stretch justify-content-between">
                <input type="text" class="form-control" placeholder="Search" />
                <button
                  type="submit"
                  class="btn btn-success no-wrap ml-0 ml-lg-4 mt-2 mt-lg-0"
                >Search</button>
              </form>
            </div>

            <b-tabs class="tickets-tab-switch">
              <b-tab title="Open Tickets" active>
                <div>
                  <div class="tickets-date-group">
                    <i class="ti-calendar"></i>Tuesday, 21 May 2019
                  </div>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8 col-12">
                      <div class="wrapper">
                        <h5>#39033 - Design Admin Dashboard</h5>
                        <div class="badge badge-success">New</div>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36X36"
                          alt="profile image"
                        />
                        <span>Brett Gonzales</span>
                        <span>
                          <i class="ti-alarm-clock"></i>03:34AM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6 d-none d-md-block">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36x36"
                        alt="profile image"
                      />
                      <span class="text-muted">Frank Briggs</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6 d-none d-md-block">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Wireframe</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8 col-12">
                      <div class="wrapper">
                        <h5>#39040 - Website Redesign</h5>
                        <div class="badge badge-info">Pro</div>
                      </div>
                      <div class="wrapper text-muted d-none d-lg-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36x36"
                          alt="profile image"
                        />
                        <span>Olivia Cross</span>
                        <span>
                          <i class="ti-alarm-clock"></i>04:23AM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-12">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Frank Briggs</span>
                    </div>
                    <div class="ticket-float col-lg-2 d-none d-lg-block">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Wireframe</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#39041 - Bootstrap Framework not working</h5>
                        <div class="badge badge-info">Pro</div>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36X36"
                          alt="profile image"
                        />
                        <span>Leah Frank</span>
                        <span>
                          <i class="ti-alarm-clock"></i>04:24AM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Emilie Barnett</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Deployed</span>
                    </div>
                  </a>
                  <div class="tickets-date-group">
                    <i class="ti-calendar"></i>Tuesday, 20 Apr,2019
                  </div>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#39045 - Design Admin Dashboard</h5>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36x36"
                          alt="profile image"
                        />
                        <span>Luella Sparks</span>
                        <span>
                          <i class="ti-alarm-clock"></i>12:54PM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Hunter Garza</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Concept</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#29033 - Set up the marketplace strategy</h5>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36x36"
                          alt="profile image"
                        />
                        <span>Mitchell Barber</span>
                        <span>
                          <i class="ti-alarm-clock"></i>4:19AM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Michael Campbell</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Wireframe</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#29033 - Design Admin Dashboard</h5>
                        <div class="badge badge-success">New</div>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36X36"
                          alt="profile image"
                        />
                        <span>Rhoda Jimenez</span>
                        <span>
                          <i class="ti-alarm-clock"></i>01:27PM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Maria Cook</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Deployed</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#29033 - Compose newsletter for the big launch</h5>
                        <div class="badge badge-success">New</div>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36X36"
                          alt="profile image"
                        />
                        <span>Alta Little</span>
                        <span>
                          <i class="ti-alarm-clock"></i>06:16PM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Juan Little</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Concept</span>
                    </div>
                  </a>
                </div>
              </b-tab>
              <b-tab title="Pending Tickets">
                <div>
                  <div class="tickets-date-group">
                    <i class="ti-calendar"></i>Tuesday, 21 May 2019
                  </div>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#39045 - Design Admin Dashboard</h5>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36x36"
                          alt="profile image"
                        />
                        <span>Luella Sparks</span>
                        <span>
                          <i class="ti-alarm-clock"></i>12:54PM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Hunter Garza</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Concept</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#39033 - Design Admin Dashboard</h5>
                        <div class="badge badge-success">New</div>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36X36"
                          alt="profile image"
                        />
                        <span>Brett Gonzales</span>
                        <span>
                          <i class="ti-alarm-clock"></i>03:34AM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36x36"
                        alt="profile image"
                      />
                      <span class="text-muted">Frank Briggs</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Wireframe</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#29033 - Compose newsletter for the big launch</h5>
                        <div class="badge badge-success">New</div>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36X36"
                          alt="profile image"
                        />
                        <span>Alta Little</span>
                        <span>
                          <i class="ti-alarm-clock"></i>06:16PM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Juan Little</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Concept</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#39040 - Website Redesign</h5>
                        <div class="badge badge-info">Pro</div>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36x36"
                          alt="profile image"
                        />
                        <span>Olivia Cross</span>
                        <span>
                          <i class="ti-alarm-clock"></i>04:23AM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Frank Briggs</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Wireframe</span>
                    </div>
                  </a>
                  <div class="tickets-date-group">
                    <i class="ti-calendar"></i>Tuesday, 20 Apr,2019
                  </div>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#29033 - Set up the marketplace strategy</h5>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36x36"
                          alt="profile image"
                        />
                        <span>Mitchell Barber</span>
                        <span>
                          <i class="ti-alarm-clock"></i>4:19AM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Michael Campbell</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Wireframe</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#39041 - Bootstrap Framework not working</h5>
                        <div class="badge badge-info">Pro</div>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36X36"
                          alt="profile image"
                        />
                        <span>Leah Frank</span>
                        <span>
                          <i class="ti-alarm-clock"></i>04:24AM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Emilie Barnett</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Deployed</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#29033 - Design Admin Dashboard</h5>
                        <div class="badge badge-success">New</div>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36X36"
                          alt="profile image"
                        />
                        <span>Rhoda Jimenez</span>
                        <span>
                          <i class="ti-alarm-clock"></i>01:27PM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Maria Cook</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Deployed</span>
                    </div>
                  </a>
                </div>
              </b-tab>
              <b-tab title="On-hold Tickets">
                <div>
                  <div class="tickets-date-group">
                    <i class="ti-calendar"></i>Tuesday, 21 May 2019
                  </div>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#39040 - Website Redesign</h5>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36x36"
                          alt="profile image"
                        />
                        <span>Olivia Cross</span>
                        <span>
                          <i class="ti-alarm-clock"></i>04:23AM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Frank Briggs</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Wireframe</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#29033 - Design Admin Dashboard</h5>
                        <div class="badge badge-success">New</div>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36X36"
                          alt="profile image"
                        />
                        <span>Rhoda Jimenez</span>
                        <span>
                          <i class="ti-alarm-clock"></i>01:27PM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Maria Cook</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Deployed</span>
                    </div>
                  </a>
                  <a href="javascript:void(0);" class="tickets-card row">
                    <div class="tickets-details col-lg-8">
                      <div class="wrapper">
                        <h5>#29033 - Compose newsletter for the big launch</h5>
                      </div>
                      <div class="wrapper text-muted d-none d-md-block">
                        <span>Assigned to</span>
                        <img
                          class="assignee-avatar"
                          src="https://via.placeholder.com/36X36"
                          alt="profile image"
                        />
                        <span>Alta Little</span>
                        <span>
                          <i class="ti-alarm-clock"></i>06:16PM
                        </span>
                      </div>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <img
                        class="img-xs rounded-circle"
                        src="https://via.placeholder.com/36X36"
                        alt="profile image"
                      />
                      <span class="text-muted">Juan Little</span>
                    </div>
                    <div class="ticket-float col-lg-2 col-sm-6">
                      <i class="category-icon ti-folder"></i>
                      <span class="text-muted">Concept</span>
                    </div>
                  </a>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>
<style scoped>
</style> 
<template>
  <section class="tabs">
    <div class="row">
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic Tab</h4>
            <b-tabs>
              <b-tab title="Home" active>
                <div class="row">
                  <div class="col-md-4">
                    <img
                      class="img-fluid w-100 rounded"
                      src="https://via.placeholder.com/145X138"
                      alt="Sample Image"
                    />
                  </div>
                  <div class="col-md-8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui, fuga saepe inventore aspernatur, voluptate libero soluta quidem ,fuga saepe inventore aspernatur, ad accusantium cumque voluptas, perferendis
                      natus laudantium.
                    </p>
                  </div>
                </div>
                <p>Impedit dolores ea facere culpa numquam alias, reprehenderit iste corporis hic fugit sunt cum magni.</p>
              </b-tab>
              <b-tab
                title="Profile"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eveniet, sapiente corrupti, vitae excepturi nulla soluta esse in ex, dignissimos velit rerum maiores asperiores!</b-tab>
              <b-tab
                title="Contact"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quibusdam assumenda fugit velit quis hic nulla necessitatibus? Nulla, possimus rerum quia sapiente necessitatibus!</b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Minimal Tab</h4>
            <b-tabs class="tab-minimal tab-minimal-success">
              <b-tab active>
                <template slot="title">
                  <i class="ti-home"></i> Home
                </template>
                <div class="row">
                  <div class="col-md-4">
                    <img
                      class="img-fluid w-100 rounded"
                      src="https://via.placeholder.com/145X138"
                      alt="Sample Image"
                    />
                  </div>
                  <div class="col-md-8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui, fuga saepe inventore aspernatur, voluptate libero soluta quidem ,fuga saepe inventore aspernatur, ad accusantium cumque voluptas, perferendis
                      natus laudantium.
                    </p>
                  </div>
                </div>
                <p>Impedit dolores ea facere culpa numquam alias, reprehenderit iste corporis hic fugit sunt cum magni.</p>
              </b-tab>
              <b-tab>
                <template slot="title">
                  <i class="ti-user"></i> Info
                </template>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui, fuga saepe inventore aspernatur, voluptate libero soluta quidem ,fuga saepe inventore aspernatur, ad accusantium cumque voluptas, perferendis natus laudantium.
              </b-tab>
              <b-tab>
                <template slot="title">
                  <i class="ti-email"></i> Profile
                </template>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui.
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Vertical Basic Tab</h4>
            <b-tabs class="tab-minimal vertical-tab">
              <b-tab active>
                <template slot="title">Home</template>
                <div class="row">
                  <div class="col-md-4">
                    <img
                      class="img-fluid w-100 rounded"
                      src="https://via.placeholder.com/145X138"
                      alt="Sample Image"
                    />
                  </div>
                  <div class="col-md-8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui, fuga saepe inventore aspernatur, voluptate libero soluta quidem ,fuga saepe inventore aspernatur, ad accusantium cumque voluptas, perferendis
                      natus laudantium.
                    </p>
                  </div>
                </div>
                <p>Impedit dolores ea facere culpa numquam alias, reprehenderit iste corporis hic fugit sunt cum magni.</p>
              </b-tab>
              <b-tab>
                <template slot="title">Info</template>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui, fuga saepe inventore aspernatur, voluptate libero soluta quidem ,fuga saepe inventore aspernatur, ad accusantium cumque voluptas, perferendis natus laudantium.
              </b-tab>
              <b-tab>
                <template slot="title">Profile</template>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui.
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Vertical Minimal Tab</h4>
            <b-tabs class="vertical-tab tab-minimal tab-minimal-success">
              <b-tab active>
                <template slot="title">
                  <i class="ti-home"></i> Home
                </template>
                <div class="row">
                  <div class="col-md-4">
                    <img
                      class="img-fluid w-100 rounded"
                      src="https://via.placeholder.com/145X138"
                      alt="Sample Image"
                    />
                  </div>
                  <div class="col-md-8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui, fuga saepe inventore aspernatur, voluptate libero soluta quidem ,fuga saepe inventore aspernatur, ad accusantium cumque voluptas, perferendis
                      natus laudantium.
                    </p>
                  </div>
                </div>
                <p>Impedit dolores ea facere culpa numquam alias, reprehenderit iste corporis hic fugit sunt cum magni.</p>
              </b-tab>
              <b-tab>
                <template slot="title">
                  <i class="ti-user"></i> Info
                </template>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui, fuga saepe inventore aspernatur, voluptate libero soluta quidem ,fuga saepe inventore aspernatur, ad accusantium cumque voluptas, perferendis natus laudantium.
              </b-tab>
              <b-tab>
                <template slot="title">
                  <i class="ti-email"></i> Profile
                </template>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui.
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Colored Tab</h4>
            <b-tabs class="tab-solid tab-solid-danger">
              <b-tab active>
                <template slot="title">Home</template>
                <div class="row">
                  <div class="col-md-4">
                    <img
                      class="img-fluid w-100 rounded"
                      src="https://via.placeholder.com/145X138"
                      alt="Sample Image"
                    />
                  </div>
                  <div class="col-md-8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui, fuga saepe inventore aspernatur, voluptate libero soluta quidem ,fuga saepe inventore aspernatur, ad accusantium cumque voluptas, perferendis
                      natus laudantium.
                    </p>
                  </div>
                </div>
                <p>Impedit dolores ea facere culpa numquam alias, reprehenderit iste corporis hic fugit sunt cum magni.</p>
              </b-tab>
              <b-tab>
                <template slot="title">Info</template>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui, fuga saepe inventore aspernatur, voluptate libero soluta quidem ,fuga saepe inventore aspernatur, ad accusantium cumque voluptas, perferendis natus laudantium.
              </b-tab>
              <b-tab>
                <template slot="title">Profile</template>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui.
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Colored Tab With Icons</h4>
            <b-tabs class="tab-solid tab-solid-primary">
              <b-tab active>
                <template slot="title">
                  <i class="ti-home"></i> Home
                </template>
                <div class="row">
                  <div class="col-md-4">
                    <img
                      class="img-fluid w-100 rounded"
                      src="https://via.placeholder.com/145X138"
                      alt="Sample Image"
                    />
                  </div>
                  <div class="col-md-8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui, fuga saepe inventore aspernatur, voluptate libero soluta quidem ,fuga saepe inventore aspernatur, ad accusantium cumque voluptas, perferendis
                      natus laudantium.
                    </p>
                  </div>
                </div>
                <p>Impedit dolores ea facere culpa numquam alias, reprehenderit iste corporis hic fugit sunt cum magni.</p>
              </b-tab>
              <b-tab>
                <template slot="title">
                  <i class="ti-user"></i> Info
                </template>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui, fuga saepe inventore aspernatur, voluptate libero soluta quidem ,fuga saepe inventore aspernatur, ad accusantium cumque voluptas, perferendis natus laudantium.
              </b-tab>
              <b-tab>
                <template slot="title">
                  <i class="ti-email"></i> Profile
                </template>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel eveniet qui.
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "tabs"
};
</script>
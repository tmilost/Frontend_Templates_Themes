<template>
  <section class="accordion-page">
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic accordions</h4>
            <p class="card-description">
              Use class
              <code>.basic-accordion</code> for basic accordion
            </p>
            <div role="tablist" class="accordion basic-accordion">
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion1
                  >How can I pay for an order I placed?</a>
                </b-card-header>
                <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <div class="row">
                      <div class="col-md-3">
                        <img
                          class="img-fluid rounded"
                          src="https://placehold.it/200x150"
                          alt="image"
                        />
                      </div>
                      <div class="col-md-9">
                        <p>You can pay for the product you have purchased using credit cards, debit cards, or via online banking.</p>
                      </div>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a href="javascript:void(0);" v-b-toggle.accordion2>I can’t sign in to my account</a>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <i class="mdi mdi-checkbox-marked-circle-outline mr-3"></i>If while signing in to your account you see an error message, you can do the following
                    <ol class="pl-3 mt-4">
                      <li>Check your network connection and try again</li>
                      <li>Make sure your account credentials are correct while signing in</li>
                      <li>Check whether your account is accessible in your region</li>
                    </ol>
                    <br />
                    <p class="text-success">If the problem persists, you can contact our support.</p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a href="javascript:void(0);" v-b-toggle.accordion3>Can I add money to the wallet?</a>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p>You can add money to the wallet for any future transaction from your bank account using net-banking, or credit/debit card transaction. The money in the wallet can be used for an easier and faster transaction.</p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bordered Accordions</h4>
            <p class="card-description">
              Use class
              <code>.accordion-bordered</code> for bordered accordions
            </p>
            <div role="tablist" class="accordion accordion-bordered">
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion4
                  >How can I pay for an order I placed?</a>
                </b-card-header>
                <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <div class="row">
                      <div class="col-md-3">
                        <img
                          class="img-fluid rounded"
                          src="https://placehold.it/200x150"
                          alt="image"
                        />
                      </div>
                      <div class="col-md-9">
                        <p>You can pay for the product you have purchased using credit cards, debit cards, or via online banking.</p>
                      </div>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a href="javascript:void(0);" v-b-toggle.accordion5>I can’t sign in to my account</a>
                </b-card-header>
                <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <i class="mdi mdi-checkbox-marked-circle-outline mr-3"></i>If while signing in to your account you see an error message, you can do the following
                    <ol class="pl-3 mt-4">
                      <li>Check your network connection and try again</li>
                      <li>Make sure your account credentials are correct while signing in</li>
                      <li>Check whether your account is accessible in your region</li>
                    </ol>
                    <br />
                    <p class="text-success">
                      <i class="mdi mdi-alert-octagon mr-2"></i>If the problem persists, you can contact our support.
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a href="javascript:void(0);" v-b-toggle.accordion6>Can I add money to the wallet?</a>
                </b-card-header>
                <b-collapse id="accordion6" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p>You can add money to the wallet for any future transaction from your bank account using net-banking, or credit/debit card transaction. The money in the wallet can be used for an easier and faster transaction.</p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Filled Accordions</h4>
            <p class="card-description">
              Use class
              <code>.accordion-filled</code> for filled styling
            </p>
            <div role="tablist" class="accordion accordion-filled">
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion7
                  >Can I transfer the money from the wallet to my bank account?</a>
                </b-card-header>
                <b-collapse id="accordion7" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <div class="row">
                      <div class="col-md-3">
                        <img
                          class="img-fluid rounded"
                          src="https://placehold.it/200x150"
                          alt="image"
                        />
                      </div>
                      <div class="col-md-9">
                        <p>
                          You can pay for the product you have purchased using credit cards, debit cards, or via
                          online banking.
                        </p>
                      </div>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion8
                  >I forgot my account password. What should I do?</a>
                </b-card-header>
                <b-collapse id="accordion8" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <ol class="pl-3">
                      <li>Click on the ‘forgot password’ link.</li>
                      <li>Enter your email address registered with us</li>
                      <li>Click on the link sent you in the email</li>
                      <li>Reset your password</li>
                    </ol>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion9
                  >What should I do if I need any assistance using my account</a>
                </b-card-header>
                <b-collapse id="accordion9" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p>
                      If you need any assistance while using your account, you can contact
                      our customer support via email at support@abc.com. Or you can live chat with our support
                      team. Our support team is available 24*7
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Solid Header Accordion</h4>
            <p class="card-description">
              Use class
              <code>.accordion-solid-header</code> for basic accordion
            </p>
            <div role="tablist" class="accordion accordion-solid-header">
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion10
                  >Can I transfer the money from the wallet to my bank account?</a>
                </b-card-header>
                <b-collapse id="accordion10" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <div class="row">
                      <div class="col-md-3">
                        <img
                          class="img-fluid rounded"
                          src="https://placehold.it/200x150"
                          alt="image"
                        />
                      </div>
                      <div class="col-md-9">
                        <p>
                          You can pay for the product you have purchased using credit cards, debit cards, or via
                          online banking.
                        </p>
                      </div>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion11
                  >I forgot my account password. What should I do?</a>
                </b-card-header>
                <b-collapse id="accordion11" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <ol class="pl-3">
                      <li>Click on the ‘forgot password’ link.</li>
                      <li>Enter your email address registered with us</li>
                      <li>Click on the link sent you in the email</li>
                      <li>Reset your password</li>
                    </ol>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion12
                  >What should I do if I need any assistance using my account</a>
                </b-card-header>
                <b-collapse id="accordion12" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p>
                      If you need any assistance while using your account, you can contact
                      our customer support via email at support@abc.com. Or you can live chat with our support
                      team. Our support team is available 24*7
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Solid Content Accordion</h4>
            <p class="card-description">
              Use class
              <code>.accordion-solid-content</code> for solid styling
            </p>
            <div role="tablist" class="accordion accordion-solid-content">
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion13
                  >Can I transfer the money from the wallet to my bank account?</a>
                </b-card-header>
                <b-collapse id="accordion13" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <div class="row">
                      <div class="col-md-3">
                        <img
                          class="img-fluid rounded"
                          src="https://placehold.it/200x150"
                          alt="image"
                        />
                      </div>
                      <div class="col-md-9">
                        <p>
                          You can pay for the product you have purchased using credit cards, debit cards, or via
                          online banking.
                        </p>
                      </div>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion14
                  >I forgot my account password. What should I do?</a>
                </b-card-header>
                <b-collapse id="accordion14" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <ol class="pl-3">
                      <li>Click on the ‘forgot password’ link.</li>
                      <li>Enter your email address registered with us</li>
                      <li>Click on the link sent you in the email</li>
                      <li>Reset your password</li>
                    </ol>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion15
                  >What should I do if I need any assistance using my account</a>
                </b-card-header>
                <b-collapse id="accordion15" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p>
                      If you need any assistance while using your account, you can contact
                      our customer support via email at support@abc.com. Or you can live chat with our support
                      team. Our support team is available 24*7
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Multi colored accordion</h4>
            <p class="card-description">
              Use class
              <code>.accordion-multi-colored</code> for basic accordion
            </p>
            <div role="tablist" class="accordion accordion-multi-colored">
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion16
                  >Can I transfer the money from the wallet to my bank account?</a>
                </b-card-header>
                <b-collapse id="accordion16" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <div class="row">
                      <div class="col-md-3">
                        <img
                          class="img-fluid rounded"
                          src="https://placehold.it/200x150"
                          alt="image"
                        />
                      </div>
                      <div class="col-md-9">
                        <p>
                          You can pay for the product you have purchased using credit cards, debit cards, or via
                          online banking.
                        </p>
                      </div>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion17
                  >I forgot my account password. What should I do?</a>
                </b-card-header>
                <b-collapse id="accordion17" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <ol class="pl-3">
                      <li>Click on the ‘forgot password’ link.</li>
                      <li>Enter your email address registered with us</li>
                      <li>Click on the link sent you in the email</li>
                      <li>Reset your password</li>
                    </ol>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="javascript:void(0);"
                    v-b-toggle.accordion18
                  >What should I do if I need any assistance using my account</a>
                </b-card-header>
                <b-collapse id="accordion18" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p>
                      If you need any assistance while using your account, you can contact
                      our customer support via email at support@abc.com. Or you can live chat with our support
                      team. Our support team is available 24*7
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "accordion"
};
</script>
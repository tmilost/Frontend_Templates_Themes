<template>
  <section class="email">
    <div class="email-wrapper wrapper">
      <div class="row align-items-stretch">
        <div class="mail-sidebar d-none d-lg-block col-md-3 pt-3">
          <div class="menu-bar">
            <ul class="menu-items">
              <li class="compose mb-3">
                <button class="btn btn-primary btn-block px-3">Compose</button>
              </li>
              <li class="active">
                <a href="javascript:void(0);">
                  <i class="ti-email"></i> Inbox
                </a>
                <span class="badge badge-pill badge-success">8</span>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="ti-share"></i> Sent
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="ti-file"></i> Draft
                </a>
                <span class="badge badge-pill badge-warning">4</span>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="ti-upload"></i> Outbox
                </a>
                <span class="badge badge-pill badge-danger">3</span>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="ti-star"></i> Starred
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="ti-trash"></i> Trash
                </a>
              </li>
            </ul>
            <div class="wrapper">
              <div
                class="online-status d-flex justify-content-between align-items-center"
              >
                <p class="chat">Chats</p>
                <span class="status offline online"></span>
              </div>
            </div>
            <ul class="profile-list">
              <li class="profile-list-item">
                <a href="javascript:void(0);">
                  <span class="pro-pic">
                    <img src="https://via.placeholder.com/40X40" alt />
                  </span>
                  <div class="user">
                    <p class="u-name">David</p>
                    <p class="u-designation">Python Developer</p>
                  </div>
                </a>
              </li>
              <li class="profile-list-item">
                <a href="javascript:void(0);">
                  <span class="pro-pic">
                    <img src="https://via.placeholder.com/40X40" alt />
                  </span>
                  <div class="user">
                    <p class="u-name">Stella Johnson</p>
                    <p class="u-designation">SEO Expert</p>
                  </div>
                </a>
              </li>
              <li class="profile-list-item">
                <a href="javascript:void(0);">
                  <span class="pro-pic">
                    <img src="https://via.placeholder.com/40X40" alt />
                  </span>
                  <div class="user">
                    <p class="u-name">Catherine</p>
                    <p class="u-designation">IOS Developer</p>
                  </div>
                </a>
              </li>
              <li class="profile-list-item">
                <a href="javascript:void(0);">
                  <span class="pro-pic">
                    <img src="https://via.placeholder.com/40X40" alt />
                  </span>
                  <div class="user">
                    <p class="u-name">John Doe</p>
                    <p class="u-designation">Business Analyst</p>
                  </div>
                </a>
              </li>
              <li class="profile-list-item">
                <a href="javascript:void(0);">
                  <span class="pro-pic">
                    <img src="https://via.placeholder.com/40X40" alt />
                  </span>
                  <div class="user">
                    <p class="u-name">Daniel Russell</p>
                    <p class="u-designation">Tester</p>
                  </div>
                </a>
              </li>
              <li class="profile-list-item">
                <a href="javascript:void(0);">
                  <span class="pro-pic">
                    <img src="https://via.placeholder.com/40X40" alt />
                  </span>
                  <div class="user">
                    <p class="u-name">Sarah Graves</p>
                    <p class="u-designation">Admin</p>
                  </div>
                </a>
              </li>
              <li class="profile-list-item">
                <a href="javascript:void(0);">
                  <span class="pro-pic">
                    <img src="https://via.placeholder.com/40X40" alt />
                  </span>
                  <div class="user">
                    <p class="u-name">Sophia Lara</p>
                    <p class="u-designation">UI/UX</p>
                  </div>
                </a>
              </li>
              <li class="profile-list-item">
                <a href="javascript:void(0);">
                  <span class="pro-pic">
                    <img src="https://via.placeholder.com/40X40" alt />
                  </span>
                  <div class="user">
                    <p class="u-name">Catherine Myers</p>
                    <p class="u-designation">Business Analyst</p>
                  </div>
                </a>
              </li>
              <li class="profile-list-item">
                <a href="javascript:void(0);">
                  <span class="pro-pic">
                    <img src="https://via.placeholder.com/40X40" alt />
                  </span>
                  <div class="user">
                    <p class="u-name">Tim</p>
                    <p class="u-designation">PHP Developer</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mail-list-container col-md-4 pt-4 pb-4 border-right">
          <div class="border-bottom pb-4 mb-3 px-3">
            <div class="form-group">
              <input
                class="form-control form-control-sm w-100"
                type="search"
                placeholder="Search mail"
                id="Mail-rearch"
              />
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">David Moore</p>
              <p class="message_text">
                Hi Emily, Please be informed that the new project presentation
                is due Monday.
              </p>
            </div>
            <div class="details">
              <i class="ti-star"></i>
            </div>
          </div>
          <div class="mail-list new_mail">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">Microsoft Account Password Change</p>
              <p class="message_text">
                Change the password for your Microsoft Account using the
                security code 35525
              </p>
            </div>
            <div class="details">
              <i class="ti-star favorite"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">Sophia Lara</p>
              <p class="message_text">
                Hello, last date for registering for the annual music event is
                closing in
              </p>
            </div>
            <div class="details">
              <i class="ti-star"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">Stella Davidson</p>
              <p class="message_text">
                Hey there, can you send me this year’s holiday calendar?
              </p>
            </div>
            <div class="details">
              <i class="ti-star favorite"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">David Moore</p>
              <p class="message_text">FYI</p>
            </div>
            <div class="details">
              <i class="ti-star favorite"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">Daniel Russel</p>
              <p class="message_text">Hi, Please find this week’s update..</p>
            </div>
            <div class="details">
              <i class="ti-star"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">Sarah Graves</p>
              <p class="message_text">
                Hey, can you send me this year’s holiday calendar ?
              </p>
            </div>
            <div class="details">
              <i class="ti-star"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">Bruno King</p>
              <p class="message_text">
                Hi, Please find this week’s monitoring report in the attachment.
              </p>
            </div>
            <div class="details">
              <i class="ti-star"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">Me, Mark</p>
              <p class="message_text">
                Hi, Testing is complete. The system is ready to go live.
              </p>
            </div>
            <div class="details">
              <i class="ti-star"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">Catherine Myers</p>
              <p class="message_text">
                Template Market: Limited Period Offer!!! 50% Discount on all
                Templates.
              </p>
            </div>
            <div class="details">
              <i class="ti-star favorite"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">Daniel Russell</p>
              <p class="message_text">
                Hi Emily, Please approve my leaves for 10 days from 10th May to
                20th May.
              </p>
            </div>
            <div class="details">
              <i class="ti-star"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">Sarah Graves</p>
              <p class="message_text">
                Hello there, Make the most of the limited period offer. Grab
                your favorites
              </p>
            </div>
            <div class="details">
              <i class="ti-star"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">John Doe</p>
              <p class="message_text">
                This is the first reminder to complete the online cybersecurity
                course
              </p>
            </div>
            <div class="details">
              <i class="ti-star"></i>
            </div>
          </div>
          <div class="mail-list">
            <div class="form-check">
              <label class="form-check-label text-muted">
                <input type="checkbox" class="form-check-input" />
                <i class="input-helper"></i>
              </label>
            </div>
            <div class="content">
              <p class="sender-name">Bruno</p>
              <p class="message_text">
                Dear Employee, As per the regulations all employees are required
                to complete
              </p>
            </div>
            <div class="details">
              <i class="ti-star"></i>
            </div>
          </div>
        </div>
        <div class="mail-view d-none d-md-block col-md-5">
          <div class="row">
            <div class="col-md-12 mb-4 mt-4">
              <div class="btn-toolbar">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <i class="ti-control-forward text-primary"></i> Reply
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <i class="ti-control-forward-all text-primary"></i>Reply All
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <i class="ti-share text-primary"></i>Forward
                  </button>
                </div>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <i class="ti-upload text-primary"></i>Attach
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <i class="ti-trash text-primary"></i>Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="message-body">
            <div class="sender-details">
              <img class="img-sm rounded-circle mr-3" src="https://via.placeholder.com/40X40" alt />
              <div class="details">
                <p class="msg-subject">
                  Weekly Update - Week 19 (May 8, 2017 - May 14, 2017)
                </p>
                <p class="sender-email">
                  Sarah Graves
                  <a href="javascript:void(0);">itsmesarah268@gmail.com</a>
                  &nbsp;
                  <i class="ti-user"></i>
                </p>
              </div>
            </div>
            <div class="message-content">
              <p>Hi Emily,</p>
              <p>
                This week has been a great week and the team is right on
                schedule with the set deadline. The team has made great progress
                and achievements this week. At the current rate we will be able
                to deliver the product right on time and meet the quality that
                is expected of us. Attached are the seminar report held this
                week by our team and the final product design that needs your
                approval at the earliest.
              </p>
              <p>
                For the coming week the highest priority is given to the
                development for
                <a href="javascript:void(0);" target="_blank"
                  >http://www.bootstrapdash.com/</a
                >
                once the design is approved and necessary improvements are made.
              </p>
              <p>
                <br />
                <br />Regards, <br />Sarah Graves
              </p>
            </div>
            <div class="attachments-sections">
              <ul>
                <li>
                  <div class="thumb">
                    <i class="ti-envelope"></i>
                  </div>
                  <div class="details">
                    <p class="file-name">Seminar Reports.pdf</p>
                    <div class="buttons">
                      <p class="file-size">678Kb</p>
                      <a href="javascript:void(0);" class="view">View</a>
                      <a href="javascript:void(0);" class="download"
                        >Download</a
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="thumb">
                    <i class="ti-image"></i>
                  </div>
                  <div class="details">
                    <p class="file-name">Product Design.jpg</p>
                    <div class="buttons">
                      <p class="file-size">1.96Mb</p>
                      <a href="javascript:void(0);" class="view">View</a>
                      <a href="javascript:void(0);" class="download"
                        >Download</a
                      >
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "email"
};
</script>

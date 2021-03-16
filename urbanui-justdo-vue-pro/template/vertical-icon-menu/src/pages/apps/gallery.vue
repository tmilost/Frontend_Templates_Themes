<template>
  <section class="gallery">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Gallery</h4>
            <gallery :images="images" :index="index" @close="index = null"></gallery>
            <div
              class="image"
              v-for="(image, imageIndex) in images"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')'}"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueGallery from "vue-gallery";
export default {
  data: function() {
    return {
      images: [
        "https://via.placeholder.com/1280x768",
        "https://via.placeholder.com/1280x768",
        "https://via.placeholder.com/1280x768",
        "https://via.placeholder.com/1280x768",
        "https://via.placeholder.com/1280x768",
        "https://via.placeholder.com/1280x768",
        "https://via.placeholder.com/1280x768",
        "https://via.placeholder.com/1280x768"
      ],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script>
<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 15px;
  width: 22%;
  height: 220px;
}
@media (max-width: 1024px) {
  .image {
    width: 30%;
    margin: 1.5%;
    margin-bottom: 15px;
  }
}
@media (max-width: 767px) {
  .image {
    width: 100%;
    margin: 0;
    margin-bottom: 15px;
  }
}
</style> 
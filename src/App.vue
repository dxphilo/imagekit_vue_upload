<script>
import VideoJsPlayer from '@/components/VideoPlayer.vue';
import { ref } from 'vue';
export default {
  components:{
    VideoJsPlayer,
  },
  setup() {

    const videoPreviewURL= ref();
    function onError(err) {
      console.error(err);
      alert("Oops! Something went wrong while uploading the video. Please try again later.");
    }

    function onSuccess(message) {
      console.log(message);
      videoPreviewURL.value = message.url
      alert("Great! Your video has been uploaded successfully.");
    }

    return {
      onError,
      onSuccess,
      videoPreviewURL
    };
  },
};
</script>

<template>
  <div>
    <h2 class="title">Vue.js Video Upload</h2>
    <div v-if="videoPreviewURL" class="video">
      <VideoJsPlayer :videoUrl="videoPreviewURL" />
    </div>
    <main>
      <ik-upload 
        :tags="['tag1', 'tag2']"
        :responseFields="['tags']"
        :onError="onError"
        :onSuccess="onSuccess"
        customCoordinates="10,10,100,100"
      />
    </main>
  </div>
</template>

<style>
.title {
  text-align: center;
  padding: 20px 0;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  margin: 0 auto;
}
</style>

<script>
export default {
  setup() {
    function onError(err) {
      console.error(err);
      alert("Oops! Something went wrong while uploading the video. Please try again later.");
    }

    function onSuccess(message) {
      console.log(message);
      alert("Great! Your video has been uploaded successfully.");
    }

    return {
      onError,
      onSuccess,
    };
  },
};
</script>

<template>
  <div>
    <h2 class="title">Vue.js Video Upload</h2>
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

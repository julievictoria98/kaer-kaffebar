<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post-card">
      <h2>{{ post.title.rendered }}</h2>
      <div v-html="post.content.rendered"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const posts = ref([]);

onMounted(async () => {
  const res = await fetch(
    "https://public-api.wordpress.com/wp/v2/sites/juliediverse98.wordpress.com/posts?_embed"
  );
  posts.value = await res.json();
});
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.post-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  background: #fff;
}

h2 {
  margin-bottom: 10px;
  color: #333;
}
</style>

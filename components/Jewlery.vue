<template>
  <article class="content">
    <div
      v-for="(post, index) in posts"
      :key="post.id"
      class=""
      :class="['col-span-3', index % 2 === 0 ? 'col-start-1' : 'col-start-6']"
    >
      <MoleculesJewelryCard
        :title="post.title.rendered"
        :text="post.excerpt.rendered"
        :price="post.price"
      />
    </div>
  </article>

  <!--   <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post-card">
      <h2>{{ post.title.rendered }}</h2>
      <div v-html="post.content.rendered"></div>
    </div>
  </div> -->
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

const text = `Håndlavede smykker, hvor matrialerne er udlavgt med fokus på look, holdbarhed og allergivenlighed. Håndlavede smykker, hvor matrialerne er udlavgt med fokus på look, holdbarhed og allergivenlighed.`;

const imageSrc = "/images/brunch-plate.png";
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

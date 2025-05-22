<template>
  <article class="px-36">
    <div class="col-span-full">
      <div class="flex flex-wrap justify-between gap-4">
        <div v-for="(post, index) in posts" :key="post.id">
          <MoleculesJewelryCard
            :title="post.title.rendered"
            :text="post.excerpt.rendered"
            :price="post.price"
            :imageUrl="extractImageUrl(post.content.rendered)"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted } from "vue";
const posts = ref([]);

function extractImageUrl(html) {
  const match = html.match(/<img [^>]*src="([^"]+)"/);
  return match ? match[1] : "";
}

function extractTextAndPrice(html) {
  const liMatches = [...html.matchAll(/<li>(.*?)<\/li>/g)];
  return {
    text: liMatches[0] ? liMatches[0][1] : "",
    price: liMatches[1] ? liMatches[1][1] : "",
  };
}

onMounted(async () => {
  const res = await fetch(
    "https://public-api.wordpress.com/wp/v2/sites/juliediverse98.wordpress.com/posts?_embed"
  );
  const data = await res.json();

  posts.value = data.map((post) => {
    const { text, price } = extractTextAndPrice(post.content.rendered);
    return {
      ...post,
      text,
      price,
      imageUrl: extractImageUrl(post.content.rendered),
    };
  });
});
</script>

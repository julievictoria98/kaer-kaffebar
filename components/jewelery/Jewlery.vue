<template>
  <article class="content" ref="box">
    <div class="col-span-full">
      <h2 class="h4">Unika smykker der kan ses i caféen</h2>

      <div
        class="md:mt-10 grid gap-16 sm:gap-y-16 sm:gap-x-32 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-items-center sm:justify-items-start items-start"
      >
        <div v-for="(post, index) in posts" :key="post.id">
          <JeweleryJewelryCard
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
import { useScrollFadeIn } from "@/composables/animations/gsap";

const box = ref(null);
useScrollFadeIn(box);

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
  const apiUrl = useRuntimeConfig().public.wordpressUrl;

  const res = await fetch(apiUrl);
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

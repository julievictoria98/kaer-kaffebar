<template>
  <article class="content images-wall" ref="box">
    <div
      class="flex flex-col items-center justify-center gap-4 row-start-1 row-end-3 col-start-4 col-end-10 text-center"
    >
      <h4>{{ firstText }}</h4>
      <div class="flex gap-2">
        <p>{{ seconText }}</p>
        <NuxtLink :to="link" class="text-primary text-lg underline"
          >instagram</NuxtLink
        >
      </div>
    </div>
    <img class="image" src="../public/images/brunch-plate.png" alt="" />
    <img class="image" src="../public/images/brunch-plate.png" alt="" />
    <img class="image" src="../public/images/brunch-plate.png" alt="" />
    <img class="image" src="../public/images/brunch-plate.png" alt="" />
    <img class="image" src="../public/images/brunch-plate.png" alt="" />
  </article>
</template>

<script setup>
import { ref } from "vue";
import { useScrollFadeIn } from "@/composables/animations/gsap";
const box = ref(null);
useScrollFadeIn(box);

const props = defineProps({
  firstText: String,
  seconText: String,
  link: String,
});
</script>

<style></style>

<template>
  <article class="content images-wall" ref="box">
    <div
      class="flex flex-col items-center justify-center gap-4 row-start-1 row-end-3 col-span-full md:col-start-4 md:col-end-10 text-center"
    >
      <h4>{{ firstText }}</h4>
      <div class="flex gap-2">
        <p>{{ seconText }}</p>
        <NuxtLink :to="link" class="text-primary text-lg underline"
          >instagram</NuxtLink
        >
      </div>
    </div>
    <img class="image" src="../public/images/matcha.jpg" alt="matcha drinks" />
    <img class="image" src="../public/images/pie.jpg" alt="A yellow pie" />
    <img
      class="image"
      src="../public/images/pies.jpg"
      alt="pies with whipped cream"
    />
    <img
      class="image"
      src="../public/images/pink-milkshake.jpg"
      alt="A pink milkshake in a to-go cup"
    />
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

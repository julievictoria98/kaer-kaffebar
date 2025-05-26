<template>
  <article class="content images-wall" ref="box">
    <div
      class="flex flex-col items-center justify-center gap-4 row-start-1 row-end-3 col-span-full md:col-start-4 md:col-end-10 text-center"
    >
      <h4>{{ firstText }}</h4>
      <div class="flex items-center gap-2">
        <p class="m-0">{{ seconText }}</p>
        <a
          href="https://www.instagram.com/kaerkaffebar/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary hover:scale-105 transition-transform duration-300 underline"
        >
          instagram
        </a>
      </div>
    </div>
    <img class="image" src="../../public/images/matcha.jpg" alt="altText1" />
    <img class="image" src="../../public/images/pie.jpg" alt="altText2" />
    <img class="image" src="../../public/images/pies.jpg" alt="altText3" />
    <img
      class="image"
      src="../../public/images/pink-milkshake.jpg"
      alt="altText4"
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
  altText1: {
    type: String,
    default: "Matcha",
  },
  altText2: {
    type: String,
    default: "Pie",
  },
  altText3: {
    type: String,
    default: "Pies",
  },
  altText4: {
    type: String,
    default: "Pink Milkshake",
  },
});
</script>

<style></style>

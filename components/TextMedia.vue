<template>
  <div class="content" :class="layout" ref="box">
    <h2>{{ title }}</h2>
    <div>
      <slot />
    </div>
    <div class="" :class="imagelayout">
      <div class="">
        <img :src="imageUrl1" alt="brunch" class="w-full h-full object-cover" />
      </div>
      <div class="" v-if="imageUrl2">
        <img :src="imageUrl2" alt="brunch" class="w-full h-full object-cover" />
      </div>
      <div class="" v-if="imageUrl3">
        <img :src="imageUrl3" alt="brunch" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useScrollFadeIn } from "@/composables/animations/gsap";

const box = ref(null);
useScrollFadeIn(box);

const props = defineProps({
  title: String,
  text: String,
  layout: {
    type: String,
    default: "tm-layout-1",
  },
  imagelayout: {
    type: String,
    default: "image-layout-1",
  },
  imageUrl1: {
    type: String,
    default: "/images/brunch-plate.png",
  },
  imageUrl2: {
    type: String,
    default: "",
  },
  imageUrl3: {
    type: String,
    default: "",
  },
  buttons: {
    type: Array,
    default: () => [
      {
        text: "LÆS MERE OM DETTE",
        href: "/contact",
      },
    ],
  },
});
</script>

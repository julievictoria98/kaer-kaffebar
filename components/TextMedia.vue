<template>
  <div class="content" :class="layout" ref="box">
    <div>
      <h2>{{ title }}</h2>
      <div>
        <slot />
      </div>
    </div>
    <div :class="imagelayout" class="max-w-[35rem] xl:max-w-2xl">
      <div :class="afterElement">
        <img :src="imageUrl1" alt="brunch" class="w-full h-full object-cover" />
      </div>
      <div v-if="imageUrl2">
        <img :src="imageUrl2" alt="brunch" class="w-full h-full object-cover" />
      </div>
      <div v-if="imageUrl3">
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
  afterElement: {
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

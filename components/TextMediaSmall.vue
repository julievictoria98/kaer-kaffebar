<template>
  <div class="content text-media-small" :class="layout" ref="box">
    <div>
      <h2 class="h3">{{ title }}</h2>
      <slot />
    </div>
    <div class="image-layout-1-orange">
      <img :src="image" alt="brunch" class="w-88 h-auto object-cover" />
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
  },
  image: {
    type: String,
    default: "",
  },
});
</script>

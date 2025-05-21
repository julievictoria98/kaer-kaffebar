<template>
  <div>
    <div class="mt-1" v-html="text"></div>
    <div class="mt-4 flex gap-8">
      <UiPrimaryButton
        v-for="(button, index) in buttons"
        :key="index"
        :text="button.text"
        :href="button.href"
        :linkType="button.linkType"
        :color="color"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  layout: {
    type: String,
    default: "",
  },
  buttons: {
    type: Array,
    default: () => [],
  },
  color: {
    type: String,
    default: "",
  },
});
</script>

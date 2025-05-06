<template>
  <div>
    <p class="mt-1">{{ text }}</p>
    <div class="mt-4 flex gap-8">
      <UiPrimaryButton
        v-for="(button, index) in buttons"
        :key="index"
        :text="button.text"
        :href="button.href"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Button {
  text: string;
  href: string;
}

const props = defineProps<{
  text: string;
  layout?: string;
  buttons?: Button[];
}>();
</script>

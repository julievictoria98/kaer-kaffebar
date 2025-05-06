<template>
  <div class="content" :class="layout">
    <h2>{{ title }}</h2>

    <div>
      <!--   <div>
      <h2>{{ title }}</h2>
      <p class="mt-1">{{ text }}</p>
      <div class="mt-4 flex gap-8">
        <UiPrimaryButton
          v-for="(button, index) in buttons"
          :key="index"
          :text="button.text"
          :href="button.href"
        />
      </div>
    </div> -->
      <slot />
    </div>
    <div class="grid grid-cols-5 max-h-[400px] h-full">
      <div class="image-wrapper h-full col-start-1 col-span-3">
        <img
          src="../public/images/brunch-plate.png"
          alt="brunch"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="image-wrapper-2 col-start-3 col-end-6 h-full">
        <img
          src="../public/images/brunch-plate.png"
          alt="brunch"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    layout: {
      type: String,
      default: "tm-layout-1",
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
  },
};
</script>

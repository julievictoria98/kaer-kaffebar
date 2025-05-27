<template>
  <article
    class="bg-quaternary justify-center sm:h-screen text-white py-20 full"
  >
    <div class="content items-center">
      <div class="col-span-full md:col-start-1 md:col-end-7">
        <h1 class="font-Yeseva">{{ title }}</h1>
        <Text :text="text" :buttons="buttons" :color="color" />
      </div>
      <img
        :src="imageSrc"
        alt=""
        class="mt-10 w-auto md:col-start-8 md:col-end-12 col-span-full md:mt-0 sm:self-center sm:justify-center"
        :class="
          imageSrc.includes('jewlery-illu')
            ? 'h-[250px] md:h-[310px]'
            : 'h-[200px] md:h-[250px]'
        "
      />
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  text: String,
  buttons: Array,
  title: String,
  color: {
    type: String,
    default: "beige",
  },
  imageSrc: {
    type: String,
    default: "/illustrations/afternoon-tea-illu.svg",
  },
});
</script>

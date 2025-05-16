<template>
  <article
    class="content justify-center bg-[#817167] h-screen flex flex-col justify-center items-center text-white"
  >
    <div class="col-start-1 col-end-7">
      <h1 class="font-Yeseva">{{ title }}</h1>
      <MoleculesText
        :text="text"
        :buttons="buttons"
        title="Et mødested for alle"
      />
    </div>
    <img :src="imageSrc" alt="" class="col-start-8 col-end-12" />
  </article>
</template>

<script setup>
const props = defineProps({
  text: String,
  buttons: Array,
  title: String,
  imageSrc: {
    type: String,
    default: "/illustrations/afternoon-tea-illu.svg",
  },
});
</script>

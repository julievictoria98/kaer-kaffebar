<template>
  <article class="content bg-[#817167] justify-center sm:h-screen">
    <div class="col-span-full flex flex-col md:flex-row text-white py-20">
      <div class="col-span-full md:col-start-1 md:col-end-7">
        <h1 class="font-Yeseva">{{ title }}</h1>
        <MoleculesText
          :text="text"
          :buttons="buttons"
          :color="color"
          title="Et mødested for alle"
        />
      </div>
      <img
        :src="imageSrc"
        alt=""
        class="md:col-start-8 md:col-end-12 col-span-full w-[50%] md:w-[80%] mt-10 md:mt-0 h-50 sm:self-center sm:justify-center"
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

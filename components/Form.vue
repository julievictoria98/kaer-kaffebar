<template>
  <article class="content" ref="box">
    <div
      class="lg:col-start-1 lg:col-end-6 flex flex-col gap-4 col-start-1 col-end-12"
    >
      <h2>Kontakt os</h2>
      <p>Henvendelser sker via kontakt formularen herunder</p>
      <form action="" class="flex flex-col gap-4">
        <div class="flex flex-col">
          <label for="name">Navn</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="border-primary border-2 rounded-md"
          />
        </div>
        <div class="flex flex-col">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="border-primary border-2 rounded-md"
          />
        </div>
        <div class="flex flex-col">
          <label for="message">Besked</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            class="border-primary border-2 rounded-md"
          ></textarea>
        </div>
        <button
          class="group border-b border-primary pb-0.5 flex gap-2 items-center w-fit cursor-pointer"
        >
          SEND
          <img
            class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            src="/public/images/brown-arrow.svg"
            alt="brown arrow"
          />
        </button>
      </form>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
import { useScrollFadeIn } from "@/composables/animations/gsap";
const box = ref(null);
useScrollFadeIn(box);
</script>

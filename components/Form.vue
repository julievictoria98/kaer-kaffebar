<template>
  <article class="content" ref="box">
    <div
      class="lg:col-start-1 lg:col-end-7 flex flex-col col-start-1 col-end-12"
    >
      <h2>Kontakt os</h2>
      <p>Henvendelser sker via kontakt formularen herunder</p>
      <form
        @submit.prevent="handleSubmit"
        ref="form"
        class="flex flex-col gap-4"
      >
        <div class="flex flex-col">
          <label for="Navn">Navn</label>
          <input
            type="text"
            id="name"
            name="name"
            pattern="[A-Za-z\s]+"
            required
            class="border-quaternary border-2 rounded-md px-1 max-w-60"
            placeholder="Indtast dit navn"
          />
        </div>
        <div class="flex flex-col">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="Indtast din email"
            required
            class="border-quaternary border-2 rounded-md px-1 max-w-72"
          />
        </div>
        <div class="flex flex-col">
          <label for="message">Besked</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            class="border-quaternary border-2 rounded-md p-1 max-w-xl"
            placeholder="Skriv din besked her"
            minlength="15"
          ></textarea>
        </div>
        <button
          class="group border-b border-primary pb-0.5 flex gap-2 items-center w-fit cursor-pointer"
          type="submit"
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
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      :class="PopUp ? 'block' : 'hidden'"
    >
      <PopUpText />
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
import { useScrollFadeIn } from "@/composables/animations/gsap";
import { SBPost } from "~/api";
const box = ref(null);
useScrollFadeIn(box);
const PopUp = ref(null);
const form = ref(null);

function handleSubmit() {
  const formData = {};
  const name = form.value.querySelector("#name").value;
  const email = form.value.querySelector("#email").value;
  const message = form.value.querySelector("#message").value;

  formData.name = name;
  formData.email = email;
  formData.message = message;

  SBPost("/messages", formData)
    .then(() => {
      showPopup();
      form.value.reset();
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
    });
}

function showPopup() {
  PopUp.value = true;
  setTimeout(() => {
    PopUp.value = false;
  }, 3000);
}
</script>

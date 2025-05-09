<template>
  <article
    class="content h-screen w-screen bg-white fixed top-0 left-0 overflow-hidden z-50"
    :class="isBurgermenuOpen ? 'flex' : 'hidden'"
  >
    <div class="flex justify-between col-span-full">
      <img
        id="logo"
        src="/public/images/logo.png"
        alt="logo for the company with red background and white font it says Kær"
      />
      <p @click="toggleBurgermenu">close</p>
    </div>
    <div class="col-span-full">
      <div
        class="col-span-full grid text-end text grid-cols-1 md:grid-cols-[2fr_1.8fr] items-end gap-12"
      >
        <nav class="border-l-2 border-brand col-start-2">
          <ul class="flex flex-col gap-4">
            <li>
              <NuxtLink to="/om-os">FORSIDE</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/smykker">MENU</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/aktiviteter">KONTAKT</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/kontakt">AFTERNOON TEA</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/kontakt">SMYKKER</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/kontakt">AKITVITETR</NuxtLink>
            </li>
          </ul>
        </nav>
        <div
          class="flex flex-col md:flex-row gap-8 col-start-1 row-start-1 justify-self-end mr-6"
        >
          <div class="flex flex-col gap-2 x-small">
            <p>Adresse</p>
            <p>
              Smykkevej 12, <br />
              1234 København
            </p>
          </div>

          <div class="flex flex-col gap-2 x-small">
            <p>Åbeningstider</p>
            <ul>
              <li>Mandag - Fredag: 10:00 - 18:00</li>
              <li>Lørdag: 10:00 - 16:00</li>
              <li>Søndag: Lukket</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";

const isBurgermenuOpen = ref(false);

const toggleBurgermenu = () => {
  isBurgermenuOpen.value = !isBurgermenuOpen.value;
};
</script>

<template>
  <Transition
    name="slide"
    enter-active-class="transition-transform duration-500 ease-in-out"
    leave-active-class="transition-transform duration-500 ease-in-out"
    enter-from-class="translate-y-full"
    enter-to-class="translate-y-0"
    leave-from-class="translate-y-0"
    leave-to-class="translate-y-full"
  >
    <article
      class="content h-screen w-screen bg-white fixed top-0 left-0 overflow-hidden z-50 delay-150 transition-transform duration-300 ease-in-out"
      :class="isBurgermenuOpen ? 'translate-x-0' : 'translate-x-full'"
      v-if="isBurgermenuOpen"
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
          class="col-span-full grid text-end grid-cols-1 sm:grid-cols-[0.4fr_1fr] md:grid-cols-[0.8fr_1fr] lg:grid-cols-[2fr_1.8fr] items-end md:gap-12"
        >
          <nav
            class="border-brand border-b-2 pb-4 sm:border-b-0 sm:col-start-2 col-start-1 sm:border-l-2"
          >
            <ul class="flex flex-col gap-4 items-end">
              <li class="flex gap-2 items-center group">
                <NuxtLink to="/">FORSIDE</NuxtLink>
                <img
                  src="/public/images/brown-arrow.svg"
                  alt="brown arrow pointing to the right"
                  class="burgermenu-links"
                />
              </li>
              <li class="flex gap-2 items-center group">
                <NuxtLink to="/menu">MENU</NuxtLink>
                <img
                  src="/public/images/brown-arrow.svg"
                  alt="brown arrow pointing to the right"
                  class="burgermenu-links"
                />
              </li>
              <li class="flex gap-2 items-center group">
                <NuxtLink to="/kontakt">KONTAKT</NuxtLink>
                <img
                  src="/public/images/brown-arrow.svg"
                  alt="brown arrow pointing to the right"
                  class="burgermenu-links"
                />
              </li>
              <li class="flex gap-2 items-center group">
                <NuxtLink to="/afternoon-tea">AFTERNOON TEA</NuxtLink>
                <img
                  src="/public/images/brown-arrow.svg"
                  alt="brown arrow pointing to the right"
                  class="burgermenu-links"
                />
              </li>
              <li class="flex gap-2 items-center group">
                <NuxtLink to="/smykker">SMYKKER</NuxtLink>
                <img
                  src="/public/images/brown-arrow.svg"
                  alt="brown arrow pointing to the right"
                  class="burgermenu-links"
                />
              </li>
              <li class="flex gap-2 items-center group">
                <NuxtLink to="/aktiviteter">AKITVITETR</NuxtLink>
                <img
                  src="/public/images/brown-arrow.svg"
                  alt="brown arrow pointing to the right"
                  class="burgermenu-links"
                />
              </li>
            </ul>
          </nav>
          <div
            class="flex flex-col pt-4 md:flex-row gap-8 justify-self-end mr-6 col-start-1 sm:row-start-1 row-start-2"
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
                <li>Mandag - Fredag: 7:30 - 18:00</li>
                <li>Lørdag - Søndag: 09:00 - 17:00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  </Transition>
  <div
    v-if="!isBurgermenuOpen"
    class="burgermenu-button fixed top-12 right-12 z-50 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg cursor-pointer"
    @click="toggleBurgermenu"
  ></div>
</template>

<script setup>
import { ref } from "vue";

const isBurgermenuOpen = ref(false);

const toggleBurgermenu = () => {
  isBurgermenuOpen.value = !isBurgermenuOpen.value;
};
</script>

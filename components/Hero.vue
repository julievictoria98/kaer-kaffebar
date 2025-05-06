<script setup lang="ts"></script>

<template>
  <article class="content no-padding">
    <div
      id="hero"
      class="h-screen flex flex-col justify-center backdrop-blur-md col-span-full p-20"
    >
      <h1 class="display">KÆR KAFFEBAR</h1>
      <div class="flex gap-12 mt-8">
        <UiSecondaryButton text="MENUKORT" href="/contact"></UiSecondaryButton>
        <UiSecondaryButton
          text="BESTIL BORD"
          href="/contact"
        ></UiSecondaryButton>
      </div>

      <PrimaryButton text="Click me" href="/contact"></PrimaryButton>
    </div>
  </article>
</template>

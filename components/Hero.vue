<script setup lang="ts"></script>

<template>
  <article class="content no-padding">
    <div
      id="hero"
      class="h-screen flex flex-col justify-center backdrop-blur-md col-span-full"
    >
      <h1 class="display">KÆR KAFFEBAR</h1>
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-12">
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

<template>
  <body>
    <header
      class="header flex justify-between items-end absolute top-0 w-full z-[1002]"
    >
      <NuxtLink to="/">
        <img id="logo" src="/images/logo.png" alt="logo of Kær Kaffebar" />
      </NuxtLink>
      <LayoutBurgermenu />
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="footer">
      <LayoutFooter />
    </footer>
  </body>
</template>

<script></script>

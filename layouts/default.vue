<template>
  <body>
    <header class="header">
      <nav class="navbar">
        <ul class="navbar-list">
          <li class="navbar-item"><NuxtLink to="/">Forside</NuxtLink></li>
          <li class="navbar-item">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="footer">
      <p>&copy; 2023 My Nuxt App</p>
    </footer>
  </body>
</template>

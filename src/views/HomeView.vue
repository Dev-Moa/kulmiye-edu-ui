<script setup>
import Navbar from './../components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col mx-auto size-full">
    <Navbar />

    <main id="content">
      <Hero />
    </main>

    <footer >
      <Footer/>
    </footer>
  </div>
</template>

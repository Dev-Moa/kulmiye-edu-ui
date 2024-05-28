<script setup>
import Navbar from './../components/Navbar.vue'
import Bg from './../components/Bg.vue'
import Hero from '@/components/Hero.vue'
import Universities from './../components/Universities.vue'
import Faq from './../components/Faq.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>


  <div class="max-w-[75rem] flex flex-col mx-auto size-full">
    <!-- ========== HEADER ========== -->
    <Navbar />

    <!-- ========== MAIN CONTENT ========== -->
    <main id="content">
      <Bg/>
      <Hero />
      <Universities />
      <Faq />
    </main>

    <!-- ========== FOOTER ========== -->
    <footer class="mt-auto text-center py-5">
      <Footer />
    </footer>
  </div>
</template>

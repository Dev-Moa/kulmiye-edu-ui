<template>
    <div class="max-w-[75rem] flex flex-col gap-10 mx-auto size-full">
        <!-- ========== HEADER ========== -->
        <Navbar />

        <!-- ========== MAIN CONTENT ========== -->
        <main id="content">
          <Universities /> 
        </main>

        <!-- ========== FOOTER ========== -->
        <footer class="mt-auto text-center py-5">
            <Footer />
        </footer>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Universities from '@/components/Universities.vue'
import Footer from '@/components/Footer.vue'

</script>
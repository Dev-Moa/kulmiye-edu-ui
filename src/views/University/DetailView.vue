<template>
  <div class="max-w-[75rem] flex flex-col gap-10 mx-auto size-full">
    <!-- ========== HEADER ========== -->
    <Navbar />

    <!-- ========== MAIN CONTENT ========== -->
    <main v-if="responseData">
      <!-- Blog Article -->
      <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
          <figure>
            <img class="w-full object-cover rounded-xl" :src="responseData.images" alt="Image Description">
            <figcaption class="mt-3 text-sm text-center text-gray-500">
              A woman sitting at a table.
            </figcaption>
          </figure>
          <!-- Content -->
          <div class="space-y-5 md:space-y-8">
            <div class="space-y-3">
              <h2 class="text-2xl font-bold md:text-3xl">Content</h2>
              <p class="text-lg text-gray-800">{{ responseData.content }}</p>
            </div>
            <h2 class="text-2xl font-bold md:text-3xl">Vision</h2>
            <p class="text-lg text-gray-800">{{ responseData.vision }}</p>

            <h2 class="text-2xl font-bold md:text-3xl">Mission</h2>
            <p class="text-lg text-gray-800">{{ responseData.mission }}</p>
          </div>
          <!-- End Content -->
          
          <!-- Stats -->
          <!-- Features -->
          
          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            
            <!-- Grid -->
            <div class="grid gap-6 grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-8">
              <!-- Stats -->
              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800">Faculty numbers</h4>
                <p class="mt-2 sm:mt-3 text-4xl  font-bold text-blue-600">{{ responseData.faculty_numbers }} + </p>
                <!-- <p class="mt-1 text-gray-500">this year alone</p> -->
              </div>
              <!-- End Stats -->
              <!-- Stats -->
              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800">Bachelor degree programs</h4>
                <p class="mt-2 sm:mt-3 text-4xl  font-bold text-blue-600"> {{ responseData.bachelor_program_numbers }} + </p>
                <!-- <p class="mt-1 text-gray-500">this year alone</p> -->
              </div>
              <!-- End Stats -->
              <!-- Stats -->
              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800">Master degree programs</h4>
                <p class="mt-2 sm:mt-3 text-4xl  font-bold text-blue-600"> {{ responseData.master_program_numbers }} + </p>
                <!-- <p class="mt-1 text-gray-500">this year alone</p> -->
              </div>
              <!-- End Stats -->
              <!-- Stats -->
              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800">Phd degree programs</h4>
                <p class="mt-2 sm:mt-3 text-4xl  font-bold text-blue-600"> {{ responseData.phd_program_numbers }} + </p>
                <!-- <p class="mt-1 text-gray-500">this year alone</p> -->
              </div>
              <!-- End Stats -->
              <!-- Stats -->
              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800">Student numbers</h4>
                <p class="mt-2 sm:mt-3 text-4xl  font-bold text-blue-600"> {{ responseData.student_numbers }} + </p>
                <!-- <p class="mt-1 text-gray-500">this year alone</p> -->
              </div>
              <!-- End Stats -->
              <!-- Stats -->
              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800">Alumni numbers</h4>
                <p class="mt-2 sm:mt-3 text-4xl  font-bold text-blue-600"> {{ responseData.alumni_numbers }} + </p>
                <!-- <p class="mt-1 text-gray-500">this year alone</p> -->
              </div>
              <!-- End Stats -->
              <!-- Stats -->
              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800">Address</h4>
                <p class="mt-2 sm:mt-3 text-4xl  font-bold text-blue-600"> {{ responseData.address }} + </p>
                <!-- <p class="mt-1 text-gray-500">this year alone</p> -->
              </div>
              <!-- End Stats -->
              <!-- Stats -->
              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800">Website</h4>
                <a :href="responseData.website" target="_blank" class="mt-2 sm:mt-3 text-xl font-bold   text-blue-600">  {{ responseData.university_name }}  </a>
                <!-- <p class="mt-1 text-gray-500">this year alone</p> -->
              </div>
              <!-- End Stats -->

            </div>
            <!-- End Grid -->
          </div>
          <!-- End Features -->
          <!-- end stats -->
        </div>
      </div>
      <!-- End Blog Article -->

    </main>

    <!-- ========== FOOTER ========== -->
    <footer class="mt-auto text-center py-5">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useFetch } from "@vueuse/core";

//route
const route = useRoute()
const id = route.params.id

//http varriables
const loading = ref(false)
const responseData = ref(null)
const error = ref(null)


// api request
onMounted(async () => {
  loading.value = true
  try {
    const { isFetching, data, error: Error } = await useFetch(`http://127.0.0.1:8000/university/${id}/`).get().json()
    //updated values
    loading.value = isFetching.value
    responseData.value = data.value
    error.value = Error.value

    console.log('data', responseData.value);
    console.log('error', error.value);
  } catch (err) {
    error.value = err.message
    loading.value = false
  }
})

</script>
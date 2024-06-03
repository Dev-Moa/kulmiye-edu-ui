<script setup>
import { useFetch } from '@vueuse/core';
import { onMounted, ref, provide } from 'vue';

// http varriables

const loading = ref(false)
const error = ref(null)
const responseData = ref(null)
const status = ref(null)


// onMounted fetch university list
onMounted(async()=>{
    loading.value = true
    try {
        const {isFetching,data,error:fetchError,statusCode} = await useFetch('http://127.0.0.1:8000/university/').get().json()
        //updated values
        loading.value = isFetching.value,
        responseData.value = data.value,
        error.value = fetchError.value,
        status.value = statusCode.value

        console.log('Status Code:', statusCode.value);
        console.log('Data:', data.value);
        console.log('Error:', fetchError.value);

    } catch (err) {
        error.value = err.messages 
        loading.value = false
    }
})


</script>

<template>
  <!-- Card Blog -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-2xl text-center mx-auto mb-8">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Explore Universities </h2>
    </div>
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card -->
      <div v-if="responseData" v-for="university in responseData" :key="university.id"
        class="flex flex-col bg-white border shadow-sm rounded-xl">
        <img class="w-full h-auto rounded-t-xl"
          :src="university.images"
          alt="Image Description" />
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">{{ university.university_name }}</h3>
          <p class="mt-1 text-gray-500">
            {{ university.content.split(' ').slice(0, 15).join(' ') + '...' }}
          </p>
          <router-link :to="{name:'university-detail',params: { id: university.id }}">
            <button
              class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#">
              Read More
            </button>
          </router-link>
        </div>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Blog -->
</template>

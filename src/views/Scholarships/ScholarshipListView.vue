<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { onMounted, ref } from 'vue';
import { getScholarhip, getDegree } from '@/composables/usePrograms';

// programs
const scholarships = ref(null);
const loading = ref(false);
const error = ref(null);



onMounted(async () => {
    loading.value = true
    try {
        const { isFetching, data, error: Error } = await getScholarhip()
        if (!Error.value) {
            scholarships.value = data.value
            loading.value = isFetching.value
        } else {
            error.value = Error.value
            loading.value = false
        }
    } catch (err) {
        error.value = err.message
        loading.value = false
    }
});

console.log('scholarships', scholarships);

</script>


<template>
    <div class="max-w-[75rem] flex flex-col gap-10 mx-auto size-full">
        <!-- ========== HEADER ========== -->
        <Navbar />

        <!-- ========== MAIN CONTENT ========== -->
        <main class="px-10 flex flex-col sm:flex-row">
                <!-- combobox -->
                <div class="relative border p-2 max-h-60 ">
                    <input type="text" placeholder="Select a scholarship"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        list="scholarship-list" />
                    <datalist id="scholarship-list">
                        <option v-for="scholarship in scholarships" :key="scholarship.id"
                            :value="scholarship.program.program_name">
                            {{ scholarship.program.program_name }}
                        </option>
                    </datalist>
                    <button class="p-4 mt-24 bg-blue-500 text-white rounded">Filter</button>
                </div>
            <!-- list section -->
            <ul v-if="scholarships" class="p-2 w-[55rem]">
                <div class="bg-white border rounded-xl sm:w-[50rem] my-2 shadow-sm sm:flex" v-for="scholarship in scholarships" :key="scholarship.id">
                    <div
                        class="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[10%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
                        <img class="size-full p-2 border-tlb absolute top-0 start-0 object-cover"
                            :src="scholarship.university.images"
                            alt="Image Description">
                    </div>
                    <div class="flex flex-col sm:flex-row flex-wrap">
                        <div class="p-4 flex flex-col space-y-4 sm:p-5">
                            <h3 class="text-lg font-bold text-gray-800">
                                {{ scholarship.university.university_name }}
                            </h3>
                            <p class="mt-1 text-gray-500">
                                {{ scholarship.program.program_name }}
                            </p>
                            <p class="mt-1 text-gray-500">
                                Degree : {{ scholarship.program.degree.degree_name }}
                            </p>
                            <div >
                                <p class="text-gray-500 mt-1">
                                    Scholarship percentage : {{ scholarship.scholarship_percentage }} %
                                </p>
                            </div>
                            <p class="mt-1 text-gray-500">
                                Year : {{ scholarship.program.year }} years
                            </p>
                            
                        </div>
                        <div class="p-4 flex flex-col space-y-4 sm:p-5">
                            <button class="p-4 bg-blue-500 text-white rounded">Apply Now</button>
                        </div>

                    </div>
                </div>

            </ul>

        </main>

        <!-- ========== FOOTER ========== -->
        <footer class="mt-auto text-center py-5">
            <Footer />
        </footer>
    </div>
</template>

<style scoped>
/* Custom styles for the datalist and its options */
input::-webkit-calendar-picker-indicator {
    display: none !important;
}

#scholarship-list {
    max-height: 200px;
    /* Set a max height for the list */
    overflow-y: auto;
    /* Enable vertical scrolling */
    background-color: white;
    /* Set background color */
    border: 1px solid #d1d5db;
    /* Border color (gray-300) */
    border-radius: 0.375rem;
    /* Rounded corners (rounded-lg) */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    /* Tailwind shadow-lg */
    position: absolute;
    /* Position the datalist absolutely */
    width: 100%;
    /* Match the width of the input */
    z-index: 1000;
    /* Ensure it appears above other elements */
}

#scholarship-list option {
    padding: 0.5rem 1rem;
    /* Padding for each option */
    cursor: pointer;
    /* Change cursor to pointer */
}

#scholarship-list option:hover {
    background-color: #f3f4f6;
    /* Hover background color (gray-100) */
}
</style>
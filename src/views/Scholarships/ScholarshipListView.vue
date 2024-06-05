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
        <main class="px-4 sm:px-10 flex flex-col sm:flex-row gap-6">
            <!-- filter section -->
            <div class="relative border p-4 rounded-lg bg-white shadow-sm ">
                <input type="text" placeholder="Select a scholarship"
                    class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                    list="scholarship-list" />
                <datalist id="scholarship-list">
                    <option v-for="scholarship in scholarships" :key="scholarship.id"
                        :value="scholarship.program.program_name">
                        {{ scholarship.program.program_name }}
                    </option>
                </datalist>
                <button class="w-full py-3 mt-4 bg-blue-500 text-white rounded-lg">Filter</button>
            </div>

            <!-- list section -->
            <ul v-if="scholarships" class="space-y-6 sm:w-[70rem]">
                <li v-for="scholarship in scholarships" :key="scholarship.id"
                    class="bg-white border rounded-xl shadow-sm flex flex-col sm:flex-row">
                    <div
                        class="relative w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none">
                        <img class="absolute inset-0 w-full h-full object-cover" :src="scholarship.university.images"
                            alt="Image Description" />
                    </div>
                    <div class="p-4 flex flex-col space-y-4 sm:flex-1">
                        <h3 class="text-lg font-bold text-gray-800">
                            {{ scholarship.university.university_name }}
                        </h3>
                        <p class="text-gray-500">
                            {{ scholarship.program.program_name }}
                        </p>
                        <p class="text-gray-500">
                            Degree: {{ scholarship.program.degree.degree_name }}
                        </p>
                        <p class="text-gray-500">
                            Scholarship percentage: {{ scholarship.scholarship_percentage }}%
                        </p>
                        <p class="text-gray-500">
                            Year: {{ scholarship.program.year }} years
                        </p>
                        <button class="py-2 px-4 bg-blue-500 text-white rounded-lg mt-auto">Apply Now</button>
                    </div>
                </li>
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
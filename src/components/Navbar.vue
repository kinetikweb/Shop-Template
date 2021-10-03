<template>
    <nav class="bg-gray-800">
        <div class="container flex">
            <!-- all category -->
            <Dropdown />
            <!-- end all category -->

            <!-- navbar links -->
            <div class="flex items-center justify-between flex-grow pl-12">
                <div class="flex items-center space-x-6 capitalize">
                    <router-link v-for="link in links" v-bind:key="link.id" :to="link.path" class="text-gray-200 hover:text-white transition">
                        {{ link.name }}
                    </router-link>
                </div>
                <a href="#" class="text-gray-200 hover:text-white transition">Login/Register</a>
            </div>
        </div>
    </nav>
</template>

<script setup>
import Dropdown from "../components/dropdown/Dropdown.vue"
import { ref } from 'vue'

const links = ref([
    { name: 'Home', path: '/', id: 1 },
    { name: 'Shop', path: '/shop', id: 2 },
    { name: 'About us', path: '#', id: 3 },
    { name: 'Contact us', path: '#', id: 4 },
])
</script>

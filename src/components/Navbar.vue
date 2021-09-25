<template>
    <nav class="bg-gray-800">
        <div class="container flex">
            <!-- all category -->
            <Dropdown />
            <!-- end all category -->

            <!-- navbar links -->
            <div class="flex items-center justify-between flex-grow pl-12">
                <div class="flex items-center space-x-6 capitalize">
                    <a href="#" class="text-gray-200 hover:text-white transition">Home</a>
                    <a href="#" class="text-gray-200 hover:text-white transition">Shop</a>
                    <a href="#" class="text-gray-200 hover:text-white transition">About us</a>
                    <a href="#" class="text-gray-200 hover:text-white transition">Contact us</a>
                </div>
                <a href="#" class="text-gray-200 hover:text-white transition">Login/Register</a>
            </div>
        </div>
    </nav>
</template>

<script setup>
import Dropdown from "../components/dropdown/Dropdown.vue"
</script>

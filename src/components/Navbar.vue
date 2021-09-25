<template>
    <nav class="bg-gray-800">
        <div class="container flex">
            <!-- all category -->
            <div class="px-8 py-4 bg-primary flex items-center cursor-pointer">
                <span class="text-white">
                    <MenuIcon class="w-6 h-6"/>
                </span>
                <span class="capitalize ml-2 text-white">
                    All categories
                </span>
            </div>
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
import { MenuIcon } from '@heroicons/vue/outline'
</script>

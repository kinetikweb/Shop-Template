<template>
    <div class="bg-white shadow rounded overflow-hidden group">
        <div class="relative">
            <img src="src/assets/images/hero-sofa3.jpg" class="w-full" alt="">
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                    <SearchIcon class="w-6 h-6"/>
                </a>
                <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                    <HeartIcon class="w-6 h-6"/>
                </a>
            </div>
        </div>
        <div class="pt-4 pb-3 px-4">
            <router-link to="/product">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Guyer chair
                </h4>
            </router-link>
            <div class="flex items-baseline mb-1 space-x-2 font-roboto">
                <p class="text-xl text-primary font-semibold">
                    $45.00
                </p>
                <p class="text-sm text-gray-400 line-through">
                    $55.00
                </p>
            </div>
            <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <StarIcon v-for="n in 5" class="w-6 h-6"/>
                </div>
                <div class="text-xs text-gray-500 ml-3">
                    (150)
                </div>
            </div>
        </div>
        <a href="#" class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
            Add to cart
        </a>
    </div>
</template>

<script setup>
import { SearchIcon, HeartIcon } from '@heroicons/vue/outline'
import { StarIcon } from '@heroicons/vue/solid'
</script>

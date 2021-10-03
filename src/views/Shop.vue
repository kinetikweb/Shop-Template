<template>
    <div class="container py-4 flex items-center gap-3">
        <a href="#" class="text-primary text-base">
            <HomeIcon class="w-4 h-4"/>
        </a>
        <span class="text-sm text-gray-400">
            <ChevronRightIcon class="w-4 h-4"/>
        </span>
        <p class="text-gray-600 font-medium">
            Shop
        </p>
    </div>
    <div class="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <Sidebar />
    </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/solid'
import { ChevronRightIcon } from '@heroicons/vue/outline'
import Sidebar from '@/components/shop/sidebar/Sidebar.vue';
</script>

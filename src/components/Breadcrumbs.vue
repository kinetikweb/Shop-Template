<template>
    <div class="container py-4 flex items-center gap-3">
        <a href="#" class="text-primary text-base">
            <HomeIcon class="w-4 h-4"/>
        </a>
        <span class="text-sm text-gray-400">
            <ChevronRightIcon class="w-4 h-4"/>
        </span>
        <p class="text-gray-600 font-medium">
            <slot />
        </p>
    </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/solid'
import { ChevronRightIcon } from '@heroicons/vue/outline'
</script>

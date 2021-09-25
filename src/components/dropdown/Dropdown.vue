<template>
    <div class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
        <span class="text-white">
            <MenuIcon class="w-6 h-6"/>
        </span>
        <span class="capitalize ml-2 text-white">
            All categories
        </span>

        <DropdownIcons />
    </div>
</template>

<script setup>
import { MenuIcon } from '@heroicons/vue/outline'
import DropdownIcons from "./DropdownIcons.vue"
</script>

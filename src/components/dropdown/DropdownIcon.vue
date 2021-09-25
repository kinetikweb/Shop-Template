<template>
    <router-link :to="link" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
        <img :src="getPath(path)" class="w-5 h-5" alt="no image">
        <span class="ml-6 text-gray-600 text-sm">
            <slot></slot>
        </span>
    </router-link>
</template>

<script setup>
const props = defineProps({
    path: String,
    link: String
})

function getPath(paths) {
    return "src/assets/images/"+paths;
}
</script>

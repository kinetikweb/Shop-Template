<template>
    <div class="relative rounded-sm overflow-hidden group">
        <img :src="getPathCat(pathcat)" class="w-full h-full" alt="">
        <a href="#" class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">
            <slot></slot>
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    pathcat: String,
})

function getPathCat(paths) {
    return "src/assets/images/category/"+paths;
}
</script>

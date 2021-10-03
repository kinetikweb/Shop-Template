<template>
    <div class="flex items-center">
        <input type="checkbox" id="cat-1" class="text-primary focus:ring-0 rounded-sm cursor-pointer">
        <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">
            {{ label }}
        </label>
        <div class="ml-auto text-gray-600 text-sm">
            ({{ num }})
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    label: String,
    num: String,
})
</script>

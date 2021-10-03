<template>
    <div class="size-selector">
        <input type="radio" name="size" class="hidden" id="size-xs">
        <label for="size-xs" class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
            {{ size }}
        </label>
    </div>
</template>

<script setup>
const props = defineProps({
    size: String,
})
</script>

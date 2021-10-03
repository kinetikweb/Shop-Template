<template>
    <div class="color-selector">
        <input type="radio" name="color" class="hidden" id="bg-red">
        <label for="bg-red" class="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"></label>
    </div>
</template>

<script setup>
const props = defineProps({
    color: String,
})
</script>

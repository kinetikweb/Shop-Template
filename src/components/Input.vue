<template>
    <div>
        <label class="text-gray-600 mb-2 block">
            <slot></slot>
            <span v-if="star !== false" class="text-primary">*</span>
        </label>
        <input type="text" class="input-box">
    </div>
</template>

<script setup>
const props = defineProps({
    star: Boolean,
})
</script>

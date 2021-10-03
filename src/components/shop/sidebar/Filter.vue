<template>
    <div>
        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
            {{ filter }}
        </h3>
        <div class="space-y-2">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    filter: String,
})
</script>

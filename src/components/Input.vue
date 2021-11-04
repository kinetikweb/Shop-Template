<template>
    <div>
        <label class="text-gray-600 mb-2 block">
            <slot></slot>
            <span v-if="star !== false" class="text-primary">*</span>
        </label>
        <select v-if="select !== false" class="input-box">
            <option>
                Male
            </option>
            <option>
                Female
            </option>
        </select>
        <input v-else :type="types" class="input-box" :placeholder="title">
    </div>
</template>

<script setup>
const props = defineProps({
    star: Boolean,
    title: String,
    types: {
        type: String,
        default: 'text'
    },
    select: {
        type: Boolean,
        default: false
    },
})
</script>

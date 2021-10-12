<template>
    <div class="container pb-16">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
            <slot />
        </h2>

        <div class="grid grid-cols-4 gap-6">
            <Product v-for="n in 4" />
        </div>
    </div>
</template>

<script setup>
import Product from './Product.vue';
</script>

<template>
    <div class="container py-16">
        <h2 class="text-3xl font-medium text-gray-800 uppercase mb-6">
            shop by category
        </h2>
        <div class="grid grid-cols-3 gap-3">
            <Category v-for="category in categories" v-bind:key="category.id" :pathcat="category.img">
                {{ category.name }}
            </Category>
        </div>
    </div>
</template>

<script setup>
import Category from './Category.vue';
import { ref } from 'vue'

const categories = ref([
    { name: 'Bedroom', img: 'bedroom.jpg', id: 1 },
    { name: 'Sofa', img: 'sofa.jpg', id: 2 },
    { name: 'Office', img: 'office.jpg', id: 3 },
    { name: 'Outdoor', img: 'outdoor.jpg', id: 4 },
    { name: 'Mattress', img: 'mattress.jpg', id: 5 },
    { name: 'Dinings', img: 'dinings.jpg', id: 6 },
])
</script>

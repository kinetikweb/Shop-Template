<template>
    <div class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
        <DropdownIcons v-for="category in categories" v-bind:key="category.id" :path="category.img" :link="category.router">
            {{ category.name }}
        </DropdownIcons>
    </div>
</template>

<script setup>
import DropdownIcons from "./DropdownIcon.vue"
import { ref } from 'vue'

const categories = ref([
    { name: 'Bedroom', router: '/about', img: 'bed.png', id: 1 },
    { name: 'Sofa', router: '/', img: 'sofa.png', id: 2 },
    { name: 'Office', router: '/#', img: 'work-station.png', id: 3 },
    { name: 'Outdoor', router: '/#', img: 'terrace.png', id: 4 },
    { name: 'Mattress', router: '/#', img: 'mattress.png', id: 5 },
])
</script>

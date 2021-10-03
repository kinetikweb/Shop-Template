<template>
    <div class="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
        <div class="divide-y divide-gray-200 space-y-5">
            <Filter filter="categories">
                <checkbox v-for="( category, index ) in categories" :label="category.name" :num="category.num" />
            </Filter>
            <Filter class="pt-4" filter="brand">
                <checkbox v-for="( brand, index ) in brands" :label="brand.name" :num="brand.num" />
            </Filter>
            <Filter class="pt-4" filter="price">
                <div class="mt-4 flex items-center">
                    <input type="text" class="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="min">
                    <span class="mx-3 text-gray-500">-</span>
                    <input type="text" class="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="max">
                </div>
            </Filter>
            <Filter class="pt-4" filter="size">
                <div class="flex items-center gap-2">
                    <Size v-for="( size, index ) in sizes" :size="size" />
                </div>
            </Filter>
            <Filter class="pt-4" filter="color">
                <div class="flex items-center gap-2">
                    <Color v-for="( color, index ) in colors" :color="color" :class="color" />
                </div>
            </Filter>
        </div>
    </div>
</template>

<script setup>
import Filter from './Filter.vue'
import Checkbox from './Checkbox.vue'
import Size from './Size.vue'
import Color from './Color.vue';
import { ref } from 'vue'

const categories = ref([
    { name: 'Bedroom', num: '15' },
    { name: 'Sofa', num: '05', },
    { name: 'Office', num: '09', },
    { name: 'Outdoor', num: '19', },
])

const brands = ref([
    { name: 'Dominik', num: '15' },
    { name: 'Karl', num: '18', },
    { name: 'Maxing', num: '09', },
    { name: 'Ernest', num: '12', },
])

const sizes = ref([ 'XS', 'S', 'M', 'L', 'XL' ])
const colors = ref([ 'bg-primary', 'bg-black', 'bg-white', ])
</script>

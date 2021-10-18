<template>
    <Breadcrumbs>
        Shop
    </Breadcrumbs>
    <div class="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <Sidebar />
        <div class="col-span-3">
            <div class="flex items-center mb-4">
                <select class="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                    <option>Default sorting</option>
                    <option>Price low-hight</option>
                    <option>Price hight-low</option>
                    <option>Latest product</option>
                </select>

                <div class="flex gap-2 ml-auto">
                    <div class="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                        <ViewGridIcon class="w-6 h-6"/>
                    </div>
                    <div class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                        <ViewListIcon class="w-6 h-6"/>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-6">
                <Product v-for="n in 6" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ViewGridIcon } from '@heroicons/vue/solid'
import { ViewListIcon } from '@heroicons/vue/outline'
import Sidebar from '@/components/shop/sidebar/Sidebar.vue'
import Product from '../components/products/Product.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
</script>

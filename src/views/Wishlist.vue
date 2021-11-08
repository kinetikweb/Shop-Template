<template>
    <Breadcrumbs>
        Wishlist
    </Breadcrumbs>
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div class="col-span-3">
            <SidebarProfile />
        </div>
        <div class="col-span-9 space-y-4">
            <div class="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                <div class="w-28 flex-shrink-0">
                    <img src="src/assets/images/hero-sofa3.jpg" class="w-full">
                </div>
                <div class="w-1/3">
                    <h2 class="text-gray-800 mb-1 text-xl font-medium uppercase">
                        Italian L Shape Sofa
                    </h2>
                    <p class="text-gray-500 text-sm">
                        Availability: <span class="text-green-600">In Stock</span>
                    </p>
                </div>
                <div>
                    <p class="text-primary text-lg font-semibold">
                        $320.00
                    </p>
                </div>
                <a href="#" class="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                    Add to cart
                </a>
                <div class="text-gray-600 hover:text-primary cursor-pointer">
                    <TrashIcon class="h-6 w-6"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import SidebarProfile from '../components/profile/SidebarProfile.vue'
import { TrashIcon } from '@heroicons/vue/solid'
</script>

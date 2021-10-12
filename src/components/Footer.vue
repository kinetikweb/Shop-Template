<template>
    <footer class="bg-white pt-16 pb-12 border-t border-gray-100">
        <div class="container grid grid-cols-3">
            <div class="col-span-1 space-y-6">
                <img src="../assets/images/symbols.png" class="w-20 h-12" alt="image">
                <p class="text-gray-500">
                    Cernantur aliqua export hic nisi. Senserit duis aut eiusmod firmissimum.
                </p>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <img src="../assets/images/facebook-logo.png" class="w-5 h-5 hover:animate-bounce" alt="">
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <img src="../assets/images/twitter.png" class="w-5 h-5 hover:animate-bounce" alt="">
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <img src="../assets/images/instagram.png" class="w-5 h-5 hover:animate-bounce" alt="">
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <img src="../assets/images/linkedin.png" class="w-5 h-5 hover:animate-bounce" alt="">
                    </a>
                </div>
            </div>

            <div class="col-span-2 grid grid-cols-2 gap-8">
                <div class="grid grid-cols-2 gap-8">
                    <div v-for="item in items" v-bind:key="item.id">
                        <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider">
                            {{ item.name }}
                        </h3>
                        <div class="mt-4 space-y-4">
                            <a v-for="subject in item.sub" href="#" class="text-base text-gray-500 hover:text-primary block">
                                {{ subject }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div class="bg-gray-800 py-4">
        <div class="container flex items-center justify-between">
            <p class="text-white">
                &copy; KLARNA - All Rights Reserved
            </p>
            <div class="flex flex-row space-x-4">
                <img src="../assets/images/cart/visa.png" class="h-7 bg-white px-2" alt="">
                <img src="../assets/images/cart/paypal.png" class="h-7 bg-white px-2" alt="">
                <img src="../assets/images/cart/maestro.png" class="h-7 bg-white px-2" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([{
        name: 'Solution',
        sub: ['Marketing', 'Analytics', 'Commerce', 'Insights'],
        id: 1
    },
    {
        name: 'Suport',
        sub: ['Pricing', 'Documentation', 'Guides', 'API Status'],
        id: 2
    },
])
</script>

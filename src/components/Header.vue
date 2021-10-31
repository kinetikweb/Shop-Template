<template>
    <!-- header -->
    <header class="py-4 shadow-sm bg-white">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <a href="#">
                <img src="../assets/images/symbols.png" class="w-20 h-16" alt="image">
            </a>

            <!-- searhbar -->
            <div class="w-full max-w-xl relative flex">
                <span class="absolute left-4 top-3 text-lg text-gray-400">
                    <SearchIcon class="w-6 h-6"/>
                </span>
                <input type="text" class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="search">
                <button class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
                    Search
                </button>
            </div>

            <!-- icons -->
            <div class="flex items-center space-x-4">
                <a href="#" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl inline-flex items-center align-middle">
                        <HeartIcon class="w-6 h-6"/>
                    </div>
                    <div class="text-xs leading-3">
                        Wish List
                    </div>
                    <span class="absolute right-1 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</span>
                </a>
                <a href="#" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl inline-flex items-center align-middle">
                        <ShoppingBagIcon class="w-6 h-6"/>
                    </div>
                    <div class="text-xs leading-3">
                        Cart
                    </div>
                    <span class="absolute -right-1 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</span>
                </a>
                <router-link to="/account" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl inline-flex items-center align-middle">
                        <UserIcon class="w-6 h-6"/>
                    </div>
                    <div class="text-xs leading-3">
                        Account
                    </div>
                    <span class="absolute right-1 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</span>
                </router-link>
            </div>
        </div>
    </header>
    <!-- header -->
</template>

<script>
import { HeartIcon } from '@heroicons/vue/outline'
import { ShoppingBagIcon } from '@heroicons/vue/solid'
import { UserIcon } from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/outline'

export default {
    components: {
        HeartIcon,
        ShoppingBagIcon,
        UserIcon,
        SearchIcon
    }
}
</script>

<style>
</style>

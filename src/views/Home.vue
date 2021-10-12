<template>
    <Banner />
    <Features />
    <Categories />
    <Products>
        top new arrival
    </Products>

    <div class="container pb-16">
        <a href="#">
            <img src="@/assets/images/sale.jpg" alt="" class="w-full h-64 object-none object-top">
        </a>
    </div>

    <Products>
        recomended for you
    </Products>
</template>

<script setup>
import Banner from '@/components/Banner.vue'
import Features from '@/components/Features.vue'
import Categories from '@/components/categories/Categories.vue'
import Products from '@/components/products/Products.vue'
</script>

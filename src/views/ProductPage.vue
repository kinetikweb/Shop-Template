<template>
    <Breadcrumbs>
        Product View
    </Breadcrumbs>
    <div class="container grid grid-cols-2 gap-6">
        <div>
            <img src="src/assets/images/chairs/chair1.jpg" class="w-full" alt="">
            <div class="grid grid-cols-5 gap-4 mt-4">
                <img src="src/assets/images/chairs/chair2.jpg" class="w-full h-full cursor-pointer border border-primary" alt="">
                <img src="src/assets/images/chairs/chair3.jpg" class="w-full h-full cursor-pointer border" alt="">
                <img src="src/assets/images/chairs/chair4.jpg" class="w-full h-full cursor-pointer border" alt="">
                <img src="src/assets/images/chairs/chair5.jpg" class="w-full h-full cursor-pointer border" alt="">
                <img src="src/assets/images/chairs/chair6.jpg" class="w-full h-full cursor-pointer border" alt="">
            </div>
        </div>

        <div>
            <h2 class="text-3xl font-medium uppercase mb-2">
                Italian L Shape Sofa
            </h2>
            <div class="flex items-center mb-4">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <span v-for="n in 5">
                        <StarIcon class="w-6 h-6"/>
                    </span>
                </div>
                <div class="text-xs text-gray-500 ml-3">
                    (150 Reviews)
                </div>
            </div>
            <div class="space-y-2">
                <p class="text-gray-800 font-semibold space-x-2">
                    <span>
                        Aviability:
                    </span>
                    <span class="text-green-600">
                        In Stock
                    </span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">
                        Brand:
                    </span>
                    <span class="text-gray-600">
                        Apex
                    </span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">
                        Category:
                    </span>
                    <span class="text-gray-600">
                        Sofa
                    </span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">
                        SKU:
                    </span>
                    <span class="text-gray-600">
                        BE45VGRT
                    </span>
                </p>
            </div>
            <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p class="text-2xl text-primary font-semibold">
                    $45.00
                </p>
                <p class="text-base text-gray-400 line-through">
                    $55.00
                </p>
            </div>
            <p class="mt-4 text-gray-600">
                Si litteris o nostrud. Ita quis voluptatibus, te et efflorescere. Constias tamen
                nostrud iudicem ne anim constias quo probant ut quo labore doctrina domesticarum
                se ex ea sempiternum, officia.
            </p>
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
            <Filter class="mt-4" filter="quantity">
                <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div class="h-8 w-8 text-base flex items-center justify-center">4</div>
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
            </Filter>
            <div class="flex gap-3 border-b border-gray-300 pb-5 mt-6">
                <a href="#" class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                    <ShoppingBagIcon class="w-4 h-4"/> Add to cart
                </a>
                <a href="#" class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:border-primary hover:text-primary transition">
                    <HeartIcon class="w-4 h-4"/> Wishlist
                </a>
            </div>
            <div class="flex gap-3 mt-4">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <img src="../assets/images/facebook-logo.png" class="w-5 h-5 hover:animate-bounce" alt="">
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <img src="../assets/images/twitter.png" class="w-5 h-5 hover:animate-bounce" alt="">
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <img src="../assets/images/instagram.png" class="w-5 h-5 hover:animate-bounce" alt="">
                </a>
            </div>
        </div>
    </div>
    <div class="container py-16">
        <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
            Product details
        </h3>
        <div class="w-3/5 pt-6">
            <div class="text-gray-600 space-y-3">
                <p>
                    Excepteur an elit te veniam ut litteris. Proident ipsum nescius, ut incididunt
                    praesentibus ea an velit aut summis an elit sempiternum officia multos aliquip.
                    Ullamco ex cillum ullamco a se et legam dolor labore, ad non concursionibus,
                    quae singulis id magna aliqua, senserit noster mentitum excepteur e elit aut
                    laboris e si elit cernantur adipisicing do non nulla despicationes.
                </p>
                <p>
                    Sunt qui nostrud, a hic esse aliqua fore, malis aliquip ita laborum, summis
                    consequat cohaerescant. Ita quae fugiat ne laboris, ne laboris sed arbitror,
                    magna do incurreret de quorum ubi ea fugiat consequat transferrem id ita quis
                    expetendis exquisitaque ita si officia est consequat ad aute id nam sint
                    expetendis hic de aliqua quibusdam.
                </p>
                <p>
                    Labore eruditionem mentitum elit quamquam, hic summis sint quid voluptate. Aut
                    ingeniis instituendarum, eiusmod noster minim quo amet. Ea hic amet occaecat in
                    admodum quae sed singulis familiaritatem de iis sunt commodo excepteur, esse
                    incididunt e voluptate. Noster transferrem vidisse quid nostrud, ita ipsum si
                    velit.Aliquip se occaecat. Quamquam amet cupidatat se malis nam consequat et
                    anim, se quibusdam coniunctione, commodo qui eram. Esse est probant, e multos
                    firmissimum ea vidisse an aliqua litteris ab ne cillum dolor hic vidisse.
                </p>
            </div>
            <table class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                    <td class="py-2 px-4 border border-gray-300">Black, Brown, Red</td>
                </tr>
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                    <td class="py-2 px-4 border border-gray-300">Artificial Leather</td>
                </tr>
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                    <td class="py-2 px-4 border border-gray-300">55kg</td>
                </tr>
            </table>
        </div>
    </div>

    <Products>
        Related Products
    </Products>
</template>

<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import Filter from '../components/shop/sidebar/Filter.vue'
import Size from '../components/shop/sidebar/Size.vue'
import Color from '../components/shop/sidebar/Color.vue'
import Products from '@/components/products/Products.vue'
import { StarIcon } from '@heroicons/vue/solid'
import { ShoppingBagIcon, HeartIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'

const sizes = ref([ 'XS', 'S', 'M', 'L', 'XL' ])
const colors = ref([ 'bg-primary', 'bg-black', 'bg-white', 'bg-blue-500' ])
</script>

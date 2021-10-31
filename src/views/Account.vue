:<template>
    <Breadcrumbs>
        My Account
    </Breadcrumbs>
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div class="col-span-3">
            <div class="px-4 py-3 shadow flex items-center gap-4">
                <div class="flex-shrink-0">
                    <img src="src/assets/images/woman.jpg" alt="not available" class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover">
                </div>
                <div class="flex-grow">
                    <p class="text-gray-600">
                        Hello,
                    </p>
                    <h4 class="text-gray-800 font-medium">
                        Maria Petrova
                    </h4>
                </div>
            </div>
            <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <div class="space-y-1 pl-8">
                    <a href="#" class="relative text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <IdentificationIcon class="h-5 w-5"/>
                        </span>
                        Manage account
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        Profile information
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        Manage Address
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        Change Password
                    </a>
                </div>
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <GiftIcon class="h-5 w-5"/>
                        </span>
                        My order history
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        My returns
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        My cancellations
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        My reviews
                    </a>
                </div>
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <CreditCardIcon class="h-5 w-5"/>
                        </span>
                        Payment methods
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        Voucher
                    </a>
                </div>
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <HeartIcon class="h-5 w-5"/>
                        </span>
                        My wishlist
                    </a>
                </div>
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <LogoutIcon class="h-5 w-5"/>
                        </span>
                        Logout
                    </a>
                </div>
            </div>
        </div>
        <div class="col-span-9 grid grid-cols-3 gap-4">
            <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="font-medium text-gray-800 text-lg">
                        Personal profile
                    </h3>
                    <a href="#" class="text-primary">
                        Edit
                    </a>
                </div>
                <div class="space-y-1">
                    <h4 class="text-gray-700 font-medium">
                        Maria Petrova
                    </h4>
                    <p class="text-gray-800">
                        example@mail.com
                    </p>
                    <p class="text-gray-800">
                        02 9873 286
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import { IdentificationIcon, GiftIcon, CreditCardIcon, LogoutIcon } from '@heroicons/vue/solid'
import { HeartIcon } from '@heroicons/vue/outline'
</script>

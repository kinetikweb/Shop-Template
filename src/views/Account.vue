<template>
    <Breadcrumbs>
        My Account
    </Breadcrumbs>
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div class="col-span-3">
            <SidebarProfile />
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
import SidebarProfile from '../components/profile/SidebarProfile.vue'
</script>

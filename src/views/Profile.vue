<template>
    <Breadcrumbs>
        Checkout
    </Breadcrumbs>
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div class="col-span-3">
            <SidebarProfile />
        </div>
        <div class="col-span-9 shadow rounded px-6 pt-5 pb-7">
            <h4 class="text-lg font-medium capitalize mb-4">
                Profile Information
            </h4>
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <Input :star="false" title="Enter first name">
                        First name
                    </Input>
                    <Input :star="false" title="Enter last name">
                        Last name
                    </Input>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <Input :star="false" types="date" title="Birthday">
                        Birthday
                    </Input>
                    <Input :star="false" :select="true">
                        Gender
                    </Input>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <Input :star="false" types="email" title="Enter email address">
                        Email address
                    </Input>
                    <Input :star="false" title="Enter phone number">
                        Phone number
                    </Input>
                </div>
                <div class="mt-4">
                    <button type="submit" class="text-center bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition uppercase text-sm">
                        save changes
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import SidebarProfile from '../components/profile/SidebarProfile.vue'
import Input from '../components/Input.vue'
</script>

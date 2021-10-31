<template>
    <Breadcrumbs>
        Checkout
    </Breadcrumbs>
    <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <div class="col-span-8 border border-gray-200 p-4 rounded">
            <h3 class="text-lg font-medium capitalize mb-4">
                checkout
            </h3>
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <Input :star="true">
                        First Name
                    </Input>
                    <Input :star="true">
                        Last Name
                    </Input>
                </div>
                <Input :star="false">
                    Company name
                </Input>
                <Input :star="true">
                    Country/Region
                </Input>
                <Input :star="true">
                    Street Address
                </Input>
                <Input :star="true">
                    Town/City
                </Input>
                <Input :star="true">
                    Zip Code
                </Input>
                <Input :star="true">
                    Phone Number
                </Input>
                <Input :star="true">
                    Email Address
                </Input>
            </div>
        </div>
        <div class="col-span-4 border border-gray-200 p-4 rounded">
            <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">
                order summary
            </h4>
            <div class="space-y-2">
                <div class="flex justify-between">
                    <div>
                        <h5 class="text-gray-800 font-medium">
                            Italian Shape Sofa
                        </h5>
                        <p class="text-sm text-gray-600">
                            Size: M
                        </p>
                    </div>
                    <p class="text-gray-600">
                        x3
                    </p>
                    <p class="text-gray-800 font-medium">
                        $320
                    </p>
                </div>

                <div class="flex justify-between">
                    <div>
                        <h5 class="text-gray-800 font-medium">
                            Italian Shape Sofa
                        </h5>
                        <p class="text-sm text-gray-600">
                            Size: M
                        </p>
                    </div>
                    <p class="text-gray-600">
                        x3
                    </p>
                    <p class="text-gray-800 font-medium">
                        $320
                    </p>
                </div>
                <div class="flex justify-between">
                    <div>
                        <h5 class="text-gray-800 font-medium">
                            Italian Shape Sofa
                        </h5>
                        <p class="text-sm text-gray-600">
                            Size: M
                        </p>
                    </div>
                    <p class="text-gray-600">
                        x3
                    </p>
                    <p class="text-gray-800 font-medium">
                        $320
                    </p>
                </div>
                <div class="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                    <p>
                        Subtotal
                    </p>
                    <p>
                        $320
                    </p>
                </div>
                <div class="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                    <p>
                        Shipping
                    </p>
                    <p>
                        Free
                    </p>
                </div>
                <div class="flex justify-between text-gray-800 font-medium py-3 uppercase">
                    <p class="font-semibold">
                        Total
                    </p>
                    <p>
                        $320
                    </p>
                </div>
                <div class="flex items-center mb-4 mt-2">
                    <input id="agreement" type="checkbox" class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3">
                    <label for="agreement" class="text-gray-600 ml-3 cursor-pointer text-sm">
                        Agree to our
                        <a href="#" class="text-primary">
                            terms & conditions
                        </a>
                    </label>
                </div>
                <a href="#" class="w-full block text-center bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary">
                    Place holder
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import Input from '../components/Input.vue'
</script>

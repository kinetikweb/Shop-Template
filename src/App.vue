<template>
    <Header />
    <Navbar />
    <router-link :to="{ name: '', params: {} }"></router-link>
    <router-view></router-view>
</template>

<script setup>
import Header from "./components/Header.vue"
import Navbar from "./components/Navbar.vue"
</script>

<style>
</style>

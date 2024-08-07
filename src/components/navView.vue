<!-- src/components/NavView.vue -->
<template>
    <nav>
        <!-- <RouterLink to="/">HomeView</RouterLink> -->
        <div class="flex top-0 items-center py-7  bg-white justify-around font-bold text-xs">
            <div class="flex justify-start">
                <img src="/public/shared/desktop/logo.svg" alt="logo" />
            </div>
            <div class="flex items-center justify-center space-x-10 pr-20">
                <router-link to="/"> STORIES</router-link>
                <RouterLink to="/"> FEATURES</RouterLink>
                <router-link to="/"> PRICING</router-link>
            </div>
            <div class="text-white py-3 px-6 bg-black">
                GET AN INIVITE
            </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped></style>
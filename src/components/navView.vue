<!-- src/components/NavView.vue -->
<template>
    <nav>
        <!-- <RouterLink to="/">HomeView</RouterLink> -->
        <div class="flex top-0 items-center py-7  bg-white justify-around font-bold text-xs">
            <div class="flex justify-start">
                <RouterLink to="/"><img src="/public/shared/desktop/logo.svg" alt="logo" /></RouterLink>
            </div>
            <div class="flex items-center justify-center space-x-10 pr-20 tracking-widest">
                <p class="hover:opacity-30"><RouterLink to="/StoriesView"> STORIES</RouterLink></p>
                <p class="hover:opacity-30">
                    <RouterLink to="/FeaturesView"> FEATURES</RouterLink>
                </p>
                <p class="hover:opacity-30"><RouterLink to="/PricingView"> PRICING</RouterLink></p>


            </div>
            <div class="text-white py-3 px-6 bg-black hover:bg-hoverbac">
                <p class="hover:text-black "><RouterLink to="/">GET AN INIVITE</RouterLink></p>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped></style>
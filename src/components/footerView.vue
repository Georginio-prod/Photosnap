<template>
    <div class="flex justify-between items-center  px-40 bg-black">
        <div class="flex flex-col gap-8 ">
            <img src="/public/Group.png" alt="logo" class="items-center h-full pt-16 pb-20">
            <div class="pb-16 flex flex-row gap-3">

                <div class="relative">
                    <img src="/public/Path.png" alt="" class="block">
                    <img src="/public/shared/desktop/facebook.svg" alt="hover image"
                        class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100">
                </div>
                <div class="relative">
                    <img src="/public/Shape (1).png" alt="" class="block">
                    <img src="/public/shared/desktop/youtube.svg" alt="hover image"
                        class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100">
                </div>
                <div class="relative">
                    <img src="/public/Path (2).png" alt="" class="block">
                    <img src="/public/shared/desktop/twitter.svg" alt="hover image"
                        class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100">
                </div>
                <div class="relative">
                    <img src="/public/Path (1).png" alt="" class="block">
                    <img src="/public/shared/desktop/pinterest.svg" alt="hover image"
                        class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100">
                </div>
                <div class="relative">
                    <img src="/public/Shape.png" alt="" class="block">
                    <img src="/public/shared/desktop/instagram.svg" alt="hover image"
                        class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100">
                </div>

            </div>

        </div>

        <div class="flex flex-col gap-5 text-white text-xs font-bold mr-48">
            <h3 class="hover:opacity-30"><router-link>Home</router-link> </h3>
            <h3 class="hover:opacity-30"><router-link>Stories</router-link></h3>
            <h3 class="hover:opacity-30"><router-link>Features</router-link></h3>
            <h3 class="hover:opacity-30"><router-link>Pricing</router-link></h3>
        </div>

        <div class="flex text-white flex-col gap-24">
            <div class="flex justify-end font-bold tracking-widest text-xs">
                <router-link to="/" class="hover:underline hover:underline-offset-2"> GET AN INVITE</router-link>
                <img src="/public/Group 6.png" alt="arrow" class="text-white h-full pl-3 ">
            </div>
            <p class="mt-4 text-sm opacity-50">Copyright 2024. All Rights Reserved</p>

        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
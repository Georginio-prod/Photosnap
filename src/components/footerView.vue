<template>
    <div class="flex justify-between items-center  px-40 bg-black">
        <div class="flex flex-col gap-8 ">
            <img src="/public/Group.png" alt="logo" class="items-center h-full pt-16 pb-20">
            <img src="/public/Group 12.png" alt="icons" class="pb-16">
        </div>

        <div class="flex flex-col gap-5 text-white text-xs font-bold">
            <h3> Home</h3>
            <h3>Stories</h3>
            <h3>Features</h3>
            <h3>Pricing</h3>
        </div>

        <div class="flex text-white flex-col gap-24">
            <div class="flex justify-end font-bold tracking-widest text-xs">
                <router-link to="/"> GET AN INVITE</router-link>
                <img src="/public/Group 6.png" alt="arrow" class="text-white h-full pl-3 ">
            </div>
            <p class="mt-4 text-sm opacity-50">Copyright 2019. All Rights Reserved</p>

        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
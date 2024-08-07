<template>
    <div class="h-full grid grid-cols-3 text-white bg-black">
        <div class="py-44 px-28 col-span-1">
            <h1>
                CREATE AND SHARE YOUR PHOTO STORIES
            </h1>

            <h2>
                Photosnap is a platform for photographers and visual storytellers. We make it
                easy to share photos, tell stories and connect with others.
            </h2>

            <div class="flex">
                <router-link to="/"> GET AN INVITE</router-link>
                <img src="/public/shared/desktop/arrow.svg" alt="arrow" class="text-white">
            </div>
        </div>

        <div class="col-span-2">
            <img src="/public/home/desktop/create-and-share.jpg" alt="tof" class="w-full h-[650px] object-cover">
        </div>

        <div class="col-span-2">
            <img src="/public/home/desktop/beautiful-stories.jpg" alt="pc" class="w-full h-[600px] object-center ">
        </div>
        <div class="col-span-1 bg-white text-black px-28 py-32">
            <h1>
                BEAUTIFUL STORIES EVERY TIME
            </h1>
            <h2>
                We provide design templates to ensure your stories look terrific. Easily add
                photos, text, embed maps and media from other networks. Then share your story
                with everyone.
            </h2>
            <div class="flex">
                <router-link to="/"> VIEW THE STORIES INVITE</router-link>
                <img src="/public/shared/desktop/arrow.svg" alt="arrow" class="text-white">
            </div>
        </div>


        <div class="col-span-1 bg-white text-black px-28 py-32">
            <h1>
                DESIGNED FOR EVERYONE
            </h1>
            <h2>
                Photosnap can help you create stories that resonate with your audience. Our
                tool is designed for photographers of all levels, brands, businesses you name it.

            </h2>
            <div class="flex">
                <router-link to="/"> VIEW THE STORIES</router-link>
                <img src="/public/shared/desktop/arrow.svg" alt="arrow" class="text-white">
            </div>
        </div>
        <div class="col-span-2">
            <img src="/public/home/desktop/designed-for-everyone.jpg" alt="pc" class="w-full h-[600px] object-fill">
        </div>
    </div>


    <div class="flex h-full">
        <div class="relative flex flex-col">
            <img src="/public/stories/desktop/mountains.jpg" alt="" class="w-full h-auto">
            <div class="absolute inset-0 flex flex-col justify-end px-10 text-white">
                <div>
                    <h1 class="mb-2">
                        The Mountains
                    </h1>
                    <h2 class="mb-4">
                        by John Appleseed
                    </h2>
                    <div class="w-full h-1 bg-green-950 mb-4"></div>
                </div>
                <div class="flex items-center pb-10">
                    Read Story
                    <img src="/public/shared/desktop/arrow.svg" alt="arrow" class="ml-2">
                </div>
            </div>
        </div>

        <div class="relative flex flex-col">
            <img src="/public/stories/desktop/cityscapes.jpg" alt="" class="w-full h-auto">
            <div class="absolute inset-0 flex flex-col justify-end px-10 text-white">
                <div>
                    <h1 class="mb-2">
                        Sunset Cityscapes

                    </h1>
                    <h2 class="mb-4">
                        by Benjamin Cruz
                    </h2>
                    <div class="w-full h-1 bg-green-950 mb-4"></div>
                </div>
                <div class="flex items-center pb-10">
                    Read Story
                    <img src="/public/shared/desktop/arrow.svg" alt="arrow" class="ml-2">
                </div>
            </div>
        </div>


        <div class="relative flex flex-col">
            <img src="/public/stories/desktop/18-days-voyage.jpg" alt="" class="w-full h-auto">
            <div class="absolute inset-0 flex flex-col justify-end px-10 text-white">
                <div>
                    <h1 class="mb-2">
                        18 Days Voyage

                    </h1>
                    <h2 class="mb-4">
                        by Alexei Borodin
                    </h2>
                    <div class="w-full h-1 bg-green-950 mb-4"></div>
                </div>
                <div class="flex items-center pb-10">
                    Read Story
                    <img src="/public/shared/desktop/arrow.svg" alt="arrow" class="ml-2">
                </div>
            </div>
        </div>

        <div class="relative flex flex-col">
            <img src="/public/stories/desktop/architecturals.jpg" alt="" class="w-full h-auto">
            <div class="absolute inset-0 flex flex-col justify-end px-10 text-white">
                <div>
                    <h1 class="mb-2">
                        Architecturals

                    </h1>
                    <h2 class="mb-4">
                        by Samantha Brooke
                    </h2>
                    <div class="w-full h-1 bg-green-950 mb-4"></div>
                </div>
                <div class="flex items-center pb-10">
                    Read Story
                    <img src="/public/shared/desktop/arrow.svg" alt="arrow" class="ml-2">
                </div>
            </div>
        </div>

    </div>

    <div class="w-full flex justify-center items-center px-40 py-32 ">
        <div class="flex-col flex-1 justify-center items-center flex ">
            <img src="/public/features/desktop/responsive.svg" alt="responsive" class="max-w-[72px] ">

            <div class="text-center">
                <h1>
                    100% Responsive
                </h1>

                <h2>
                    No matter which the device you’re on, our site is fully responsive and stories
                    look beautiful on any screen.
                </h2>
            </div>
        </div>

        <div class="flex-col flex-1 justify-center items-center flex">
            <img src="/public/features/desktop/no-limit.svg" alt="responsive" class="max-w-[72px]">

            <div class="text-center">
                <h1>
                    No Photo Upload Limit
                </h1>

                <h2>
                    Our tool has no limits on uploads or bandwidth. Freely upload in bulk and
                    share all of your stories in one go.
                </h2>
            </div>
        </div>
        <div class="flex-col flex-1 justify-center items-center flex">
            <img src="/public/features/desktop/embed.svg" alt="responsive" class="max-w-[72px] ">

            <div class="text-center">
                <h1>
                    Available to Embed
                </h1>

                <h2>
                    Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
                    Google Maps, and more.
                </h2>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

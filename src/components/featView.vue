<script setup>

</script>

<template>
    <div class="flex items-center justify-center w-full h-auto">
        <div class="grid grid-cols-12">
            <div class="col-span-5 items-center justify-center bg-black text-white py-40 px-28">
                <div class="w-[387px]">
                    <p class="font-bold tracking-widest text-4xl pb-5">
                        FEATURES
                    </p>

                    <h2 class="text-sm opacity-60">
                        We make sure all of our features are designed to be loved by every aspiring and even
                        professional photograpers who wanted to share their stories.

                    </h2>
                </div>
            </div>
            <div class="w-full col-span-7">
                <img src="/public/features/desktop/hero.jpg" alt="hero">

            </div>

        </div>


    </div>
    <div class="w-full flex  justify-around gap-14 items-center px-40 pt-40 ">
        <div class="flex-col flex-1 justify-center items-center flex ">
            <img src="/public/features/desktop/responsive.svg" alt="responsive" class="max-w-[72px] pb-12 ">

            <div class="text-center">
                <h1 class="pb-4 text-lg font-bold">
                    100% Responsive
                </h1>

                <h2 class="text-sm">
                    No matter which the device you’re on, our site is fully responsive and stories
                    look beautiful on any screen.
                </h2>
            </div>
        </div>

        <div class="flex-col flex-1 justify-center items-center flex ">
            <div>
                <img src="/public/features/desktop/no-limit.svg" alt="responsive" class="max-w-[72px]">
            </div>

            <div class="text-center pt-20">
                <h1 class="pb-4 text-lg font-bold">
                    No Photo Upload Limit
                </h1>

                <h2 class="text-sm">
                    Our tool has no limits on uploads or bandwidth. Freely upload in bulk and
                    share all of your stories in one go.
                </h2>
            </div>
        </div>
        <div class="flex-col flex-1 justify-center items-center flex">
            <img src="/public/features/desktop/embed.svg" alt="responsive" class="max-w-[72px] pb-12">

            <div class="text-center">
                <h1 class="pb-4 text-lg font-bold">
                    Available to Embed
                </h1>

                <h2 class="text-sm">
                    Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
                    Google Maps, and more.
                </h2>
            </div>
        </div>
    </div>


    <div class="w-full flex  justify-around gap-14 items-center px-40 pt-28 pb-40 ">
        <div class="flex-col flex-1 justify-center items-center flex ">
            <img src="/public/features/desktop/custom-domain.svg" alt="responsive" class="max-w-[72px] pb-12 ">

            <div class="text-center">
                <h1 class="pb-4 text-lg font-bold">
                    Custom Domain
                </h1>

                <h2 class="text-sm">
                    With Photosnap subscriptions you can host your stories on your own domain. You can
                    also remove our branding!

                </h2>
            </div>
        </div>

        <div class="flex-col flex-1 justify-center items-center flex ">
            <div>
                <img src="/public/features/desktop/boost-exposure.svg" alt="responsive" class="max-w-[72px]">
            </div>

            <div class="text-center pt-12">
                <h1 class="pb-4 text-lg font-bold">
                    Boost Your Exposure
                </h1>

                <h2 class="text-sm">
                    Users that viewed your story or gallery can easily get notifed of new and featured
                    stories with our built in mailing list.

                </h2>
            </div>
        </div>
        <div class="flex-col flex-1 justify-center items-center flex">
            <img src="/public/features/desktop/embed.svg" alt="responsive" class="max-w-[72px] pb-12">

            <div class="text-center">
                <h1 class="pb-4 text-lg font-bold">
                    Drag & Drop Image
                </h1>

                <h2 class="text-sm">
                    Easily drag and drop your image and get beautiful shots everytime. No over the top
                    tooling to add friction to creating stories.

                </h2>
            </div>
        </div>
    </div>

    <div class="relative flex flex-col">
        <img src="/public/shared/desktop/bg-beta.jpg" alt="bg">
        <div class="absolute inset-0 text-white px-40 py-20 flex justify-between ">
           

            <p class="w-[400px] text-4xl tracking-widest font-bold">
                WE'RE IN BETA.GET YOUR INVITE TODAY!
               
            </p>
            <p class="flex items-center text-xs tracking-widest font-bold">
                <router-link class=" hover:underline underline-offset-2">GET AN INVITE</router-link>
                <img src="/public/Group 6.png" alt="arrow" class="ml-3">
            </p>
        </div>

    </div>
</template>
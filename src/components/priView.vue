<template>
    <div class="flex items-center justify-center w-full h-auto">
        <div class="grid grid-cols-12">
            <div class="col-span-5 items-center justify-center bg-black text-white py-40 px-28">
                <div class="w-[387px]">
                    <p class="font-bold tracking-widest text-4xl pb-5">
                        PRICING
                    </p>

                    <h2 class="text-sm opacity-60">
                        Create a your stories, Photosnap is a platform for photographers and visual storytellers.
                        It’s the simple way to create and share your photos.
                    </h2>
                </div>
            </div>
            <div class="w-full col-span-7">
                <img src="/public/pricing/desktop/hero.jpg" alt="hero">
            </div>
        </div>

        <div></div>
    </div>


    <div class="flex flex-col items-center justify-center top-0 mt-28 px-40 gap-11 mb-40">
        <div class="flex items-center gap-6">
            <span :class="{ 'opacity-50': isYearly }">
                Monthly
            </span>
            <label class="relative flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" v-model="isYearly" />
                <span class="w-16 h-8 rounded-full flex flex-shrink-0 items-center p-1 transition-colors duration-300"
                    :class="{ 'bg-black': isYearly, 'bg-back': !isYearly, }">

                    <span class="bg-black w-6 h-6 rounded-full block transform transition-transform duration-300"
                        :class="{ 'translate-x-8': isYearly, 'translate-x-0': !isYearly, 'bg-white': isYearly }"></span>
                </span>

            </label>
            <span :class="{ 'opacity-50': !isYearly }">
                Yearly
            </span>
        </div>

        <div class="flex items-center justify-between gap-6">
            <div class=" flex flex-col text-center justify-center items-center px-10 my-6 pb-10 pt-14 w-96 bg-back2">
                <h1 class="font-bold text-2xl pb-5">
                    Basic
                </h1>
                <h2 class="opacity-60 text-base pb-10">
                    Includes basic usage of our platform. Recommended for new and aspiring photographers.

                </h2>
                <div class="flex flex-col group w-full">
                    <h1>
                        <p class="text-4xl font-bold tracking-widest group-hover:hidden" id="price-month">$19.00</p>
                        <span class="font-normal text-base group-hover:hidden">per month</span>

                        <p id="survol" class="hidden text-4xl font-bold tracking-widest group-hover:block">$190.00</p>
                        <span class="hidden font-normal text-base group-hover:block">per year</span>
                    </h1>

                    <button class="text-sm font-bold text-white bg-black py-3 hover:text-black hover:bg-hover mt-10">
                        PICK PLAN
                    </button>
                </div>


            </div>

            <div
                class="relative flex flex-col text-center justify-center items-center px-10 my-6 pb-10 pt-24 w-96 bg-black text-white">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-linear via-linear1 to-linear2">
                </div>
                <h1 class="font-bold text-2xl pb-5">
                    Pro
                </h1>
                <h2 class="opacity-60 text-base pb-10">
                    More advanced features available. Recommended for photography veterans and professionals.
                </h2>
                <div class="flex flex-col group w-full pb-10">
                    <h1>
                        <p class="text-4xl font-bold tracking-widest group-hover:hidden" id="price-month">$39.00</p>
                        <span class="font-normal text-base group-hover:hidden">per month</span>

                        <p id="survol" class="hidden text-4xl font-bold tracking-widest group-hover:block"> $390.00 </p>
                        <span class="hidden font-normal text-base group-hover:block">per year</span>
                    </h1>

                    <button class="text-sm font-bold text-black bg-white py-3 hover:text-black hover:bg-hover mt-10">
                        PICK PLAN
                    </button>
                </div>
            </div>


            <div class=" flex flex-col text-center justify-center items-center px-10 my-6 pb-10 pt-14 w-96 bg-back2">
                <h1 class="font-bold text-2xl pb-5">
                    Business
                </h1>
                <h2 class="opacity-60 text-base pb-10">
                    Additional features available such as more detailed metrics. Recommended for business owners.

                </h2>
                <div class="flex flex-col group w-full">
                    <h1>
                        <p class="text-4xl font-bold tracking-widest group-hover:hidden" id="price-month">$99.00</p>
                        <span class="font-normal text-base group-hover:hidden">per month</span>

                        <p id="survol" class="hidden text-4xl font-bold tracking-widest group-hover:block">$990.00 </p>
                        <span class="hidden font-normal text-base group-hover:block">per year</span>
                    </h1>

                    <button class="text-sm font-bold text-white bg-black py-3 hover:text-black hover:bg-hover mt-10">
                        PICK PLAN
                    </button>
                </div>



            </div>
        </div>

        <div class="flex flex-col items-center justify-center w-full mt-20">
            <div class="font-bold text-4xl tracking-widest">
                COMPARE
            </div>
            <div class="flex mt-14 text-sm font-bold">
                <div class="w-full">
                    <table class="w-full text-left">
                        <thead class="bg-white border-b-2 border-black">
                            <tr>
                                <th class="p-6">THE FEATURES</th>
                                <th class="p-6">BASIC</th>
                                <th class="p-6">PRO</th>
                                <th class="p-6">BUSINESS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="p-6">UNLIMITED STORY POSTING</td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-6">UNLIMITED PHOTO UPLOAD</td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-6">EMBEDDING CUSTOM CONTENT</td>
                                <td class="p-6 text-center"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-6">CUSTOMIZE METADATA</td>
                                <td class="p-6 text-center"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-6">ADVANCED METRICS</td>
                                <td class="p-6 text-center"></td>
                                <td class="p-6 text-center"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-6">PHOTO DOWNLOADS</td>
                                <td class="p-6 text-center"></td>
                                <td class="p-6 text-center"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-6">SEARCH ENGINE INDEXING</td>
                                <td class="p-6 text-center"></td>
                                <td class="p-6 text-center"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-6">CUSTOM ANALYTICS</td>
                                <td class="p-6 text-center"></td>
                                <td class="p-6 text-center"></td>
                                <td class="p-6 text-center"><img src="/public/Path 5.svg" alt="coche"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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

<script>
export default {
    data() {
        return {
            isYearly: false
        };
    }
};
</script>
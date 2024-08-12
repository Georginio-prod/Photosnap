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

    <div>
        <div class="flex items-center justify-center top-0 mt-28 px-40">
            <div class="flex items-center gap-8">
                <span :class="{ 'opacity-50': isYearly }">
                    Monthly
                </span>
                <label class="relative flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer" v-model="isYearly" />
                    <span
                        class="w-16 h-8 rounded-full flex flex-shrink-0 items-center p-1 transition-colors duration-300"
                        :class="{ 'bg-black': isYearly, 'bg-back': !isYearly,  }">

                        <span class="bg-black w-6 h-6 rounded-full block transform transition-transform duration-300"
                            :class="{ 'translate-x-8': isYearly, 'translate-x-0': !isYearly, 'bg-white': isYearly }"></span>
                    </span>

                </label>
                <span :class="{ 'opacity-50': !isYearly }">
                    Yearly
                </span>
            </div>
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
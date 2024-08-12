<template>
    <div class="items-center justify-center w-full h-auto">
        <div class="grid grid-cols-12">
            <div class="col-span-5 items-center justify-center bg-black text-white py-40 px-28">
                <div class="w-[387px]">
                    <p class="font-bold tracking-widest text-4xl pb-5">PRICING</p>

                    <h2 class="text-sm opacity-60">
                        Create a your stories, Photosnap is a platform for photographers and
                        visual storytellers. It’s the simple way to create and share your
                        photos.
                    </h2>
                </div>
            </div>
            <div class="w-full col-span-7">
                <img src="/public/pricing/desktop/hero.jpg" alt="hero" />
            </div>
        </div>

        <div>
            <div class="flex items-center justify-center top-0 mt-28 px-40">
                <div class="flex items-center gap-8">
                    <span class="transition-opacity duration-300" id="monthly-text">
                        Monthly
                    </span>
                    <form action="/">
                        <label class="relative flex items-center cursor-pointer">
                            <input type="checkbox" class="sr-only peer" id="toggle-checkbox" />
                            <span
                                class="bg-gray-500 w-16 h-8 rounded-full flex flex-shrink-0 items-center
                                 after:bg-white after:w-6 after:h-6 after:rounded-full p-1 peer-checked:bg-green-500 
                                 peer-checked:after:translate-x-">

                            </span>
                        </label>
                    </form>
                    <span class="transition-opacity duration-300 opacity-50" id="yearly-text">
                        Yearly
                    </span>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
const checkbox = document.getElementById('toggle-checkbox');
const monthlyText = document.getElementById('monthly-text');
const yearlyText = document.getElementById('yearly-text');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        monthlyText.classList.add('opacity-50');
        yearlyText.classList.remove('opacity-50');
    } else {
        monthlyText.classList.remove('opacity-50');
        yearlyText.classList.add('opacity-50');
    }
});
</script>
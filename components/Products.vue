<template>
    <section class=" py-[120px] relative" id="Products">
        <div class="absolute inset-0 bg-[#30373F] bg-opacity-80 z-0"></div>

        <div class="container relative z-10 mx-auto px-6 lg:px-8 ">
            <div class="flex justify-between items-center mb-12">
                <div>
                    <span class="text-[#DBA65A] text-md sm:text-lg uppercase flex items-center"><span class="head_line m-1 " ></span>Choose your stone</span>
                    <h2 class="sm:text-4xl text-2xl font-bold text-white ">Showroom with Selection</h2>
                </div>
                <nuxt-link to="/products"
                    class=" flex text-sm sm:text-lg px-6 py-2 text-white bg-[#DBA65A] hover:bg-white hover:text-[#DBA65A] border border-[#DBA65A] rounded-lg transition-all duration-300">
                    View More <svg class="right_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z" fill="currentColor"></path></svg>
                </nuxt-link>
            </div>

            <swiper  :slides-per-view="2    " :space-between="30" :breakpoints="breakpoints" loop autoplay
                class="swiper-container ">
                <swiper-slide v-for="(stone, index) in stones" :key="index">
                    <div class="text-center ">
                        <div class="mb-4">
                            <img :src="stone.image" :alt="stone.title" class="w-full h-auto rounded-lg " />
                        </div>
                        <nuxt-link :to="{ name: 'products-id', params: { id: 1 } }" class="transition duration-300 hover:text-[#DBA65A] text-lg font-bold text-white">{{ stone.title }}</nuxt-link>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";

const stones = [
    { title: "Marble", image: "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/1-1.png" },
    { title: "Limestone", image: "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/2-1.png" },
    { title: "Onyx", image: "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/3-1.png" },
    { title: "Quartz", image: "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/4-1.png" },
    { title: "Granite", image: "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/5.png" },
    { title: "Travertine", image: "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/6.png" },
    { title: "Travertine", image: "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/6.png" },
    { title: "Travertine", image: "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/6.png" },
];

const breakpoints = {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 7 },
};
</script>

<style scoped>
.swiper-container {
    width: 100%;
}

section {
    background: url('assets/images/marble4.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

}
</style>
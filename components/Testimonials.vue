<template>
    <section class="py-16 bg-gray-100" id="Testimonials">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex justify-between items-center mb-12">
                <div>
                    <span class="text-[#DBA65A] text-lg uppercase flex items-center"><span class="head_line m-1 " ></span>Our Testimonial</span>
                    <h2 class="text-3xl sm:text-4xl font-500 text-gray-800">What Our Clients Say</h2>
                </div>
             
            </div>

            <n-carousel :show-arrow="true" :autoplay="true" :interval="3000" draggable
                class="testimonial-carousel relative">
                <n-carousel-item v-for="(testimonial, index) in testimonials" :key="index"
                    class="rounded-lg  p-6 text-center">
                    <p class="text-gray-600 text-lg italic">
                        "{{ testimonial.description }}"
                    </p>
                    <div class="mt-4">
                        <h5 class="text-gray-800 font-bold text-xl">{{ testimonial.name }}</h5>
                        <span class=" text-[#DBA65A]">{{ testimonial.position }}</span>
                    </div>
                </n-carousel-item>
                <template #arrow="{ prev, next }">
                    <div class="custom-arrow">
                        <button type="button" class="custom-arrow--left" @click="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" fill="currentColor"></path></svg>
                        </button>
                        <button type="button" class="custom-arrow--right" @click="next">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" fill="currentColor"></path></svg>
                        </button>
                    </div>
                </template>
                <template #dots="{ total, currentIndex, to }">
      <ul class="custom-dots">
        <li
          v-for="index of total"
          :key="index"
          :class="{ ['is-active']: currentIndex === index - 1 }"
          @click="to(index - 1)"
        />
      </ul>
    </template>
            </n-carousel>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { NCarousel, NCarouselItem } from "naive-ui";
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'

const testimonials = [
    {
        description:
            "Marblex should look for ones that are specific, detailed, and highlight the unique benefits of working with the company. This can include aspects such as the quality of the marble products and excellent customer service.",
        name: "Iliena Brown",
        position: "Marketing Officer",
    },
    {
        description:
            "The quality of Marblex's services and their attention to detail have been outstanding. We appreciate the effort they put into their projects.",
        name: "Alex John Martin",
        position: "Manager",
    },
    {
        description:
            "The Marblex team provided exceptional service and high-quality marble. Their professionalism exceeded our expectations.",
        name: "Robert Anderson",
        position: "Production Manager",
    },
];
</script>

<style scoped>
.testimonial-carousel {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
}


.custom-arrow {
    display: flex;
    position: absolute;
    bottom: 25px;
    right: 10px;
}
#Testimonials {
    background: #FFFFFF;
}
.custom-arrow button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 28px;
    margin-right: 12px;
    color: #DBA65A;
    background-color: rgba(255, 255, 255, 0.1);
    border-width: 0;
    border-radius: 8px;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}
.custom-arrow--left {
    color: #DBA65A !important;
}

.custom-arrow button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
    transform: scale(0.95);
    transform-origin: center;
}
.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(0,0,0,.2);
  transition:
    width 0.3s,
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #DBA65A;
}
</style>
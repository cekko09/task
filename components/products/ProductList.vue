<template>
    <section id="list" class="site-list">
        <div class="container mx-auto">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold">Our Products</h1>
                <p class="text-gray-600">Explore our wide range of high-quality products.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="product in products" :key="product.id"
                    class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="relative">
                        <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
                        <span v-if="product.onSale"
                            class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                            Sale!
                        </span>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
                        <p class="text-gray-600 mt-2">{{ product.description }}</p>
                        <div class="flex items-center justify-between mt-4">
                            <span class="text-gray-800 font-bold">
                                {{ product.price | currency }}
                            </span>
                            <nuxt-link :to="{ name: 'products-id', params: { id: 1 } }" 
                                class="px-4 flex py-2 bg-[#DBA65A] text-white text-sm font-semibold rounded border border-[#DBA65A] hover:bg-white hover:text-[#DBA65A] transition-colors duration-300">
                                İnspect <svg class="right_arrow" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
                                    <path d="M18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"
                                        fill="currentColor"></path>
                                </svg>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
    {
        id: 1,
        name: 'Travertine Bianco',
        description: 'High-quality travertine marble.',
        price: 45.0,
        onSale: true,
        image: 'https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/2-4.jpg',
    },
    {
        id: 2,
        name: 'Naika Polished',
        description: 'Elegant polished marble.',
        price: 42.0,
        onSale: false,
        image: 'https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/8-2.jpg',
    },
    {
        id: 3,
        name: 'Iceberg White Marble',
        description: 'Pure white iceberg marble.',
        price: 50.0,
        onSale: true,
        image: 'https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/5-3.jpg',
    },
    {
        id: 4,
        name: 'Boticcino',
        description: 'Classic beige marble.',
        price: 30.0,
        onSale: false,
        image: 'https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/7-2.jpg',
    },
]);


</script>

<style scoped>
.site-list {
    padding: 2rem 1rem;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
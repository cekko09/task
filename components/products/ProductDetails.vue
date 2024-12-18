<template>
    <div>
        <section id="details" class="site-details container mx-auto">


            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <div class="relative">
                        <img :src="product.image" :alt="product.name" class="rounded-lg" />
                        <span v-if="product.onSale"
                            class="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded">
                            Sale!
                        </span>
                    </div>
                </div>

                <div>
                    <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>

                    <p class="mb-6 text-gray-600">{{ product.description }}</p>

                    <div class="product-tabs mt-10">
                        <!-- Tab Başlıkları -->
                        <ul class="flex border-b border-gray-300">
                            <li v-for="(tab, index) in tabs" :key="index" :class="[
                                'px-4 py-2 cursor-pointer transition-all',
                                activeTab === index
                                    ? 'border-b-2 border-yellow-500 text-yellow-500 font-semibold'
                                    : 'text-gray-500 hover:text-yellow-500'
                            ]" @click="activeTab = index">
                                {{ tab.title }}
                            </li>
                        </ul>

                        <!-- Tab İçerikleri -->
                        <div v-for="(tab, index) in tabs" :key="tab.id" v-show="activeTab === index" class="py-6">
                            <h2 class="text-xl font-bold mb-4">{{ tab.title }}</h2>
                            <div v-html="tab.content" class="text-gray-700"></div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center mb-6">
    <n-button
      @click="decreaseQuantity"
      round
      type="default"
      size="large"
      icon="minus"
      class="rounded-l-lg"
    >
      <template #icon>
        <n-icon><RemoveOutline/></n-icon>
      </template>
    </n-button>

    <input
  v-model="quantity"
  type="number"
  class="w-24 text-center border border-gray-300 rounded-lg py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>

    <n-button
      @click="increaseQuantity"
      round
      type="default"
      size="large"
      class="rounded-r-lg"
    >
      <template #icon>
        <n-icon><AddOutline /></n-icon>
      </template>
    </n-button>
  </div>

  <n-button
    @click="addToCart"
    size="large"
    type="primary"
    class="w-full"
  >
    Add to Cart
  </n-button>
                </div>

            </div>



        </section>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NButton, NInputNumber, NIcon } from "naive-ui";
import { RemoveOutline, AddOutline } from "@vicons/ionicons5";
const tabs = ref([
    {
        id: 'tab-description',
        title: 'Description',
        content: `
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    `,
    },
    {
        id: 'tab-additional_information',
        title: 'Additional information',
        content: `
      <table class="woocommerce-product-attributes">
        <tbody>
          <tr>
            <th>Color</th>
            <td>Green</td>
          </tr>
        </tbody>
      </table>
    `,
    },

]);

const activeTab = ref(0);
const router = useRouter();

const product = ref({
    id: 1324,
    name: 'Bianco Perlino white limestone',
    description:
        'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
    image: 'https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/8-2.jpg',
    onSale: true,
});
const quantity = ref(1);
const relatedProducts = ref([
    {
        id: 1,
        name: 'Calacatta',
        price: 20.0,
        image: 'https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/7-2.jpg',
    },
    {
        id: 2,
        name: 'Macael White',
        price: 15.0,
        image: 'https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/9-1.jpg',
    },
    {
        id: 3,
        name: 'Sequoia Brown',
        price: 18.0,
        image: 'https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/6-2.jpg',
    },
]);

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const increaseQuantity = () => {
  quantity.value++;
};

</script>


<style scoped>
.site-details {
    padding: 2rem;
}

img {
    transition: transform 0.2s;
}

img:hover {
    transform: scale(1.05);
}

.product-tabs {
    margin-top: 20px;
}

.tabs {
    display: flex;
    list-style: none;
    border-bottom: 2px solid #ddd;
    margin-bottom: 20px;
    padding: 0;
}

.tab-item {
    margin-right: 10px;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #ddd;
    border-bottom: none;
    background: #f9f9f9;
}

.tab-item.active {
    background: #fff;
    font-weight: bold;
}

.tab-content {
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
}
</style>
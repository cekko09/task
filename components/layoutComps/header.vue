<template>
    <div>
        <div
            :class="`flex items-center justify-between px-8 py-4 fixed top-0 z-20 w-full  transition-colors duration-300 ${
              isScrolled ? 'bg-[#30373F]' : 'bg-transparent'
            }`"
          >
            <div class="text-2xl font-bold text-gray-800 uppercase tracking-wide">
              <img src="assets/images/logo-2.png" width="200" alt="">
            </div>
            <nav class="hidden md:flex space-x-6">
              <nuxt-link to="/"
                class="text-white text-lg hover:text-[#DBA65A] transition-colors duration-300">Home</nuxt-link>
              <a href="#about"
                class="text-white text-lg hover:text-[#DBA65A] transition-colors duration-300">About</a>
              <nuxt-link to="/products"
                class="text-white text-lg hover:text-[#DBA65A] transition-colors duration-300">Products</nuxt-link>
              <a href="#services"
                class="text-white text-lg hover:text-[#DBA65A] transition-colors duration-300">Services</a>
              <nuxt-link to="/contact"
                class="text-white text-lg hover:text-[#DBA65A] transition-colors duration-300">Contact</nuxt-link>
            </nav>
            <button
              class="hidden md:block px-6 py-2 text-white bg-[#DBA65A] hover:bg-white hover:text-[#DBA65A] rounded-lg transition-all duration-300">
              Get a Quote
            </button>
            <div class="block md:hidden cursor-pointer" @click="toggleMobileMenu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-8 h-8 text-gray-800">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
              </svg>
            </div>
          </div>
          <div
            :class="`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-30 transform transition-transform duration-300 ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}`">
            <div class="flex items-center justify-between px-6 py-4">
              <span class="text-lg font-bold uppercase">Menu</span>
              <button @click="toggleMobileMenu" class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav class="px-6 space-y-4">
              <nuxt-link to="/" class="block hover:text-[#DBA65A] transition-colors duration-300">Home</nuxt-link>
              <a href="#about" class="block hover:text-[#DBA65A] transition-colors duration-300">About</a>
              <nuxt-link to="/products"
                class="block hover:text-[#DBA65A] transition-colors duration-300">Products</nuxt-link>
              <a href="#services"
                class="block hover:text-[#DBA65A] transition-colors duration-300">Services</a>
              <nuxt-link to="/contact" class="block hover:text-[#DBA65A] transition-colors duration-300">Contact</nuxt-link>
            </nav>
            <button
              class="w-full mt-6 px-6 py-2 text-white bg-[#DBA65A] hover:bg-white hover:text-white rounded-lg transition-all duration-300">
              Get a Quote
            </button>
          </div>
          <div v-if="showMobileMenu" @click="toggleMobileMenu"
            class="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity"></div>
    </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

 const showMobileMenu = ref(false)
  const isScrolled = ref(false)
  
  const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
  }
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>
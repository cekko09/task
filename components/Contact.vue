<template>
    <section class="bg-[#30373F]">
      <div class="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="space-y-6 lg:pr-12">
          <div class="text-start lg:text-left">
            <span class="text-[#DBA65A] text-lg uppercase flex justify-start lg:justify-start items-center">
              <span class="head_line m-1"></span>Appointment
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-6xl text-white font-600">Get a Free Quote</h2>
          </div>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" v-model="formData.name" class="form-input" required />
              <input type="email" placeholder="Email" v-model="formData.email" class="form-input" required />
              <input type="text" placeholder="Phone Number" v-model="formData.phone" class="form-input" required />
              <input type="text" placeholder="Project Scope" v-model="formData.projectScope" class="form-input" required />
            </div>
            <textarea placeholder="Write Your Message" v-model="formData.message" class="form-textarea" rows="5"
              required></textarea>
            <button
              type="submit"
              class="w-full px-6 py-2 text-white bg-[#DBA65A] hover:bg-white hover:text-[#DBA65A] border border-[#DBA65A] rounded-lg transition-all duration-300">
              Send Now
            </button>
          </form>
        </div>
  
        <div class="flex justify-center lg:justify-end">
          <img src="https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/from-img.jpg"
            alt="Appointment Image"
            class="max-w-full  shadow-lg" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const formData = ref({
    name: "",
    email: "",
    phone: "",
    projectScope: "",
    message: "",
  });
  

  </script>
  
  <style scoped>
  .form-input {
    @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA65A] focus:outline-none;
  }
  
  .form-textarea {
    @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA65A] focus:outline-none;
  }
  </style>
  
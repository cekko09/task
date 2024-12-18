<template>
    <section class="bg-gray-100 py-16 px-5">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/11-e1668051633286.jpg"
            alt="Contact Us Image"
            class="w-full rounded-lg shadow-md"
          />
        </div>
  
        <div class="space-y-6">
          <div>
            <h2 class="text-4xl font-bold text-gray-800">How Can We Help You?</h2>
            <p class="mt-4 text-gray-600">
              Please feel free to get in touch using the form below. We’d love to hear from you.
            </p>
          </div>
  
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                v-model="formData.name"
                type="text"
                placeholder="Name"
                class="form-input"
                required
              />
              <input
                v-model="formData.email"
                type="email"
                placeholder="Email"
                class="form-input"
                required
              />
              <input
                v-model="formData.phone"
                type="text"
                placeholder="Phone Number"
                class="form-input"
                required
              />
              <input
                v-model="formData.projectScope"
                type="text"
                placeholder="Project Scope"
                class="form-input"
                required
              />
            </div>
  
            <textarea
              v-model="formData.message"
              placeholder="Write Your Message"
              class="form-textarea"
              rows="5"
              required
            ></textarea>
  
            <button
              type="submit"
              class="w-full px-6 py-3 text-white bg-[#DBA65A] hover:bg-white hover:text-[#DBA65A] border border-[#DBA65A] rounded-lg transition-all duration-300"
            >
              Send Now
            </button>
          </form>
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
    @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA65A] focus:outline-none;
  }
  
  .form-textarea {
    @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA65A] focus:outline-none;
  }
  
 
  </style>
  
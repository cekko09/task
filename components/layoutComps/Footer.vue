<template>
    <footer id="Footer" class=" text-gray-200 py-12">
    <div class="relative z-10">
      <div class=" py-8 ">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 class="text-xl font-bold">Get a Free Quote</h2>
            <p class="text-sm">Subscribe to receive updates and exclusive offers.</p>
          </div>
          <form @submit.prevent="handleSubscribe" class="mt-4 md:mt-0 flex items-center space-x-4">
            <input
              type="email"
              v-model="email"
              placeholder="Your email address"
              class="w-full md:w-auto px-4 py-2  text-white rounded-lg focus:ring-2 focus:ring-[#DBA65A] outline-none"
              required
            />
            <button
              type="submit"
              class="px-6 py-2 bg-[#DBA65A] text-white rounded-lg hover:bg-white hover:text-[#DBA65A] transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
  
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 class="text-lg font-bold mb-4">About Us</h4>
          <p class="text-sm">There are many variations of passages of Lorem the majority suffer.</p>
          <ul class="mt-4 space-y-2">
            <li>
              <a href="#" class="flex items-center space-x-2 hover:text-[#DBA65A] transition">
                <i class="fas fa-phone"></i>
                <span>+1800-001-658</span>
              </a>
            </li>
          </ul>
        </div>
  
        <div>
          <h4 class="text-lg font-bold mb-4">Our Navigate</h4>
          <ul class="space-y-2">
            <li>
              <a href="/" class="hover:text-[#DBA65A] transition">Marble</a>
            </li>
            <li>
              <a href="/" class="hover:text-[#DBA65A] transition">About Us</a>
            </li>
            <li>
              <a href="/" class="hover:text-[#DBA65A] transition">Service</a>
            </li>
          </ul>
        </div>
  
        <div>
          <h4 class="text-lg font-bold mb-4">Our Product</h4>
          <ul class="space-y-2">
            <li>
              <a href="/" class="hover:text-[#DBA65A] transition">Travertine Bianco</a>
            </li>
            <li>
              <a href="/" class="hover:text-[#DBA65A] transition">Calacatta</a>
            </li>
            <li>
              <a href="/" class="hover:text-[#DBA65A] transition">Macael White</a>
            </li>
          </ul>
        </div>
  
        <div>
          <h4 class="text-lg font-bold mb-4">Our Showroom</h4>
          <ul class="space-y-2">
            <li class="flex items-start space-x-2">
              <i class="fas fa-map-marker-alt"></i>
              <span>Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA</span>
            </li>
            <li>
              <a href="#" class="flex items-center space-x-2 hover:text-[#DBA65A] transition">
                <i class="fas fa-phone"></i>
                <span>+1800-001-658</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center space-x-2 hover:text-[#DBA65A] transition">
                <i class="fas fa-envelope"></i>
                <span>info@peacefulthemes.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <div class=" py-4">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center text-sm text-gray-400">
          <span>© Cenk Yalçın</span>
        </div>
      </div>
    </div>
    </footer>
  </template>
  
 
  <style scoped>
    #Footer {
    background: url('assets/images/marble4.png');
    
    background-position: center;
    background-size: cover;
    position: relative;

}
#Footer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(48, 55, 63,.7);
    z-index: 0;
}

</style>
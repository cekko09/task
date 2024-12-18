<template>
    <div>
        <div class=" flex justify-center items-center relative bg-white  hero_section  h-[75vh] md:h-screen bg-cover bg-center">
            <div class="max-w-7xl mx-auto py-16 px-6 lg:px-8 lg:py-24">
                <div class="text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-8xl">
                        Welcome to MarbleX
                    </h1>
                    <p class="mt-6 text-xl leading-8  ">
                        Experience premium marble and granite solutions for your dream
                        projects.
                    </p>
                    <div class="mt-8 flex justify-center gap-x-4">
                        <a href="#"
                            class="px-6 py-3 bg-[#DBA65A] text-white rounded-md shadow-lg hover:bg-white hover:text-[#DBA65A] transition-all duration-300">Explore
                            Now</a>
                        <a href="#"
                            class="px-6 py-3  bg-white  text-gray-700 rounded-md hover:bg-[#DBA65A] hover:text-white transition-all duration-300">Learn
                            More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style setup>
.hero_section {
    background: url('assets/images/Banner-1.jpg');
}
p {
    color: #DBA65A;
}
</style>
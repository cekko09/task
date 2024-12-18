<template>
    <div>
    <div class="bg-[#30373F] py-40" id="breadCrumb">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div class="flex flex-col justify-center  items-center ">
                <div class="text-center lg:text-left">
                    <h1 class="text-4xl md:text-5xl font-bold text-white">{{headTitle}}</h1>
                </div>
                <div aria-label="breadcrumb" class="mt-4">
                    <ol class="flex flex-wrap justify-center lg:justify-start text-sm text-gray-400 space-x-2">
                        <li class="breadcrumb-item">
                            <a href="/" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-home mr-2"></i> Home
                            </a>
                        </li>
                        <li class="breadcrumb-item text-white">
                            <span>›</span>
                            <span class="text-[#DBA65A]">{{navigate}}</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
defineProps({
    headTitle: {
        type: String
    },
    navigate: {
        type: String
    }

})

</script>



<style scoped>
.breadcrumb-item span {
    @apply mx-1;
}

#breadCrumb {
    background: url('assets/images/marble5.jpg');
    position: relative;
}

#breadCrumb::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(48, 55, 63, .7);
    z-index: 0;
}
</style>
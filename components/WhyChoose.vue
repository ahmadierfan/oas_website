<template>
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <!-- Video Player -->
                <div class="lg:w-1/2" data-aos="fade-right">
                    <div class="rounded-2xl shadow-lg overflow-hidden">
                        <video ref="videoPlayer" class="w-full h-auto" poster="/videos/whywe.jpg" muted loop playsinline
                            webkit-playsinline>
                            <source src="/videos/whywe.mp4" type="video/mp4" />
                        </video>

                    </div>
                </div>

                <!-- Content -->
                <div class="lg:w-1/2" data-aos="fade-left">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choose Aviation Supplies
                        Management ?</h2>

                    <div class="space-y-6">
                        <div v-for="(reason, index) in reasons" :key="index" class="flex items-start space-x-4">
                            <div
                                class="w-8 h-8 bg-indigo-100  rounded-full bg-brand-second flex items-center justify-center flex-shrink-0 mt-1">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ reason.title }}</h3>
                                <p class="text-gray-600">{{ reason.description }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Commitment Section -->
                    <div class="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                        <h4 class="text-lg font-semibold text-brand-second mb-3">Our Commitment</h4>
                        <p class="text-gray-600 mb-4">
                            With a focus on excellence, innovation, and operational integrity, we support our clients
                            through every phase of the aircraft lifecycle.
                        </p>
                        <div class="flex items-center text-sm text-gray-500">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Full regulatory compliance and quality assurance guaranteed
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const videoPlayer = ref(null)
const isPlaying = ref(false)

const reasons = [
    {
        title: 'Expertise in Aviation Technical Management',
        description: 'Decades of experience across global aviation markets and MRO operations with deep technical and strategic insight.'
    },
    {
        title: 'Customised Solutions',
        description: 'Tailored solutions that align with your operational goals, facility size, and target markets.'
    },
    {
        title: 'Commitment to Compliance & Quality',
        description: 'Ensuring full regulatory compliance and maintaining the highest standards of airworthiness for all operations.'
    },
    {
        title: 'Global Reach with Local Focus',
        description: 'Worldwide network with responsive support and local expertise, ensuring timely delivery and cost-effective solutions.'
    },
    {
        title: 'Dedication to Innovation',
        description: 'Continuous improvement and adoption of latest technologies and practices to power efficiency and reliability.'
    }
]

// Intersection Observer برای تشخیص وقتی که ویدیو در viewport است
let observer

onMounted(() => {
    if (videoPlayer.value) {
        // ایجاد Intersection Observer
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // وقتی ویدیو در viewport است، پخش شود
                    videoPlayer.value.play().catch(error => {
                        console.log('Autoplay failed:', error)
                    })
                    isPlaying.value = true
                } else {
                    // وقتی ویدیو خارج از viewport است، متوقف شود
                    videoPlayer.value.pause()
                    isPlaying.value = false
                }
            })
        }, {
            threshold: 0.5 // وقتی 50% از ویدیو در viewport باشد
        })

        // مشاهده ویدیو
        observer.observe(videoPlayer.value)
    }
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<style scoped>
.play-button-animation {
    animation: pulse 2s infinite;
}

.play-icon {
    transition: transform 0.3s ease;
}

.play-button-animation:hover .play-icon {
    transform: scale(1.1);
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.05);
        opacity: 0.8;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
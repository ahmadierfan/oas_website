<template>
    <section class="min-h-screen bg-brand-primary py-20 px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20" data-aos="fade-up">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                ORION stands at the forefront of Aviation Supplies Management, delivering expert solutions that power
                the efficiency and reliability of the aviation industry. With a focus on excellence, innovation,
                and operational integrity, we support our clients through every phase of the aircraft lifecycle.
            </p>
        </div>

        <div class="max-w-6xl mx-auto space-y-12">

            <!-- سطر اول - دو سرویس -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="service-card-large group" data-aos="fade-right" data-aos-duration="1500">
                    <div class="relative overflow-hidden rounded-xl mb-6">
                        <img src="/images/home/mro-supplies.jpg" alt="Aircraft MRO Supplies and Parts"
                            class="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <h3 class="absolute bottom-4 left-6 text-2xl font-bold text-white">MRO Supplies</h3>
                    </div>
                    <p class="card-description-large">
                        Access a comprehensive portfolio of high-quality MRO supplies essential for maintaining and
                        repairing aircraft. Our global sourcing network ensures timely delivery and cost-effective
                        solutions tailored to your unique operational needs.
                    </p>
                    <NuxtLink to="/services/mro-supplies"
                        class="md:w-[70%] rounded-xl px-4 bg-brand-second flex text-white text-lg">
                        Explore MRO Supplies
                        <svg class="w-5 h-5 ml-2 mt-1 transform group-hover:translate-x-1 transition-transform"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </NuxtLink>
                </div>

                <div class="service-card-large group" data-aos="fade-left" data-aos-duration="1500">
                    <div class="relative overflow-hidden rounded-xl mb-6">
                        <img src="/images/home/material-management.jpg" alt="Aviation Inventory Management"
                            class="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <h3 class="absolute bottom-4 left-6 text-2xl font-bold text-white">Material Management</h3>
                    </div>
                    <p class="card-description-large">
                        Maximise the value and availability of your aviation materials through streamlined inventory
                        control, procurement strategies, and end-to-end supply chain management. Reduce costs, eliminate
                        waste, and boost operational uptime.
                    </p>
                    <NuxtLink to="/services/material-management"
                        class="md:w-[70%] rounded-xl px-4 bg-brand-second flex text-white text-lg">
                        Learn About Material Management
                        <svg class="w-5 h-5 mt-1 ml-2 transform group-hover:translate-x-1 transition-transform"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>

            <!-- سطر دوم - دو سرویس -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="service-card-large group" data-aos="fade-right" data-aos-duration="1500"
                    data-aos-delay="200">
                    <div class="relative overflow-hidden rounded-xl mb-6">
                        <img src="/images/home/manpower-arrangement.jpg" alt="Aviation Technical Team"
                            class="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <h3 class="absolute bottom-4 left-6 text-2xl font-bold text-white">Manpower Arrangement</h3>
                    </div>
                    <p class="card-description-large">
                        ORION provides skilled aviation teams matched to each project's needs, ensuring expert support
                        for MRO and airlines. Our flexible staffing solutions help clients optimise operations and
                        maintain compliance across short-term and long-term deployment needs.
                    </p>
                    <NuxtLink to="/services/manpower-arrangement"
                        class="md:w-[70%] rounded-xl px-4 bg-brand-second flex text-white text-lg">
                        Explore Staffing Solutions
                        <svg class="w-5 h-5 mt-1 ml-2 transform group-hover:translate-x-1 transition-transform"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </NuxtLink>
                </div>

                <!-- Service Card Placeholder (optional future service) -->
                <div class="service-card-large group" data-aos="fade-left" data-aos-duration="1500"
                    data-aos-delay="200">
                    <div class="relative overflow-hidden rounded-xl mb-6">
                        <img src="/images/home/aviation-consulting.jpg" alt="Aviation Consulting and Strategy"
                            class="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <h3 class="absolute bottom-4 left-6 text-2xl font-bold text-white">Aviation Consulting</h3>
                    </div>
                    <p class="card-description-large">
                        Leverage our industry expertise for strategic consulting, process optimization, and operational
                        excellence. We provide tailored solutions to help aviation businesses achieve their goals with
                        efficiency and compliance.
                    </p>
                    <NuxtLink to="/contact" class="md:w-[70%] rounded-xl px-4 bg-brand-second flex text-white text-lg">
                        Contact for Consulting
                        <svg class="w-5 h-5 ml-2 mt-1 transform group-hover:translate-x-1 transition-transform"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Aviation Supplies Management Experts Section -->
        <div class="max-w-6xl mx-auto mt-20" data-aos="fade-up">
            <div class="process-card p-12 text-center">
                <h3 class="text-3xl font-bold text-white mb-6">Aviation Supplies Management Experts</h3>
                <p class="text-gray-300 text-lg leading-relaxed mb-8">
                    ORION's team of seasoned engineers and consultants supports aviation businesses with deep technical
                    and strategic insight across MRO supplies, material management, and manpower arrangement.
                    We help operators, MRO facilities, and airlines run their operations safely, efficiently, and in
                    full
                    regulatory compliance while maintaining the highest standards of quality and ensuring every
                    operation performs at its best, every day.
                </p>
                <div class="flex justify-center">
                    <NuxtLink to="/about" class="md:w-[70%] rounded-xl px-4 flex text-white text-lg">
                        Learn About Our Expertise
                        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
            <div class="process-card max-w-2xl mx-auto inline-block px-12 py-8">
                <h3 class="text-2xl font-bold text-white mb-4">Ready to Transform Your Aviation Operations?</h3>
                <p class="text-gray-300 mb-6">Whether you need reliable MRO supplies, efficient material management,
                    or skilled aviation manpower, ORION is your trusted partner for comprehensive aviation supplies
                    management solutions.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink to="/contact" class="bg-brand-second text-white cta-button-primary">
                        Contact Us Today
                    </NuxtLink>
                    <NuxtLink to="/partnership" class="cta-button-secondary">
                        Become a Partner
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    if (typeof window !== 'undefined') {
        import('aos').then((AOS) => {
            AOS.init({
                duration: 800,
                once: true,
                easing: 'ease-in-out'
            })
        })
    }
})
</script>

<style scoped>
.service-card-large {
    padding: 2.5rem;
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
    box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border-radius: 1.5rem;
}

.service-card-large:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow:
        0 35px 60px -12px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    transform: translateY(-8px);
}

.card-description-large {
    color: #d1d5db;
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 1.05rem;
}

.process-card {
    padding: 2rem;
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
    box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border-radius: 1rem;
}

.process-card:hover {
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow:
        0 35px 60px -12px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
}


.learn-more-link:hover {
    color: white;
    transform: translateX(4px);
}

.cta-button-primary {
    padding: 0.75rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.cta-button-primary:hover {
    background: white;
    color: #1f2937;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.cta-button-secondary {
    background: transparent;
    color: rgba(255, 255, 255, 0.8);
    padding: 0.75rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
}

.cta-button-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
}
</style>
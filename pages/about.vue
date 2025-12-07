<template>
    <div class="min-h-screen bg-slate-900 pt-20 relative overflow-hidden">
        <div class="relative z-10">
            <section
                class="py-24 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat bg-image-hero-about before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:backdrop-blur-sm">
                <div class="max-w-7xl mx-auto relative z-20">
                    <div class="text-center mb-16" data-aos="fade-down" data-aos-duration="1500">
                        <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            About Us
                        </h1>
                        <h2 class="text-4xl md:text-5xl font-bold text-sky-400 mb-4">
                            ORION Aviation Supplies Management
                        </h2>
                        <p
                            class="text-xl text-gray-200 max-w-4xl mx-auto font-light border-t border-b border-white/20 py-4 mt-8">
                            ORION Aviation Supplies is a well-established aviation supplies management service company,
                            built on the extensive experience of its owners and team members. Our team is comprised of
                            professionals with backgrounds in industry-leading companies, bringing diverse expertise
                            across
                            multiple aviation technical disciplines.
                        </p>
                    </div>
                </div>
            </section>

            <section class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/90 backdrop-blur-md">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                        <div class="lg:col-span-6 order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1500">
                            <div class="premium-glass-box p-10 rounded-3xl h-full flex flex-col justify-center">
                                <h2 class="text-4xl font-bold text-brand-second mb-6">Our Expertise</h2>
                                <p class="text-gray-300 mb-6 leading-relaxed text-lg">
                                    At ORION Aviation Supplies, we specialise in supporting Maintenance, Repair,
                                    and Overhaul (MRO) facilities with a focused range of services. We are experts
                                    in MRO Supplies, Material Management, and Manpower Arrangement—delivering
                                    solutions that enhance efficiency and reduce costs for our clients.
                                </p>
                                <p class="text-gray-300 leading-relaxed text-lg">
                                    We understand the complexities of aviation material management and are committed to
                                    delivering solutions that enhance efficiency and reduce costs for our clients.
                                </p>
                            </div>
                        </div>
                        <div class="lg:col-span-6 order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1500">
                            <div class="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img src="/images/about/1.jpg" alt="Aviation MRO Facility"
                                    class="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-105" />
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                        <div class="lg:col-span-6 order-1" data-aos="fade-right" data-aos-duration="1500">
                            <div class="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img src="/images/about/2.jpg" alt="Aviation Technical Team Meeting"
                                    class="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-105" />
                            </div>
                        </div>
                        <div class="lg:col-span-6 order-2" data-aos="fade-left" data-aos-duration="1500">
                            <div class="premium-glass-box p-10 rounded-3xl h-full flex flex-col justify-center">
                                <h2 class="text-4xl font-bold text-brand-second mb-6">Our Commitment</h2>
                                <p class="text-gray-300 mb-6 leading-relaxed text-lg">
                                    We pride ourselves on our integrity, reliability, and deep industry connections.
                                    Every solution we deliver is backed by our commitment to safety, compliance, and
                                    operational excellence.
                                </p>
                                <p class="text-gray-300 leading-relaxed text-lg">
                                    At ORION Aviation Supplies, our mission is to empower aviation businesses to
                                    achieve new heights through smart technical management and seamless support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat bg-image-expertise-bg">
                <div class="max-w-7xl mx-auto">
                    <div class="premium-glass-box p-12 rounded-3xl" data-aos="fade-up" data-aos-duration="1500">
                        <h2 class="text-4xl font-bold text-brand-second mb-6 border-b border-sky-400/50 pb-3">
                            Our Core Services
                        </h2>
                        <p class="text-gray-200 mb-6 leading-relaxed text-lg">
                            At ORION Aviation Supplies, we provide comprehensive aviation supplies management services
                            designed to support Maintenance, Repair, and Overhaul (MRO) facilities. Our focused
                            expertise
                            covers MRO Supplies, Material Management, and Manpower Arrangement. With a deep
                            understanding
                            of aviation supply chain management, we deliver tailored solutions that improve efficiency
                            and reduce costs for our clients.
                        </p>
                        <p class="text-gray-200 leading-relaxed text-lg">
                            Our team consists of professionals with backgrounds in industry-leading companies, bringing
                            diverse expertise across multiple aviation technical disciplines. We understand the unique
                            challenges of aviation supplies management and are committed to providing reliable,
                            efficient,
                            and compliant solutions for every client.
                        </p>
                    </div>
                </div>
            </section>

            <section class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/90 backdrop-blur-md">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-16" data-aos="fade-up">
                        <h2 class="text-4xl md:text-5xl font-bold text-brand-second mb-6">Our Core Solutions</h2>
                        <p class="text-xl text-sky-300 max-w-3xl mx-auto">
                            Focused solutions that enhance efficiency and reduce costs for MRO facilities
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="(solution, index) in solutions" :key="index" class="process-card group"
                            data-aos="fade-up" :data-aos-delay="index * 100">
                            <div class="absolute inset-0 z-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition duration-500"
                                :class="`bg-image-solution-${index + 1}`"></div>
                            <div class="relative z-10">
                                <h3 class="text-3xl pb-4 text-brand-second">{{ solution.title }}</h3>
                                <p class="card-description">{{ solution.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-20 px-4 sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto">
                    <div class="premium-glass-box p-12 rounded-3xl text-center shadow-2xl shadow-blue-800/50"
                        data-aos="zoom-in">
                        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">Contact Us Today</h2>
                        <p class="text-xl mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto">
                            Discover how ORION Aviation Supplies can optimize your aviation supply chain and MRO
                            operations.
                            Reach out to our team for tailored solutions and dependable support.
                        </p>
                        <a href="/contact"
                            class="inline-block px-10 py-4 text-xl font-semibold rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/50">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

// SEO Meta Tags for About Page
useSeoMeta({
    title: 'About ORION Aviation Supplies - Aviation Supplies Management Experts',
    description: 'Learn about ORION Aviation Supplies - a leading aviation supplies management company with expert team, comprehensive MRO solutions, and industry experience.',
    keywords: 'ORION Aviation Supplies about, aviation experts, MRO supplies specialists, material management team, aviation supplies consulting, MRO supplies experts',
    ogTitle: 'About ORION Aviation Supplies - Aviation Supplies Management Experts',
    ogDescription: 'Discover ORION Aviation Supplies industry-leading team and comprehensive aviation supplies management solutions including MRO supplies, material management, and manpower arrangement.',
    ogImage: '/images/about/orion-about-og.jpg',
    ogUrl: 'https://orion-aviation.com/about',
    twitterCard: 'summary_large_image',
    twitterTitle: 'About ORION Aviation Supplies - Aviation Experts',
    twitterDescription: 'Meet ORION Aviation Supplies expert team and discover our comprehensive aviation supplies management solutions.',
    twitterImage: '/images/about/orion-about-twitter.jpg'
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'canonical',
            href: 'https://orion-aviation.com/about'
        }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": "About ORION Aviation Supplies",
                "description": "ORION Aviation Supplies is a well-established aviation supplies management service company with extensive experience in MRO supplies, material management, and manpower arrangement.",
                "url": "https://orion-aviation.com/about",
                "mainEntity": {
                    "@type": "Organization",
                    "name": "ORION Aviation Supplies",
                    "description": "Your Trusted Partner in Aviation Supplies Management",
                    "employee": {
                        "@type": "Person",
                        "name": "ORION Aviation Supplies Team",
                        "description": "Industry-leading professionals with backgrounds in industry-leading companies and diverse expertise across multiple aviation technical disciplines."
                    },
                    "knowsAbout": [
                        "MRO Supplies",
                        "Material Management",
                        "Manpower Arrangement",
                        "Aviation Supplies Management",
                        "MRO Facility Support"
                    ]
                }
            })
        }
    ]
})

const solutions = [
    {
        title: 'MRO Supplies',
        description: 'Sourcing and supplying trusted parts, tools, and consumables tailored to the specific needs of each client.'
    },
    {
        title: 'Material Management',
        description: 'Implementing best practices for inventory control, sourcing strategies, and logistics to support uninterrupted operations.'
    },
    {
        title: 'Manpower Arrangement',
        description: 'ORION Aviation Supplies provides skilled aviation teams matched to each project\'s needs, ensuring expert support for MRO and airlines. Our flexible staffing solutions help clients optimize operations and maintain compliance.'
    }
]

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
/* Main Background (Optional - provides a subtle global texture/gradient) */
.bg-image-main-bg {
    background-image: url('/images/about/main-bg-texture.jpg');
    /* Replace with your subtle aviation-themed texture/background image */
    background-size: cover;
    background-attachment: fixed;
}

/* Hero Section Background */
.bg-image-hero-about {
    background-image: url('/images/about/3.jpg');
    /* Image for the 'About Us' Hero Section (e.g., a dynamic team, a large hangar) */
}

/* Second Expertise Section Background */
.bg-image-expertise-bg {
    background-image: url('/images/about/4.jpg');
    /* Image for the 'Our Core Services' block (e.g., aircraft in flight or being inspected) */
    background-attachment: fixed;
    /* Optional: creates a parallax-like effect */
}

/* Card Backgrounds (Subtle Image for each Solution) */
.bg-image-solution-1 {
    background-image: url('/images/about/6.jpg');
}

.bg-image-solution-2 {
    background-image: url('/images/about/6.jpg');
}

.bg-image-solution-3 {
    background-image: url('/images/about/6.jpg');
}

/* Card Styles */
.process-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
    box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.process-card:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow:
        0 35px 60px -12px rgba(0, 0, 0, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transform: translateY(-8px);
}

.card-title {
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
    position: relative;
}

.card-description {
    color: #cbd5e1;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 1rem;
}

.premium-glass-box {
    background: rgba(15, 23, 42, 0.5);
    backdrop-filter: blur(40px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1.5rem;
    box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.7),
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        inset 0 -1px 0 rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
}
</style>
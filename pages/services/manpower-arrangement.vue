<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20">
        <!-- Hero Section -->
        <section class="relative mt-28 h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center"
            style="background-image: url('/images/13.webp')">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16 p-4 rounded-2xl" data-aos="fade-down" data-aos-duration="1500">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-2" data-aos="fade-down"
                        data-aos-duration="1500">
                        Manpower Arrangement Services
                    </h1>
                    <h2 class="text-2xl md:text-3xl font-semibold text-sky-400 mb-4" data-aos="fade-down"
                        data-aos-duration="1500">
                        Specialised Aviation Technical Manpower Solutions for MROs and Airlines
                    </h2>
                    <div class="bg-gray-800/60 rounded-2xl">
                        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed p-4" data-aos="fade-down"
                            data-aos-duration="1500">
                            At ORION, we understand the critical need for highly skilled technical
                            personnel in the aviation sector. Our Manpower Arrangement service is
                            tailored to support Maintenance, Repair, and Overhaul (MRO)
                            organisations and airlines by providing qualified aviation technical
                            manpower exactly when and where you need it.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Staffing Solutions -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="1500">
                    <h2 class="text-3xl md:text-4xl font-bold text-brand-second mb-6">
                        Permanent and Occasional Staffing Solutions
                    </h2>
                    <p class="text-xl text-gray-300 max-w-4xl mx-auto">
                        Whether your requirements are for long-term placements or short-term assignments,
                        ORION offers flexible solutions to ensure your operations run smoothly. We supply
                        both permanent staff and experienced professionals for occasional projects, helping
                        you respond to fluctuating workloads or special projects effectively.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div class="process-card" data-aos="fade-right" data-aos-duration="1500">
                        <h3 class="card-title">Permanent Staffing Solutions</h3>
                        <p class="card-description">
                            Long-term placements of certified professionals for your ongoing operational needs.
                            We supply permanent staff to ensure your operations run smoothly with consistent quality.
                        </p>
                        <ul class="space-y-2 mt-4">
                            <li class="flex items-center space-x-3 text-gray-300">
                                <div class="w-2 h-2 bg-brand-second rounded-full"></div>
                                <span>Certified Aircraft Technicians</span>
                            </li>
                            <li class="flex items-center space-x-3 text-gray-300">
                                <div class="w-2 h-2 bg-brand-second rounded-full"></div>
                                <span>Licensed B1/B2 Engineers</span>
                            </li>
                            <li class="flex items-center space-x-3 text-gray-300">
                                <div class="w-2 h-2 bg-brand-second rounded-full"></div>
                                <span>Quality Inspectors</span>
                            </li>
                        </ul>
                    </div>

                    <div class="process-card" data-aos="fade-left" data-aos-duration="1500">
                        <h3 class="card-title">Occasional Staffing Solutions</h3>
                        <p class="card-description">
                            Short-term assignments and experienced professionals for occasional projects to help you
                            respond to fluctuating workloads or special projects effectively.
                        </p>
                        <ul class="space-y-2 mt-4">
                            <li class="flex items-center space-x-3 text-gray-300">
                                <div class="w-2 h-2 bg-brand-second rounded-full"></div>
                                <span>Project-based Engineers</span>
                            </li>
                            <li class="flex items-center space-x-3 text-gray-300">
                                <div class="w-2 h-2 bg-brand-second rounded-full"></div>
                                <span>Seasonal Technical Staff</span>
                            </li>
                            <li class="flex items-center space-x-3 text-gray-300">
                                <div class="w-2 h-2 bg-brand-second rounded-full"></div>
                                <span>Specialized Contractors</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Specialized Roles -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
                    <h2 class="text-4xl md:text-5xl font-bold text-brand-second mb-6">Specialised Roles We Provide</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="(role, index) in roles" :key="index" class="process-card text-center" data-aos="fade-up"
                        data-aos-duration="1500" :data-aos-delay="index * 100">
                        <h3 class="card-title text-lg">{{ role.title }}</h3>
                        <p class="card-description">{{ role.description }}</p>
                    </div>
                </div>

                <div class="mt-12 text-center" data-aos="fade-up" data-aos-duration="1500">
                    <p class="text-gray-300 text-lg">
                        And Other Skilled Technical Roles to meet your specific operational demands.
                    </p>
                </div>
            </div>
        </section>

        <!-- Why Choose ORION -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="premium-glass-box p-12 rounded-3xl" data-aos="zoom-in">
                    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Why Choose ORION?</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div v-for="(reason, index) in reasons" :key="index" class="flex items-start space-x-4">
                            <div
                                class="flex-shrink-0 w-8 h-8 bg-brand-second rounded-full flex items-center justify-center mt-1">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold mb-2">{{ reason.title }}</h4>
                                <p class="text-gray-300">{{ reason.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Get in Touch Section -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1500">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">Get in Touch</h2>
                <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                    Ensure the success of your maintenance and engineering operations with
                    ORION's dedicated Manpower Arrangement services. Contact us today to
                    discuss your specific requirements and let us connect you with the right
                    aviation technical professionals for your business.
                </p>
                <a href="/contact"
                    class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                    Contact Us Now
                </a>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

useSeoMeta({
    title: 'Manpower Arrangement Services | ORION Aviation - Specialised Aviation Technical Manpower Solutions',
    description: 'ORION provides specialised aviation technical manpower solutions for MROs and airlines. We supply certified aircraft technicians, B1/B2 engineers, and skilled professionals for permanent or occasional staffing needs.',
    keywords: 'aviation manpower, MRO staffing, aircraft technicians, B1 B2 engineers, aviation technical staff, manpower arrangement, aviation recruitment, MRO personnel, airline staffing',
    ogTitle: 'Manpower Arrangement Services - ORION Aviation Specialised Staffing Solutions',
    ogDescription: 'Specialised aviation technical manpower solutions for MROs and airlines. Certified professionals for permanent and occasional staffing requirements.',
    ogImage: '/images/orion-manpower-arrangement-og.jpg',
    ogUrl: 'https://orion-aviation.com/services/manpower-arrangement',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Manpower Arrangement Services - ORION Aviation',
    twitterDescription: 'Specialised aviation technical manpower solutions for MROs and airlines with certified professionals.',
    twitterImage: '/images/orion-manpower-arrangement-twitter.jpg'
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'canonical',
            href: 'https://orion-aviation.com/services/manpower-arrangement'
        }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Aviation Manpower Arrangement",
                "provider": {
                    "@type": "Organization",
                    "name": "ORION Aviation Supplies",
                    "description": "Specialised aviation technical manpower solutions for MROs and airlines"
                },
                "description": "Providing qualified aviation technical manpower for Maintenance, Repair, and Overhaul (MRO) organisations and airlines. Specialised roles including certified aircraft technicians and licensed engineers.",
                "areaServed": {
                    "@type": "Global",
                    "name": "Global"
                },
                "offers": {
                    "@type": "Offer",
                    "category": "Staffing Services",
                    "availability": "https://schema.org/InStock"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Manpower Services Portfolio",
                    "itemListElement": [
                        {
                            "@type": "Service",
                            "name": "Permanent Staffing Solutions",
                            "description": "Long-term placements of certified professionals for ongoing operational needs"
                        },
                        {
                            "@type": "Service",
                            "name": "Occasional Staffing Solutions",
                            "description": "Short-term assignments and experienced professionals for occasional projects"
                        }
                    ]
                }
            })
        }
    ]
})

const roles = [
    {
        title: 'Aircraft Technicians',
        description: 'Certified and experienced in all aspects of aircraft maintenance and repair.'
    },
    {
        title: 'B1/B2 Engineers',
        description: 'Licensed engineers for both mechanical and avionics work, ensuring compliance and safety standards are met.'
    },
    {
        title: 'CAMO Personnel',
        description: 'Continuing Airworthiness Management Organisation professionals for regulatory compliance.'
    },
    {
        title: 'Sheet Metal Workers',
        description: 'Skilled technicians specializing in aircraft structural repairs and modifications.'
    },
    {
        title: 'Quality Inspectors',
        description: 'Experienced professionals ensuring all work meets regulatory and quality standards.'
    },
    {
        title: 'Avionics Specialists',
        description: 'Experts in aircraft electronic systems, instrumentation, and communication equipment.'
    }
]

const reasons = [
    {
        title: 'Aviation Expertise',
        description: 'We focus exclusively on aviation technical roles, ensuring our candidates have the skills and certifications required by leading MROs and airlines.'
    },
    {
        title: 'Responsive Service',
        description: 'Our team works closely with clients to understand specific needs, delivering manpower solutions that fit your operational demands.'
    },
    {
        title: 'Global Reach',
        description: 'Access to a network of qualified professionals ready to deploy across various locations and timeframes.'
    },
    {
        title: 'Compliance and Quality',
        description: 'We adhere to industry regulations and standards, guaranteeing reliable and compliant personnel for your organisation.'
    }
]

onMounted(() => {
    if (typeof window !== 'undefined') {
        import('aos').then((AOS) => {
            AOS.init({ duration: 800, once: true, easing: 'ease-in-out' })
        })
    }
})
</script>
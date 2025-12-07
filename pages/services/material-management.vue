<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20">
        <!-- Hero Section -->
        <section class="relative h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center"
            style="background-image: url('/images/11.jpg')">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16 p-4 rounded-2xl" data-aos="fade-down" data-aos-duration="1500">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-2" data-aos="fade-down"
                        data-aos-duration="1500">
                        ORION Material Management
                    </h1>
                    <h2 class="text-2xl md:text-3xl font-semibold text-sky-400 mb-4" data-aos="fade-down"
                        data-aos-duration="1500">
                        Your Trusted Partner in Aviation Material Services
                    </h2>
                    <div class="bg-gray-800/60 rounded-2xl">
                        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed p-4" data-aos="fade-down"
                            data-aos-duration="1500">
                            ORION's Material Management division offers end-to-end solutions designed to optimise your
                            supply chain and reduce aircraft downtime. We understand the critical importance of timely
                            and accurate material provision in the aviation industry, and we tailor our services to
                            meet your specific operational requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Our Material Management Services</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(service, index) in services" :key="index" class="process-card group" data-aos="fade-up"
                        data-aos-duration="1500" :data-aos-delay="index * 100">
                        <h3 class="text-2xl pb-4 text-brand-second">{{ service.title }}</h3>
                        <p class="card-description">{{ service.description }}</p>
                    </div>
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
                                class="flex-shrink-0 w-6 h-6 bg-brand-second rounded-full flex items-center justify-center mt-1">
                                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold mb-2">{{ reason.title }}</h4>
                                <p class="text-gray-300 text-sm">{{ reason.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1500">
                <div class="premium-glass-box p-12 rounded-3xl">
                    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-white">Contact Us</h2>
                    <p class="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                        Ready to optimise your aviation material management and technical operations? Contact ORION
                        today to learn how we can support your business and keep your fleet flying smoothly.
                    </p>
                    <a href="/contact"
                        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                        Contact ORION Today
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

// SEO Meta Tags for Material Management Service Page
useSeoMeta({
    title: 'Aviation Material Management Services | ORION - Inventory & Supply Chain Solutions',
    description: 'ORION provides end-to-end aviation material management services including inventory control, procurement, logistics, and surplus management to reduce aircraft downtime.',
    keywords: 'aviation material management, aircraft inventory management, MRO procurement, aviation logistics, surplus aircraft parts, supply chain optimization, ORION material management',
    ogTitle: 'Material Management Services - ORION Aviation Solutions',
    ogDescription: 'End-to-end aviation material management solutions to optimize your supply chain and reduce aircraft downtime.',
    ogImage: '/images/orion-material-management-og.jpg',
    ogUrl: 'https://orion-aviation.com/services/material-management',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Material Management - ORION Aviation',
    twitterDescription: 'Professional aviation material management services for inventory optimization and supply chain efficiency.',
    twitterImage: '/images/orion-material-management-twitter.jpg'
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'canonical',
            href: 'https://orion-aviation.com/services/material-management'
        }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Aviation Material Management",
                "description": "End-to-end solutions designed to optimise your supply chain and reduce aircraft downtime through professional material management services.",
                "provider": {
                    "@type": "Organization",
                    "name": "ORION Aviation Supplies",
                    "url": "https://orion-aviation.com"
                },
                "areaServed": "Global",
                "serviceType": "Aviation Material Management",
                "offers": {
                    "@type": "Offer",
                    "description": "Comprehensive aviation material management services"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Material Management Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Inventory Management",
                                "description": "We handle inventory planning, stock level optimisation, and real-time tracking to ensure you always have the right parts at the right time."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Procurement Solutions",
                                "description": "Our experienced team sources and procures certified aviation materials and components from trusted suppliers worldwide, ensuring compliance and quality."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Logistics Coordination",
                                "description": "We manage the end-to-end logistics, including shipping, customs clearance, and delivery, to guarantee seamless and timely material movement."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Repair Management",
                                "description": "ORION coordinates component repairs and overhauls with approved workshops, ensuring quality and cost-effective turnaround."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Surplus Management",
                                "description": "We help you identify, market, and monetise surplus or obsolete stock, maximising the value of your assets."
                            }
                        }
                    ]
                }
            })
        }
    ]
})

const services = [
    {
        title: 'Inventory Management',
        description: 'We handle inventory planning, stock level optimisation, and real-time tracking to ensure you always have the right parts at the right time.'
    },
    {
        title: 'Procurement Solutions',
        description: 'Our experienced team sources and procures certified aviation materials and components from trusted suppliers worldwide, ensuring compliance and quality.'
    },
    {
        title: 'Logistics Coordination',
        description: 'We manage the end-to-end logistics, including shipping, customs clearance, and delivery, to guarantee seamless and timely material movement.'
    },
    {
        title: 'Repair Management',
        description: 'ORION coordinates component repairs and overhauls with approved workshops, ensuring quality and cost-effective turnaround.'
    },
    {
        title: 'Surplus Management',
        description: 'We help you identify, market, and monetise surplus or obsolete stock, maximising the value of your assets.'
    }
]

const reasons = [
    {
        title: 'Industry Expertise',
        description: 'Our team brings decades of aviation industry experience and technical knowledge.'
    },
    {
        title: 'Global Network',
        description: 'Access to a vast network of suppliers, repair stations, and logistics partners worldwide.'
    },
    {
        title: 'Tailored Solutions',
        description: 'We customise our services to align with your unique business objectives and operational challenges.'
    },
    {
        title: 'Quality and Compliance',
        description: 'Adherence to stringent regulatory standards and a commitment to safety and quality at every step.'
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
<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20">
        <!-- Hero Section -->
        <section class="relative h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center"
            style="background-image: url('/images/9.jpg')">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16 p-4 rounded-2xl" data-aos="fade-down" data-aos-duration="1500">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-2" data-aos="fade-down"
                        data-aos-duration="1500">
                        Aircraft MRO Supplies Services
                    </h1>
                    <h2 class="text-2xl md:text-3xl font-semibold text-sky-400 mb-4" data-aos="fade-down"
                        data-aos-duration="1500">
                        Comprehensive Solutions for Aviation Maintenance, Repair, and Overhaul
                    </h2>
                    <div class="bg-gray-800/60 rounded-2xl">
                        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed py-4" data-aos="fade-down"
                            data-aos-duration="1500">
                            At ORION, we are dedicated to supporting the aviation industry with premium Maintenance,
                            Repair, and Overhaul (MRO) supplies. Our services are designed to ensure the highest
                            standards
                            of safety, reliability, and efficiency for aircraft operators, MRO facilities, and airlines
                            across the region.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Product Portfolio -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">ORION Aircraft MRO Supplies Services</h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        ORION offers a comprehensive range of MRO supplies including consumables, rotables,
                        expendables, and tools essential for routine and non-routine aircraft maintenance.
                        Our inventory covers everything from fasteners, lubricants, and sealants to avionics
                        components, filters, and ground support equipment, ensuring that our clients have
                        access to the right products at the right time.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="(category, index) in productCategories" :key="index" class="process-card text-center"
                        data-aos="fade-up" data-aos-duration="1500" :data-aos-delay="index * 100">
                        <h3 class="text-2xl text-brand-second">{{ category.name }}</h3>
                        <p class="card-description text-sm">{{ category.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div v-for="(feature, index) in features" :key="index" class="process-card" data-aos="fade-up"
                        data-aos-duration="1500" :data-aos-delay="index * 100">
                        <h3 class="card-title">{{ feature.title }}</h3>
                        <p class="card-description">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose ORION -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose ORION?</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(reason, index) in reasons" :key="index" class="process-card text-center"
                        data-aos="fade-up" data-aos-duration="1500" :data-aos-delay="index * 100">
                        <h3 class="card-title text-lg">{{ reason }}</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1500">
                <div class="process-card">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Partner with ORION</h2>
                    <p class="text-xl text-gray-300 mb-8">
                        Partner with ORION for your aircraft MRO supply needs and experience the assurance of quality,
                        reliability, and exceptional service. Contact us today to learn more about our MRO solutions
                        and how we can support your aviation operations.
                    </p>
                    <a href="/contact"
                        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                        Contact Us Today
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

useSeoMeta({
    title: 'Aircraft MRO Supplies Services | ORION Aviation - Premium Aviation Parts & Components',
    description: 'ORION provides premium MRO supplies including fasteners, avionics, lubricants, and safety equipment. Certified aviation parts with reliable sourcing and timely delivery for aviation maintenance, repair, and overhaul.',
    keywords: 'MRO supplies, aircraft parts, aviation components, aircraft fasteners, avionics parts, aviation lubricants, aircraft safety equipment, MRO consumables, ORION Aviation Supplies',
    ogTitle: 'Aircraft MRO Supplies Services - ORION Aviation Premium Aviation Parts',
    ogDescription: 'Premium Maintenance, Repair, and Overhaul supplies ensuring highest standards of safety and reliability for aircraft operators and MRO facilities across the region.',
    ogImage: '/images/orion-mro-supplies-og.jpg',
    ogUrl: 'https://orion-aviation.com/services/mro-supplies',
    twitterCard: 'summary_large_image',
    twitterTitle: 'MRO Supplies Services - ORION Aviation Supplies',
    twitterDescription: 'Comprehensive range of certified MRO supplies including consumables, rotables, and tools for aircraft maintenance.',
    twitterImage: '/images/orion-mro-supplies-twitter.jpg'
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'canonical',
            href: 'https://orion-aviation.com/services/mro-supplies'
        }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Aircraft MRO Supplies",
                "provider": {
                    "@type": "Organization",
                    "name": "ORION Aviation Supplies",
                    "description": "Dedicated to supporting the aviation industry with premium MRO supplies ensuring highest standards of safety, reliability, and efficiency."
                },
                "description": "Premium Maintenance, Repair, and Overhaul supplies ensuring the highest standards of safety, reliability, and efficiency for aircraft operators, MRO facilities, and airlines across the region.",
                "areaServed": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": "25.2048",
                        "longitude": "55.2708"
                    },
                    "geoRadius": "5000"
                },
                "offers": {
                    "@type": "Offer",
                    "category": "MRO Supplies Services",
                    "availability": "https://schema.org/InStock"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "MRO Supplies Portfolio",
                    "itemListElement": [
                        {
                            "@type": "Service",
                            "name": "Fasteners & Hardware",
                            "description": "Bolts, nuts, rivets, screws and other hardware components"
                        },
                        {
                            "@type": "Service",
                            "name": "Lubricants & Sealants",
                            "description": "Greases, oils, adhesives, sealants for aviation applications"
                        },
                        {
                            "@type": "Service",
                            "name": "Avionics Components",
                            "description": "Sensors, displays, communication systems and avionics parts"
                        },
                        {
                            "@type": "Service",
                            "name": "Filters & Fluids",
                            "description": "Oil filters, hydraulic fluids, fuel filters and related fluids"
                        },
                        {
                            "@type": "Service",
                            "name": "Ground Support Equipment",
                            "description": "Ground power units, tow bars, jacks and support equipment"
                        },
                        {
                            "@type": "Service",
                            "name": "Safety Equipment",
                            "description": "Fire extinguishers, safety harnesses and safety gear"
                        },
                        {
                            "@type": "Service",
                            "name": "Interior Components",
                            "description": "Seats, panels, lighting, galley equipment and cabin parts"
                        },
                        {
                            "@type": "Service",
                            "name": "Electrical Systems",
                            "description": "Wiring, connectors, circuit breakers and electrical components"
                        }
                    ]
                }
            })
        }
    ]
})

const productCategories = [
    {
        name: 'Fasteners & Hardware',
        description: 'Bolts, nuts, rivets, screws and other essential hardware for aircraft maintenance'
    },
    {
        name: 'Lubricants & Sealants',
        description: 'Premium greases, oils, adhesives and sealants meeting aviation standards'
    },
    {
        name: 'Avionics Components',
        description: 'Sensors, displays, communication systems and certified avionics parts'
    },
    {
        name: 'Filters & Fluids',
        description: 'Oil filters, hydraulic fluids, fuel filters and related maintenance fluids'
    },
    {
        name: 'Ground Support Equipment',
        description: 'Ground power units, tow bars, jacks and essential support equipment'
    },
    {
        name: 'Safety Equipment',
        description: 'Fire extinguishers, safety harnesses and critical safety gear'
    },
    {
        name: 'Interior Components',
        description: 'Seats, panels, lighting, galley equipment and cabin interior parts'
    },
    {
        name: 'Electrical Systems',
        description: 'Wiring, connectors, circuit breakers and electrical system components'
    }
]

const features = [
    {
        title: 'Reliable Sourcing and Timely Delivery',
        description: 'Leveraging our strong relationships with leading global manufacturers and distributors, ORION guarantees the authenticity and quality of all supplied parts. Our efficient supply chain management enables us to provide rapid turnaround and prompt delivery, minimizing aircraft downtime and supporting uninterrupted operations.'
    },
    {
        title: 'Customised Solutions and Technical Support',
        description: 'Understanding that every client has unique operational requirements, ORION offers tailored supply solutions to meet specific MRO needs. Our experienced technical team provides guidance on product selection, compliance, and regulatory standards, ensuring that all supplies meet industry and OEM specifications.'
    },
    {
        title: 'Quality Assurance and Compliance',
        description: 'Quality and safety are at the core of our MRO supplies services. ORION adheres to stringent quality control processes and complies with international aviation regulations. All products are accompanied by the necessary documentation and certifications to support regulatory and audit requirements.'
    }
]

const reasons = [
    'Extensive selection of certified MRO supplies',
    'Trusted partnerships with leading manufacturers',
    'Fast, reliable, and secure delivery options',
    'Expert technical support and consultation',
    'Commitment to quality and compliance'
]

onMounted(() => {
    if (typeof window !== 'undefined') {
        import('aos').then((AOS) => {
            AOS.init({ duration: 800, once: true, easing: 'ease-in-out' })
        })
    }
})
</script>
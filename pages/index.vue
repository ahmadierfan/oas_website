<template>
    <HeroSection />
    <ServiceSection />
    <WhyChoose />
    <Partnership />
</template>

<script setup>
import { ref, onMounted } from 'vue'

// SEO Meta Tags
useSeoMeta({
    title: 'Aviation Supplies Management  - Your Trusted Partner in Aviation Technical Management',
    description: 'Aviation Supplies Management  delivers expert Aviation Technical Management solutions including MRO start-ups, maintenance optimization, and aircraft lifecycle management. Partner with us for operational excellence.',
    keywords: 'aviation technical management, MRO start-up, aircraft maintenance, MRO supplies, material management, aircraft lifecycle management, aviation consulting',
    ogTitle: 'Aviation Supplies Management  - Aviation Technical Management Experts',
    ogDescription: 'Setting the Benchmark for Aviation Technical Management Success. Expert solutions for MRO operations and aircraft asset management.',
    ogImage: '/images/skiesa-og-image.jpg',
    ogUrl: 'https://orionavia.com',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Aviation Supplies Management  - Your Trusted Partner in Aviation',
    twitterDescription: 'Expert Aviation Technical Management solutions for operators, lessors, and investors.',
    twitterImage: '/images/skiesa-twitter-image.jpg'
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'canonical',
            href: 'https://orionavia.com'
        }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Aviation Supplies Management ",
                "description": "Your Trusted Partner in Aviation Technical Management",
                "url": "https://orionavia.com",
                "logo": "https://orionavia.com/logo.png",
                "sameAs": [],
                "areaServed": "Global",
                "knowsAbout": [
                    "Aviation Technical Management",
                    "MRO Start-Up & Optimisation",
                    "MRO Supplies",
                    "Material Management",
                    "Aircraft Lifecycle Management"
                ]
            })
        }
    ]
})

onMounted(() => {
    // Initialize AOS animations
    if (process.client) {
        import('aos').then((AOS) => {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            })
        })
    }
})
</script>
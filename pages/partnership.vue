<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20">
        <section
            class="py-24 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat bg-image-hero-about before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:backdrop-blur-sm">
            <div class="max-w-7xl mx-auto relative z-20">
                <div class="text-center mb-16" data-aos="fade-down" data-aos-duration="1500">
                    <div data-aos="fade-down" data-aos-duration="1500">
                        <!-- عنوان اصلی -->
                        <h2 class="text-2xl md:text-3xl font-bold text-sky-400 mb-4">
                            Unlock New Opportunities by Sharing Companies Expansion / Individual Ideas
                        </h2>

                        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
                            Welcome to Our Partnership Program
                        </h1>
                        <p class="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                            Join our partnership programme to forge innovative solutions, expand your professional
                            network,
                            and achieve mutual success. We empower both companies and individuals to collaborate,
                            harness
                            creative ideas,
                            and unlock unique opportunities for impactful growth.
                        </p>
                        <!-- بخش ORION -->
                        <p class="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            At ORION, we drive progress in aviation by uniting expertise—accelerating innovation,
                            enhancing safety, and delivering smarter, more efficient outcomes for the industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Partner Section -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Why Partner With Us?</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(benefit, index) in benefits" :key="index" class="process-card group" data-aos="fade-up"
                        data-aos-duration="1500" :data-aos-delay="index * 100">
                        <h3 class="text-brand-second text-2xl pb-3">{{ benefit.title }}</h3>
                        <p class="card-description">{{ benefit.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partnership Opportunities -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <!-- Companies -->
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <div class="premium-glass-box p-8 rounded-2xl">
                            <h2 class="text-3xl font-bold text-white mb-8 text-center">
                                Partnership Opportunities for Companies
                            </h2>
                            <div class="space-y-6">
                                <div v-for="(opportunity, index) in companyOpportunities" :key="index"
                                    class="flex items-start space-x-4">
                                    <div
                                        class="flex-shrink-0 w-8 h-8 bg-brand-second rounded-full flex items-center justify-center mt-1">
                                        <span class="text-white font-bold text-sm">{{ index + 1 }}</span>
                                    </div>
                                    <div>
                                        <h4 class="text-white font-semibold mb-2">{{ opportunity.title }}</h4>
                                        <p class="text-gray-300 text-sm">{{ opportunity.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Individuals -->
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <div class="premium-glass-box p-8 rounded-2xl">
                            <h2 class="text-3xl font-bold text-white mb-8 text-center">
                                Partnership Opportunities for Individuals
                            </h2>
                            <div class="space-y-6">
                                <div v-for="(opportunity, index) in individualOpportunities" :key="index"
                                    class="flex items-start space-x-4">
                                    <div
                                        class="flex-shrink-0 w-8 h-8 bg-brand-second rounded-full flex items-center justify-center mt-1">
                                        <span class="text-white font-bold text-sm">{{ index + 1 }}</span>
                                    </div>
                                    <div>
                                        <h4 class="text-white font-semibold mb-2">{{ opportunity.title }}</h4>
                                        <p class="text-gray-300 text-sm">{{ opportunity.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Information Section -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="premium-glass-box p-12 rounded-3xl" data-aos="fade-up" data-aos-duration="1500">
                    <div class="text-center mb-10">
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Contact Information</h2>
                        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Ready to partner with us? Reach out through our official channels:
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="text-center">
                            <div class="mb-4">
                                <svg class="w-12 h-12 text-brand-second mx-auto" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-white mb-3">Email</h3>
                            <a href="mailto:partnership@orionavia.com"
                                class="text-sky-400 hover:text-sky-300 transition-colors">
                                partnership@orionavia.com
                            </a>
                        </div>

                        <div class="text-center">
                            <div class="mb-4">
                                <svg class="w-12 h-12 text-brand-second mx-auto" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-white mb-3">Website</h3>
                            <a href="https://www.orionavia.com/partner" target="_blank"
                                class="text-sky-400 hover:text-sky-300 transition-colors">
                                www.orionavia.com/partner
                            </a>
                        </div>

                        <div class="text-center">
                            <div class="mb-4">
                                <svg class="w-12 h-12 text-brand-second mx-auto" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-white mb-3">Phone</h3>
                            <a href="tel:+97112345678" class="text-sky-400 hover:text-sky-300 transition-colors">
                                +971 1234 5678
                            </a>
                        </div>
                    </div>

                    <div class="text-center mt-12 pt-8 border-t border-white/10">
                        <p class="text-gray-300 text-lg">
                            We look forward to building lasting and impactful partnerships with companies and
                            individuals alike.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { onMounted } from 'vue'

useSeoMeta({
    title: 'Partner with ORION Aviation - Partnership Program for Companies and Individuals',
    description: 'Join ORION Aviation partnership program to unlock new opportunities. Collaborate on innovative solutions, expand your network, and achieve mutual success in aviation industry.',
    keywords: 'aviation partnership, aviation collaboration, ORION partner program, aviation business partnership, aviation industry networking, MRO partnership opportunities',
    ogTitle: 'Partner with ORION Aviation - Join Our Partnership Program',
    ogDescription: 'Unlock new opportunities by sharing companies expansion and individual ideas. Join ORION partnership program for collaborative growth in aviation.',
    ogImage: '/images/orion-partnership-og.jpg',
    ogUrl: 'https://orionavia.com/partner',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Partner with ORION Aviation',
    twitterDescription: 'Join our partnership program to collaborate on innovative aviation solutions and achieve mutual success.',
    twitterImage: '/images/orion-partnership-twitter.jpg'
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'canonical',
            href: 'https://orionavia.com/partner'
        }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Partnership Program - ORION Aviation",
                "description": "Partner with ORION Aviation to unlock new opportunities through collaboration, innovation, and mutual growth in aviation industry.",
                "url": "https://orionavia.com/partner",
                "mainEntity": {
                    "@type": "Organization",
                    "name": "ORION Aviation Supplies",
                    "description": "Your Trusted Partner in Aviation Supplies Management",
                    "makesOffer": [
                        {
                            "@type": "Offer",
                            "name": "Partnership Program for Companies",
                            "description": "Strategic alliances, corporate solutions, event sponsorships, and talent sharing opportunities"
                        },
                        {
                            "@type": "Offer",
                            "name": "Partnership Program for Individuals",
                            "description": "Freelance collaboration, mentorship programmes, and skill development opportunities"
                        }
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "Partnership Inquiries",
                        "email": "partnership@orionavia.com",
                        "telephone": "+97112345678",
                        "url": "https://orionavia.com/partner"
                    }
                }
            })
        }
    ]
})

const benefits = [
    {
        title: 'Expertise and Experience',
        description: 'Leverage our years of industry experience and proven track record to achieve your goals.'
    },
    {
        title: 'Collaborative Growth',
        description: 'Work together on projects, initiatives, or campaigns to reach new heights.'
    },
    {
        title: 'Access to Resources',
        description: 'Benefit from our extensive network, technology, and knowledge base.'
    },
    {
        title: 'Customised Solutions',
        description: 'We tailor partnerships to meet your specific needs, whether you are a business or an individual.'
    },
    {
        title: 'Shared Success',
        description: 'Our model prioritises mutual benefit, ensuring that all parties see tangible results.'
    }
]

const companyOpportunities = [
    {
        title: 'Strategic Alliances',
        description: 'Collaborate on joint ventures, co-marketing, or product development.'
    },
    {
        title: 'Corporate Solutions',
        description: 'Access bespoke consultancy, digital transformation, and training services.'
    },
    {
        title: 'Event Sponsorships',
        description: 'Sponsor or co-host events to increase brand visibility and engagement.'
    },
    {
        title: 'Talent Sharing',
        description: 'Exchange expertise and resources to boost innovation and operational efficiency.'
    }
]

const individualOpportunities = [
    {
        title: 'Freelance Collaboration',
        description: 'Join our projects as a specialist or consultant.'
    },
    {
        title: 'Mentorship Programmes',
        description: 'Benefit from or contribute to our mentoring initiatives.'
    },
    {
        title: 'Skill Development',
        description: 'Access personal growth and skill-building opportunities.'
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
.bg-image-hero-about {
    background-image: url('/images/partnership.jpg');
    /* Image for the partnership hero section */
}

/* Reuse the same styles from previous components */
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
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow:
        0 35px 60px -12px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    transform: translateY(-8px);
}

.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
}

.card-description {
    color: #d1d5db;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
}

.premium-glass-box {
    background: rgba(15, 23, 42, 0.3);
    backdrop-filter: blur(30px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1.5rem;
    box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
}
</style>
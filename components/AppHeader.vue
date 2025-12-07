<!-- components/Navbar.vue -->
<template>
    <nav class="fixed w-full backdrop-blur-md z-50 shadow-sm transition-all duration-300"
        :class="{ 'bg-brand-primary': isVisible }">
        <div class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <div class="flex items-center space-x-3">
                    <div class="rounded-full bg-brand-primary px-8 py-1 my-0 flex items-center justify-center">
                        <img src="/images/logo-trans.png" alt="ORION Aviation" class="w-10" />
                    </div>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <template v-for="(item, index) in menuItems" :key="index">
                        <div v-if="!item.children">
                            <NuxtLink :to="item.link"
                                class="text-white hover:text-blue-300 text-lg font-medium transition-colors duration-300">
                                {{ item.name }}
                            </NuxtLink>
                        </div>

                        <!-- Dropdown for items with children -->
                        <div v-else class="relative group">
                            <button
                                class="text-white hover:text-blue-300 text-lg font-medium transition-colors duration-300 flex items-center">
                                {{ item.name }}
                                <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                class="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-white/20">
                                <div class="py-2">
                                    <NuxtLink v-for="(child, cIndex) in item.children" :key="cIndex" :to="child.link"
                                        class="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium border-b border-gray-100 last:border-b-0 transition-colors duration-200">
                                        <div class="font-semibold text-sm">{{ child.name }}</div>
                                        <div class="text-xs text-gray-500 mt-1">{{ child.description }}</div>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <!-- CTA Button -->
                <div class="hidden md:block">

                </div>

                <!-- Mobile Menu Button -->
                <button class="md:hidden text-white" @click="toggleMobileMenu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div v-if="mobileMenuOpen"
                class="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20">
                <template v-for="(item, index) in menuItems" :key="index">
                    <div v-if="!item.children" class="border-b border-gray-100 last:border-b-0">
                        <NuxtLink :to="item.link"
                            class="block py-3 px-6 text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200"
                            @click="toggleMobileMenu">
                            {{ item.name }}
                        </NuxtLink>
                    </div>

                    <!-- Accordion for items with children -->
                    <div v-else class="border-b border-gray-100">
                        <button @click="toggleAccordion(index)"
                            class="w-full flex justify-between items-center py-3 px-6 text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200">
                            <span>{{ item.name }}</span>
                            <svg class="w-4 h-4 transition-transform duration-300"
                                :class="{ 'rotate-180': mobileAccordionOpen[index] }" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div v-if="mobileAccordionOpen[index]" class="bg-gray-50 border-t border-gray-100">
                            <a v-for="(child, cIndex) in item.children" :key="cIndex" :href="child.link"
                                class="block py-2 px-8 text-gray-700 hover:bg-blue-100 hover:text-blue-600 font-medium transition-colors duration-200 border-b border-gray-100 last:border-b-0 text-sm"
                                @click="toggleMobileMenu">
                                {{ child.name }}
                            </a>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const mobileMenuOpen = ref(false)
const mobileAccordionOpen = ref({})

const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    {
        name: 'Services',
        children: [
            { name: 'MRO Supplies', link: '/services/mro-supplies', description: 'Premium aircraft supplies' },
            { name: 'Material Management', link: '/services/material-management', description: 'Supply chain optimization' },
            { name: 'Manpower Arrangement', link: '/services/manpower-arrangement', description: 'Skilled aviation professionals' },
        ]
    },
    { name: 'Partnership', link: '/partnership' },
    { name: 'Contact', link: '/contact' },
]

const handleScroll = () => {
    isVisible.value = window.scrollY > 50
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
    if (!mobileMenuOpen.value) mobileAccordionOpen.value = {}
}

const toggleAccordion = (index) => {
    mobileAccordionOpen.value[index] = !mobileAccordionOpen.value[index]
}
</script>

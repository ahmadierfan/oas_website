<template>
  <div class="services-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div data-aos="fade-down" data-aos-duration="1500">
          <h1 class="hero-title">{{ currentService.title }}</h1>
          <p class="hero-description">
            {{ currentService.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Service Navigation -->
    <section class="navigation-section">
      <div class="navigation-container">
        <div class="navigation-buttons" data-aos="fade-up" data-aos-duration="1500">
          <button v-for="service in services" :key="service.id" @click="currentServiceId = service.id" :class="[
            'nav-button',
            currentServiceId === service.id ? 'nav-button-active' : 'nav-button-inactive'
          ]">
            {{ service.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Dynamic Content Sections -->
    <component :is="currentService.component" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Service Definitions
const services = [
  {
    id: 'aircraft-lifecycle',
    name: 'Aircraft Lifecycle Management',
    title: 'Aircraft Lifecycle Management',
    description: 'Holistic, tailored solutions that optimise performance and value across the entire lifecycle of aircraft and aviation infrastructure.',
    component: 'AircraftLifecycleManagement'
  },
  {
    id: 'manpower-arrangement',
    name: 'Manpower Arrangement',
    title: 'Manpower Arrangement',
    description: 'Providing qualified aviation technical manpower exactly when and where you need it. Flexible solutions for MRO organisations and airlines.',
    component: 'ManpowerArrangement'
  },
  {
    id: 'material-management',
    name: 'Material Management',
    title: 'Material Management',
    description: 'End-to-end solutions designed to optimise your supply chain and reduce aircraft downtime. We understand the critical importance of timely and accurate material provision.',
    component: 'MaterialManagement'
  },
  {
    id: 'mro-startup',
    name: 'MRO Start-Up & Optimization',
    title: 'MRO Start-Up & Optimization',
    description: 'Guide new and existing aviation businesses through the complexities of establishing, growing, or enhancing their MRO operations.',
    component: 'MROStartupOptimization'
  },
  {
    id: 'mro-supplies',
    name: 'Aircraft MRO Supplies',
    title: 'Aircraft MRO Supplies',
    description: 'Premium Maintenance, Repair, and Overhaul supplies ensuring the highest standards of safety, reliability, and efficiency for aircraft operators and MRO facilities.',
    component: 'MROSupplies'
  }
]

const currentServiceId = ref('aircraft-lifecycle')

const currentService = computed(() => {
  return services.find(service => service.id === currentServiceId.value) || services[0]
})

// Service Components
const AircraftLifecycleManagement = {
  template: `
    <div>
      <!-- Key Services -->
      <section class="content-section">
        <div class="content-container">
          <div class="section-header" data-aos="fade-up" data-aos-duration="1500">
            <h2 class="section-title">Key Services</h2>
          </div>

          <div class="services-grid">
            <div v-for="(phase, index) in lifecyclePhases" :key="index" class="service-card" data-aos="fade-up"
                data-aos-duration="1500" :data-aos-delay="index * 100">
              <h3 class="card-title">{{ phase.phase }}</h3>
              <div class="services-list">
                <div v-for="(service, serviceIndex) in phase.services" :key="serviceIndex"
                    class="service-item">
                  <div class="service-bullet"></div>
                  <p class="service-text">{{ service }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Aviation Supplies Management  -->
      <section class="content-section">
        <div class="content-container">
          <div class="section-header" data-aos="fade-up" data-aos-duration="1500">
            <h2 class="section-title">Why Choose Aviation Supplies Management ?</h2>
          </div>

          <div class="reasons-grid">
            <div v-for="(reason, index) in reasons" :key="index" class="reason-card" data-aos="fade-up"
                :data-aos-delay="index * 100">
              <h3 class="card-title">{{ reason.title }}</h3>
              <p class="card-description">{{ reason.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const lifecyclePhases = [
      {
        phase: 'Acquisition and Entry-Into-Service',
        services: [
          'Asset evaluation and technical due diligence',
          'Pre-purchase inspections and records review',
          'Project management for delivery and induction'
        ]
      },
      {
        phase: 'Operational Asset Management',
        services: [
          'Ongoing airworthiness and regulatory compliance',
          'Maintenance planning, oversight, and optimisation',
          'Performance monitoring and technical audits'
        ]
      },
      {
        phase: 'Transition Management',
        services: [
          'End-of-lease inspections and redelivery support',
          'Records management and reconfiguration services',
          'Coordination with MROs and regulatory authorities'
        ]
      },
      {
        phase: 'End-of-Life and Asset Disposition',
        services: [
          'Retirement planning and decommissioning',
          'Part-out management and recycling solutions',
          'Remarketing and resale advisory'
        ]
      }
    ]

    const reasons = [
      {
        title: 'Industry Expertise',
        description: 'Our team brings decades of hands-on experience across the aviation sector, ensuring best-in-class solutions.'
      },
      {
        title: 'Global Reach',
        description: 'With a worldwide network, we facilitate seamless asset transitions and compliance in multiple jurisdictions.'
      },
      {
        title: 'Client-Centric Approach',
        description: 'We customise our services to your business objectives, delivering measurable value at every phase.'
      },
      {
        title: 'Innovation & Sustainability',
        description: 'We leverage the latest technology and sustainable practices to maximise asset value and minimise environmental impact.'
      }
    ]

    return { lifecyclePhases, reasons }
  }
}

const ManpowerArrangement = {
  template: `
    <div>
      <!-- Staffing Solutions -->
      <section class="content-section">
        <div class="content-container">
          <div class="staffing-grid">
            <div class="staffing-card" data-aos="fade-right" data-aos-duration="1500">
              <h3 class="card-title">Permanent Staffing</h3>
              <p class="card-description">
                Long-term placements of certified professionals for your ongoing operational needs.
                We supply permanent staff to ensure your operations run smoothly with consistent quality.
              </p>
              <ul class="staffing-list">
                <li class="staffing-item">
                  <div class="list-bullet blue"></div>
                  <span>Certified Aircraft Technicians</span>
                </li>
                <li class="staffing-item">
                  <div class="list-bullet blue"></div>
                  <span>Licensed B1/B2 Engineers</span>
                </li>
                <li class="staffing-item">
                  <div class="list-bullet blue"></div>
                  <span>Quality Inspectors</span>
                </li>
              </ul>
            </div>

            <div class="staffing-card" data-aos="fade-left" data-aos-duration="1500">
              <h3 class="card-title">Occasional Staffing</h3>
              <p class="card-description">
                Short-term assignments and project-based professionals to help you respond to fluctuating
                workloads or special projects effectively.
              </p>
              <ul class="staffing-list">
                <li class="staffing-item">
                  <div class="list-bullet green"></div>
                  <span>Project-based Engineers</span>
                </li>
                <li class="staffing-item">
                  <div class="list-bullet green"></div>
                  <span>Seasonal Technical Staff</span>
                </li>
                <li class="staffing-item">
                  <div class="list-bullet green"></div>
                  <span>Specialized Contractors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Specialized Roles -->
      <section class="content-section">
        <div class="content-container">
          <div class="section-header" data-aos="fade-up" data-aos-duration="1500">
            <h2 class="section-title">Specialized Roles We Provide</h2>
          </div>

          <div class="roles-grid">
            <div v-for="(role, index) in roles" :key="index" class="role-card" data-aos="fade-up"
                data-aos-duration="1500" :data-aos-delay="index * 100">
              <h3 class="card-title">{{ role.title }}</h3>
              <p class="card-description">{{ role.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Aviation Supplies Management  -->
      <section class="content-section">
        <div class="content-container">
          <div class="glass-box" data-aos="zoom-in">
            <h2 class="glass-title">Why Choose Aviation Supplies Management ?</h2>
            <div class="reasons-list">
              <div v-for="(reason, index) in reasons" :key="index" class="reason-item">
                <div class="reason-icon">
                  <svg class="icon-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="reason-content">
                  <h4 class="reason-title">{{ reason.title }}</h4>
                  <p class="reason-text">{{ reason.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const roles = [
      {
        title: 'Aircraft Technicians',
        description: 'Certified and experienced in all aspects of aircraft maintenance and repair.'
      },
      {
        title: 'B1/B2 Engineers',
        description: 'Licensed engineers for both mechanical and avionics work, ensuring compliance and safety standards.'
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
        description: 'We focus exclusively on aviation technical roles, ensuring candidates have the required skills and certifications.'
      },
      {
        title: 'Responsive Service',
        description: 'Our team works closely with clients to understand specific needs and deliver tailored manpower solutions.'
      },
      {
        title: 'Global Reach',
        description: 'Access to a network of qualified professionals ready to deploy across various locations and timeframes.'
      },
      {
        title: 'Compliance and Quality',
        description: 'We adhere to industry regulations and standards, guaranteeing reliable and compliant personnel.'
      }
    ]

    return { roles, reasons }
  }
}

// سایر کامپوننت‌ها (MaterialManagement, MROStartupOptimization, MROSupplies) 
// به همین شکل با استایل‌های CSS معمولی پیاده‌سازی می‌شوند

// SEO Configuration
useSeoMeta({
  title: 'Aviation Supplies Management  Aviation Services - Comprehensive Aircraft Management Solutions',
  description: 'Aviation Supplies Management  provides comprehensive aviation services including aircraft lifecycle management, manpower arrangement, material management, MRO startup optimization, and MRO supplies.',
  keywords: 'aviation services, aircraft management, MRO supplies, manpower arrangement, material management, aviation consulting',
  ogTitle: 'Aviation Supplies Management  Aviation Services - Complete Aircraft Solutions',
  ogDescription: 'Professional aviation services for aircraft lifecycle management, manpower, materials, and MRO optimization.',
  ogImage: '/images/skiesa-services-og.jpg',
  ogUrl: 'https://orionavia.com/services',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Aviation Supplies Management  Aviation Services',
  twitterDescription: 'Comprehensive aviation services and solutions for the aircraft industry.',
  twitterImage: '/images/skiesa-services-twitter.jpg'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://orionavia.com/services'
    }
  ]
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    import('aos').then((AOS) => {
      AOS.init({ duration: 800, once: true, easing: 'ease-in-out' })
    })
  }
})
</script>

<style scoped>
/* Base Styles */
.services-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%);
  padding-top: 5rem;
}

.hero-section {
  padding: 5rem 1rem;
}

.hero-content {
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 72rem;
  margin: 0 auto;
  line-height: 1.75;
}

.navigation-section {
  padding: 2.5rem 1rem;
}

.navigation-container {
  max-width: 80rem;
  margin: 0 auto;
}

.navigation-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.nav-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.nav-button-active {
  background-color: #2563eb;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.25);
}

.nav-button-inactive {
  background-color: rgba(255, 255, 255, 0.1);
  color: #d1d5db;
}

.nav-button-inactive:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.content-section {
  padding: 5rem 1rem;
}

.content-container {
  max-width: 80rem;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
}

/* Card Styles */
.service-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s;
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.1);
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
}

.card-description {
  color: #d1d5db;
  line-height: 1.75;
}

/* Grid Layouts */
.services-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.services-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.service-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.service-bullet {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #60a5fa;
  border-radius: 50%;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.service-text {
  color: #d1d5db;
  font-size: 0.875rem;
}

.reasons-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.staffing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.staffing-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
}

.staffing-list {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.staffing-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #d1d5db;
}

.list-bullet {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  flex-shrink: 0;
}

.list-bullet.blue {
  background-color: #60a5fa;
}

.list-bullet.green {
  background-color: #34d399;
}

.roles-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.role-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}

/* Glass Box */
.glass-box {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  padding: 3rem;
}

.glass-title {
  font-size: 2.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
}

.reasons-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.reason-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.reason-icon {
  width: 2rem;
  height: 2rem;
  background-color: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.icon-check {
  width: 1rem;
  height: 1rem;
  color: white;
}

.reason-content {
  flex: 1;
}

.reason-title {
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.reason-text {
  color: #d1d5db;
}

/* Responsive Design */
@media (min-width: 768px) {
  .hero-title {
    font-size: 3.75rem;
  }

  .services-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .reasons-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .staffing-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .roles-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .reasons-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
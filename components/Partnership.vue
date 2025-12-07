<template>
    <section class="py-20 relative overflow-hidden">
        <!-- پس‌زمینه گرادیانت سورم‌های -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900"></div>

        <!-- افکت نورپردازی -->
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

        <div class="container mx-auto px-6 text-center relative z-10">
            <!-- کانتینر شیشه‌ای حرفه‌ای -->
            <div class="premium-glass-box p-12 rounded-3xl max-w-4xl mx-auto" data-aos="zoom-in">
                <h2 class="text-3xl md:text-4xl font-bold mb-8 text-white">
                    Partner With Us
                </h2>
                <p class="text-xl mb-6 max-w-2xl mx-auto text-white/90 leading-relaxed">
                    Discover how our expertise can elevate your aviation business to new heights. Whether you are
                    establishing a new MRO facility, optimising existing operations, or seeking robust material and
                    aircraft lifecycle management, Aviation Supplies Management is your trusted partner.
                </p>
                <p class="text-lg mb-10 max-w-2xl mx-auto text-white/80 leading-relaxed">
                    Join our partnership programme to forge innovative solutions, expand your professional network, and
                    achieve mutual success in the aviation industry.
                </p>
                <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <NuxtLink to="/contact"
                        class="text-white bg-brand-second px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-700">
                        Contact Our Team
                    </NuxtLink>
                    <NuxtLink to="/partnership"
                        class="premium-glass-btn-outline px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                        Explore Partnerships
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
.premium-glass-box {
    background: rgba(15, 23, 42, 0.3);
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);

    /* Border گرادیانتی */
    border-image: linear-gradient(135deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.4) 100%) 1;

    /* سایه‌های حرفه‌ای */
    box-shadow:
        /* سایه بیرونی */
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        /* سایه داخلی بالا */
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        /* سایه داخلی پایین */
        inset 0 -1px 0 rgba(0, 0, 0, 0.3),
        /* هایلایت */
        0 0 0 1px rgba(255, 255, 255, 0.05);

    position: relative;
    overflow: hidden;
}

/* افکت نور پس‌زمینه */
.premium-glass-box::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center,
            rgba(59, 130, 246, 0.15) 0%,
            rgba(99, 102, 241, 0.1) 25%,
            transparent 70%);
    animation: rotate-glow 15s linear infinite;
    pointer-events: none;
    z-index: -1;
}

/* افکت لبه درخشان */
.premium-glass-box::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(255, 255, 255, 0.2) 25%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.2) 75%,
            rgba(255, 255, 255, 0.6) 100%);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
}

@keyframes rotate-glow {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* دکمه شیشه‌ای اصلی */
.premium-glass-btn {
    background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0.9) 100%);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #0f172a;
    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.2),
        0 4px 15px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.premium-glass-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent);
    transition: left 0.6s;
}

.premium-glass-btn:hover::before {
    left: 100%;
}

.premium-glass-btn:hover {
    transform: translateY(-2px);
    box-shadow:
        0 15px 35px rgba(0, 0, 0, 0.3),
        0 6px 20px rgba(255, 255, 255, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

/* دکمه شیشه‌ای outline */
.premium-glass-btn-outline {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    color: white;
    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
}

.premium-glass-btn-outline::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent);
    transition: left 0.6s;
}

.premium-glass-btn-outline:hover::before {
    left: 100%;
}

.premium-glass-btn-outline:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow:
        0 15px 35px rgba(0, 0, 0, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* انیمیشن شناور برای باکس */
.premium-glass-box {
    animation: glass-float 8s ease-in-out infinite;
}

@keyframes glass-float {

    0%,
    100% {
        transform: translateY(0px) rotateX(0deg);
    }

    50% {
        transform: translateY(-8px) rotateX(1deg);
    }
}

/* برای موبایل‌ها */
@media (max-width: 768px) {
    .premium-glass-box {
        padding: 3rem 1.5rem;
        margin: 0 1rem;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
    }

    .text-3xl {
        font-size: 1.75rem;
    }

    .text-xl {
        font-size: 1.1rem;
    }

    .premium-glass-btn,
    .premium-glass-btn-outline {
        padding: 1rem 2rem;
        font-size: 1rem;
        width: 100%;
        max-width: 280px;
    }
}
</style>
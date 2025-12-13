<template>
    <div class="min-h-screen relative overflow-hidden transition-colors duration-700 ease-in-out"
        :class="scrolled ? 'bg-brand-blue' : 'bg-transparent'">
        <section class="relative h-screen flex items-center justify-center overflow-visible">
            <!-- پس‌زمینه -->
            <div class="absolute inset-0 z-0">
                <img src="/images/home/backfree.jpg" class="w-full h-full object-cover" />
            </div>

            <div class="absolute bottom-10 left-1/2 z-10 mb-28 transition-all duration-[20000ms] ease-in-out" :class="animationForward
                ? 'transform scale-[1.3] -translate-x-1/2 translate-y-24'
                : 'transform scale-100 -translate-x-1/2 translate-y-0'">
                <img src="/images/home/airplanshadow.png" class="max-w-none w-[600px]" />
            </div>

            <div class="absolute z-15 transition-all  duration-1500 top-70"
                :class="showGlass ? 'opacity-100 scale-100' : 'opacity-0 scale-95'">
                <div
                    class="px-3 pt-8 min-h-[300px] md:max-w-[90%] md:ml-[5%] rounded-2xl shadow-2xl border border-white/30 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none">
                    </div>

                    <div class="relative text-center min-w-[90vw]" data-aos="fade-in" data-aos-delay="3000">
                        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl leading-tight ">
                            <span class="typing-text">{{ displayedTitle }}</span>
                        </h1>
                        <div class="hidden md:block text-xl md:text-3xl text-white bg-opacity-20 font-light">
                            <div class=" rounded-3xl px-4 py-2">{{ subtitle }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)

const animationForward = ref(false)
const imageMoved = ref(false)
const showGlass = ref(false)
const showText = ref(false)

// text typing
const title = "Your Trusted Partner in Aviation Technical Management"
const subtitle = "Setting the Benchmark for Aviation Technical Management Success"
const displayedTitle = ref("")
const displayedSubtitle = ref("")
const titleIndex = ref(0)
const subtitleIndex = ref(0)
const typingSpeed = 70
const delayBetweenTitleAndSubtitle = 800

// typing functions
const typeTitle = () => {
    if (titleIndex.value < title.length) {
        displayedTitle.value += title[titleIndex.value]
        titleIndex.value++
        setTimeout(typeTitle, typingSpeed)
    } else {
        setTimeout(typeSubtitle, delayBetweenTitleAndSubtitle)
    }
}

const typeSubtitle = () => {
    if (subtitleIndex.value < subtitle.length) {
        displayedSubtitle.value += subtitle[subtitleIndex.value]
        subtitleIndex.value++
        setTimeout(typeSubtitle, typingSpeed)
    }
}

// scroll detection
const onScroll = () => {
    scrolled.value = window.scrollY > 50
}

onMounted(() => {
    window.addEventListener("scroll", onScroll)

    setTimeout(() => animationForward.value = true, 300)
    setInterval(() => animationForward.value = !animationForward.value, 20000)

    setTimeout(() => imageMoved.value = true, 500)

    setTimeout(() => {
        showGlass.value = true
        setTimeout(() => {
            showText.value = true
            setTimeout(() => typeTitle(), 300)
        }, 100)
    }, 1500)

    setInterval(() => {
        imageMoved.value = false
        setTimeout(() => imageMoved.value = true, 100)
    }, 10000)
})

onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll)
})
</script>

<style scoped>
@keyframes glass-appear {
    0% {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
        filter: blur(10px);
    }

    60% {
        opacity: 0.8;
        filter: blur(3px);
    }

    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
        filter: blur(0);
    }
}

/* انیمیشن برای نمایش متن */
.text-center {
    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.text-center h1,
.text-center p {
    text-shadow:
        0 2px 4px rgba(0, 0, 0, 0.5),
        0 4px 12px rgba(0, 0, 0, 0.3);
}

/* افکت تایپ */
.typing-text {
    border-right: 2px solid rgba(255, 255, 255, 0.8);
    animation: blink-caret 1s step-end infinite;
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: rgba(255, 255, 255, 0.8);
    }
}

/* برای موبایل‌ها */
@media (max-width: 768px) {
    .professional-glass {
        margin: 0 1rem;
        padding: 2rem 1.5rem;
    }

    .text-4xl {
        font-size: 2rem;
        line-height: 1.2;
    }

    .text-xl {
        font-size: 1.1rem;
    }

    .typing-text {
        border-right: 1px solid rgba(255, 255, 255, 0.8);
    }
}
</style>
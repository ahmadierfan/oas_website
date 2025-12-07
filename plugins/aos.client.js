import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
    if (process.client) {
        AOS.init({
            duration: 800,  // مدت انیمیشن
            once: true,     // فقط یکبار اجرا شود
            easing: 'ease-out'
        })
    }
})

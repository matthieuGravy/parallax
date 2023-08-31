<script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

export default {
  name: 'ReactiveAnimation',
  setup() {
    const message = ref('')

    onMounted(() => {
      const titleElement = document.querySelector('.job')
      const tlGraf = gsap.timeline({ repeat: -3 })
      tlGraf.to(titleElement, {
        y: '0',
        opacity: 1,
        duration: 1,
        ease: 'power4.easeInOut',
        onComplete: () => {
          message.value = 'Your'
        }
      })

      tlGraf.to(titleElement, {
        y: '0',
        opacity: 1,
        duration: 0.5,
        ease: 'power4.easeInOut',
        onComplete: () => {
          message.value = 'web developper'
        }
      })
      tlGraf.to(titleElement, {
        y: '0',
        opacity: 1,
        duration: 1,
        ease: 'power4.easeInOut',
        onComplete: () => {
          message.value = 'Your'
        }
      })
      tlGraf.to(titleElement, {
        y: '0',
        opacity: 1,
        duration: 0.5,
        ease: 'power4.easeInOut',
        onComplete: () => {
          message.value = 'Freelance'
        }
      })
      tlGraf.to(titleElement, {
        y: '0',
        opacity: 1,
        duration: 1,
        ease: 'power4.easeInOut',
        onComplete: () => {
          message.value = 'Your'
        }
      })
      tlGraf.to(titleElement, {
        y: '0',
        opacity: 1,
        duration: 0.5,
        ease: 'power4.easeInOut',
        onComplete: () => {
          message.value = 'Partner'
        }
      })
    })

    return {
      message
    }
  }
}
</script>
<template>
  <h2 class="job">
    {{ message }}
  </h2>
</template>

<style scoped lang="scss">
.job {
  font-family: 'Rajdhani', sans-serif;
  font-size: 7rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  @media screen and (max-width: 400px) {
    font-size: 3.5rem;
    max-width: 380px;
  }
}
</style>

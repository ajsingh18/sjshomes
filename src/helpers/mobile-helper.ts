import { computed } from 'vue'
//this only checks on load, need to make this reactive to screen size
export const isMobile = computed(() => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

  // Screen size method
  if (!isMobile) {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    isMobile = screenWidth < 768 || screenHeight < 768
  }

  // Touch events method
  if (!isMobile) {
    isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }

  // CSS media queries method
  if (!isMobile) {
    const bodyElement = document.getElementsByTagName('body')[0]
    isMobile =
      window.getComputedStyle(bodyElement).getPropertyValue('content').indexOf('mobile') !== -1
  }
  return isMobile
})

import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollFadeIn(elRef) {
  onMounted(() => {
    if (!elRef?.value) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(elRef.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: elRef.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}

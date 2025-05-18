import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollFadeIn(ref) {
  onMounted(() => {
    if (!ref?.value) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(ref.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ref.value,
        start: "top 80%",
      },
    });
  });
}

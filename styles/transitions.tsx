import { keyframes } from "styled-components"

export const fadeUp = keyframes`
0% { 
  opacity: 0.01;
  transform: translateY(20px);
  transition: opacity 300ms var(--easing), transform 300ms var(--easing);
}
100% { 
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 300ms var(--easing), transform 300ms var(--easing);
}
`

export const shake = keyframes`
  0% { transform: translate(3px, 0); }
  50% { transform: translate(-3px, 0); }
  100% { transform: translate(0, 0) }
`

"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
  offset?: number
  direction?: "up" | "down" | "left" | "right"
  inView?: boolean
  inViewMargin?: string
  blur?: string
}

export function BlurFade({
  children,
  className,
  duration = 0.6,
  delay = 0,
  offset = 6,
  direction = "down",
  blur = "6px",
  ...props
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        filter: `blur(${blur})`,
        [direction === "left" || direction === "right" ? "x" : "y"]:
          direction === "right" || direction === "down" ? -offset : offset
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        [direction === "left" || direction === "right" ? "x" : "y"]: 0,
        duration,
        delay,
        ease: "easeOut"
      }
    )
  }, [duration, delay, offset, direction, blur])

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}

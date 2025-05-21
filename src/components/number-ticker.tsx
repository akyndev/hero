"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

interface NumberTickerProps {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
  className?: string
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  decimalPlaces = 0,
  className,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      duration: 1,
      delay,
      ease: "power3.out",
      textContent: value,
      snap: { textContent: 1 }, // Ensures smooth counting effect
      onUpdate: function () {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces
          }).format(Number(ref.current.textContent))
        }
      }
    })
  }, [value, delay, decimalPlaces])

  return (
    <span ref={ref} className={"inline-block text-5xl font-bold tabular-nums tracking-wider text-black dark:text-white"} {...props}>
      {startValue}
    </span>
  )
}

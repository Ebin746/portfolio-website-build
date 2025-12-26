"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const mouseXRef = useRef(0)
  const mouseYRef = useRef(0)
  const cursorXRef = useRef(0)
  const cursorYRef = useRef(0)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    // Skip cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return
    }

    const smoothCursor = () => {
      // Smooth easing for cursor ring
      cursorXRef.current += (mouseXRef.current - cursorXRef.current) * 0.2
      cursorYRef.current += (mouseYRef.current - cursorYRef.current) * 0.2

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorXRef.current}px`
        cursorRef.current.style.top = `${cursorYRef.current}px`
      }

      animationFrameRef.current = requestAnimationFrame(smoothCursor)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX
      mouseYRef.current = e.clientY

      // Real-time center dot
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseXRef.current}px`
        dotRef.current.style.top = `${mouseYRef.current}px`
      }

      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.closest("[data-cursor-hover]") ||
        target.closest("nav")

      if (isInteractive) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    // Hide default cursor
    document.documentElement.style.cursor = "none"

    // Start smooth animation loop
    animationFrameRef.current = requestAnimationFrame(smoothCursor)
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.documentElement.style.cursor = "auto"
      document.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 transition-all duration-75 ${isHovering ? "w-12 h-12" : "w-8 h-8"}`}
        style={{
          border: `2px solid ${isHovering ? "#8B5A3C" : "#FFD700"}`,
          borderRadius: "50%",
          boxShadow: isHovering
            ? "0 0 40px rgba(139, 90, 60, 0.8), inset 0 0 10px rgba(139, 90, 60, 0.4)"
            : "0 0 20px rgba(255, 215, 0, 0.6)",
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
      />

      <div
        ref={dotRef}
        className="fixed w-1 h-1 pointer-events-none z-50"
        style={{
          backgroundColor: isHovering ? "#8B5A3C" : "#FFD700",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: isHovering ? "0 0 6px rgba(139, 90, 60, 0.8)" : "0 0 6px rgba(255, 215, 0, 0.8)",
          willChange: "transform",
        }}
      />
    </>
  )
}

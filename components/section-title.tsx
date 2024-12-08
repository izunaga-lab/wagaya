'use client'

import { useInView } from 'react-intersection-observer'

interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <h2
      ref={ref}
      className={`text-3xl font-bold mb-8 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {title}
    </h2>
  )
}

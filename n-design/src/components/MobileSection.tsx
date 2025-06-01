'use client'

import React from 'react'

interface MobileSectionProps {
  id: string
  leftContent?: React.ReactNode | null
  rightContentBlocks?: (React.ReactNode | null)[]
  logo?: React.ReactNode | null
  background?: string
}

export default function MobileSection({
  id,
  leftContent,
  rightContentBlocks = [],
  logo,
  background = 'black',
}: MobileSectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col w-full px-6 py-10 gap-16 bg-${background} text-white`}
    >
      {leftContent && <div>{leftContent}</div>}

      {rightContentBlocks.map((block, idx) =>
        block ? <div key={idx}>{block}</div> : null
      )}

      {logo && <div className="flex justify-center">{logo}</div>}
    </section>
  )
}
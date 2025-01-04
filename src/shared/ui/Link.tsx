import React from 'react'
import Link from 'next/link'

export default function CustomLink({ href, children }: { href: string, children: React.ReactNode }) {
    // TODO: Анимацию при ховере появление снизу полоски
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}

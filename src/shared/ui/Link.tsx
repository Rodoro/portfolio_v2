import Link from 'next/link'

export default function CustomLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className='relative inline-block text-current no-underline transition-all duration-300 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 hover:before:w-full'>
            {children}
        </Link>
    )
}

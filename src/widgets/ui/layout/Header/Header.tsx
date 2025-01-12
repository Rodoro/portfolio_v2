import { Button } from '@/shared/ui/button'
import CustomLink from '@/shared/ui/Link'
import Logo from '@/shared/ui/Logo'

export default function Header() {
    return (
        <header className='flex items-center justify-between w-full'>
            <Logo />
            <nav className='flex w-full items-center justify-end gap-16'>
                <ul className='flex  text-xl gap-16'>
                    <li>
                        <CustomLink href='/#services'>
                            Services
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href='/#portfolio'>
                            Portfolio
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href='/#blogs'>
                            Blogs
                        </CustomLink>
                    </li>
                </ul>
                <Button variant={'outline'} size={'xl'} className='text-xl' >
                    Lets Talk
                </Button>
            </nav>
        </header>
    )
}

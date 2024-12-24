import { Button } from '@/shared/ui/button'
import styles from './About.module.css'

export default function About() {
    return (
        <section className={`w-full ${styles.section_about}`}>
            {/* //TODO: Исправить позиционирование фона */}
            <h1 className='text-7xl font-bold leading-tight'>
                Hi there!<br />
                I`m <span className='text-accent'>Danya &quot;Rodoro&quot;</span><br />
                <span>
                    Frontend Developer
                </span>
            </h1>
            <p>
                Non id ut volutpat urna, nulla ornare tempus molestie
                tincidunt. A vitae ut purus non elementum sapien ac at.
            </p>
            <Button>
                Contact Me
            </Button>
            <div>
                <ul>
                    <li>
                        <span>25+</span>
                        Projects done
                    </li>
                    <li>
                        <span>75+</span>
                        Happy Clients
                    </li>
                    <li>
                        <span>2+</span>
                        Year Experience
                    </li>
                </ul>
                <div>
                    Follow me
                    <ul>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

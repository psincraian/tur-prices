import Link from 'next/link';
import {Flame} from "lucide-react";

export function Navbar() {

    return (
        <header
            className="px-8 sticky z-50 top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
            <nav className="flex h-14 items-center justify-between">
                <Link href="/" className="flex items-center hover:underline">
                    <Flame className="h-5 w-5"/>
                    <span className="ml-1 font-semibold">Precios TUR</span>
                </Link>

                <div>
                    <Link href="/" className='text-sm font-medium transition-colors hover:underline'>
                        Inicio
                    </Link>

                    <Link href="/api" className='ml-4 text-sm font-medium transition-colors hover:underline'>
                        API
                    </Link>

                    <Link href="/ayuda" className='ml-4 text-sm font-medium transition-colors hover:underline'>
                        Ayuda
                    </Link>
                </div>
            </nav>
        </header>
    );
}
import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {Navbar} from '@/components/layout/navbar';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Precios TUR - Tarifas Reguladas de Gas Natural en España',
    description: 'Seguimiento de precios regulados del gas natural en España. Consulta las tarifas TUR actualizadas trimestralmente.',
    keywords: 'TUR, gas natural, precios regulados, España, tarifa último recurso',
    authors: [{name: 'Precios TUR'}],
    openGraph: {
        title: 'Precios TUR - Tarifas Reguladas de Gas Natural en España',
        description: 'Seguimiento de precios regulados del gas natural en España. Consulta las tarifas TUR actualizadas trimestralmente.',
        type: 'website',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
        <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
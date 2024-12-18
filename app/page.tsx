import {HeroSection} from '@/components/sections/hero-section';
import {PriceCardsSection} from '@/components/sections/price-cards-section';
import {PriceHistorySection} from '@/components/sections/price-history-section';

export default function Home() {
    return (
        <main className="container mx-auto px-4">
            <HeroSection/>
            <PriceCardsSection/>
            <PriceHistorySection/>
        </main>
    );
}
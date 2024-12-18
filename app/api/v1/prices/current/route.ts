import {NextResponse} from 'next/server';
import {getCurrentPrices} from '@/lib/data';

export async function GET(request: Request) {
    try {
        return NextResponse.json({data: getCurrentPrices()});
    } catch (error) {
        return NextResponse.json(
            {error: 'Internal server error'},
            {status: 500}
        );
    }
}
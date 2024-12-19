import {NextResponse} from 'next/server';
import {getCurrentPrices} from '@/lib/data';

export async function GET(request: Request) {
    try {
        const response = NextResponse.json({data: getCurrentPrices()});
        response.headers.set('Content-Type', 'application/json');
        return response;
    } catch (error) {
        const errorResponse = NextResponse.json(
            {error: 'Internal server error'},
            {status: 500}
        );
        errorResponse.headers.set('Content-Type', 'application/json');
        return errorResponse;
    }
}
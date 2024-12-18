import {NextResponse} from 'next/server';
import {priceHistory} from '@/lib/data';

export async function generateStaticParams() {
    const categories = priceHistory.map((history) => history.category);

    return categories.map((category) => ({
        category: category,
    }))
}

export async function GET(
    request: Request,
    {params}: { params: { category: string } }
) {
    try {
        const {category} = params;
        const categoryHistory = priceHistory.find(
            (history) => history.category === category.toUpperCase()
        );

        if (!categoryHistory) {
            return NextResponse.json(
                {error: 'Category not found'},
                {status: 404}
            );
        }

        return NextResponse.json({data: categoryHistory});
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {error: 'Internal server error'},
            {status: 500}
        );
    }
}
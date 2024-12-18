'use client';

import {Button} from '@/components/ui/button';

interface CategorySelectorProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export function CategorySelector({selectedCategory, onCategoryChange}: CategorySelectorProps) {
    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {['TUR1', 'TUR2', 'TUR3'].map((category) => (
                <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
}
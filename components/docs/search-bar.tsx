'use client';

import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Search} from 'lucide-react';

export function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        // Implement search functionality
    };

    return (
        <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4"/>
            <Input
                type="search"
                placeholder="Search documentation..."
                className="pl-10"
                value={query}
                onChange={handleSearch}
            />
        </div>
    );
}
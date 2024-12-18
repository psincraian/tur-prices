import * as React from "react";
import {cn} from "@/lib/utils";


export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function buttonVariants({
                                   variant = 'default',
                                   size = 'default',
                               }: {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg' | 'icon';
} = {}) {
    return cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === 'default' && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === 'outline' && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        variant === 'ghost' && "bg-transparent hover:bg-muted hover:text-muted-foreground",
        size === 'default' && "h-10 px-4 py-2",
        size === 'sm' && "h-8 px-3",
        size === 'lg' && "h-12 px-6",
        size === 'icon' && "h-10 w-10"
    );
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant = 'default', ...props}, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    variant === 'default' && "bg-primary text-primary-foreground hover:bg-primary/90",
                    variant === 'outline' && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    "h-10 px-4 py-2",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export {Button};
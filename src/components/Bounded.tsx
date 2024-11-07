<<<<<<< HEAD
import React from "react";
import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({ as: Comp = "section", className, children, ...restProps}, ref) => {
        return (
            <Comp 
                ref={ref} 
                className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
            {...restProps}>
                <div className="mx-auto w-full max-w-7xl">
                    {children}
                </div>
            </Comp>
        )
    }
)

Bounded.displayName = "Bounded"

=======
import React from "react";
import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({ as: Comp = "section", className, children, ...restProps}, ref) => {
        return (
            <Comp 
                ref={ref} 
                className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
            {...restProps}>
                <div className="mx-auto w-full max-w-7xl">
                    {children}
                </div>
            </Comp>
        )
    }
)

Bounded.displayName = "Bounded"

>>>>>>> 513fb1e55267ae49c2a41f1693727e2a9f24668f
export default Bounded
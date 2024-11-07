<<<<<<< HEAD
import clsx from "clsx";
import React from "react";

type HeadingProps = {
    as?: "h1" |  "h2" |  "h3" |  "h4" |  "h5" |  "h6";
    size?: "xl" | "lg" | "md" | "sm";
    children: React.ReactNode;
    className?: string;
};

export default function Heading({
    as: Comp = "h1",
    className,
    children,
    size = "lg",
}: HeadingProps) {
    return (
        <Comp
        className={clsx(
            "font-bold leading-tight tracking-tight  text-teal-300",
        size === "xl" && "text-7xl md:text-9xl",
        size === "lg" && "text-6xl md:text-8xl",
        size === "md" && "text-5xl md:text-6xl",
        size === "sm" && "text-3xl md:text-4xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
=======
import clsx from "clsx";
import React from "react";

type HeadingProps = {
    as?: "h1" |  "h2" |  "h3" |  "h4" |  "h5" |  "h6";
    size?: "xl" | "lg" | "md" | "sm";
    children: React.ReactNode;
    className?: string;
};

export default function Heading({
    as: Comp = "h1",
    className,
    children,
    size = "lg",
}: HeadingProps) {
    return (
        <Comp
        className={clsx(
            "font-bold leading-tight tracking-tight  text-teal-300",
        size === "xl" && "text-7xl md:text-9xl",
        size === "lg" && "text-6xl md:text-8xl",
        size === "md" && "text-5xl md:text-6xl",
        size === "sm" && "text-3xl md:text-4xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
>>>>>>> 513fb1e55267ae49c2a41f1693727e2a9f24668f
}
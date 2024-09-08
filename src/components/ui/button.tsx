"use client"
export default function Button({
    children,
    onClick,
    className,
    }: Readonly<{
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    }>) {
    return (
        <button
        onClick={onClick}
        className={
            "bg-[#6B58CA] text-white px-4 py-2 rounded-md shadow-md " +
            className
        }
        >
        {children}
        </button>
    );
    }

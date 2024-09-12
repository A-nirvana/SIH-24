"use client";
export default function Button({
  children,
  onClick,
  className,
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}>) {
  return (
    <button
      onClick={onClick}
      className={
        " text-white px-4 py-2 rounded-md shadow-md active:scale-90 scale-100 duration-100 hover:opacity-85 " +
        className
      }
    >
      {children}
    </button>
  );
}

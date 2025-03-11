"use client"

export const RightArrow = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-teal-900 cursor-pointer"
        >
            <rect width="18" height="18" x="5" y="5" rx="2" />
            <path d="M10 14h8" />
            <path d="m14 18 4-4-4-4" />
        </svg>
    )
}

export const LeftArrow = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-teal-900 cursor-pointer"
        >
            <rect width="18" height="18" x="5" y="5" rx="2" />
            <path d="m14 10-4 4 4 4" />
            <path d="M18 14H10" />
        </svg>
    )
}

import React from "react";

export default function Card({children}: {children: React.ReactNode}) {
    return (
        <div className="hover:shadow-md shadow-sm p-2 border rounded-md min-w-72">
            {children}
        </div>
    )
}
'use client';

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PageContent() {
    const searchParams = useSearchParams();
    const productName = searchParams.get('productName');
    const productInfo = searchParams.get('productInfo');

    return (
        <div className="bg-white dark:bg-gray-900 py-8 lg:py-16 px-4 mx-auto w-full">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{productName}</h2>
            <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-24 lg:w-full lg:px-8">
                <p>{productInfo}</p>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageContent />
        </Suspense>
    );
}

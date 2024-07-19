'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, MouseEvent } from "react";

interface Product {
    id: number;
    name: string;
    info: string;
}

const Product = ({ product }: { product: Product }) => {
    return (
        <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    alt="someimage"
                    src="/chef.jpeg"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <Link href={{pathname: '/viewonerecipe',query: { productName: product.name, productInfo: product.info }}}> {product.name}
                </Link>
            </div>
        </div>
    );
};

export default function Page() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_ENDPOINT}/recipe/`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
        };
        fetchRecipes();
      }, [])
    
      
    return(
        <div className="bg-white dark:bg-gray-900 py-8 lg:py-16 px-4 mx-auto w-full">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">View Recipes</h2>
            <p className="mb-4 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Click any recipe to view complete instructions. <br/>If you want to add a recipe, you can add them in add your recipe page.</p>
            <div className="bg-white w-full">
                <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-24 lg:w-full lg:px-8">
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <Product key = {product.id} product={product}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


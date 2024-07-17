const products = [
    { id: 24, imageAlt: 'shshsh', name: "idly", color: "red", price: "23.09", href: "/", imageSrc: "chef.jpeg"},
    { id: 24, imageAlt: 'shshsh', name: "idly", color: "red", price: "23.09", href: "/", imageSrc: "chef.jpeg"},
    { id: 24, imageAlt: 'shshsh', name: "idly", color: "red", price: "23.09", href: "/", imageSrc: "chef.jpeg"},
    { id: 24, imageAlt: 'shshsh', name: "idly", color: "red", price: "23.09", href: "/", imageSrc: "chef.jpeg"},
    { id: 24, imageAlt: 'shshsh', name: "idly", color: "red", price: "23.09", href: "/", imageSrc: "chef.jpeg"},
    { id: 24, imageAlt: 'shshsh', name: "idly", color: "red", price: "23.09", href: "/", imageSrc: "chef.jpeg"},
    { id: 24, imageAlt: 'shshsh', name: "idly", color: "red", price: "23.09", href: "/", imageSrc: "chef.jpeg"},
    { id: 24, imageAlt: 'shshsh', name: "idly", color: "red", price: "23.09", href: "/", imageSrc: "chef.jpeg"}
];

export default function Page() {
    return(
        <div className="bg-white dark:bg-gray-900 py-8 lg:py-16 px-4 mx-auto w-full">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">View Recipes</h2>
            <p className="mb-4 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">This page contains all the available recipes</p>
            <div className="bg-white w-full">
                <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-24 lg:w-full lg:px-8">
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                            </div>
                            <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                <a href={product.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
          </div>
        </div>
    );
}
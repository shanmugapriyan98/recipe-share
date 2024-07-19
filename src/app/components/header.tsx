import Link from "next/link";
import Image from "next/image";

export default function Header() {

  const links = [
    {id:1, href:"/addrecipes", message:"Add Recipes"},
    {id:2, href:"/viewrecipes", message:"View Recipes"},
    {id:3, href:"/contactus", message:"Contact Us"},
  ]

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://kangacook.com" className="flex items-center">
            <Image src="https://kangacook.com/assets/kangacook_logo_en-C6XaWo8m.svg" width={100} height={100} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Recipe Share</span>
          </a>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {links.map((link) => (
               <Link key={link.id} href={link.href} className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"><strong>{link.message}</strong></Link>
            ))}
          </div>
          <button data-collapse-toggle="mobile-menu-2" type="button" className="lg:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="lg:hidden" id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {links.map((link) => (
               <li key={link.id}>
                <Link href={link.href} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">{link.message}</Link>
               </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

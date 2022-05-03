import Link from 'next/link';

const Navbar = () => (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <Link href="/">
            <a class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">Animals Fed</a>
            
        </Link>
        <Link href="/new">
        <a class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">Add Animal</a>

        </Link>
        </ul>
    </nav>
)

export default Navbar;
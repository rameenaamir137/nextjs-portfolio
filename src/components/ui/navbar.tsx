import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <nav className="fixed  inset-x-0 top-0 z-50 bg-white text-black shadow-lg dark:bg-white">
      <div className="w-full max-w-full mx-auto px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="#" className="flex items-center" prefetch={false}>
           
            <img src="/national-university.png" alt="NUST Logo" className="w-24 mb-4" />
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              href="#"
              className="font-medium text-base transition-colors hover:text-teal-500 hover:shadow-lg flex items-center"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-medium text-base transition-colors hover:text-teal-500 hover:shadow-lg flex items-center"
              prefetch={false}
            >
              Departments
            </Link>
            <Link
              href="#"
              className="font-medium text-base transition-colors hover:text-teal-500 hover:shadow-lg flex items-center"
              prefetch={false}
            >
              Faculty
            </Link>
            <Link
              href="#"
              className="font-medium text-base transition-colors hover:text-teal-500 hover:shadow-lg flex items-center"
              prefetch={false}
            >
              Academics
            </Link>
            <Link
              href="#"
              className="font-medium text-base transition-colors hover:text-teal-500 hover:shadow-lg flex items-center"
              prefetch={false}
            >
              Acrticles
            </Link>
            <Link
              href="#"
              className="font-medium text-base transition-colors hover:text-teal-500 hover:shadow-lg flex items-center"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

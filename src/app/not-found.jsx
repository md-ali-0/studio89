import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="">
            <div className="h-screen flex flex-col justify-center items-center gap-5">
                <h1 className="text-8xl font-bold text-gray-800 dark:text-gray-200">404</h1>
                <p className="text-4xl font-medium text-gray-800 dark:text-gray-200">
                    Page Not Found
                </p>
                <Link
                    href="/"
                >
                    <Button>Go back home</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;

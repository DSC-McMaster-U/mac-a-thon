import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/footer";
import Logo from ".//icon.svg";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-12">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-12">
              Oops! The page you are looking for doesn’t exist or has been moved.
            </p>
            <div className="flex justify-center mb-20">
              <Image
                src={Logo}
                alt=""
                className="w-full h-auto max-w-md"
              />
            </div>
            <Link href="/" className="btn btn-primary bg-slate-100 rounded-2xl p-4">
              Go to Main Page
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

import Image from 'next/image';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Mohamed Sadiq IKBAL, PhD</h1>
        <p className="mt-4 text-xl">Robotics Software Engineer</p>

        {/* Image with rounded edges */}
        <div className="inline-block overflow-hidden rounded-full"> {/* Rounded edges */}
          <Image
            src="/images/protfolioPic.JPG" // Adjust the path as needed
            alt="Profile Image"
            width={250}  // Adjust size as needed
            height={250} // Adjust size as needed
            className="object-cover"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}

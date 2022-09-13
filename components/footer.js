import Image from "next/image";

export default function Footer() {
  return (
    <div className="py-10">
      <p className="text-sm text-center">
      <p className="text-black">&copy; {new Date().getFullYear()} Hydra Hacks.</p>
          <p className="pt-2 text-sm text-center text-black">
            Fiscally sponsored by The Hack Foundation.
            <br />
            Nonprofit EIN: 81-2908499.
          </p>
      </p> <br />
      <div className="flex justify-center space-x-4 flex-rows">
      <Image 
      src="/vercel-black.png" 
      alt="Vercel"
      width={320}
      height={70}
      layout="fixed" 
      />
    </div> </div>
  );
}

"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <span className="text-9xl font-bold dark:invert">GEMA CarWash</span>
        <ol className="list-inside list-decimal text-sm  sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>
            Book Now for first time customer.
          </li>
          <li>We use clean water and eco-friendly soap to wash your car.</li>
          <li>We have a team of experienced and skilled car washers.</li>
          <li>We use soft brushes and sponges to clean your car.</li>
          <li>We have a strict quality control to ensure your car is clean and shiny.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://wa.me/+6285227574680"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book NOW
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.google.com/maps/place/GEMA+CUCI+MOBIL/@-1.9581585,101.3447028,3a,75y,215.21h,96.37t/data=!3m7!1e1!3m5!1s41CcEDwk6Io1UsW54cxnkg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-6.3672468294998055%26panoid%3D41CcEDwk6Io1UsW54cxnkg%26yaw%3D215.20687162765418!7i16384!8i8192!4m10!1m2!2m1!1sgema+car+wash!3m6!1s0x2e2da78d2a4874e7:0xe09e7a2573d50b7b!8m2!3d-1.9585093!4d101.3444115!15sCg1nZW1hIGNhciB3YXNokgEIY2FyX3dhc2jgAQA!16s%2Fg%2F11rgssprmk?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            For Location
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <button
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          title="copy these numbers"
          aria-label="copy these numbers"
          onClick={() => {
            navigator.clipboard.writeText('+6285227574680');
          }}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          ‪+62 852‑2757‑4680‬
        </button>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/p/Gema-Carwash-100083346228825/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Our FaceBook
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/gemacarwash/?locale=en-TH&hl=ja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Our Instagram  →
        </a>
      </footer>
    </div>
  );
}

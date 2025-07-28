import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-color absolute overflow-x-hidden`}
      >
        <Navbar />
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 opacity-30">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient
                  id="waveGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                  <stop offset="50%" stopColor="rgba(139, 92, 246, 0.05)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                </linearGradient>
              </defs>

              {/* Wave 1 */}
              <path
                d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z"
                fill="url(#waveGradient)"
                className="motion-safe:animate-[wave-slow_20s_ease-in-out_infinite]"
              />

              {/* Wave 2 */}
              <path
                d="M0,350 Q400,250 800,350 T1600,350 L1600,600 L0,600 Z"
                fill="rgba(99, 102, 241, 0.03)"
                className="motion-safe:animate-[wave-medium_15s_ease-in-out_infinite_reverse]"
              />

              {/* Wave 3 */}
              <path
                d="M0,400 Q200,320 400,400 T800,400 T1200,400 L1200,600 L0,600 Z"
                fill="rgba(168, 85, 247, 0.02)"
                className="motion-safe:animate-[wave-fast_12s_ease-in-out_infinite]"
              />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

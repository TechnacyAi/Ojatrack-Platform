import "./globals.css";

export const metadata = {
  title: "OjaTrack Agent Portal",
  description: "Real-time market intelligence for field agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

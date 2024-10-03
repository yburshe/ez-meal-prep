import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
        <Navbar />
        <div className="p-6">{children}</div>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Leon"s Kitchen Galle',
  description: "Ruhuna Efac Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

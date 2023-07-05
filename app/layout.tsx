import { Nunito } from "next/font/google";

import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";

import "./globals.css";
import RegisterModal from "./components/modals/RegisterModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "MF-bnb",
  description: "Airbnb clone for study purpose",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

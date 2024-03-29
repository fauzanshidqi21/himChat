import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "himChat",
  description: "himChat: Your AI language companion. Develop by Fauzan Shidqi 2024, it enhances your conversations, content creation, and more!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
          </body>
      </html>
    </ClerkProvider>
  );
}

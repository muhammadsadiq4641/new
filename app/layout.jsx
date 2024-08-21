import { PT_Sans,  Pacifico } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux-provider";
import "antd/dist/antd.min.css";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export const metadata = {
  title: "next starter kit",
  description: "$AMP (Algorithmic Monetary Policy)",
  icons: {
    icon: [{ url: "/favicon/favicon.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ptSans.className} ${pacifico.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

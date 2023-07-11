import "./globals.css"
import { Poppins } from "next/font/google"
import Header from "./components/Header"

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] })

export const metadata = {
  title: "King Media",
  description: "Web dev tutorials",
  keywords: "web dev, javascript, react, nextjs",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}

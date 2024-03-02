import "../app/globals.css"
import { ReactNode } from "react"
import Providers from "./providers"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

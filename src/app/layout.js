import { Roboto } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { ThemeProvider } from "../context/page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "components/hedar/header";

const inter = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Shop easily",
  description: "Your favorite marketYour products are here",
  icons: {
    icon: "./images/bag-shopping-solid.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <Header />

          {children}
        </ThemeProvider>

        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}

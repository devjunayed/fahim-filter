import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Top Water Purifiers, Filters, and Equipment | Water Purifier Park",
  description: "Explore Water Purifier Park's extensive range of water purifiers, filtration systems, and accessories. Get expert advice, reviews, and comparisons to find the best solution for clean, healthy drinking water.",
  keywords: "water purifiers, water filters, filtration systems, water purification, clean drinking water, water filter parts, water equipment, water purifier reviews",
  author: "Water Purifier Park Team",
  robots: "index, follow",
  og: {
    title: "Top Water Purifiers, Filters, and Equipment | Water Purifier Park",
    description: "Explore Water Purifier Park's extensive range of water purifiers, filtration systems, and accessories. Get expert advice, reviews, and comparisons to find the best solution for clean, healthy drinking water.",
    image: "https://yourwebsite.com/images/og-image.jpg",
    url: "https://yourwebsite.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@WaterPurifierPark",
    title: "Top Water Purifiers, Filters, and Equipment | Water Purifier Park",
    description: "Explore Water Purifier Park's extensive range of water purifiers, filtration systems, and accessories. Get expert advice, reviews, and comparisons to find the best solution for clean, healthy drinking water.",
    image: "https://yourwebsite.com/images/twitter-card.jpg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

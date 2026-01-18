import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/LandingPageSections/Hero";
import FeaturedCategories from "@/components/LandingPageSections/FeaturedCategories";
import CustomerReviews from "@/components/LandingPageSections/CustomerReviews";
import BestSellers from "@/components/LandingPageSections/BestSellers";
import WhyShopSphere from "@/components/LandingPageSections/WhyShopSphere";
import HowItWorks from "@/components/LandingPageSections/HowItWorks";
import NewsletterCTA from "@/components/LandingPageSections/NewsletterCTA";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main className="min-h-screen bg-gray-100">
        {/* 1) Hero */}
        <Hero />

        {/* 2) Featured Categories */}
        <FeaturedCategories />

        {/* 3) Best Sellers Preview */}
        <BestSellers />

        {/* 4) Why ShopSphere */}
        <WhyShopSphere />

        {/* 5) How It Works */}
        <HowItWorks />

        {/* 6) Customer Reviews */}
        <CustomerReviews />

        {/* 7) Newsletter / CTA */}
        <NewsletterCTA />

        <Footer />
      </main>
    </>
  );
}

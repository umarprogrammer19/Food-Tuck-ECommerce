import ActiveBanner from "@/components/ActiveBanner/ActiveBanner";
import { Details } from "@/components/Details/Details";
import FoodCategories from "@/components/FoodCategories/FoodCategories";
import HeroSection from "@/components/Hero/HeroSection";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeBlog from "@/components/HomeBlog/HomeBlog";
import { HomeWhyUs } from "@/components/HomeWhyUs/HomeWhyUs";
import { MidBanner } from "@/components/MidBanner/MidBanner";
import { OurChef } from "@/components/OurChef/OurChef";
import { ClientTestimonials } from "@/components/Testimonials/ClientTestimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeAbout />
      <FoodCategories />
      <HomeWhyUs />
      <MidBanner />
      <Details />
      <OurChef />
      <ClientTestimonials />
      <ActiveBanner />
      <HomeBlog />
    </>
  );
}

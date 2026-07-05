import Hero from "@/components/home/Hero";
import CategoriesOverview from "@/components/home/CategoriesOverview";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OngoingProjects from "@/components/home/OngoingProjects";
import CallToAction from "@/components/home/CallToAction";
import PageTransition from "@/components/ui/PageTransition";

export const revalidate = 0;

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <CategoriesOverview />
      <FeaturedProducts />
      <WhyChooseUs />
      <OngoingProjects />
      <CallToAction />
    </PageTransition>
  );
}

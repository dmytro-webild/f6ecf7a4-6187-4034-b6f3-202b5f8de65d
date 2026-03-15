"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import {
  Home,
  TrendingUp,
  Building2,
  BarChart3,
  Briefcase,
  Hammer,
} from "lucide-react";

export default function HomePage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Properties", id: "properties" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Investments", id: "investments" },
    { name: "Contact", id: "contact" },
  ];

  const navItemsWithLinks = navItems.map((item) => {
    const routeMap: { [key: string]: string } = {
      home: "/",
      properties: "/properties",
      services: "/",
      about: "/",
      investments: "/",
      contact: "/",
    };
    return {
      ...item,
      href: routeMap[item.id] || "/",
    };
  });

  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="compact"
      sizing="large"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Vertexa"
          navItems={navItems}
          button={{ text: "08112185706", href: "tel:08112185706" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="Vertexa Real Estate"
          description="Discover premium properties, build sustainable wealth, and invest in your future with Nigeria's trusted real estate platform. From residential homes to commercial opportunities, we connect you with properties that matter."
          background={{ variant: "floatingGradient" }}
          buttons={[
            { text: "Explore Properties", href: "/properties" },
            { text: "Call 08112185706", href: "tel:08112185706" },
          ]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/concrete-building-with-balcony_250224-309.jpg?_wi=1"
          imageAlt="Premium property showcase"
          mediaAnimation="opacity"
          frameStyle="card"
        />
      </div>

      <div id="featured-properties" data-section="featured-properties">
        <ProductCardFour
          title="Featured Properties"
          description="Handpicked premium properties across Nigeria. Explore luxury residential homes, investment-ready lands, and commercial opportunities curated for discerning clients."
          tag="Premium Selection"
          tagAnimation="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          carouselMode="buttons"
          products={[
            {
              id: "prop-1",
              name: "Luxury Apartment - Abuja",
              price: "₦75,000,000",
              variant: "3 Bed | 3 Bath | Premium Finish",
              imageSrc: "http://img.b2bpic.net/free-photo/high-end-modern-apartment-with-home-office-desk-used-remote-job_482257-120652.jpg?_wi=1",
              imageAlt: "Luxury apartment in Abuja",
            },
            {
              id: "prop-2",
              name: "Modern Complex - Lagos",
              price: "₦120,000,000",
              variant: "4 Bed | 4 Bath | Modern Design",
              imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-house-design_23-2150666209.jpg?_wi=1",
              imageAlt: "Modern complex in Lagos",
            },
            {
              id: "prop-3",
              name: "Premium Villa - Lekki",
              price: "₦180,000,000",
              variant: "5 Bed | 5 Bath | Exclusive Area",
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-traveling-without-covid_23-2149077831.jpg?_wi=1",
              imageAlt: "Premium villa in Lekki",
            },
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureBorderGlow
          title="Our Core Services"
          description="Comprehensive real estate solutions designed to support every stage of your property journey. Whether buying, selling, renting, or investing, Vertexa provides expert guidance and transparent transactions."
          tag="Full-Service Solutions"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          features={[
            {
              icon: Home,
              title: "Property Buying",
              description: "Find your perfect home or investment property from our curated listings. Expert negotiation and seamless transaction process.",
            },
            {
              icon: TrendingUp,
              title: "Property Selling",
              description: "Maximize your property value with strategic marketing and professional buyer matching. Fair pricing, fast sales.",
            },
            {
              icon: Building2,
              title: "Property Letting",
              description: "Hassle-free rental management. From tenant screening to maintenance, we handle everything professionally.",
            },
            {
              icon: BarChart3,
              title: "Property Valuation",
              description: "Accurate market valuations using advanced analytics. Essential for investment decisions and financial planning.",
            },
            {
              icon: Briefcase,
              title: "Investment Advisory",
              description: "Strategic guidance on high-ROI properties and emerging markets. Build wealth through smart investments.",
            },
            {
              icon: Hammer,
              title: "Property Management",
              description: "End-to-end management services. Tenant relations, maintenance, rent collection, and legal compliance handled professionally.",
            },
          ]}
        />
      </div>

      <div id="investments" data-section="investments">
        <ProductCardFour
          title="Investment Opportunities"
          description="High-return real estate investment projects with verified ROI potential. Perfect for portfolio diversification and long-term wealth building."
          tag="Growth Potential"
          tagAnimation="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          carouselMode="buttons"
          products={[
            {
              id: "inv-1",
              name: "Land Development - Karshi",
              price: "₦45,000,000",
              variant: "5 years | Est. 35% ROI | 2 hectares",
              imageSrc: "http://img.b2bpic.net/free-photo/successful-businessman-suit-working-marketing-presentation-sitting-bech-outside-front-corporate-building-office-executive-manager-searching-information-internet_482257-30496.jpg?_wi=1",
              imageAlt: "Land development investment opportunity",
            },
            {
              id: "inv-2",
              name: "Commercial Complex - Kuje",
              price: "₦95,000,000",
              variant: "3-5 years | Est. 28% ROI | Mixed-use",
              imageSrc: "http://img.b2bpic.net/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-341.jpg?_wi=1",
              imageAlt: "Commercial complex investment",
            },
            {
              id: "inv-3",
              name: "Residential Estates - Azhata",
              price: "₦150,000,000",
              variant: "Phase investment | Est. 32% ROI | 50 units",
              imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-house-design_23-2150666209.jpg?_wi=2",
              imageAlt: "Residential estates development",
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Clients Say"
          description="Real stories from satisfied clients who found their dream properties or made profitable investments through Vertexa."
          tag="Client Success"
          tagAnimation="slide-up"
          textboxLayout="split"
          useInvertedBackground={true}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Chidi Okafor",
              handle: "Property Investor",
              testimonial: "Vertexa helped me identify and secure a prime land investment in Abuja. Their market analysis was incredibly accurate, and I've already seen 25% appreciation in just 18 months. Highly professional team.",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-business-man-with-backpack_23-2149915912.jpg?_wi=1",
              imageAlt: "Chidi Okafor testimonial",
            },
            {
              id: "2",
              name: "Amara Eze",
              handle: "First-time Home Buyer",
              testimonial: "Finding my first home was stressful until I met Vertexa's team. They walked me through every step, negotiated the best price, and made the entire process transparent and smooth. I'm so happy with my new home.",
              imageSrc: "http://img.b2bpic.net/free-photo/confident-businesswoman-looking-camera-with-arm-crossed_23-2148187252.jpg?_wi=1",
              imageAlt: "Amara Eze testimonial",
            },
            {
              id: "3",
              name: "Tunde Lawal",
              handle: "Business Owner",
              testimonial: "I needed to sell my commercial property quickly. Vertexa's marketing strategy brought qualified buyers within weeks. They achieved my target price and handled all the legal complexities professionally.",
              imageSrc: "http://img.b2bpic.net/free-photo/businessman-with-tablet_1098-135.jpg?_wi=1",
              imageAlt: "Tunde Lawal testimonial",
            },
            {
              id: "4",
              name: "Zainab Ibrahim",
              handle: "Portfolio Manager",
              testimonial: "As someone managing multiple properties, Vertexa's management services are invaluable. Their tenant screening is thorough, maintenance response is quick, and financial reporting is detailed and transparent.",
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg?_wi=1",
              imageAlt: "Zainab Ibrahim testimonial",
            },
            {
              id: "5",
              name: "Emmanuel Obi",
              handle: "Real Estate Developer",
              testimonial: "Partnering with Vertexa for property valuation and market insights has been crucial for my development projects. Their data-driven approach helps me make confident investment decisions.",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beauty-businesswoman-leaning-against-brick-wall_613910-773.jpg?_wi=1",
              imageAlt: "Emmanuel Obi testimonial",
            },
            {
              id: "6",
              name: "Grace Adeleke",
              handle: "Estate Owner",
              testimonial: "Excellent service from consultation to property valuation. They provided a comprehensive market analysis and helped me understand the true value of my property. Truly impressive professionalism.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1651.jpg?_wi=1",
              imageAlt: "Grace Adeleke testimonial",
            },
          ]}
          speed={40}
          topMarqueeDirection="left"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Vertexa Impact by Numbers"
          tag="Trusted Performance"
          tagAnimation="slide-up"
          useInvertedBackground={false}
          metricsAnimation="slide-up"
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Properties Listed & Managed",
            },
            {
              id: "2",
              value: "₦2.5B+",
              description: "Transaction Value Facilitated",
            },
            {
              id: "3",
              value: "1,200+",
              description: "Satisfied Clients & Investors",
            },
            {
              id: "4",
              value: "32%",
              description: "Average Investment ROI",
            },
          ]}
        />
      </div>

      <div id="contact-form" data-section="contact-form">
        <ContactSplit
          tag="Free Consultation"
          title="Get Your Property Valuation"
          description="Let our experts estimate your property value and identify investment opportunities. Quick, accurate, and completely free."
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/calculator-compasses-near-blueprints_23-2147785563.jpg?_wi=1"
          imageAlt="Property valuation calculator"
          mediaAnimation="opacity"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Get Valuation"
          termsText="By submitting, you agree to receive property insights and consultation offers from Vertexa Real Estate."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Quick Links",
              items: [
                { label: "Home", href: "/" },
                { label: "Properties", href: "/properties" },
                { label: "Services", href: "/" },
                { label: "Investments", href: "/" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "/" },
                { label: "Our Team", href: "/" },
                { label: "Blog & Insights", href: "#blog" },
                { label: "Careers", href: "#careers" },
              ],
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "/" },
                { label: "FAQ", href: "#faq" },
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms & Conditions", href: "#terms" },
              ],
            },
            {
              title: "Get in Touch",
              items: [
                {
                  label: "Phone: 08112185706",
                  href: "tel:08112185706",
                },
                {
                  label: "Email: ognglobal02@gmail.com",
                  href: "mailto:ognglobal02@gmail.com",
                },
                { label: "Lincoln Campus, Azhata", href: "#address" },
                { label: "24/7 Support Available", href: "#support" },
              ],
            },
          ]}
          bottomLeftText="© 2024 Vertexa Real Estate. All rights reserved. Part of OGN Global Limited."
          bottomRightText="Transforming Real Estate in Nigeria"
        />
      </div>
    </ThemeProvider>
  );
}
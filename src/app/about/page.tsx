"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import Link from "next/link";
import {
  Home,
  TrendingUp,
  Building2,
  BarChart3,
  Briefcase,
  Hammer,
} from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Properties", id: "properties" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Investments", id: "investments" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Quick Links",
      items: [
        { label: "Home", href: "/" },
        { label: "Properties", href: "/#properties" },
        { label: "Services", href: "/services" },
        { label: "Investments", href: "/#investments" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about" },
        { label: "Blog & Insights", href: "#blog" },
        { label: "Careers", href: "#careers" },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "Contact Us", href: "#contact" },
        { label: "FAQ", href: "/#faq" },
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms & Conditions", href: "#terms" },
      ],
    },
    {
      title: "Get in Touch",
      items: [
        { label: "Phone: 08112185706", href: "tel:08112185706" },
        { label: "Email: ognglobal02@gmail.com", href: "mailto:ognglobal02@gmail.com" },
        { label: "Lincoln Campus, Azhata", href: "#address" },
        { label: "24/7 Support Available", href: "#support" },
      ],
    },
  ];

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
          button={{
            text: "08112185706",
            href: "tel:08112185706",
          }}
        />
      </div>

      <div id="services" data-section="services">
        <div className="mx-auto px-4 md:px-6">
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
      </div>

      <div id="metrics" data-section="metrics">
        <div className="mx-auto px-4 md:px-6">
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
      </div>

      <div id="testimonials" data-section="testimonials">
        <div className="mx-auto px-4 md:px-6">
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
                imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-business-man-with-backpack_23-2149915912.jpg?_wi=2",
                imageAlt: "Chidi Okafor testimonial",
              },
              {
                id: "2",
                name: "Amara Eze",
                handle: "First-time Home Buyer",
                testimonial: "Finding my first home was stressful until I met Vertexa's team. They walked me through every step, negotiated the best price, and made the entire process transparent and smooth. I'm so happy with my new home.",
                imageSrc: "http://img.b2bpic.net/free-photo/confident-businesswoman-looking-camera-with-arm-crossed_23-2148187252.jpg?_wi=2",
                imageAlt: "Amara Eze testimonial",
              },
              {
                id: "3",
                name: "Tunde Lawal",
                handle: "Business Owner",
                testimonial: "I needed to sell my commercial property quickly. Vertexa's marketing strategy brought qualified buyers within weeks. They achieved my target price and handled all the legal complexities professionally.",
                imageSrc: "http://img.b2bpic.net/free-photo/businessman-with-tablet_1098-135.jpg?_wi=2",
                imageAlt: "Tunde Lawal testimonial",
              },
              {
                id: "4",
                name: "Zainab Ibrahim",
                handle: "Portfolio Manager",
                testimonial: "As someone managing multiple properties, Vertexa's management services are invaluable. Their tenant screening is thorough, maintenance response is quick, and financial reporting is detailed and transparent.",
                imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg?_wi=2",
                imageAlt: "Zainab Ibrahim testimonial",
              },
              {
                id: "5",
                name: "Emmanuel Obi",
                handle: "Real Estate Developer",
                testimonial: "Partnering with Vertexa for property valuation and market insights has been crucial for my development projects. Their data-driven approach helps me make confident investment decisions.",
                imageSrc: "http://img.b2bpic.net/free-photo/portrait-beauty-businesswoman-leaning-against-brick-wall_613910-773.jpg?_wi=2",
                imageAlt: "Emmanuel Obi testimonial",
              },
              {
                id: "6",
                name: "Grace Adeleke",
                handle: "Estate Owner",
                testimonial: "Excellent service from consultation to property valuation. They provided a comprehensive market analysis and helped me understand the true value of my property. Truly impressive professionalism.",
                imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1651.jpg?_wi=2",
                imageAlt: "Grace Adeleke testimonial",
              },
            ]}
            speed={40}
            topMarqueeDirection="left"
          />
        </div>
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={footerColumns}
          bottomLeftText="© 2024 Vertexa Real Estate. All rights reserved. Part of OGN Global Limited."
          bottomRightText="Transforming Real Estate in Nigeria"
        />
      </div>
    </ThemeProvider>
  );
}
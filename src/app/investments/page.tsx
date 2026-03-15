"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function InvestmentsPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Properties", id: "properties" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Investments", id: "investments" },
    { name: "Contact", id: "contact" },
  ];

  const navItemsForFooter = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Services", href: "/services" },
    { label: "Investments", href: "/investments" },
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
          imageSrc="http://img.b2bpic.net/free-photo/concrete-building-with-balcony_250224-309.jpg"
          imageAlt="Premium property showcase"
          mediaAnimation="opacity"
          frameStyle="card"
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
              imageSrc: "http://img.b2bpic.net/free-photo/successful-businessman-suit-working-marketing-presentation-sitting-bech-outside-front-corporate-building-office-executive-manager-searching-information-internet_482257-30496.jpg",
              imageAlt: "Land development investment opportunity",
            },
            {
              id: "inv-2",
              name: "Commercial Complex - Kuje",
              price: "₦95,000,000",
              variant: "3-5 years | Est. 28% ROI | Mixed-use",
              imageSrc: "http://img.b2bpic.net/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-341.jpg",
              imageAlt: "Commercial complex investment",
            },
            {
              id: "inv-3",
              name: "Residential Estates - Azhata",
              price: "₦150,000,000",
              variant: "Phase investment | Est. 32% ROI | 50 units",
              imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-house-design_23-2150666209.jpg",
              imageAlt: "Residential estates development",
            },
          ]}
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

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Quick Links",
              items: [
                { label: "Home", href: "/" },
                { label: "Properties", href: "/properties" },
                { label: "Services", href: "/services" },
                { label: "Investments", href: "/investments" },
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
                { label: "Contact Us", href: "/contact" },
                { label: "FAQ", href: "#faq" },
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
          ]}
          bottomLeftText="© 2024 Vertexa Real Estate. All rights reserved. Part of OGN Global Limited."
          bottomRightText="Transforming Real Estate in Nigeria"
        />
      </div>
    </ThemeProvider>
  );
}
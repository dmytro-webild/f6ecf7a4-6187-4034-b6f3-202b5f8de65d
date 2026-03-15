"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Home, TrendingUp, Building2 } from "lucide-react";

export default function PropertiesPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Properties", id: "properties" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Investments", id: "investments" },
    { name: "Contact", id: "contact" },
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

      <div id="properties-listing" data-section="properties-listing">
        <ProductCardFour
          title="Browse Our Complete Property Portfolio"
          description="Explore our extensive collection of premium properties available for sale, rent, or investment. From luxury apartments to commercial spaces and development land, find your next opportunity."
          tag="Complete Listings"
          tagAnimation="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          carouselMode="buttons"
          products={[
            {
              id: "prop-1",
              name: "Luxury Apartment - Abuja",
              price: "₦75,000,000",
              variant: "3 Bed | 3 Bath | Premium Finish",
              imageSrc: "http://img.b2bpic.net/free-photo/high-end-modern-apartment-with-home-office-desk-used-remote-job_482257-120652.jpg",
              imageAlt: "Luxury apartment in Abuja",
            },
            {
              id: "prop-2",
              name: "Modern Complex - Lagos",
              price: "₦120,000,000",
              variant: "4 Bed | 4 Bath | Modern Design",
              imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-house-design_23-2150666209.jpg",
              imageAlt: "Modern complex in Lagos",
            },
            {
              id: "prop-3",
              name: "Premium Villa - Lekki",
              price: "₦180,000,000",
              variant: "5 Bed | 5 Bath | Exclusive Area",
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-traveling-without-covid_23-2149077831.jpg",
              imageAlt: "Premium villa in Lekki",
            },
            {
              id: "prop-4",
              name: "Commercial Space - Wuse",
              price: "₦55,000,000",
              variant: "Office | 2,500 sqft | Prime Location",
              imageSrc: "http://img.b2bpic.net/free-photo/concrete-building-with-balcony_250224-309.jpg",
              imageAlt: "Commercial space in Wuse",
            },
          ]}
        />
      </div>

      <div id="property-types" data-section="property-types">
        <FeatureBorderGlow
          title="Property Types We Offer"
          description="Discover the diverse range of properties available through Vertexa. Whether you're seeking residential comfort, commercial opportunity, or investment potential, we have the perfect property for you."
          tag="Property Categories"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          features={[
            {
              icon: Home,
              title: "Residential Properties",
              description: "From cozy apartments to sprawling villas, find your perfect home in premium neighborhoods across Nigeria's top cities.",
            },
            {
              icon: Building2,
              title: "Commercial Spaces",
              description: "Office spaces, retail shops, and business centers located in high-traffic areas perfect for entrepreneurial ventures.",
            },
            {
              icon: TrendingUp,
              title: "Investment Land",
              description: "Strategic land parcels with strong appreciation potential in emerging and established real estate markets.",
            },
          ]}
        />
      </div>

      <div id="property-faq" data-section="property-faq">
        <FaqBase
          title="Property Search FAQs"
          description="Quick answers to help you navigate our property listings and find the perfect property that matches your needs and budget."
          tag="Property Questions"
          tagAnimation="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "How do I filter properties by price and location?",
              content: "Use our advanced search filters to narrow down properties by price range, location, property type, and amenities. You can also save your search preferences for future browsing.",
            },
            {
              id: "2",
              title: "Can I schedule a property viewing?",
              content: "Yes! Click the 'Schedule Viewing' button on any property listing. You can choose your preferred date and time, and our team will confirm within 24 hours.",
            },
            {
              id: "3",
              title: "What financing options are available?",
              content: "We partner with leading banks and financial institutions to offer competitive mortgage rates. Our team can guide you through the financing process and help you get pre-approved.",
            },
            {
              id: "4",
              title: "Are all properties ready for immediate occupancy?",
              content: "Most properties are ready for occupancy. However, some may be under construction or available for pre-booking. Property listings clearly indicate the availability status.",
            },
            {
              id: "5",
              title: "How can I make an offer on a property?",
              content: "Contact our sales team directly through the property listing, and they'll guide you through the offer process. We handle negotiations and legal documentation professionally.",
            },
            {
              id: "6",
              title: "What's included in the property price?",
              content: "Property prices typically include the land and structure. Additional items like furnishings, parking, and utilities may be listed separately. Check each property description for complete details.",
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
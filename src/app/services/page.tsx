"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import Link from "next/link";

export default function ServicesPage() {
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

      <div id="featured-properties" data-section="featured-properties">
        <div className="mx-auto px-4 md:px-6">
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
                imageSrc: "http://img.b2bpic.net/free-photo/high-end-modern-apartment-with-home-office-desk-used-remote-job_482257-120652.jpg?_wi=3",
                imageAlt: "Luxury apartment in Abuja",
              },
              {
                id: "prop-2",
                name: "Modern Complex - Lagos",
                price: "₦120,000,000",
                variant: "4 Bed | 4 Bath | Modern Design",
                imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-house-design_23-2150666209.jpg?_wi=4",
                imageAlt: "Modern complex in Lagos",
              },
              {
                id: "prop-3",
                name: "Premium Villa - Lekki",
                price: "₦180,000,000",
                variant: "5 Bed | 5 Bath | Exclusive Area",
                imageSrc: "http://img.b2bpic.net/free-photo/young-woman-traveling-without-covid_23-2149077831.jpg?_wi=3",
                imageAlt: "Premium villa in Lekki",
              },
            ]}
          />
        </div>
      </div>

      <div id="faq" data-section="faq">
        <div className="mx-auto px-4 md:px-6">
          <FaqBase
            title="Frequently Asked Questions"
            description="Find answers to common questions about buying, selling, renting, and investing in real estate with Vertexa."
            tag="Common Questions"
            tagAnimation="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            faqsAnimation="slide-up"
            showCard={true}
            faqs={[
              {
                id: "1",
                title: "How accurate is your property valuation?",
                content: "Our valuations use advanced market analytics, comparable property data, and current market trends. We typically achieve 95%+ accuracy alignment with independent appraisals. Factors like location, condition, amenities, and market timing are all carefully analyzed.",
              },
              {
                id: "2",
                title: "What's the typical timeline for selling a property through Vertexa?",
                content: "Most properties sell within 4-12 weeks, depending on market conditions, price point, and property type. Our professional marketing and qualified buyer network accelerate the process. Premium properties often sell faster due to higher demand.",
              },
              {
                id: "3",
                title: "Do you offer rental property management?",
                content: "Yes. We provide comprehensive management including tenant screening, rent collection, maintenance coordination, legal compliance, and detailed financial reporting. Our services ensure maximum returns and minimum hassle for property owners.",
              },
              {
                id: "4",
                title: "What investment returns can I realistically expect?",
                content: "Real estate ROI varies by location, property type, and market conditions. Our investment properties typically deliver 25-40% returns over 3-5 years. We provide detailed projections and market analysis before recommending any investment.",
              },
              {
                id: "5",
                title: "How do I apply for a property loan through Vertexa?",
                content: "We partner with leading financial institutions to offer competitive mortgage rates. Our team assists with loan applications, documentation, and negotiation. We handle the process to make financing smooth and transparent for buyers.",
              },
              {
                id: "6",
                title: "Are there additional fees beyond the listed property price?",
                content: "Transparency is our priority. We clearly outline all fees upfront including valuation fees, legal documentation, and agent commission. There are no hidden charges. All costs are explained in writing before proceeding with any transaction.",
              },
            ]}
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
"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="animatedGrid"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634837101-efkd7f2b.jpg"
          logoAlt="Coffee Shop Logo"
          brandName="Brew Haven"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Discover Your Perfect Cup"
          description="Welcome to Brew Haven - where premium coffee meets warm hospitality. Handcrafted beverages made with passion and the finest beans."
          tag="Premium Coffee Experience"
          tagIcon={Star}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634838357-o6c561jh.jpg",
              imageAlt: "Premium latte with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634839631-vavalboo.jpg",
              imageAlt: "Modern coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634840907-2nmn2bis.jpg",
              imageAlt: "Professional espresso machine"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634842229-ozmril8e.jpg",
              imageAlt: "Barista pouring fresh coffee"
            }
          ]}
          buttons={[
            { text: "Order Now", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Award-Winning Menu"
          description="Discover our customer-rated specialty coffee drinks, each crafted to perfection by our expert baristas"
          tag="★★★★★ Rated"
          products={[
            {
              id: "1",
              name: "Classic Espresso",
              price: "$3.50 ★★★★★",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634845918-i2mfjcop.jpg",
              imageAlt: "Single shot espresso"
            },
            {
              id: "2",
              name: "Silky Cappuccino",
              price: "$5.00 ★★★★★",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634846925-l03vkbkp.jpg",
              imageAlt: "Creamy cappuccino"
            },
            {
              id: "3",
              name: "Cold Brew Delight",
              price: "$4.50 ★★★★★",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634849019-qgsa8vmz.jpg",
              imageAlt: "Refreshing cold brew"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="About Brew Haven"
          title="Our Story & Mission"
          description="Since 2015, we've been dedicated to sourcing the finest coffee beans from sustainable farms around the world. Our baristas are passionate about craft, perfecting each cup to bring you an unforgettable experience."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634843373-mwehuqsd.jpg",
            imageAlt: "Coffee shop ordering app"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634844583-nef0iy7l.jpg",
            imageAlt: "Coffee menu app interface"
          }}
          buttons={[
            { text: "Visit Us", href: "contact" },
            { text: "See Our Story", href: "about" }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real stories from people who love Brew Haven"
          tag="Customer Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Anderson",
              role: "Local Regular",
              company: "Daily Visitor",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634850328-rxvmib28.jpg",
              imageAlt: "Sarah Anderson smiling"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Coffee Enthusiast",
              company: "Specialty Roaster",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634851435-pnj3wt0a.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Student",
              company: "Local University",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634852755-huvipxra.jpg",
              imageAlt: "Emma Rodriguez smiling"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Owner",
              company: "Downtown Office",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634854133-mrtvg8b8.jpg",
              imageAlt: "David Kim portrait"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join Our Coffee Community"
          description="Subscribe to our newsletter for exclusive deals, new menu items, and coffee brewing tips delivered to your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763634855602-slf7r2vd.jpg"
          imageAlt="Cozy coffee shop interior"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Coffee",
              items: [
                { label: "Menu", href: "products" },
                { label: "Our Story", href: "about" },
                { label: "Locations", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            }
          ]}
          logoText="Brew Haven"
          copyrightText="© 2025 Brew Haven Coffee. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
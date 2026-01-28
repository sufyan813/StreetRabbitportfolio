import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Video, PenTool, Palette, Monitor } from "lucide-react";
/**
 
 */

export default function Home() {
  const [activePortfolioIndex, setActivePortfolioIndex] = useState(0);useEffect(() => {
  const interval = setInterval(() => {
    setActivePortfolioIndex((prev) => {
      const next = prev === portfolioItems.length - 1 ? 0 : prev + 1;
      console.log("SLIDE:", next); // <-- debug, you WILL see this
      return next;
    });
  }, 3000); // 3 seconds (faster so you notice)

  return () => clearInterval(interval);
}, []);

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity",
      image: "/images/portfolio-video-editing.jpg",
      description: "Understand brand identity, research competitors, and sketch concepts on paper.",
    },
    {
      id: 2,
      title: "Illustration",
      image: "/images/portfolio-illustration.jpg",
      description: "Hand-crafted visual narratives",
    },
    {
      id: 3,
      title: "Graphic Design",
      image: "/images/portfolio-design.jpg",
      description: "Bold visual identities and layouts",
    },
    {
      id: 4,
      title: "Web Design",
      image: "/images/portfolio-websites.jpg",
      description: "Digital experiences that captivate",
    },
  ];

  const services = [
  {
    title: "Video Editing",
    description: "Professional post-production and cinematic storytelling",
    icon: Video,
  },
  {
    title: "Illustration",
    description: "Custom visual art and character design",
    icon: PenTool,
  },
  {
    title: "Graphic Design",
    description: "Brand identity and visual communication",
    icon: Palette,
  },
  {
    title: "Web Design",
    description: "Premium digital experiences and interfaces",
    icon: Monitor,
  },
];


  const skills = [
    "Adobe Creative Suite",
    "Motion Graphics",
    "Brand Strategy",
    "UI/UX Design",
    "Photography Direction",
    "Art Direction",
    "Concept Development",
    "Digital Storytelling",
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
        
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getSectionAnimation = (sectionId: string, index: number = 0) => {
    if (!visibleSections.has(sectionId)) return "";
    const delays = ["", "animate-delay-100", "animate-delay-200", "animate-delay-300"];
    return `animate-fade-in-up ${delays[index] || ""}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-900">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3 animate-fade-in">
            <img
              src="/images/logo-rabbit.png"
              alt="Street Rabbit Logo"
              className="w-8 h-8 animate-scale-in"
            />
            <span className="text-lg font-bold tracking-wider animate-slide-in-left">STREET RABBIT</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm tracking-wide hover:text-pink-600 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-sm tracking-wide hover:text-pink-600 transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wide hover:text-pink-600 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-abstract-pink.jpg')",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />

        <div className="relative z-10 container text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fade-in">
           <div className="inline-block px-4 py-2 border border-pink-600 mb-6 rounded-full animate-scale-in animate-delay-100">
              <span className="text-xs tracking-widest text-pink-600 font-semibold">CREATIVE EXCELLENCE</span>
            </div>
          </div>

          <h1 className="mb-6 leading-tight animate-fade-in-up animate-delay-200">
            NOT LOUD.
            <br />
            <span className="text-pink-600">JUST RIGHT.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
            I believe design is a tool for communication, not decoration.
            My work focuses on stripping away the noise to find the core message.
          
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
<a
  href="#contact"
  className="btn-primary rounded-full px-8 py-4 text-lg inline-flex items-center justify-center"
>
  Start Your Project
  <ChevronRight className="ml-2 w-4 h-4" />
</a>

<a
  href="#portfolio"
  className="btn-secondary rounded-full px-8 py-4 text-lg border-2 inline-flex items-center justify-center"
>
  <Play className="mr-2 w-4 h-4" />
  View Our Work
</a>

          </div>
        </div>

    {/* Subtle energy trace */}
<div className="absolute bottom-16 left-0 w-full overflow-hidden pointer-events-none">
  <div className="h-[2px] w-1/3 bg-gradient-to-r from-transparent via-pink-600 to-transparent animate-energy-sweep opacity-60" />
</div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current["about"] = el;
        }}
        id="about"
        className="section-spacing bg-black border-t border-gray-900"
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={getSectionAnimation("about")}>
              <div className="geometric-divider mb-8" />
              <h2 className="mb-6">Muhammad Sufian</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Street Rabbit Studio is a collective of bold creatives dedicated to pushing boundaries. We don't follow
                trends—we set them. Every project is an opportunity to create something extraordinary.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With expertise spanning video production, illustration, graphic design, and web development, we bring
                multidisciplinary excellence to every creative challenge.
              </p>
              <div className="flex gap-8">
                <div className="premium-hover">
                  <p className="text-3xl font-bold text-pink-600">50+</p>
                  <p className="text-sm text-gray-400 mt-2">Projects Delivered</p>
                </div>
                <div className="premium-hover">
                  <p className="text-3xl font-bold text-pink-600">8+</p>
                  <p className="text-sm text-gray-400 mt-2">Years Experience</p>
                </div>
              </div>
            </div>
            <div
 className="relative h-96 overflow-hidden border border-gray-800 rounded-2xl"


>
 <img
  src="/images/about.jpg"
  alt="Street Rabbit Studio"
  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
/>

  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-black/40" />
</div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current["services"] = el;
        }}
        id="services"
        className="section-spacing bg-black border-t border-gray-900"
      >
        <div className="container">
          <div className={`mb-16 ${getSectionAnimation("services")}`}>
            <div className="geometric-divider mb-8" />
            <h2>Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-8 border border-gray-800 hover:border-pink-600 transition-all duration-500 hover:bg-gray-950 card-hover ${getSectionAnimation("services", index)}`}
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-pink-600/10 border border-pink-600/30 transition-all duration-500 group-hover:bg-pink-600">
  <service.icon className="w-6 h-6 text-pink-600 group-hover:text-black transition-colors duration-300" />
</div>

                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current["portfolio"] = el;
        }}
        id="portfolio"
        className="section-spacing bg-black border-t border-gray-900"
      >
        <div className="container">
          <div className={`mb-16 ${getSectionAnimation("portfolio")}`}>
            <div className="geometric-divider mb-8" />
            <h2>Featured Work</h2>
          </div>

          {/* Main Portfolio Slider */}
          <div className={`mb-12 ${getSectionAnimation("portfolio")}`}>
            <div className="relative h-96 md:h-[500px] lg:h-[600px] bg-gray-900 overflow-hidden border border-gray-800 mb-8 rounded-2xl premium-hover">
             <div
  className="flex h-full transition-transform duration-700 ease-in-out"
  style={{
    transform: `translateX(-${activePortfolioIndex * 100}%)`,
  }}
>
  {portfolioItems.map((item, index) => (
    <div key={index} className="min-w-full h-full">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover "
      />
    </div>
  ))}
</div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 ">
                  {portfolioItems[activePortfolioIndex].title}
                </h3>
                <p className="text-gray-300">{portfolioItems[activePortfolioIndex].description}</p>
              </div>
            </div>

            {/* Portfolio Navigation */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {portfolioItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActivePortfolioIndex(index)}
                  className={`flex-shrink-0 h-24 w-32 border-2 transition-all duration-500 premium-hover ${
                    activePortfolioIndex === index
                      ? "border-pink-600 scale-105"
                      : "border-gray-800 hover:border-gray-600"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <div className={`text-center ${getSectionAnimation("portfolio")}`}>
            <button className="btn-secondary premium-hover">
              View Complete Portfolio
              <ChevronRight className="inline ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current["skills"] = el;
        }}
        id="skills"
        className="section-spacing bg-black border-t border-gray-900"
      >
        <div className="container">
          <div className={`mb-16 ${getSectionAnimation("skills")}`}>
            <div className="geometric-divider mb-8" />
            <h2>Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 border border-gray-800 hover:border-pink-600/50 transition-all duration-500 group card-hover ${getSectionAnimation("skills", index)}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink-600 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <p className="font-semibold tracking-wide">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current["cta"] = el;
        }}
        id="cta"
        className="section-spacing bg-black border-t border-gray-900"
      >
        <div className="container">
          <div className={`relative p-16 md:p-24 border border-gray-800 overflow-hidden ${getSectionAnimation("cta")}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-transparent" />
            <div className="relative z-10 max-w-2xl">
              <div className="geometric-divider mb-8" />
              <h2 className="mb-6">Ready to Create Something Bold?</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Let's collaborate on your next project. We work with brands and creators who demand excellence.
              </p>
              <button className="btn-primary premium-hover">
                Get In Touch
                <ChevronRight className="inline ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current["contact"] = el;
        }}
        id="contact"
        className="section-spacing bg-black border-t border-gray-900"
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div className={getSectionAnimation("contact")}>
              <div className="geometric-divider mb-8" />
              <h2 className="mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="premium-hover">
                  <p className="text-sm text-gray-400 mb-2 tracking-widest">EMAIL</p>
                  <a
                    href="mailto:hello@streetrabbit.studio"
                    className="text-lg hover:text-pink-600 transition-colors duration-300"
                  >
                    hello@streetrabbit.studio
                  </a>
                </div>
                <div className="premium-hover">
                  <p className="text-sm text-gray-400 mb-2 tracking-widest">PHONE</p>
                  <a
                    href="tel:+1234567890"
                    className="text-lg hover:text-pink-600 transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="premium-hover">
                  <p className="text-sm text-gray-400 mb-2 tracking-widest">LOCATION</p>
                  <p className="text-lg">New York, NY</p>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${getSectionAnimation("contact")}`}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-3 bg-gray-950 border border-gray-800 focus:border-pink-600 outline-none transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-3 bg-gray-950 border border-gray-800 focus:border-pink-600 outline-none transition-colors duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-3 bg-gray-950 border border-gray-800 focus:border-pink-600 outline-none transition-colors duration-300 resize-none"
              />
              <button className="btn-primary w-full premium-hover">Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <img src="/images/logo-rabbit.png" alt="Street Rabbit Logo" className="w-6 h-6" />
              <span className="font-bold tracking-wider">STREET RABBIT STUDIO</span>
            </div>
            <p className="text-gray-400 text-sm">© 2026 Street Rabbit Studio. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors duration-300 text-sm">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors duration-300 text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors duration-300 text-sm">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

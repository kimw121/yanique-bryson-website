
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const experience = [
  {
    number: "01",
    role: "Retail Lead Associate",
    company: "Amazon",
    location: "Palm Beach, Florida / UC Campus",
    period: "May 2025 – Present",
    description:
      "Utilize inventory management systems to scan, process, and track products. Assist customers, resolve inquiries, support team operations, and maintain workplace safety and quality standards.",
    transfer:
      "Transferred to Amazon’s BEK1 facility at the UC Campus in August 2025.",
    highlights: [
      "Retail Operations",
      "Inventory Management",
      "Customer Experience",
      "Team Leadership",
    ],
  },
  {
    number: "02",
    role: "Mail Sorter",
    company: "FedEx",
    location: "West Palm Beach, Florida",
    period: "May 2025 – August 2025",
    description:
      "Sorted and distributed incoming and outgoing mail and packages. Ensured accurate routing and timely shipment processing, verified delivery information, and maintained organized mailroom operations in a high-volume environment.",
    highlights: [
      "Mail Distribution",
      "Logistics",
      "Shipment Processing",
    ],
  },
  {
    number: "03",
    role: "Storage Consultant",
    company: "Value Store It Self Storage",
    location: "Lake Worth, Florida",
    period: "January 2025 – March 2025",
    description:
      "Processed customer payments, deposits, and account transactions. Maintained accurate records using QuickBooks, assisted customers with rentals and account inquiries, and supported sales and administrative operations.",
    highlights: [
      "QuickBooks",
      "Customer Relations",
      "Administration",
    ],
  },
  {
    number: "04",
    role: "Marketing Representative / Territory Manager",
    company: "Mosaic (Moët Hennessy North America)",
    location: "Palm Beach, Florida",
    period: "October 2020 – March 2025",
    description:
      "Managed merchandising and product displays across multiple retail locations. Maintained inventory reports and market surveys, built strong relationships with retail partners, and conducted product training and promotional activities.",
    highlights: [
      "Marketing",
      "Merchandising",
      "Retail Partnerships",
      "Product Training",
    ],
  },
  {
    number: "05",
    role: "Inventory Control Manager",
    company: "Earth Fare",
    location: "Boynton Beach, Florida",
    period: "January 2019 – March 2020",
    description:
      "Managed inventory records and investigated discrepancies. Conducted stock audits, maintained accurate stock levels, processed damaged goods, and improved inventory accuracy through detailed reporting and record-keeping.",
    highlights: [
      "Inventory Audits",
      "Stock Control",
      "Reporting",
    ],
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Operations & Logistics",
    skills: [
      "Inventory Control",
      "Shipping & Receiving",
      "Mail Sorting & Distribution",
      "Records Management",
      "Operational Efficiency",
    ],
  },
  {
    number: "02",
    title: "Business & Administration",
    skills: [
      "Microsoft Office",
      "QuickBooks",
      "Data Entry",
      "Document Management",
      "Administrative Support",
    ],
  },
  {
    number: "03",
    title: "People & Leadership",
    skills: [
      "Customer Service",
      "Team Leadership",
      "Communication",
      "Problem Resolution",
      "Time Management",
    ],
  },
];

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Education", href: "#education" },
];

const resumeUrl = "/yanique-bryson-resume.pdf";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));

    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F7F2] text-[#263C32]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#DDE4DA] bg-[#F8F7F2]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#home"
            className="font-serif text-2xl font-semibold tracking-tight"
          >
            Yanique
            <span className="text-[#8BA994]">.</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#52675A] transition hover:text-[#8BA994]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-[#294B39] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#456B53]"
            >
              Let&apos;s Connect ↗
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="rounded-full border border-[#D4DED3] px-5 py-2 text-sm lg:hidden"
          >
            {menuOpen ? "Close ✕" : "Menu ☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-[#DDE4DA] bg-[#F8F7F2] px-6 py-7 lg:hidden">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-[#456B53]"
            >
              Contact Me ↗
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative scroll-mt-24 overflow-hidden"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#E8EFE5] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">
          <div className="hero-enter">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#D4E0D2] bg-white/70 px-5 py-3">
              <span className="h-2 w-2 rounded-full bg-[#84A98B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#65806B]">
                Professional Portfolio
              </span>
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#789682]">
              Welcome, I&apos;m
            </p>

            <h1 className="mb-7 font-serif text-6xl leading-[1.04] tracking-tight sm:text-7xl xl:text-8xl">
              Yanique
              <br />
              <span className="italic text-[#789A82]">
                Bryson.
              </span>
            </h1>

            <div className="mb-7 h-1 w-20 rounded-full bg-[#9EBBA5]" />

            <h2 className="mb-6 max-w-xl text-xl font-medium leading-relaxed sm:text-2xl">
              Bringing people, organization, and operations
              together.
            </h2>

            <p className="mb-9 max-w-xl text-base leading-8 text-[#65786A] sm:text-lg">
              A versatile professional with experience in
              customer service, retail leadership, logistics,
              inventory management, marketing, and
              administration. Committed to accuracy,
              efficiency, and exceptional customer
              experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full bg-[#294B39] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#294B39]/10 transition hover:-translate-y-1 hover:bg-[#456B53]"
              >
                Explore My Experience ↗
              </a>

              <a
                href={resumeUrl}
                download="Yanique_Bryson_Resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-[#91A796] bg-white px-7 py-4 text-sm font-semibold transition hover:-translate-y-1 hover:bg-[#E8EFE7]"
              >
                ↓ Download Résumé
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-wider text-[#718575]">
              <span>Oakland, California</span>
              <span className="text-[#A5BAAA]">✦</span>
              <span>Operations</span>
              <span className="text-[#A5BAAA]">✦</span>
              <span>Leadership</span>
            </div>
          </div>

          {/* PORTRAIT */}
          <div className="hero-enter relative mx-auto w-full max-w-md">
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[45px] bg-[#D7E5D8]" />

            <div className="absolute -left-5 top-12 h-32 w-32 rounded-full border border-[#A3B9A5]" />

            <div className="relative overflow-hidden rounded-[45px] border-[8px] border-white bg-[#E8E8E1] shadow-2xl shadow-[#294B39]/15">
              <Image
                src="/yanique.jpg"
                alt="Professional portrait of Yanique Bryson"
                width={1000}
                height={1200}
                priority
                className="h-[480px] w-full object-cover object-top transition duration-700 hover:scale-105 sm:h-[570px]"
              />
            </div>

            <div className="absolute -bottom-8 left-3 right-3 rounded-2xl border border-[#E3EAE0] bg-white/95 px-6 py-5 shadow-xl backdrop-blur sm:-left-8 sm:right-auto">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#789682]">
                Professional Focus
              </p>
              <p className="font-serif text-xl">
                Service. Leadership. Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES STRIP */}
      <section className="mt-12 border-y border-[#E0E8DD] bg-[#EDF2E9] px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#607B67]">
          <span>Customer Experience</span>
          <span>✦</span>
          <span>Business Operations</span>
          <span>✦</span>
          <span>Inventory Management</span>
          <span>✦</span>
          <span>Team Leadership</span>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="scroll-mt-24 px-6 py-28 lg:px-12"
      >
        <div className="reveal mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="section-label">
              01 / Introduction
            </p>

            <h2 className="section-heading">
              A little
              <br />
              <span className="italic text-[#85A18B]">
                about me.
              </span>
            </h2>
          </div>

          <div>
            <p className="mb-7 font-serif text-2xl leading-relaxed sm:text-3xl">
              I believe that great work begins with
              dedication, thoughtful communication, and
              attention to detail.
            </p>

            <p className="mb-6 text-base leading-9 text-[#64776B]">
              My professional journey spans retail,
              logistics, marketing, administration, and
              inventory management. These experiences have
              strengthened my ability to support teams,
              manage responsibilities, and provide consistent
              service in demanding environments.
            </p>

            <p className="text-base leading-9 text-[#64776B]">
              I bring a practical, organized, and
              solutions-oriented approach to my work.
              Whether managing inventory records, helping
              customers, supporting associates, or
              maintaining efficient operations, I strive
              to contribute positively to the organizations
              I serve.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#7C9A83] pb-2 text-sm font-semibold text-[#365D42] transition hover:gap-5"
            >
              Connect With Me <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section
        id="experience"
        className="scroll-mt-24 bg-[#EAF0E8] px-6 py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="section-label">
                02 / Professional Journey
              </p>

              <h2 className="section-heading">
                Experience{" "}
                <span className="italic text-[#85A18B]">
                  that matters.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-base leading-7 text-[#687B6D]">
              Experience across customer-facing,
              operational, administrative, and
              leadership roles.
            </p>
          </div>

          <div className="relative space-y-7">
            <div className="absolute bottom-10 left-5 top-10 hidden w-px bg-[#C6D5C6] md:block" />

            {experience.map((job) => (
              <article
                key={job.number}
                className="reveal relative md:pl-16"
              >
                <div className="absolute left-2 top-9 z-10 hidden h-7 w-7 rounded-full border-[7px] border-[#EAF0E8] bg-[#74967C] md:block" />

                <div className="rounded-[28px] border border-[#DAE5D9] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#ABC6AE] hover:shadow-xl hover:shadow-[#294B39]/5 sm:p-9">
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#94AD98]">
                        {job.number} / EXPERIENCE
                      </p>

                      <h3 className="mb-2 font-serif text-2xl font-semibold sm:text-3xl">
                        {job.role}
                      </h3>

                      <p className="font-semibold text-[#61836A]">
                        {job.company}
                      </p>

                      <p className="mt-2 text-sm text-[#87958A]">
                        {job.location}
                      </p>
                    </div>

                    <span className="rounded-full bg-[#EFF4ED] px-4 py-2 text-xs font-semibold text-[#607967]">
                      {job.period}
                    </span>
                  </div>

                  <p className="max-w-4xl leading-8 text-[#65766A]">
                    {job.description}
                  </p>

                  {/* AMAZON BEK1 TRANSFER */}
                  {job.transfer && (
                    <p className="mt-4 max-w-4xl leading-8 text-[#65766A]">
                      {job.transfer}
                    </p>
                  )}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {job.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-[#DEE9DD] px-4 py-2 text-xs font-medium text-[#5D7D65]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section
        id="expertise"
        className="scroll-mt-24 px-6 py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14">
            <p className="section-label">
              03 / What I Bring
            </p>

            <h2 className="section-heading">
              Skills &{" "}
              <span className="italic text-[#85A18B]">
                expertise.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-[#65776A]">
              A combination of technical abilities,
              interpersonal strengths, and operational
              experience developed across different
              industries.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="reveal rounded-[30px] border border-[#DFE7DC] bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F0E6] font-serif text-xl text-[#51765A]">
                    {group.number}
                  </div>

                  <span className="text-xl text-[#8BA994]">
                    ✦
                  </span>
                </div>

                <h3 className="mb-7 font-serif text-2xl">
                  {group.title}
                </h3>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 border-b border-[#EEF1EC] pb-3 text-sm text-[#65776A]"
                    >
                      <span className="text-[#7FA588]">
                        ✓
                      </span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* EDUCATION AND CERTIFICATIONS */}
<section
  id="education"
  className="scroll-mt-24 bg-[#EAF0E8] px-6 py-28 lg:px-12"
>
  <div className="mx-auto max-w-7xl">
    <div className="reveal mb-14">
      <p className="section-label">
        04 / Academic Background
      </p>

      <h2 className="section-heading">
        Education &{" "}
        <span className="italic text-[#85A18B]">
          credentials.
        </span>
      </h2>
    </div>

    <div className="grid gap-7 lg:grid-cols-2">
      {/* EDUCATION CARD */}
      <div className="reveal rounded-[30px] bg-white p-8 shadow-sm sm:p-10">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9F0E7] text-2xl">
            🎓
          </div>

          <h3 className="font-serif text-2xl">
            Education
          </h3>
        </div>

        <div className="border-l-2 border-[#B8CEB9] pl-6">
          {/* BERKELEY CITY COLLEGE */}
          <div className="mb-9">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#8BA994]">
              2026 · Pending
            </p>

            <h4 className="mb-2 text-lg font-semibold">
              Associate Degree in MM/VI Film,
              Television-TR (AST)
            </h4>

            <p className="text-sm leading-7 text-[#69796D]">
              Berkeley City College
              <br />
              Berkeley, California
            </p>
          </div>

          {/* BERKELEY ADULT SCHOOL */}
          <div className="mb-9">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#8BA994]">
              2026 · Completed
            </p>

            <h4 className="mb-2 text-lg font-semibold">
              High School Diploma
            </h4>

            <p className="text-sm leading-7 text-[#69796D]">
              Berkeley Adult School
              <br />
              Berkeley, California
            </p>
          </div>

          {/* MONTEGO BAY COMMUNITY COLLEGE */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#8BA994]">
              2011
            </p>

            <h4 className="mb-2 text-lg font-semibold">
              Associate Degree in Arts and Humanities
            </h4>

            <p className="text-sm leading-7 text-[#69796D]">
              Montego Bay Community College
              <br />
              Jamaica
            </p>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS CARD */}
      <div className="reveal rounded-[30px] bg-white p-8 shadow-sm sm:p-10">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9F0E7] text-2xl">
            ✧
          </div>

          <h3 className="font-serif text-2xl">
            Certifications
          </h3>
        </div>

        <div className="space-y-7">
          <div className="border-b border-[#E6ECE3] pb-7">
            <h4 className="mb-2 text-lg font-semibold">
              Licensed Liquor Salesperson
            </h4>

            <p className="text-sm text-[#69796D]">
              Florida
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-lg font-semibold">
              WSET Level 1 Award in Spirits
            </h4>

            <p className="text-sm text-[#69796D]">
              Professional Certification
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* DOWNLOAD RESUME SECTION */}
      <section className="px-6 py-24 lg:px-12">
        <div className="reveal mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[35px] bg-[#E5EEE3] p-9 lg:flex-row lg:items-center lg:p-14">
          <div>
            <p className="section-label">
              Explore My Background
            </p>

            <h2 className="mb-4 font-serif text-3xl sm:text-4xl">
              Want the full picture?
            </h2>

            <p className="max-w-xl leading-8 text-[#65776A]">
              Download my updated résumé for a detailed
              overview of my professional experience,
              qualifications, and technical skills.
            </p>
          </div>

          <a
            href={resumeUrl}
            download="Yanique_Bryson_Resume.pdf"
            className="shrink-0 rounded-full bg-[#294B39] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#456B53]"
          >
            ↓ Download My Résumé
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden bg-[#294B39] px-6 py-28 text-white lg:px-12"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />

        <div className="reveal relative mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#BED3BE]">
              05 / Get In Touch
            </p>

            <h2 className="mb-7 font-serif text-5xl leading-tight sm:text-6xl">
              Let&apos;s create
              <br />
              <span className="italic text-[#B5D0B7]">
                new opportunities.
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-8 text-[#D6E4D7]">
              I welcome opportunities to connect with
              employers and organizations seeking a
              dedicated, adaptable, and experienced
              professional. I look forward to hearing
              from you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* EMAIL */}
            <a
              href="mailto:ybryson9@gmail.com"
              className="group rounded-[28px] border border-white/20 bg-white/10 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white/20 sm:p-10"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                  ✉
                </span>
                <span className="text-2xl">↗</span>
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C1D8C4]">
                Send an Email
              </p>

              <h3 className="break-all font-serif text-xl sm:text-2xl">
                ybryson9@gmail.com
              </h3>

              <p className="mt-5 text-sm text-[#D1E0D2]">
                Click here to get in touch
              </p>
            </a>

            {/* PHONE */}
            <a
              href="tel:+15613657585"
              className="group rounded-[28px] border border-white/20 bg-white/10 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white/20 sm:p-10"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                  ☎
                </span>
                <span className="text-2xl">↗</span>
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C1D8C4]">
                Give Me a Call
              </p>

              <h3 className="font-serif text-2xl">
                (561) 365-7585
              </h3>

              <p className="mt-5 text-sm text-[#D1E0D2]">
                Click to call directly
              </p>
            </a>
          </div>

          <p className="mt-12 text-center text-sm text-[#C5D9C8]">
            ⌖ Oakland, California
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#203A2C] px-6 py-9 text-white lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <a href="#home" className="font-serif text-2xl">
            Yanique
            <span className="text-[#A1BEA5]">.</span>
          </a>

          <p className="text-xs text-[#C9D8CB]">
            © 2026 Yanique Bryson. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-xs font-semibold uppercase tracking-widest text-[#C9D8CB] hover:text-white"
          >
            Back to Top ↑
          </a>
        </div>
      </footer>

      {/* FLOATING BACK TO TOP */}
      {showTop && (
        <a
          href="#home"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#294B39] text-xl text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#456B53]"
        >
          ↑
        </a>
      )}
    </main>
  );
}

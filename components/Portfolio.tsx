"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Film,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Smartphone,
} from "lucide-react";

const projects = [
  {
    title: "Diamond Restaurants",
    type: "Website + Admin Experience",
    desc: "A premium digital presence for a restaurant, bakery and sweets brand, designed around mobile usability, stronger brand trust and easy content control.",
    tags: ["Responsive UI", "Firebase", "Admin Panel"],
    accent: "cyan",
    href: "https://diamondrestaurants.com",
    status: "Live website",
  },
  {
    title: "Move To Go",
    type: "Mobility Product Ecosystem",
    desc: "Customer, rider and admin experiences for bike rides, deliveries, taxi and bus workflows, with live operations and scalable role-based dashboards.",
    tags: ["Product Design", "PWA", "Firebase"],
    accent: "coral",
    status: "Product in development",
  },
  {
    title: "Cinematic Brand Content",
    type: "Video Editing + Visual Direction",
    desc: "Restaurant campaigns, wedding edits, product visuals and social reels designed to feel polished, memorable and commercially useful.",
    tags: ["Editing", "Color Grade", "Motion"],
    accent: "cyan",
    href: "https://instagram.com/aj__editz_2.0",
    status: "View on Instagram",
  },
];

const services = [
  {
    icon: Code2,
    no: "01",
    title: "Websites",
    text: "High-converting business websites, portfolios, landing pages and Firebase-powered experiences.",
  },
  {
    icon: Film,
    no: "02",
    title: "Video Editing",
    text: "Cinematic reels, wedding films, restaurant ads, sound design and polished color grading.",
  },
  {
    icon: Smartphone,
    no: "03",
    title: "App Experiences",
    text: "Customer, partner and admin flows with clean app-like UI, dashboards and practical workflows.",
  },
  {
    icon: Sparkles,
    no: "04",
    title: "AI Creative",
    text: "AI-assisted visual concepts, campaigns, product imagery and faster creative production systems.",
  },
];

const process = [
  ["01", "Discover", "Understand the business, audience and real project goal."],
  ["02", "Plan", "Define the pages, content, user flow and visual direction."],
  ["03", "Design", "Create a polished interface with a clear brand hierarchy."],
  ["04", "Build", "Develop responsive, fast and practical digital experiences."],
  ["05", "Deliver", "Test, refine and hand over a clean production-ready project."],
];

export default function Portfolio() {
  return (
    <main className="overflow-hidden">
      <nav className="shell flex items-center justify-between py-6" aria-label="Primary navigation">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          AJAY SAINI<span className="text-cyan">.</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-mist md:flex">
          <a href="#work" className="transition-colors hover:text-ivory">Work</a>
          <a href="#services" className="transition-colors hover:text-ivory">Services</a>
          <a href="#about" className="transition-colors hover:text-ivory">About</a>
        </div>
        <a href="#contact" className="btn btn-ghost min-h-10 px-4 text-sm">
          Start a project
        </a>
      </nav>

      <section id="top" className="shell grid min-h-[82dvh] items-center gap-14 py-16 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="eyebrow mb-6">Website Developer • Video Editor • AI Creator</p>
          <h1 className="display max-w-4xl text-[clamp(3.6rem,8vw,7.5rem)] font-semibold">
            Digital work that makes brands feel <span className="text-cyan">serious.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-mist md:text-xl">
            I create premium websites, cinematic content and practical app experiences for businesses that want to look sharper, earn trust and grow.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-primary">
              View selected work <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="btn btn-ghost">Discuss your project</a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-mist">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan" />Shimla, India</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan" />Available across India</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan" />Remote-friendly</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-cyan/15 blur-3xl" />
          <div className="absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-coral/15 blur-3xl" />
          <div className="mock-window relative rotate-[1.5deg] shadow-2xl shadow-black/30">
            <div className="mock-top"><span className="dot" /><span className="dot" /><span className="dot" /></div>
            <div className="p-5 sm:p-7">
              <div className="rounded-2xl bg-ivory p-6 text-ink">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">Selected Project</p>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">Diamond Restaurants</h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Premium restaurant experience with responsive pages, dynamic content and an admin-controlled visual system.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-ink p-4 text-ivory"><p className="text-xs text-mist">Experience</p><p className="mt-5 text-xl font-bold">Web + Admin</p></div>
                  <div className="rounded-xl bg-cyan p-4 text-ink"><p className="text-xs opacity-70">Focus</p><p className="mt-5 text-xl font-bold">Trust + Sales</p></div>
                </div>
                <a href="https://diamondrestaurants.com" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold">
                  Open live website <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="section-line" />

      <section id="work" className="shell py-24 md:py-32">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="display mt-4 text-5xl font-semibold md:text-7xl">Proof before promises.</h2>
          </div>
          <p className="max-w-md text-mist">Real projects, clear thinking and work designed around business goals, not decorative noise.</p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="card grid gap-8 p-6 md:p-9 lg:grid-cols-[.75fr_1.25fr]"
            >
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-sm text-mist">0{index + 1}</span>
                  <p className={`mt-8 text-sm font-bold uppercase tracking-[.16em] ${project.accent === "coral" ? "text-coral" : "text-cyan"}`}>{project.type}</p>
                  <h3 className="display mt-3 text-4xl font-semibold md:text-5xl">{project.title}</h3>
                </div>
                <div className="mt-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist">{tag}</span>)}
                  </div>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ivory transition-colors hover:text-cyan">
                      {project.status} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <p className="mt-6 text-sm font-semibold text-coral">{project.status}</p>
                  )}
                </div>
              </div>

              <div className="rounded-2xl bg-ink/60 p-5 ring-1 ring-white/10 sm:p-7">
                <div className={`mb-8 h-2 w-24 rounded-full ${project.accent === "coral" ? "bg-coral" : "bg-cyan"}`} />
                <p className="max-w-2xl text-lg leading-8 text-mist">{project.desc}</p>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {["Challenge", "Approach", "Outcome"].map((label, labelIndex) => (
                    <div key={label} className="rounded-xl border border-white/10 p-4">
                      <p className="text-xs uppercase tracking-widest text-mist">{label}</p>
                      <p className="mt-8 text-sm font-semibold">
                        {labelIndex === 0 ? "Make the brand feel premium" : labelIndex === 1 ? "Design around real workflows" : "A clearer, stronger presence"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="services" className="bg-ivory py-24 text-ink md:py-32">
        <div className="shell">
          <p className="eyebrow !text-slate-600">Services</p>
          <h2 className="display mt-4 max-w-4xl text-5xl font-semibold md:text-7xl">One creative partner, multiple business needs.</h2>
          <div className="mt-16 divide-y divide-ink/15 border-y border-ink/15">
            {services.map(({ icon: Icon, no, title, text }) => (
              <div key={title} className="grid gap-5 py-8 md:grid-cols-[80px_1fr_1.2fr] md:items-center">
                <div className="flex items-center gap-3 text-sm text-slate-500"><Icon className="h-5 w-5" />{no}</div>
                <h3 className="font-display text-3xl font-semibold">{title}</h3>
                <p className="leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="shell grid gap-12 py-24 md:py-32 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="eyebrow">About Ajay</p>
          <h2 className="display mt-4 text-5xl font-semibold md:text-7xl">Design sense. Technical thinking. Commercial focus.</h2>
        </div>
        <div className="space-y-7 text-lg leading-8 text-mist">
          <p>I’m Ajay Saini, a digital creator based in Shimla. My work sits between design, development and visual storytelling.</p>
          <p>I help restaurants, hotels, creators and growing businesses present themselves with more confidence through premium websites, cinematic content and practical digital products.</p>
          <p className="text-ivory">The goal is simple: make the client’s business look valuable before the first conversation even begins.</p>
        </div>
      </section>

      <section className="shell pb-24 md:pb-32" aria-labelledby="process-heading">
        <div className="card p-7 md:p-12">
          <p className="eyebrow">Process</p>
          <h2 id="process-heading" className="sr-only">Project process</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {process.map(([no, title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 p-5">
                <span className="text-xs text-mist">{no}</span>
                <p className="mt-10 font-display text-xl font-semibold">{title}</p>
                <p className="mt-3 text-sm leading-6 text-mist">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-cyan py-24 text-ink md:py-32">
        <div className="shell">
          <p className="text-xs font-bold uppercase tracking-[.16em]">Available for selected projects</p>
          <h2 className="display mt-5 max-w-5xl text-5xl font-semibold md:text-8xl">Let’s build something your client remembers.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/75">
            Share your business, goal and timeline. You will receive a clear response without the usual agency fog machine.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <a href="https://wa.me/919929562585?text=Hello%20Ajay%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="btn bg-ink text-ivory">
              <MessageCircle className="mr-2 h-4 w-4" />WhatsApp
            </a>
            <a href="https://instagram.com/aj__editz_2.0" target="_blank" rel="noreferrer" className="btn border border-ink/20">
              <Instagram className="mr-2 h-4 w-4" />Instagram
            </a>
            <a href="mailto:ajayx3neha@gmail.com" className="btn border border-ink/20">
              <Mail className="mr-2 h-4 w-4" />Email
            </a>
          </div>
          <a href="mailto:ajayx3neha@gmail.com" className="mt-14 inline-flex items-center gap-3 border-b border-ink/30 pb-2 text-lg font-semibold">
            ajayx3neha@gmail.com <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <footer className="shell flex flex-col gap-4 py-8 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Ajay Saini</span>
        <span>Designed and developed with intent.</span>
      </footer>
    </main>
  );
}

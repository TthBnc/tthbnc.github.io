'use client'

import { motion } from 'framer-motion'

/* ─── animation config ─── */
const ease = [0.25, 0.46, 0.45, 0.94] as const

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Reveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── data ─── */
const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Supabase',
  'Tailwind CSS',
  'FastF1',
  'Python',
]

/* ─── icons ─── */
function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5 15L15 5M15 5H8M15 5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="24" viewBox="0 0 16 24" fill="none">
      <path
        d="M8 4V20M8 20L2 14M8 20L14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ─── page ─── */
export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* ─── Hero ─── */}
      <section className="relative flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-3xl px-6">
          <FadeUp delay={0.1}>
            <p className="mb-6 font-mono text-xs tracking-[0.25em] uppercase text-[#555]">
              Software Engineer
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <h1 className="font-display text-[clamp(3.5rem,9vw,7rem)] leading-[0.92] font-bold tracking-[-0.03em] text-white">
              Bence
              <br />
              T&oacute;th
            </h1>
          </FadeUp>

          <FadeUp delay={0.5}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[#888]">
              Building data-driven applications that turn complex
              information into tools people actually use.
            </p>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div className="mt-10 flex items-center gap-5">
              <a
                href="https://github.com/TthBnc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#666] transition-colors duration-300 hover:text-[#f97316]"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
              <span className="text-[#2a2a2a]">/</span>
              <a
                href="https://podiumprophets.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#666] transition-colors duration-300 hover:text-[#f97316]"
              >
                Podium Prophets
              </a>
            </div>
          </FadeUp>

          {/* scroll hint */}
          <FadeUp delay={1}>
            <motion.div
              className="absolute bottom-10 left-6"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ChevronDown className="text-[#2a2a2a]" />
            </motion.div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* ─── About ─── */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <SectionLabel>About</SectionLabel>
          </Reveal>
          <Reveal>
            <p className="text-xl leading-relaxed text-[#aaa]">
              I design and build full-stack applications with a focus on
              real-time data pipelines, automated systems, and interfaces
              that make technical information feel effortless. Currently
              deep in the world of Formula&nbsp;1 data&nbsp;&mdash; turning
              telemetry, lap times, and session analysis into something fans
              can actually use to sharpen their predictions.
            </p>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* ─── Featured Project ─── */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <SectionLabel>Featured Project</SectionLabel>
          </Reveal>

          <Reveal>
            <a
              href="https://podiumprophets.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] p-8 transition-all duration-500 group-hover:border-[#f97316]/30 group-hover:shadow-[0_0_80px_-20px_rgba(249,115,22,0.12)] md:p-12">
                {/* header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#f97316] md:text-3xl">
                      Podium Prophets
                    </h2>
                    <p className="mt-1.5 text-sm text-[#555]">
                      podiumprophets.com
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1.5 shrink-0 text-[#333] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#f97316]" />
                </div>

                {/* description — SEO-rich context around the backlink */}
                <p className="mt-6 max-w-xl leading-relaxed text-[#888]">
                  A free F1 prediction game where friend groups predict
                  qualifying and race results. Automatic scoring replaces
                  the spreadsheet. Built-in session analysis&nbsp;&mdash;
                  race pace comparisons, telemetry overlays, team pace
                  hierarchies&nbsp;&mdash; turns raw data into prediction
                  intelligence. Private leagues with configurable scoring
                  keep it competitive.
                </p>

                {/* tech tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#1a1a1a] px-3 py-1 font-mono text-[11px] text-[#555] transition-colors duration-300 group-hover:border-[#222] group-hover:text-[#777]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* ─── Connect ─── */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <SectionLabel>Connect</SectionLabel>
          </Reveal>
          <Reveal>
            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/TthBnc"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 text-lg text-[#888] transition-colors duration-300 hover:text-[#f97316]"
              >
                <GitHubIcon className="h-5 w-5" />
                <span>GitHub</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
              <a
                href="mailto:bence.zltn.toth@gmail.com"
                className="group flex w-fit items-center gap-3 text-lg text-[#888] transition-colors duration-300 hover:text-[#f97316]"
              >
                <MailIcon className="h-5 w-5" />
                <span>Email</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="pb-8">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8 h-px bg-[#1a1a1a]" />
          <p className="text-xs text-[#333]">
            &copy; {new Date().getFullYear()} Bence T&oacute;th
          </p>
        </div>
      </footer>
    </main>
  )
}

/* ─── shared components ─── */
function Divider() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <div className="h-px bg-[#1a1a1a]" />
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-10 font-mono text-xs tracking-[0.25em] uppercase text-[#555]">
      {children}
    </p>
  )
}

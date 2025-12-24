import Header from '@/components/custom/Header';
import { AtomIcon, Edit, Share2, Sparkles, Wand2 } from 'lucide-react';
import React from 'react';

function Home() {
  return (

    

    <div >
      <div className='bg-sky-100 border-b border-sky-300'>
      <Header />
      </div>

      {/* HERO */}
      <div className="min-h-screen bg-gradient-to-b from-blue-200 via-cyan-100 to-blue-300 text-black">
      <section className="relative overflow-hidden">
        {/* Glow blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-pulse" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-16 pb-20 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pt-20 lg:pb-24">
          <div className="max-w-xl space-y-6 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3 w-3" />
              <span>Introducing Resumate_AI</span>
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span>AI‑powered resume builder</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Build a <span className=" text-blue-950">job‑winning resume</span>
              <br />
              in minutes with AI.
            </h1>

            <p className="text-sm text-black sm:text-base lg:text-lg">
              Resumate_AI helps you generate tailored bullet points, structure your sections,
              and design a clean ATS‑friendly resume powered by modern AI.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
              <a
                href="/dashboard"
                className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Start building for free
                <svg
                  className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

            </div>

            <p className="text-xs text-slate-800">
              No design skills needed. Export to PDF and share instantly.
            </p>
          </div>

          {/* Hero preview card */}
          <div className="mt-12 w-full max-w-md lg:mt-0">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-1 text-slate-200">
                  <Wand2 className="h-4 w-4 text-primary" />
                  AI Resume Preview
                </span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
                  ATS‑friendly
                </span>
              </div>
              <div className="space-y-3 text-left text-[11px] leading-relaxed text-slate-200">
                <div className="h-4 w-24 rounded bg-slate-700/70" />
                <div className="h-2 w-40 rounded bg-slate-800" />
                <div className="h-2 w-32 rounded bg-slate-800" />
                <div className="mt-3 space-y-1">
                  <div className="h-2 w-full rounded bg-slate-800" />
                  <div className="h-2 w-11/12 rounded bg-slate-800" />
                  <div className="h-2 w-10/12 rounded bg-slate-800" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <div className="h-2 w-16 rounded bg-slate-700/80" />
                    <div className="h-2 w-24 rounded bg-slate-800" />
                    <div className="h-2 w-20 rounded bg-slate-800" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-16 rounded bg-slate-700/80" />
                    <div className="h-2 w-24 rounded bg-slate-800" />
                    <div className="h-2 w-20 rounded bg-slate-800" />
                  </div>
                </div>
              </div>
              <div className="mt-5 flex justify-between text-[10px] text-slate-200">
                <span>Real‑time preview</span>
                <span>One‑click download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-indigo-950 py-14">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white">How Resumate_AI works</h2>
          <p className="mt-2 text-sm text-slate-200">
            Create a polished resume in three simple steps.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-left shadow-lg transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-primary/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <AtomIcon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Describe your profile</h3>
              <p className="mt-2 text-sm text-slate-100">
                Enter your role, experience level, and target job. Resumate_AI understands
                your context and prepares the right structure for you.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-left shadow-lg transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-primary/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Edit className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Let AI draft content</h3>
              <p className="mt-2 text-sm text-slate-100">
                Generate tailored summaries, experience bullet points, and skills using AI.
                Edit anything manually with real‑time preview.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-left shadow-lg transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-primary/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Share2 className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Download & share</h3>
              <p className="mt-2 text-sm text-slate-100">
                Export as PDF, share a unique link, or update your resume anytime as your
                career grows.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/dashboard"
              className="inline-block rounded-lg bg-primary px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Get started with Resumate_AI
            </a>
          </div>
        </div>
      </section>
      </div>
            {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Resumate_AI. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="/dashboard" className="hover:text-slate-200">
              Build resume
            </a>
            <a
              href="mailto:shibamchel@gmail.com"
              className="hidden sm:inline hover:text-slate-200"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;

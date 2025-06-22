"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white via-cyan-50 to-blue-100 dark:from-neutral-950 dark:via-cyan-950 dark:to-black">
      {/* Blurred Medical Background Blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-300 opacity-30 blur-3xl dark:bg-cyan-800" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-200 opacity-20 blur-2xl dark:bg-blue-900" />

      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-extrabold text-blue-900 md:text-5xl lg:text-7xl dark:text-cyan-300">
          {"Your AI-Powered Medical Assistant".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-2xl py-4 text-center text-lg text-neutral-700 dark:text-neutral-400"
        >
          Get instant, accurate, and AI-driven medical assistance 24/7. Whether it's symptom analysis, medication info, or lifestyle tips — your health companion is here.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="relative z-10 mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center rounded-xl border border-cyan-100 bg-white p-6 text-center shadow-md transition-all hover:shadow-lg dark:border-cyan-800 dark:bg-cyan-950">
              <div className="mb-4 rounded-full bg-cyan-100 p-4 dark:bg-cyan-800">
                🩺
              </div>
              <h3 className="mb-2 text-xl font-semibold text-cyan-700 dark:text-cyan-300">
                Intelligent Doctor Suggestions
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Describe your symptoms and let our AI recommend the most suitable specialists — from general physicians to orthopedics. Start chatting instantly.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-cyan-100 bg-white p-6 text-center shadow-md transition-all hover:shadow-lg dark:border-cyan-800 dark:bg-cyan-950">
              <div className="mb-4 rounded-full bg-cyan-100 p-4 dark:bg-cyan-800">
                📄
              </div>
              <h3 className="mb-2 text-xl font-semibold text-cyan-700 dark:text-cyan-300">
                Detailed Health Report
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Receive a personalized and comprehensive health report after each consultation.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-cyan-100 bg-white p-6 text-center shadow-md transition-all hover:shadow-lg dark:border-cyan-800 dark:bg-cyan-950">
              <div className="mb-4 rounded-full bg-cyan-100 p-4 dark:bg-cyan-800">
                💊
              </div>
              <h3 className="mb-2 text-xl font-semibold text-cyan-700 dark:text-cyan-300">
                AI-Generated Prescriptions
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Get AI-suggested prescriptions based on your symptoms and health history.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="/images/ai-medical-agent-preview.png"
              alt="AI Medical Agent Preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const {user} = useUser();
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500" />
        <h1 className="text-lg font-extrabold tracking-tight text-blue-900 dark:text-cyan-300 md:text-2xl">
          MedAI Agent
        </h1>
      </div>

      {!user ? 
      <Link href = {'/sign-in'}>
        <button className="w-24 transform rounded-lg bg-cyan-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 md:w-32 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-300">
          Login
        </button>
        </Link>
       : (
        <div className="flex items-center gap-5">
          <UserButton />
          <Button>Dashboard</Button>
        </div>
      )
      }
    </nav>
  );
};

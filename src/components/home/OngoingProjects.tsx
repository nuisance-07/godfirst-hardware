"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { HardHat, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Commercial Foundation Work",
    location: "Mombasa, Kenya",
    description:
      "Foundation and structural framework for a commercial building. Reinforced concrete columns and formwork in progress.",
    image: "/images/projects/project-1.jpeg",
    status: "In Progress",
    materials: ["D-Bars (Rebar)", "Cement", "Binding Wire", "Nails"],
  },
  {
    title: "Residential Construction",
    location: "Mombasa, Kenya",
    description:
      "Ground-up residential construction project featuring reinforced concrete columns and foundation walls.",
    image: "/images/projects/project-2.jpeg",
    status: "In Progress",
    materials: ["D-Bars (Rebar)", "Cement", "Plywood", "Nails"],
  },
];

export default function OngoingProjects() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0d1526] relative overflow-clip">
      {/* Decorative accents */}
      <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none transform-gpu" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HardHat size={16} />
            <span>Our Work in Action</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white uppercase mb-4">
            Ongoing Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            See how our quality building materials are being used in real
            construction projects across Mombasa.
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              delay={0.2 + index * 0.15}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-white dark:bg-[#111827] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-primary/30 dark:hover:border-primary/40 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white/80 text-sm font-medium">
                      📍 {project.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Materials Used */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 block">
                      Materials Supplied
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link hover:gap-3 transition-all"
                  >
                    Enquire About Your Project
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.5} className="text-center mt-12">
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Planning a construction project? We supply all the materials you
            need.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
          >
            <HardHat size={18} />
            Get a Free Quote
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

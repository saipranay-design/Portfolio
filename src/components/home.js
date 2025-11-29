"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Code, Briefcase, GraduationCap } from "lucide-react";
import resumeData from "@/data/resumeData";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Hero Section */}
      <section style={{ 
        padding: "4rem 1.5rem", 
        maxWidth: "1200px", 
        margin: "0 auto",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "2rem",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: "relative" }}
          >
            <div style={{
              position: "absolute",
              inset: "-8px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
              borderRadius: "50%",
              filter: "blur(20px)",
              opacity: 0.6,
              animation: "pulse 3s ease-in-out infinite",
            }} />
            <Image
              src="/profile.jpeg"
              alt={resumeData.name}
              width={180}
              height={180}
              style={{
                borderRadius: "50%",
                border: "5px solid rgba(255,255,255,0.2)",
                position: "relative",
                objectFit: "cover",
              }}
            />
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "800",
                background: "linear-gradient(135deg, #fff, #e0e7ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.5rem",
              }}
            >
              {resumeData.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                color: "#94a3b8",
                fontWeight: "500",
                marginBottom: "1.5rem",
              }}
            >
              {resumeData.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.1rem)",
                color: "#cbd5e1",
                maxWidth: "800px",
                lineHeight: "1.8",
                margin: "0 auto",
              }}
            >
              {resumeData.introduction}
            </motion.p>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            {[
              { icon: Mail, text: resumeData.email, href: `mailto:${resumeData.email}` },
              { icon: Phone, text: resumeData.phone, href: `tel:${resumeData.phone}` },
              { icon: MapPin, text: resumeData.location },
              { icon: Linkedin, text: "LinkedIn", href: resumeData.linkedin },
              { icon: Github, text: "GitHub", href: resumeData.github },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.25rem",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#e0e7ff",
                  fontSize: "0.95rem",
                  cursor: item.href ? "pointer" : "default",
                }}
                onClick={() => item.href && window.open(item.href, "_blank")}
              >
                <item.icon size={18} />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link href="/resume" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "1rem 2.5rem",
                  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Briefcase size={20} />
                View Resume
              </motion.button>
            </Link>
            <Link href="/project" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "1rem 2.5rem",
                  background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Code size={20} />
                View Projects
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section style={{ 
        padding: "3rem 1.5rem", 
        maxWidth: "1200px", 
        margin: "0 auto",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            { label: "Years Experience", value: "4+", color: "#3b82f6" },
            { label: "Projects Completed", value: resumeData.projects.length, color: "#8b5cf6" },
            { label: "Technologies", value: "20+", color: "#ec4899" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: `0 10px 40px ${stat.color}40` }}
              style={{
                padding: "2rem",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                textAlign: "center",
              }}
            >
              <div style={{
                fontSize: "3rem",
                fontWeight: "800",
                background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.5rem",
              }}>
                {stat.value}
              </div>
              <div style={{ color: "#cbd5e1", fontSize: "1.1rem", fontWeight: "500" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Professional Summary */}
      <section style={{ 
        padding: "3rem 1.5rem", 
        maxWidth: "1200px", 
        margin: "0 auto",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            fontWeight: "700",
            color: "white",
            marginBottom: "2rem",
            textAlign: "center",
          }}>
            Professional Highlights
          </h2>
          <div style={{
            display: "grid",
            gap: "1rem",
          }}>
            {resumeData.professionalSummary.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                style={{
                  padding: "1.5rem",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderLeft: "4px solid #3b82f6",
                  color: "#e0e7ff",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  transition: "all 0.3s ease",
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technical Skills */}
      <section style={{ 
        padding: "3rem 1.5rem 5rem", 
        maxWidth: "1200px", 
        margin: "0 auto",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            fontWeight: "700",
            color: "white",
            marginBottom: "2rem",
            textAlign: "center",
          }}>
            Technical Expertise
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {Object.entries(resumeData.technicalSkills).map(([category, skills], idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  padding: "1.5rem",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h3 style={{
                  color: "#3b82f6",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  textTransform: "capitalize",
                }}>
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}>
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "0.5rem 1rem",
                        background: "rgba(59,130,246,0.1)",
                        color: "#e0e7ff",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        border: "1px solid rgba(59,130,246,0.3)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

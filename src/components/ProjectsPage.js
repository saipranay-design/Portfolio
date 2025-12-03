"use client";
import { motion } from "framer-motion";
import { Code, ExternalLink, CheckCircle } from "lucide-react";
import resumeData from "@/data/resumeData";

export default function ProjectsPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <h1 style={{
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          fontWeight: "800",
          background: "linear-gradient(135deg, #fff, #e0e7ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
        }}>
          Featured Projects
        </h1>
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "#94a3b8",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.7",
        }}>
          Showcasing innovative solutions built with modern technologies and best practices
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div style={{
        display: "grid",
        gap: "3rem",
      }}>
        {resumeData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -10 }}
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gradient background effect */}
            <div style={{
              position: "absolute",
              inset: "-2px",
              background: `linear-gradient(135deg, ${
                idx % 3 === 0 ? "#3b82f6, #8b5cf6" :
                idx % 3 === 1 ? "#8b5cf6, #ec4899" :
                "#ec4899, #f59e0b"
              })`,
              borderRadius: "20px",
              opacity: 0.5,
              filter: "blur(20px)",
              zIndex: -1,
            }} />

            <div style={{
              padding: "2.5rem",
              background: "rgba(15,23,42,0.9)",
              backdropFilter: "blur(20px)",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
              position: "relative",
            }}>
              {/* Project Number Badge */}
              <div style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${
                  idx % 3 === 0 ? "#3b82f6, #2563eb" :
                  idx % 3 === 1 ? "#8b5cf6, #7c3aed" :
                  "#ec4899, #db2777"
                })`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontWeight: "800",
                color: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}>
                {idx + 1}
              </div>

              {/* Project Title */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}>
                <Code size={32} color={
                  idx % 3 === 0 ? "#3b82f6" :
                  idx % 3 === 1 ? "#8b5cf6" :
                  "#ec4899"
                } />
                <h2 style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: "700",
                  color: "white",
                  flex: 1,
                }}>
                  {project.title}
                </h2>
              </div>

              {/* Description */}
              <p style={{
                color: "#cbd5e1",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "2rem",
              }}>
                {project.description}
              </p>

              {/* Technologies */}
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem",
                }}>
                  Technologies Used
                </h3>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}>
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      style={{
                        padding: "0.6rem 1.2rem",
                        background: `linear-gradient(135deg, ${
                          idx % 3 === 0 ? "rgba(59,130,246,0.15)" :
                          idx % 3 === 1 ? "rgba(139,92,246,0.15)" :
                          "rgba(236,72,153,0.15)"
                        }, rgba(255,255,255,0.05))`,
                        color: "#e0e7ff",
                        borderRadius: "10px",
                        fontSize: "0.95rem",
                        fontWeight: "500",
                        border: `1px solid ${
                          idx % 3 === 0 ? "rgba(59,130,246,0.3)" :
                          idx % 3 === 1 ? "rgba(139,92,246,0.3)" :
                          "rgba(236,72,153,0.3)"
                        }`,
                        cursor: "default",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 style={{
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem",
                }}>
                  Key Highlights
                </h3>
                <div style={{
                  display: "grid",
                  gap: "1rem",
                }}>
                  {project.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                        padding: "1rem",
                        background: "rgba(255,255,255,0.03)",
                        borderRadius: "10px",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <CheckCircle
                        size={20}
                        color={
                          idx % 3 === 0 ? "#3b82f6" :
                          idx % 3 === 1 ? "#8b5cf6" :
                          "#ec4899"
                        }
                        style={{ flexShrink: 0, marginTop: "0.2rem" }}
                      />
                      <span style={{
                        color: "#cbd5e1",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                      }}>
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* View Project Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 30px ${
                    idx % 3 === 0 ? "rgba(59,130,246,0.5)" :
                    idx % 3 === 1 ? "rgba(139,92,246,0.5)" :
                    "rgba(236,72,153,0.5)"
                  }`,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://github.com/pranay-dev", "_blank")}
                style={{
                  marginTop: "2rem",
                  padding: "1rem 2rem",
                  background: `linear-gradient(135deg, ${
                    idx % 3 === 0 ? "#3b82f6, #2563eb" :
                    idx % 3 === 1 ? "#8b5cf6, #7c3aed" :
                    "#ec4899, #db2777"
                  })`,
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                View Project Details
                <ExternalLink size={18} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          marginTop: "5rem",
          padding: "3rem 2rem",
          background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{
          fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
          fontWeight: "700",
          color: "white",
          marginBottom: "1rem",
        }}>
          Interested in Working Together?
        </h2>
        <p style={{
          color: "#94a3b8",
          fontSize: "1.1rem",
          marginBottom: "2rem",
          maxWidth: "600px",
          margin: "0 auto 2rem",
        }}>
          Let&apos;s collaborate on your next project and create something amazing together
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.5)" }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "1.2rem 3rem",
            background: "linear-gradient(135deg, #10b981, #059669)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() => window.location.href = `mailto:gurusaipranay123@gmail.com`}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </div>
  );
}

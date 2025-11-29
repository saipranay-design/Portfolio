"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";
import resumeData from "@/data/resumeData";

export default function Resume() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        <h1 style={{
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          fontWeight: "800",
          background: "linear-gradient(135deg, #fff, #e0e7ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
        }}>
          Professional Resume
        </h1>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("/Pranay_UI_CV.pdf", "_blank")}
          style={{
            padding: "1rem 2rem",
            background: "linear-gradient(135deg, #10b981, #059669)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <Download size={20} />
          Download Resume
        </motion.button>
      </motion.div>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "4rem" }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}>
          <Briefcase size={32} color="#3b82f6" />
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
            fontWeight: "700",
            color: "white",
          }}>
            Professional Experience
          </h2>
        </div>

        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute",
            left: "0",
            top: "0",
            bottom: "0",
            width: "3px",
            background: "linear-gradient(180deg, #3b82f6, #8b5cf6)",
          }} />

          {resumeData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                position: "relative",
                marginBottom: "3rem",
                paddingLeft: "2rem",
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: "absolute",
                left: "-1.5rem",
                top: "0.5rem",
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
                background: "#3b82f6",
                boxShadow: "0 0 20px rgba(59,130,246,0.6)",
              }} />

              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(59,130,246,0.2)" }}
                style={{
                  padding: "2rem",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}>
                  <div>
                    <h3 style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#3b82f6",
                      marginBottom: "0.5rem",
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{
                      fontSize: "1.2rem",
                      color: "#e0e7ff",
                      fontWeight: "500",
                    }}>
                      {exp.company}
                    </p>
                    <p style={{
                      fontSize: "1rem",
                      color: "#94a3b8",
                      marginTop: "0.25rem",
                    }}>
                      {exp.location}
                    </p>
                  </div>
                  <span style={{
                    padding: "0.5rem 1rem",
                    background: "rgba(59,130,246,0.2)",
                    color: "#93c5fd",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    border: "1px solid rgba(59,130,246,0.3)",
                  }}>
                    {exp.duration}
                  </span>
                </div>

                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "1.5rem 0",
                }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={{
                      color: "#cbd5e1",
                      fontSize: "1rem",
                      lineHeight: "1.8",
                      marginBottom: "0.75rem",
                      paddingLeft: "1.5rem",
                      position: "relative",
                    }}>
                      <span style={{
                        position: "absolute",
                        left: "0",
                        color: "#3b82f6",
                        fontWeight: "bold",
                      }}>▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>

                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "1rem",
                }}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} style={{
                      padding: "0.4rem 0.8rem",
                      background: "rgba(139,92,246,0.1)",
                      color: "#c4b5fd",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      border: "1px solid rgba(139,92,246,0.3)",
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "4rem" }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}>
          <GraduationCap size={32} color="#8b5cf6" />
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
            fontWeight: "700",
            color: "white",
          }}>
            Education
          </h2>
        </div>

        <div style={{
          display: "grid",
          gap: "1.5rem",
        }}>
          {resumeData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(139,92,246,0.2)" }}
              style={{
                padding: "2rem",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "1rem",
              }}>
                <div>
                  <h3 style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#8b5cf6",
                    marginBottom: "0.5rem",
                  }}>
                    {edu.degree}
                  </h3>
                  <p style={{
                    fontSize: "1.1rem",
                    color: "#e0e7ff",
                    fontWeight: "500",
                  }}>
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <p style={{
                      fontSize: "1rem",
                      color: "#94a3b8",
                      marginTop: "0.25rem",
                    }}>
                      {edu.location}
                    </p>
                  )}
                  {edu.gpa && (
                    <p style={{
                      fontSize: "1rem",
                      color: "#94a3b8",
                      marginTop: "0.25rem",
                    }}>
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
                <span style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(139,92,246,0.2)",
                  color: "#c4b5fd",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}>
                  {edu.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Summary */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}>
          <Award size={32} color="#ec4899" />
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
            fontWeight: "700",
            color: "white",
          }}>
            Core Competencies
          </h2>
        </div>

        <motion.div
          whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(236,72,153,0.2)" }}
          style={{
            padding: "2rem",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}>
            {[
              "Front-End Architecture",
              "React & Next.js Development",
              "State Management (Redux)",
              "Responsive Web Design",
              "RESTful & GraphQL APIs",
              "Cloud Deployment (AWS/Azure)",
              "CI/CD & DevOps",
              "Performance Optimization",
              "Microfrontend Architecture",
              "Agile Methodologies",
              "Cross-Browser Compatibility",
              "Accessibility (WCAG)",
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                style={{
                  padding: "1rem",
                  background: "rgba(236,72,153,0.1)",
                  color: "#fbcfe8",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  textAlign: "center",
                  border: "1px solid rgba(236,72,153,0.3)",
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

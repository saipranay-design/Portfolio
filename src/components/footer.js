"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Heart } from "lucide-react";
import resumeData from "@/data/resumeData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "2rem 1.5rem",
        marginTop: "auto",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginBottom: "2rem",
        }}>
          {/* About Section */}
          <div>
            <h3 style={{
              fontSize: "1.3rem",
              fontWeight: "700",
              color: "white",
              marginBottom: "1rem",
            }}>
              {resumeData.name}
            </h3>
            <p style={{
              color: "#94a3b8",
              fontSize: "0.95rem",
              lineHeight: "1.6",
            }}>
              {resumeData.title}
            </p>
            <p style={{
              color: "#64748b",
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}>
              Building exceptional digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "white",
              marginBottom: "1rem",
            }}>
              Quick Links
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}>
              {[
                { name: "Home", path: "/" },
                { name: "Resume", path: "/resume" },
                { name: "Projects", path: "/project" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.path}
                  style={{
                    color: "#94a3b8",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => e.target.style.color = "#3b82f6"}
                  onMouseOut={(e) => e.target.style.color = "#94a3b8"}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "white",
              marginBottom: "1rem",
            }}>
              Get In Touch
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}>
              <a
                href={`mailto:${resumeData.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.color = "#3b82f6"}
                onMouseOut={(e) => e.currentTarget.style.color = "#94a3b8"}
              >
                <Mail size={16} />
                {resumeData.email}
              </a>
              <a
                href={`tel:${resumeData.phone}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.color = "#3b82f6"}
                onMouseOut={(e) => e.currentTarget.style.color = "#94a3b8"}
              >
                <Phone size={16} />
                {resumeData.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "1.5rem 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}>
          {[
            { icon: Linkedin, href: resumeData.linkedin, color: "#0077b5" },
            { icon: Github, href: resumeData.github, color: "#333" },
            { icon: Mail, href: `mailto:${resumeData.email}`, color: "#ea4335" },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = social.color;
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = social.color;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{
          textAlign: "center",
          paddingTop: "1.5rem",
        }}>
          <p style={{
            color: "#64748b",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}>
            <span>© {currentYear} {resumeData.name}. All rights reserved.</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              Made with <Heart size={14} color="#ef4444" fill="#ef4444" /> and React
            </span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

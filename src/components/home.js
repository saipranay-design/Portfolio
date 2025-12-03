"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Code, Briefcase, Award, Users, Zap, Download } from "lucide-react";
import resumeData from "@/data/resumeData";

export default function Home() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "10%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 8s ease-in-out infinite"
      }} />
      <div style={{
        position: "absolute",
        bottom: "20%",
        left: "5%",
        width: "200px",
        height: "200px",
        background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite reverse"
      }} />

      {/* Hero Section */}
      <section style={{ 
        padding: "6rem 2rem 4rem", 
        maxWidth: "1400px", 
        margin: "0 auto",
        position: "relative",
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "3rem",
          }}
        >
          {/* Profile Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: "relative" }}
          >
            <Image
              src="/profile.jpeg"
              alt={resumeData.name}
              width={200}
              height={200}
              style={{
                borderRadius: "50%",
                border: "4px solid rgba(255,255,255,0.1)",
                objectFit: "cover",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
            />
          </motion.div>

          {/* Text Content */}
          <div style={{ maxWidth: "900px" }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: "900",
                background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
                lineHeight: "1.1"
              }}
            >
              {resumeData.name}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "50px",
                padding: "0.8rem 2rem",
                marginBottom: "2rem",
                backdropFilter: "blur(10px)"
              }}
            >
              <Zap size={20} style={{ color: "#3b82f6" }} />
              <span style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                color: "#e0e7ff",
                fontWeight: "600"
              }}>
                {resumeData.title}
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.3rem)",
                color: "#cbd5e1",
                lineHeight: "1.7",
                fontWeight: "400",
                maxWidth: "800px",
                margin: "0 auto"
              }}
            >
              {resumeData.introduction}
            </motion.p>
          </div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              width: "100%",
              maxWidth: "800px",
              marginTop: "2rem"
            }}
          >
            {[
              { icon: Mail, text: "Email", value: resumeData.email, href: `mailto:${resumeData.email}`, color: "#ef4444" },
              { icon: Phone, text: "Phone", value: resumeData.phone, href: `tel:${resumeData.phone}`, color: "#10b981" },
              { icon: MapPin, text: "Location", value: resumeData.location, color: "#f59e0b" },
              { icon: Linkedin, text: "LinkedIn", value: "Connect", href: resumeData.linkedin, color: "#0ea5e9" },
              { icon: Github, text: "GitHub", value: "Follow", href: resumeData.github, color: "#8b5cf6" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: `0 10px 30px ${item.color}20`
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "1.5rem",
                  cursor: item.href ? "pointer" : "default",
                  transition: "all 0.3s ease",
                  textAlign: "center"
                }}
                onClick={() => {
                  if (item.href) {
                    window.open(item.href, "_blank");
                  }
                }}
              >
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.8rem"
                }}>
                  <div style={{
                    padding: "0.8rem",
                    background: `${item.color}20`,
                    borderRadius: "12px",
                    border: `1px solid ${item.color}30`
                  }}>
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: "0.9rem",
                      color: "#94a3b8",
                      fontWeight: "500",
                      marginBottom: "0.2rem"
                    }}>
                      {item.text}
                    </div>
                    <div style={{
                      fontSize: "0.85rem",
                      color: "#e0e7ff",
                      fontWeight: "600"
                    }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "2rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link href="/resume" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(59,130,246,0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "1.2rem 3rem",
                  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "16px",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  boxShadow: "0 10px 25px rgba(59,130,246,0.2)",
                  transition: "all 0.3s ease"
                }}
              >
                <Briefcase size={22} />
                View Resume
              </motion.button>
            </Link>
            
            <Link href="/project" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(139,92,246,0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "1.2rem 3rem",
                  background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "16px",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  boxShadow: "0 10px 25px rgba(139,92,246,0.2)",
                  transition: "all 0.3s ease"
                }}
              >
                <Code size={22} />
                View Projects
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(16,185,129,0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/Pranay_UI_CV.pdf', '_blank')}
              style={{
                padding: "1.2rem 3rem",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "white",
                border: "none",
                borderRadius: "16px",
                fontSize: "1.1rem",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                boxShadow: "0 10px 25px rgba(16,185,129,0.2)",
                transition: "all 0.3s ease"
              }}
            >
              <Download size={22} />
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: "4rem 2rem", 
        maxWidth: "1400px", 
        margin: "0 auto",
        position: "relative",
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            { 
              icon: Award, 
              label: "Years Experience", 
              value: "4+", 
              description: "Building scalable applications",
              color: "#3b82f6",
              gradient: "linear-gradient(135deg, #3b82f6, #2563eb)"
            },
            { 
              icon: Code, 
              label: "Projects Completed", 
              value: "50+", 
              description: "Across various technologies",
              color: "#8b5cf6",
              gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
            },
            { 
              icon: Users, 
              label: "Companies Worked", 
              value: "3", 
              description: "Leading tech organizations",
              color: "#ec4899",
              gradient: "linear-gradient(135deg, #ec4899, #db2777)"
            },
            { 
              icon: Zap, 
              label: "Technologies", 
              value: "20+", 
              description: "Modern tech stack expertise",
              color: "#f59e0b",
              gradient: "linear-gradient(135deg, #f59e0b, #d97706)"
            }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: `0 25px 50px ${stat.color}20`
              }}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "2.5rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s ease"
              }}
            >
              {/* Background Glow */}
              <div style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background: `radial-gradient(circle, ${stat.color}10 0%, transparent 70%)`,
                opacity: 0.5,
                pointerEvents: "none"
              }} />
              
              <div style={{ position: "relative", zIndex: 1 }}>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    display: "inline-flex",
                    padding: "1.5rem",
                    background: stat.gradient,
                    borderRadius: "20px",
                    marginBottom: "1.5rem",
                    boxShadow: `0 10px 30px ${stat.color}30`
                  }}
                >
                  <stat.icon size={32} color="white" />
                </motion.div>
                
                <motion.h3
                  style={{
                    fontSize: "3rem",
                    fontWeight: "900",
                    background: stat.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "0.5rem",
                    lineHeight: "1"
                  }}
                >
                  {stat.value}
                </motion.h3>
                
                <h4 style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "#e0e7ff",
                  marginBottom: "0.8rem"
                }}>
                  {stat.label}
                </h4>
                
                <p style={{
                  fontSize: "1rem",
                  color: "#94a3b8",
                  lineHeight: "1.5"
                }}>
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
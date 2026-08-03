import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="section-white"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.04) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ padding: "5rem 2rem", width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "4rem",
            flexWrap: "wrap",
          }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            style={{ flex: "1 1 380px", maxWidth: "580px" }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.32rem 0.85rem",
                borderRadius: "6px",
                background: "#eff6ff",
                border: "1px solid rgba(37, 99, 235, 0.18)",
                marginBottom: "1.75rem",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#2563eb",
                  letterSpacing: "0.04em",
                }}
              >
                Open to Opportunities
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                fontWeight: 800,
                color: "#0f2b52",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                marginBottom: "0.75rem",
              }}
            >
              Hi, I'm Jerin J
            </h1>

            <div style={{ marginBottom: "1.25rem", minHeight: "2rem" }}>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "AI Enthusiast",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                  fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                  fontWeight: 600,
                  color: "#2563eb",
                  letterSpacing: "-0.01em",
                }}
              />
            </div>

            <p
              style={{
                fontSize: "1rem",
                color: "#64748b",
                lineHeight: 1.8,
                maxWidth: "460px",
                marginBottom: "2.25rem",
              }}
            >
              Final-Year Computer Science Engineering Student
              specializing in Full Stack Development, full stack development,
              programming, data structures and algorithms, and machine learning.
              Eager to apply technical skills to real-world projects
              and contribute to innovative solutions in software development, machine learning,
              and cloud computing.
            </p>

            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Download Resume
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
              <div style={{ display: "flex", gap: "0.6rem", marginLeft: "0.25rem" }}>
                <a
                  href="https://github.com/Jerin133"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px",
                    border: "1.5px solid #e2e8f0",
                    color: "#475569",
                    fontSize: "1.15rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#0f2b52";
                    e.currentTarget.style.color = "#0f2b52";
                    e.currentTarget.style.background = "#f8fafc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.color = "#475569";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/jerinprogrammer"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px",
                    border: "1.5px solid #e2e8f0",
                    color: "#475569",
                    fontSize: "1.15rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#0f2b52";
                    e.currentTarget.style.color = "#0f2b52";
                    e.currentTarget.style.background = "#f8fafc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.color = "#475569";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                position: "relative",
                width: "clamp(200px, 22vw, 300px)",
                height: "clamp(200px, 22vw, 300px)",
              }}
            >
              {/* Background square */}
              <div
                style={{
                  position: "absolute",
                  inset: "12px 0 0 12px",
                  borderRadius: "24px",
                  background: "#eff6ff",
                  border: "1.5px solid rgba(37,99,235,0.15)",
                }}
              />
              <img
                src={profile}
                alt="Jerin J — Full Stack Developer"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  border: "3px solid #ffffff",
                  boxShadow: "0 16px 48px rgba(15, 43, 82, 0.14)",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            display: "flex",
            gap: "0",
            marginTop: "4rem",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "2+", label: "Internships" },
            { num: "10+", label: "Projects Built" },
            { num: "6+", label: "Certifications" },
            { num: "2027", label: "Expected Grad." },
          ].map(({ num, label }, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 120px",
                padding: "0 2rem 0 0",
                borderRight: i < 3 ? "1px solid #e2e8f0" : "none",
                marginRight: i < 3 ? "2rem" : 0,
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#0f2b52",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "0.3rem",
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#94a3b8",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
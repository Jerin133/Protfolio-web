import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";

const experiences = [
  {
    title: "GenAI Intern",
    company: "Oracle",
    period: "Oct 2025 – Oct 2025",
    description:
      "Completed a Generative AI internship focused on prompt engineering, AI tools, and practical AI application development, enhancing skills in modern AI technologies and workflows.",
    certificate: "/certificates/EBPL - Oracle.pdf",
  },
  {
    title: "Web Development Intern",
    company: "Labmentix",
    period: "Dec 2025 – Feb 2026",
    description:
      "Built and enhanced web applications using modern development technologies, collaborated on multiple projects, and applied software development best practices to deliver efficient and user-friendly solutions.",
    certificate: "/certificates/Labmentix - Internship.pdf",
  },
  {
    title: "Full Stack Development Intern",
    company: "Eagle Hi-Tech Softclou Pvt Ltd",
    period: "Jun 2026 – Jun 2026",
    description:
      "Completed a 1-month Full Stack Development internship, working on end-to-end web application development using modern frontend and backend technologies, contributing to real-world product features and gaining hands-on industry experience.",
    certificate: "/certificates/EagleHiTech Certificate.pdf",
  },
];

function Experience() {
  return (
    <section id="experience" className="section-white section-pad">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">Career</p>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              style={{
                display: "flex",
                gap: "2rem",
                marginBottom: index < experiences.length - 1 ? "2rem" : 0,
                position: "relative",
              }}
            >
              {/* Timeline dot & line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <div className="timeline-dot">
                  {index + 1}
                </div>
                {index < experiences.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      width: "1.5px",
                      background: "#e2e8f0",
                      marginTop: "0.5rem",
                      minHeight: "40px",
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="card"
                style={{
                  flex: 1,
                  padding: "1.6rem 1.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#0f2b52",
                        margin: "0 0 0.2rem",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "#2563eb",
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "0.77rem",
                      color: "#94a3b8",
                      fontWeight: 600,
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      padding: "0.2rem 0.7rem",
                      borderRadius: "5px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#64748b",
                    lineHeight: 1.75,
                    margin: "0.75rem 0 1.1rem",
                  }}
                >
                  {exp.description}
                </p>

                {/* View Certificate Button */}
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#2563eb",
                    textDecoration: "none",
                    padding: "0.4rem 0.9rem",
                    borderRadius: "6px",
                    border: "1.5px solid rgba(37,99,235,0.25)",
                    background: "#eff6ff",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2563eb";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#2563eb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#eff6ff";
                    e.currentTarget.style.color = "#2563eb";
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.25)";
                  }}
                >
                  <HiOutlineExternalLink style={{ fontSize: "0.95rem" }} />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
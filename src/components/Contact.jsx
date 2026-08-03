import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "jj0942754@gmail.com",
    href: "mailto:jj0942754@gmail.com",
    external: false,
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+91 8925758040",
    href: "tel:+918925758040",
    external: false,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "in/jerinprogrammer",
    href: "https://www.linkedin.com/in/jerinprogrammer",
    external: true,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Jerin133",
    href: "https://github.com/Jerin133",
    external: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="section-gray section-pad">
      <div className="container">
        <div
          style={{
            display: "flex",
            gap: "5rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ flex: "0 0 280px" }}
          >
            <p className="section-label">Let's Talk</p>
            <h2 className="section-heading">Get In Touch</h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#64748b",
                lineHeight: 1.8,
                marginTop: "1rem",
                maxWidth: "280px",
              }}
            >
              I'm always interested in discussing software engineering, AI
              projects, internships, and collaboration opportunities.
            </p>
          </motion.div>

          {/* Right — Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {contactLinks.map(({ icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  background: "#ffffff",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 1px 3px rgba(15,43,82,0.05)",
                  textDecoration: "none",
                  transition: "all 0.22s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,43,82,0.1)";
                  e.currentTarget.style.borderColor = "rgba(37,99,235,0.25)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(15,43,82,0.05)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    color: "#2563eb",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#94a3b8",
                      marginBottom: "0.18rem",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#0f2b52",
                    }}
                  >
                    {value}
                  </div>
                </div>
                <svg
                  style={{ marginLeft: "auto", color: "#cbd5e1" }}
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
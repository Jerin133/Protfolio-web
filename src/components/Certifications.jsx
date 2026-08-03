import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";

const certificates = [
  {
    title: "TATA GenAI Simulation",
    issuer: "TATA - Forge",
    logo: "/logos/tata.svg",
    pdf: "/certificates/TATA - GenAI.pdf",
  },
  {
    title: "Web Development Internship",
    issuer: "Labmentix",
    logo: "/logos/labmentix.png",
    pdf: "/certificates/Labmentix - Internship.pdf",
  },
  {
    title: "Gen-AI Internship",
    issuer: "Oracle",
    logo: "/logos/oracle.png",
    pdf: "/certificates/EBPL - Oracle.pdf",
  },
  {
    title: "Frontend Developer Certification",
    issuer: "HackerRank",
    logo: "/logos/hackerrank.png",
    pdf: "/certificates/HackerRank Frontend Developer.pdf",
  },
  {
    title: "Project Management Certification",
    issuer: "LinkedIn",
    logo: "/logos/linkedin.png",
    pdf: "/certificates/Project Management.pdf",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    logo: "/logos/nptel.png",
    pdf: "/certificates/Programming in Java - NPTEL.pdf",
  },
  {
    title: "Campus Ambassador - Leadership",
    issuer: "CodeEmy Technologies",
    logo: "/logos/codeemy.jpg",
    pdf: "/certificates/Campus Ambassador - Leadership Certificate - CodeEmy Technologies.pdf",
  },
  {
    title: "Doppelganger 30H Build Sprint",
    issuer: "OpenPools",
    logo: "/logos/openpools.jpg",
    pdf: "/certificates/Jerin J_Doppleganger.pdf",
  },
  {
    title: "Tata Crucible Campus Quiz 2025",
    issuer: "Tata Crucible",
    logo: "/logos/tata.svg",
    pdf: "/certificates/Tata_Cruible_Prelims_Level1_Participation Cert.pdf",
  },
  {
    title: "Ignite Bootcamp - Venture Idea Development",
    issuer: "Wadhwani Foundation",
    logo: "/logos/wadhwani.png",
    pdf: "/certificates/Wadhwani Foundation Certificate - 69b508ef696a375ec9015e3f.pdf",
  },
  {
    title: "Full Stack Development Internship",
    issuer: "Eagle-HiTech Softclou",
    logo: "/logos/eagle.jpg",
    pdf: "/certificates/EagleHiTech Certificate.pdf",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section-white section-pad">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-heading">Certifications</h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="card"
              style={{ padding: "1.6rem" }}
            >
              {/* Logo Area */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                  paddingBottom: "1.25rem",
                  borderBottom: "1px solid #f1f5f9",
                  minHeight: "60px",
                }}
              >
                {/* Direct Logo Image or Reserved Placeholder */}
                {cert.logo ? (
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "contain",
                      flexShrink: 0,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                      background: "#f8fafc",
                      border: "1.5px dashed #cbd5e1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: "#94a3b8",
                      letterSpacing: "0.02em",
                      flexShrink: 0,
                    }}
                  >
                    Logo
                  </div>
                )}

                {/* Issuer name */}
                <div>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#94a3b8",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      margin: "0 0 0.2rem",
                    }}
                  >
                    Issued by
                  </p>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "#0f2b52",
                      margin: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Certificate title */}
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#1e293b",
                  margin: "0 0 1.1rem",
                  lineHeight: 1.45,
                  letterSpacing: "-0.01em",
                }}
              >
                {cert.title}
              </h3>

              {/* View Certificate Button */}
              <a
                href={cert.pdf}
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
                  padding: "0.42rem 0.9rem",
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
                <HiOutlineExternalLink style={{ fontSize: "0.9rem" }} />
                View
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
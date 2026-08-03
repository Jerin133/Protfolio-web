import { motion } from "framer-motion";

const educationList = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Government College of Engineering, Dharmapuri",
    affiliation: "Anna University",
    score: "CGPA: 8.31 (Upto 5th Semester)",
    badge: "2023 – 2027",
    isCurrent: true,
    description:
      "Currently pursuing final year in Computer Science and Engineering. Hands-on experience in Full Stack Development, Data Structures & Algorithms, Artificial Intelligence, Machine Learning, and Modern Web Architectures.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Holy Family Higher Secondary School",
    location: "Mukkuttukal, Kanyakumari",
    score: "Percentage: 88%",
    badge: "2021 – 2023",
    isCurrent: false,
    description:
      "Completed Higher Secondary Education with a core focus on Mathematics, Physics, Chemistry, and Biology.",
  },
];

function Education() {
  return (
    <section id="education" className="section-gray section-pad">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">Academic</p>
          <h2 className="section-heading">Education</h2>
        </motion.div>

        {/* Education Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "820px" }}>
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="card"
              style={{
                padding: "2rem 2.25rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "1.2rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#0f2b52",
                      margin: "0 0 0.4rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#2563eb",
                      fontWeight: 600,
                      margin: "0 0 0.2rem",
                    }}
                  >
                    {edu.institution}
                  </p>
                  {edu.affiliation && (
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#64748b",
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      Affiliated to {edu.affiliation}
                    </p>
                  )}
                  {edu.location && (
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#64748b",
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      {edu.location}
                    </p>
                  )}
                  {edu.score && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        marginTop: "0.6rem",
                        padding: "0.22rem 0.75rem",
                        borderRadius: "6px",
                        background: "#eff6ff",
                        border: "1px solid rgba(37,99,235,0.2)",
                        color: "#1d4ed8",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        letterSpacing: "0.01em",
                      }}
                    >
                      {edu.score}
                    </div>
                  )}
                </div>

                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      display: "inline-block",
                      background: edu.isCurrent ? "#eff6ff" : "#f1f5f9",
                      border: edu.isCurrent ? "1px solid rgba(37,99,235,0.25)" : "1px solid #e2e8f0",
                      color: edu.isCurrent ? "#1d4ed8" : "#475569",
                      padding: "0.32rem 0.85rem",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {edu.badge}
                  </span>
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid #f1f5f9",
                  paddingTop: "1.1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#475569",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
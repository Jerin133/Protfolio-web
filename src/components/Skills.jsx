import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaCloud, FaTools, FaChartBar } from "react-icons/fa";
import { MdOutlineWeb, MdMemory } from "react-icons/md";

const skills = {
  Languages: ["Java", "Python", "SQL", "C", "C++"],
  "Web Technologies": ["React.js", "HTML", "CSS", "Tailwind CSS", "Node.js", "Express.js"],
  "Data Science": ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  Database: ["MongoDB", "MySQL", "Supabase", "SQL Lite"],
  "Core CS": ["Data Structures", "Algorithms", "OS Basics", "Networking Basics", "DBMS"],
  "Cloud & AI": ["AWS", "Ollama", "Google Cloud"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Jira", "Vercel", "Render", "Canva"],
};

const categoryIcons = {
  Languages: <FaCode />,
  "Web Technologies": <MdOutlineWeb />,
  "Data Science": <FaChartBar />,
  Database: <FaDatabase />,
  "Core CS": <MdMemory />,
  "Cloud & AI": <FaCloud />,
  Tools: <FaTools />,
};

function Skills() {
  return (
    <section id="skills" className="section-white section-pad">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-heading">Technical Skills</h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="card"
              style={{ padding: "1.6rem 1.75rem" }}
            >
              {/* Category Header with Icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  marginBottom: "1.1rem",
                }}
              >
                {/* Icon Badge */}
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.95rem",
                    color: "#2563eb",
                    flexShrink: 0,
                  }}
                >
                  {categoryIcons[category]}
                </div>

                {/* Category Name */}
                <h3
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#2563eb",
                    margin: 0,
                  }}
                >
                  {category}
                </h3>
              </div>

              {/* Skill Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {items.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
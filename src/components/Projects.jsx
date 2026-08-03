import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI/ML", "Full Stack", "Cloud", "IoT"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const notableProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-gray section-pad">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <p className="section-label">Work</p>
            <h2 className="section-heading" style={{ marginBottom: 0 }}>
              Projects
            </h2>
          </div>
          <p className="section-sub" style={{ maxWidth: "360px", textAlign: "right" }}>
            AI, Full Stack, Cloud, IoT, and Data Analytics — real solutions to real problems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-pill${activeFilter === filter ? " active" : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured */}
        <div style={{ marginBottom: "0.75rem" }}>
          <h3
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#94a3b8",
              marginBottom: "1.25rem",
            }}
          >
            Featured Projects
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
              gap: "1.25rem",
            }}
          >
            <AnimatePresence>
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="card"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "14px 14px 0 0",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "190px",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.transform = "scale(1.04)")}
                      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "0.75rem",
                        left: "0.75rem",
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(6px)",
                        color: "#0f2b52",
                        padding: "0.18rem 0.65rem",
                        borderRadius: "5px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div
                    style={{
                      padding: "1.4rem 1.5rem",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.02rem",
                        fontWeight: 700,
                        color: "#0f2b52",
                        marginBottom: "0.5rem",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {project.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.86rem",
                        color: "#64748b",
                        lineHeight: 1.7,
                        marginBottom: "1rem",
                        flex: 1,
                      }}
                    >
                      {project.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem",
                        marginBottom: "1.1rem",
                      }}
                    >
                      {project.tools.map((tool, i) => (
                        <span key={i} className="tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "0.6rem", borderTop: "1px solid #f1f5f9", paddingTop: "1rem" }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        style={{ padding: "0.45rem 1rem", fontSize: "0.82rem" }}
                      >
                        <FaGithub />
                        Code
                      </a>
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-outline"
                          style={{ padding: "0.45rem 1rem", fontSize: "0.82rem" }}
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Notable */}
        {notableProjects.length > 0 && (
          <div style={{ marginTop: "3.5rem" }}>
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#94a3b8",
                marginBottom: "1.25rem",
              }}
            >
              Other Notable Projects
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1rem",
              }}
            >
              {notableProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: "#ffffff",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    padding: "1.4rem",
                    boxShadow: "0 1px 3px rgba(15,43,82,0.05)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    transition: "box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,43,82,0.1)";
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(15,43,82,0.05)";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                  }}
                >
                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#0f2b52",
                      margin: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {project.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#64748b",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {project.tools.map((tool, i) => (
                      <span key={i} className="tool-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#2563eb",
                      textDecoration: "none",
                      marginTop: "0.25rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0f2b52")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#2563eb")}
                  >
                    <FaGithub /> View on GitHub
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
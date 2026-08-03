import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section-gray section-pad">
      <div className="container">
        <div
          style={{
            display: "flex",
            gap: "5rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Left — Label & Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ flex: "0 0 240px" }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-heading">Who I am</h2>
            <div
              style={{
                width: "40px",
                height: "3px",
                background: "#2563eb",
                borderRadius: "2px",
                marginTop: "1rem",
              }}
            />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ flex: "1 1 380px" }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                color: "#334155",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              Final-year B.E. Computer Science and Engineering student with a strong foundation in full stack development, programming, data structures and algorithms, and machine learning. Eager to apply technical skills to real-world projects
              and contribute to innovative solutions in software development, machine learning, and cloud computing. Committed
              to delivering impactful results and contributing effectively to the growth and success of the organization.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#334155",
                lineHeight: 1.9,
              }}
            >
              Strong analytical, problem-solving, and teamwork skills, combined
              with a passion for continuous learning and innovation. Eager to
              leverage technical expertise and project experience to contribute
              effectively in a software development role.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
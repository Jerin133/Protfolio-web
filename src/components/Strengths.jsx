import { motion } from "framer-motion";
import {
  FaPuzzlePiece,
  FaBolt,
  FaUsers,
  FaComments,
  FaAward,
  FaTasks,
  FaSyncAlt,
  FaClock,
  FaSearchPlus,
  FaBriefcase,
  FaHeart,
  FaBalanceScale,
} from "react-icons/fa";

const strengths = [
  {
    icon: <FaPuzzlePiece />,
    title: "Problem Solving",
    description:
      "Analytical mindset focused on breaking down complex problems and engineering robust, scalable solutions.",
  },
  {
    icon: <FaBolt />,
    title: "Quick Learner",
    description:
      "Aptitude for rapidly mastering new programming languages, frameworks, and modern technologies.",
  },
  {
    icon: <FaUsers />,
    title: "Team Player",
    description:
      "Collaborative spirit committed to positive team synergy, mutual knowledge sharing, and collective success.",
  },
  {
    icon: <FaComments />,
    title: "Communication",
    description:
      "Clear, articulate technical and interpersonal communication across cross-functional teams and stakeholders.",
  },
  {
    icon: <FaAward />,
    title: "Leadership",
    description:
      "Takes proactive initiative, inspires peers, and guides teams toward shared project milestones and goals.",
  },
  {
    icon: <FaTasks />,
    title: "Project Management",
    description:
      "Organized approach to task prioritization, sprint tracking, and delivering projects reliably within deadlines.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Adaptability",
    description:
      "Thrives in fast-paced environments, easily pivoting to new requirements and embracing positive change.",
  },
  {
    icon: <FaClock />,
    title: "Time Management",
    description:
      "Strong discipline in managing time, balancing multiple responsibilities, and meeting commitments consistently.",
  },
  {
    icon: <FaSearchPlus />,
    title: "Attention to Details",
    description:
      "Meticulous focus on code quality, UI polish, edge cases, and delivering bug-free experiences.",
  },
  {
    icon: <FaBriefcase />,
    title: "Work Ethic",
    description:
      "High level of integrity, professional dedication, accountability, and passion for excellence in every task.",
  },
  {
    icon: <FaHeart />,
    title: "Kindness",
    description:
      "Approaches colleagues and peers with empathy, respect, active listening, and a supportive attitude.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Equality & Inclusivity",
    description:
      "Firm believer in equal opportunity, fair treatment, and valuing diverse perspectives in collaborative environments.",
  },
];

function Strengths() {
  return (
    <section id="strengths" className="section-gray section-pad">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">Core Values</p>
          <h2 className="section-heading">Strengths & Attributes</h2>
        </motion.div>

        {/* Strengths Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.035 }}
              className="card"
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {/* Icon badge */}
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.05rem",
                  color: "#2563eb",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  color: "#0f2b52",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.86rem",
                  color: "#475569",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Strengths;

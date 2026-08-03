import { motion } from "framer-motion";

function GithubStats() {
  return (
    <section id="github" className="section-gray section-pad">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">Activity</p>
          <h2 className="section-heading">GitHub Statistics</h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
            justifyItems: "center",
          }}
        >
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{
              borderRadius: "12px",
              width: "100%",
              maxWidth: "480px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 8px rgba(15,43,82,0.06)",
            }}
            src="https://github-readme-stats.vercel.app/api?username=Jerin133&show_icons=true&theme=default&border_color=e2e8f0&border_radius=12&title_color=0f2b52&text_color=475569&icon_color=2563eb"
            alt="GitHub Stats"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            style={{
              borderRadius: "12px",
              width: "100%",
              maxWidth: "480px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 8px rgba(15,43,82,0.06)",
            }}
            src="https://github-readme-streak-stats.herokuapp.com/?user=Jerin133&theme=default&border=e2e8f0&ring=0f2b52&fire=2563eb&currStreakLabel=0f2b52&border_radius=12"
            alt="GitHub Streak"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            style={{
              borderRadius: "12px",
              width: "100%",
              maxWidth: "340px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 8px rgba(15,43,82,0.06)",
            }}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jerin133&layout=compact&theme=default&border_color=e2e8f0&border_radius=12&title_color=0f2b52&text_color=475569"
            alt="Top Languages"
          />
        </div>
      </div>
    </section>
  );
}

export default GithubStats;
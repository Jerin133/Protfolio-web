import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "strengths", label: "Strengths" },
  { to: "projects", label: "Projects" },
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
  { to: "certifications", label: "Certifications" },
  { to: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontWeight: 800,
            fontSize: "1.2rem",
            color: "#0f2b52",
            letterSpacing: "-0.03em",
          }}
        >
          Jerin J
        </span>

        {/* Links */}
        <div
          style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}
          className="nav-links"
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              offset={-70}
              style={{
                padding: "0.4rem 0.8rem",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#475569",
                transition: "all 0.18s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#0f2b52";
                e.target.style.background = "#f1f5f9";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#475569";
                e.target.style.background = "transparent";
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ marginLeft: "0.75rem", padding: "0.45rem 1.1rem", fontSize: "0.83rem" }}
          >
            Resume
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
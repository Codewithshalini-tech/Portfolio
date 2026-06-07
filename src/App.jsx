import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Sparkles,
  Star,
  Zap,
  Layers3,
  MousePointer2,
  MoveUpRight,
  TerminalSquare,
  X,
} from "lucide-react";
import "./App.css";

const EMAIL = "sy7722403@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/shalini-yadav-379368305?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const GITHUB = "https://github.com/Codewithshalini-tech";

const navItems = ["Home", "Craft", "Skills", "Experience", "Projects"];

const marquee = ["React.js", "Figma to Code", "Pixel Perfect UI", "Responsive Design", "Firebase", "Clean Components", "Performance", "Modern Frontend"];

const skills = [
  "React.js", "JavaScript", "HTML5", "CSS3", "Material UI", "Tailwind CSS", "Bootstrap", "Firebase", "Node.js", "GitHub", "Vite", "Responsive UI"
];

const stats = [
  { value: "2+", label: "Years Experience", icon: <BriefcaseBusiness size={20} /> },
  { value: "25+", label: "Responsive Screens", icon: <Layers3 size={20} /> },
  { value: "3", label: "Live Work Roles", icon: <Award size={20} /> },
  { value: "100%", label: "Mobile First", icon: <Zap size={20} /> },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "Anslation, Gurugram",
    period: "Oct 2025 — Present",
    text: "Building responsive micro-tools, reusable UI components, production screens and Figma-accurate interfaces with clean frontend practices.",
  },
  {
    role: "Web Manager",
    company: "Intenim Technology Pvt. Ltd.",
    period: "Jul 2024 — Sep 2025",
    text: "Developed and maintained responsive e-commerce websites with polished layouts, dynamic features, debugging and performance-focused delivery.",
  },
  {
    role: "Web Developer Intern",
    company: "Tech Octanet",
    period: "Mar 2024 — Apr 2024",
    text: "Created responsive pages and interactive UI components using HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap and Git workflows.",
  },
];

const projects = [
  {
    no: "01",
    title: "Buyora Commerce",
    type: "E-commerce Experience",
    desc: "A responsive e-commerce website with category filtering, cart flow, authentication and Firebase-powered dynamic product rendering.",
    stack: ["React", "Vite", "Firebase", "Tailwind"],
  },
  {
    no: "02",
    title: "Web Camera Studio",
    type: "Browser Media Tool",
    desc: "Camera, photo capture, video recording and screen recording experience using modern Web APIs with a smooth responsive interface.",
    stack: ["React", "JavaScript", "Web APIs", "CSS"],
  },
  {
    no: "03",
    title: "Company Micro Tools",
    type: "Production UI System",
    desc: "Reusable company website tools, responsive sections and polished Figma-to-code screens built for real business usage.",
    stack: ["MUI", "React", "CSS", "Components"],
  },
];

const certifications = ["Full Stack Developer", "Frontend Development", "TCS Industry Practices", "Digital Productivity", "Microsoft Excel"];

function MagneticButton({ children, className = "", ...props }) {
  const ref = useRef(null);
  const onMove = (event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return <Button ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`magnetic ${className}`} {...props}>{children}</Button>;
}

const SectionTitle = ({ kicker, title, text }) => (
  <Box className="section-title-wrap reveal">
    <Chip className="kicker" label={kicker} />
    <Typography variant="h2" className="section-title">{title}</Typography>
    {text && <Typography className="section-text">{text}</Typography>}
  </Box>
);

export default function App() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 20 });
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const move = (e) => setSpot({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: 0.13 });
    items.forEach((item) => observer.observe(item));

    const onScroll = () => {
      let current = "Home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section && window.scrollY >= section.offsetTop - 180) current = item;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const scrollTo = (item) => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <Box className="site" style={{ "--mx": `${spot.x}%`, "--my": `${spot.y}%` }}>
      <Box className="noise" />
      <Box className="aurora a1" />
      <Box className="aurora a2" />
      <Box className="aurora a3" />

      <AppBar className="topbar" elevation={0} position="fixed">
        <Toolbar className="toolbar">
          <Stack direction="row" spacing={1.3} alignItems="center" className="brand" onClick={() => scrollTo("Home")}>
            <Avatar className="brand-mark">SY</Avatar>
            <Box>
              <Typography className="brand-name">Shalini Yadav</Typography>
              <Typography className="brand-line">Frontend Developer</Typography>
            </Box>
          </Stack>

          <Stack direction="row" className="nav desktop-nav">
            {navItems.map((item) => (
              <Button key={item} onClick={() => scrollTo(item)} className={active === item ? "nav-item active" : "nav-item"}>{item}</Button>
            ))}
          </Stack>

          <Stack direction="row" className="nav-actions">
            <IconButton className="icon-link" component="a" href={`mailto:${EMAIL}`}><Mail size={18} /></IconButton>
            <IconButton className="icon-link" component="a" target="_blank" href={LINKEDIN}><Linkedin size={18} /></IconButton>
            <IconButton className="icon-link" component="a" target="_blank" href={GITHUB}><Github size={18} /></IconButton>
            <IconButton className="menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</IconButton>
          </Stack>
        </Toolbar>
        {open && <Stack className="mobile-nav">{navItems.map((item) => <Button key={item} onClick={() => scrollTo(item)}>{item}</Button>)}</Stack>}
      </AppBar>

      <Box id="home" className="hero">
        <Container maxWidth="xl">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} lg={7}>
              <Box className="hero-copy reveal visible">
                <Chip className="hero-badge" icon={<Sparkles size={15} />} label="React Frontend Developer • Gurugram" />
                <Typography variant="h1" className="headline">
                  Building interfaces that look premium, move smooth & feel alive.
                </Typography>
                <Typography className="lead">
                  I transform Figma designs into fast, responsive and production-ready web experiences using React.js, Material UI, Tailwind CSS, Firebase and clean component architecture.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} className="cta-row">
                  <MagneticButton className="primary" onClick={() => scrollTo("Projects")} endIcon={<ArrowUpRight size={18} />}>Explore Work</MagneticButton>
                  <MagneticButton className="ghost" href="/resume.pdf" target="_blank" endIcon={<Download size={18} />}>Resume</MagneticButton>
                </Stack>
                <Stack direction="row" flexWrap="wrap" className="social-row">
                  <Button href={`mailto:${EMAIL}`} className="pill" startIcon={<Mail size={17} />}>{EMAIL}</Button>
                  <Button href={LINKEDIN} target="_blank" className="pill" startIcon={<Linkedin size={17} />}>LinkedIn</Button>
                  <Button href={GITHUB} target="_blank" className="pill" startIcon={<Github size={17} />}>GitHub</Button>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} lg={5}>
              <Box className="hero-stage reveal visible">
                <Box className="orbit one"><Code2 size={18} /> React UI</Box>
                <Box className="orbit two"><MousePointer2 size={18} /> Smooth UX</Box>
                <Card className="dev-card">
                  <Box className="card-top">
                    <span /><span /><span />
                    <Typography>portfolio.jsx</Typography>
                  </Box>
                  <Box className="terminal">
                    <Typography><b>const</b> developer = &#123;</Typography>
                    <Typography className="indent">name: <span>"Shalini Yadav"</span>,</Typography>
                    <Typography className="indent">focus: <span>"Pixel-perfect frontend"</span>,</Typography>
                    <Typography className="indent">stack: [<span>"React"</span>, <span>"MUI"</span>, <span>"Firebase"</span>],</Typography>
                    <Typography className="indent">status: <span>"Ready to build"</span></Typography>
                    <Typography>&#125;;</Typography>
                  </Box>
                  <Box className="preview-panel">
                    <Box className="preview-sidebar" />
                    <Stack spacing={1} flex={1}>
                      <Box className="preview-line wide" />
                      <Box className="preview-line" />
                      <Box className="preview-grid"><span /><span /><span /></Box>
                    </Stack>
                  </Box>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="marquee"><Box>{[...marquee, ...marquee].map((item, i) => <span key={`${item}-${i}`}>{item}</span>)}</Box></Box>

      <Container maxWidth="xl">
        <Grid container spacing={2.5} className="stats-row">
          {stats.map((item) => <Grid item xs={6} md={3} key={item.label}><Card className="stat reveal"><Box className="stat-icon">{item.icon}</Box><Typography className="stat-value">{item.value}</Typography><Typography className="stat-label">{item.label}</Typography></Card></Grid>)}
        </Grid>
      </Container>

      <Box id="craft" className="section">
        <Container maxWidth="xl">
          <SectionTitle kicker="Craft" title="Not just pages — polished digital experiences." text="A portfolio style focused on clean spacing, motion, typography, visual hierarchy and real frontend execution." />
          <Grid container spacing={3}>
            {[
              ["Pixel Perfect", "Figma designs converted into responsive, browser-friendly and balanced UI screens.", <MoveUpRight />],
              ["Component Thinking", "Reusable sections, maintainable structure and clean frontend patterns for scalable work.", <Layers3 />],
              ["Motion Details", "Subtle reveal animations, hover states, glass cards and micro-interactions that make the UI feel premium.", <Sparkles />],
            ].map(([title, text, icon]) => <Grid item xs={12} md={4} key={title}><Card className="craft-card reveal"><CardContent><Box className="craft-icon">{icon}</Box><Typography className="card-title">{title}</Typography><Typography className="card-text">{text}</Typography></CardContent></Card></Grid>)}
          </Grid>
        </Container>
      </Box>

      <Box id="skills" className="section dark-section">
        <Container maxWidth="xl">
          <SectionTitle kicker="Skills" title="Frontend stack with modern production taste." />
          <Box className="skill-cloud reveal">
            {skills.map((skill) => <Chip key={skill} label={skill} className="skill-chip" />)}
          </Box>
          <Grid container spacing={3} mt={2}>
            <Grid item xs={12} md={7}><Card className="big-panel reveal"><Typography className="panel-kicker">Core Strength</Typography><Typography className="panel-title">Responsive UI Development</Typography><Typography className="panel-text">Strong hands-on experience building responsive layouts, reusable React components, clean CSS systems, UI debugging, performance-friendly interactions and browser-compatible screens.</Typography></Card></Grid>
            <Grid item xs={12} md={5}><Card className="big-panel reveal"><Typography className="panel-kicker">Certifications</Typography><Stack direction="row" flexWrap="wrap" gap={1.2}>{certifications.map((c) => <Chip className="cert-chip" label={c} key={c} />)}</Stack></Card></Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="experience" className="section">
        <Container maxWidth="xl">
          <SectionTitle kicker="Experience" title="Real work. Real screens. Real delivery." />
          <Stack className="timeline" spacing={2.5}>
            {experiences.map((item, i) => <Card className="exp-card reveal" key={item.role}><Grid container spacing={2}><Grid item xs={12} md={3}><Typography className="exp-no">0{i + 1}</Typography><Chip className="period" label={item.period} /></Grid><Grid item xs={12} md={9}><Typography className="exp-role">{item.role}</Typography><Typography className="exp-company">{item.company}</Typography><Typography className="exp-text">{item.text}</Typography></Grid></Grid></Card>)}
          </Stack>
        </Container>
      </Box>

      <Box id="projects" className="section project-section">
        <Container maxWidth="xl">
          <SectionTitle kicker="Projects" title="Selected work with product-style presentation." text="Projects are presented like premium case studies to show UI sense, frontend structure and execution quality." />
          <Grid container spacing={3}>
            {projects.map((project) => <Grid item xs={12} md={4} key={project.title}><Card className="project-card reveal"><Box className="project-art"><Typography>{project.no}</Typography><TerminalSquare /></Box><CardContent><Chip className="project-type" label={project.type} /><Typography className="project-title">{project.title}</Typography><Typography className="project-desc">{project.desc}</Typography><Stack direction="row" flexWrap="wrap" gap={1}>{project.stack.map((s) => <Chip className="tech" label={s} key={s} />)}</Stack></CardContent></Card></Grid>)}
          </Grid>
        </Container>
      </Box>

      <Box className="footer-hero">
        <Container maxWidth="lg">
          <Box className="closing-card reveal">
            <Chip className="kicker" label="Let’s build something beautiful" />
            <Typography className="closing-title">Available for frontend roles, UI development & React projects.</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center">
              <Button href={`mailto:${EMAIL}`} className="primary footer-btn" startIcon={<Mail size={18} />}>Email</Button>
              <Button href={LINKEDIN} target="_blank" className="ghost footer-btn" startIcon={<Linkedin size={18} />}>LinkedIn</Button>
              <Button href={GITHUB} target="_blank" className="ghost footer-btn" startIcon={<Github size={18} />}>GitHub</Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Typography className="copyright">© {year} Shalini Yadav — Frontend Developer</Typography>
    </Box>
  );
}

// src/App.tsx
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiCode, FiBriefcase, FiBookOpen } from 'react-icons/fi';
import './index.css';

// --- DEFINISI TIPE DATA ---
interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  school: string;
  year: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

// --- DATA DUMMY (Ganti dengan data asli Anda) ---
const experiences: Experience[] = [
  {
    id: 1,
    role: "Research and Technology Department",
    company: "HIMTI Universitas Paramadina",
    date: "Feb 2026 - Sekarang",
    description: "Membangun dan Memelihara infrastruktur teknologi untuk mendukung kegiatan riset dan pengembangan di HIMTI, termasuk pengelolaan server, database, dan platform kolaborasi."
  },
  {
    id: 2,
    role: "Co-lead Developer",
    company: "Halcyon Project",
    date: "Des 2025 - Sekarang",
    description: "Mengembangkan arsitektur sistem dan source code inti, menjaga kualitas kode melalui review kontribusi komunitas, serta mengarahkan keputusan teknis harian untuk memastikan kelangsungan proyek."
  }
];

const educations: Education[] = [
  {
    id: 1,
    degree: "Sarjana Komputer (S.Kom) - Teknik Informatika",
    school: "Universitas Paramadina",
    year: "2025 - Sekarang",
    description: "Mahasiswa aktif semester 2 dengan IPK saat ini 3.09. Berfokus pada mata kuliah Rekayasa Perangkat Lunak, Basis Data, dan Arsitektur Sistem."
  },
  {
    id: 2,
    degree: "Teknik Komputer dan Jaringan",
    school: "SMK Budhi Warman 1 Jakarta",
    year: "2022 - 2025",
    description: "Aktif dalam ekstrakurikuler klub Robotik."
  }
];

const projects: Project[] = [
  {
    id: 1,
    title: "Sistem Manajemen Event HIMTI",
    description: "Aplikasi berbasis web untuk mengelola event HIMTI, termasuk pendaftaran peserta, jadwal acara, dan pelaporan hasil.",
    techStack: ["next.js", "Tailwind", "Neon PostgreSQL", "Prisma ORM", "Vercel"],
    link: "https://github.com/informatics-paramadina/events-himti"
  },
  {
    id: 2,
    title: "Halcyon Project",
    description: "Custom ROM yang berbasis Android dengan desain UI yang minimalis dan ringan.",
    techStack: ["Java", "Kotlin", "AOSP", "Android"],
    link: "https://github.com/halcyonproject"
  },
  {
    id: 3,
    title: "Portofolio Pribadi",
    description: "Website portofolio minimalis dengan performa tinggi dan mode gelap.",
    techStack: ["React", "TypeScript", "Vite"],
    link: "https://github.com/rktdnt/rktdnt.github.io"
  }
];

function App() {
  return (
    <>
      <header className="hero">
        <h1>Raya Mahardika Ibrahim</h1>
        <h2>Software Engineer / Backend Developer</h2>
        <p>
          Saya seorang pengembang perangkat lunak yang bersemangat membangun sistem backend yang andal, dapat diskalakan, dan aplikasi yang berpusat pada pengguna. Berbasis di Jakarta, Indonesia.
        </p>
        
        <div className="social-links">
          <a href="https://github.com/rktdnt" target="_blank" rel="noopener noreferrer">
            <FiGithub size={20} /> GitHub
          </a>
          <a href="https://linkedin.com/in/raya-mahardika-57bb10326" target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={20} /> LinkedIn
          </a>
          <a href="mailto:rayamahardikaibrahim@gmail.com">
            <FiMail size={20} /> Email
          </a>
        </div>
      </header>

      <main>
        {/* SECTION: PENGALAMAN */}
        <section id="experience">
          <h2 className="section-title">
            <FiBriefcase size={24} /> Pengalaman
          </h2>
          <div className="timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <h3>{exp.role}</h3>
                <div className="timeline-date">{exp.company} · {exp.date}</div>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: PENDIDIKAN */}
        <section id="education">
          <h2 className="section-title">
            <FiBookOpen size={24} /> Pendidikan
          </h2>
          <div className="timeline">
            {educations.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <h3>{edu.degree}</h3>
                <div className="timeline-date">{edu.school} · {edu.year}</div>
                <p className="timeline-desc">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: PROYEK / REPOSITORI */}
        <section id="projects">
          <h2 className="section-title">
            <FiCode size={24} /> Proyek & Open Source
          </h2>
          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.id} className="card">
                <div className="card-header">
                  <h3 className="card-title">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Lihat Proyek">
                    <FiExternalLink size={20} />
                  </a>
                </div>
                <p className="card-desc">{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Raya Mahardika Ibrahim. Dibangun dengan React & Vite.</p>
      </footer>
    </>
  );
}

export default App;
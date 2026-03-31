import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Briefcase,
  GraduationCap,
  User,
  Code,
  Award,
} from 'lucide-react';

const cv = {
  personal: {
    name: 'Miguel Ángel Puentes Castro',
    title: 'Desarrollador de Software',
    email: 'miguel.puentes@email.com',
    phone: '+57 300 000 0000',
    location: 'Colombia',
    linkedin: 'linkedin.com/in/miguel-puentes',
    github: 'github.com/miguel-puentes',
    summary:
      'Desarrollador de software apasionado con experiencia en el diseño y construcción de aplicaciones web modernas. Orientado a la resolución de problemas, con habilidades sólidas en trabajo en equipo y comunicación efectiva.',
  },
  experience: [
    {
      role: 'Desarrollador Full Stack',
      company: 'Tech Solutions S.A.S.',
      period: 'Enero 2023 – Presente',
      location: 'Bogotá, Colombia',
      bullets: [
        'Desarrollo de aplicaciones web utilizando React, Node.js y bases de datos relacionales.',
        'Implementación de APIs RESTful para la integración con servicios externos.',
        'Participación activa en revisiones de código y mejoras de rendimiento.',
        'Colaboración con equipos de diseño UX para entregar interfaces intuitivas.',
      ],
    },
    {
      role: 'Desarrollador Frontend',
      company: 'Agencia Digital XYZ',
      period: 'Junio 2021 – Diciembre 2022',
      location: 'Medellín, Colombia',
      bullets: [
        'Creación de interfaces responsivas con HTML, CSS, JavaScript y React.',
        'Optimización de la velocidad de carga de sitios web (Lighthouse score > 90).',
        'Mantenimiento y actualización de proyectos legacy en jQuery y Bootstrap.',
      ],
    },
  ],
  education: [
    {
      degree: 'Ingeniería de Sistemas',
      institution: 'Universidad Nacional de Colombia',
      period: '2017 – 2022',
      details: 'Énfasis en desarrollo de software y bases de datos.',
    },
    {
      degree: 'Bootcamp Full Stack Web Development',
      institution: 'Platzi',
      period: '2021',
      details: 'Certificación en desarrollo web con JavaScript, React y Node.js.',
    },
  ],
  skills: {
    technical: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'PostgreSQL',
      'MySQL',
      'Git',
      'Docker',
    ],
    soft: [
      'Trabajo en equipo',
      'Comunicación efectiva',
      'Resolución de problemas',
      'Aprendizaje continuo',
      'Gestión del tiempo',
    ],
  },
  certifications: [
    { name: 'React Developer Certification', issuer: 'Meta', year: '2023' },
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2022' },
  ],
};

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4 border-b-2 border-blue-600 pb-1">
      <span className="text-blue-600">{icon}</span>
      <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">{title}</h2>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">

        {/* Header / Personal Info */}
        <header className="bg-blue-700 text-white px-8 py-10">
          <h1 className="text-4xl font-extrabold tracking-tight">{cv.personal.name}</h1>
          <p className="text-blue-200 text-xl mt-1">{cv.personal.title}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a href={`mailto:${cv.personal.email}`} className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Mail size={15} />
              {cv.personal.email}
            </a>
            <span className="flex items-center gap-1">
              <Phone size={15} />
              {cv.personal.phone}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={15} />
              {cv.personal.location}
            </span>
            <a href={`https://${cv.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Linkedin size={15} />
              {cv.personal.linkedin}
            </a>
            <a href={`https://${cv.personal.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Github size={15} />
              {cv.personal.github}
            </a>
          </div>
        </header>

        <div className="px-8 py-8 space-y-8">

          {/* Summary */}
          <section>
            <SectionTitle icon={<User size={20} />} title="Perfil Profesional" />
            <p className="text-gray-700 leading-relaxed">{cv.personal.summary}</p>
          </section>

          {/* Experience */}
          <section>
            <SectionTitle icon={<Briefcase size={20} />} title="Experiencia Laboral" />
            <div className="space-y-6">
              {cv.experience.map((job, i) => (
                <div key={i}>
                  <div className="flex flex-wrap justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{job.role}</h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 text-sm">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <SectionTitle icon={<GraduationCap size={20} />} title="Educación" />
            <div className="space-y-4">
              {cv.education.map((edu, i) => (
                <div key={i} className="flex flex-wrap justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-600">{edu.details}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <SectionTitle icon={<Code size={20} />} title="Habilidades" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Técnicas</h3>
                <div className="flex flex-wrap gap-2">
                  {cv.skills.technical.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Blandas</h3>
                <div className="flex flex-wrap gap-2">
                  {cv.skills.soft.map((skill) => (
                    <span
                      key={skill}
                      className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <SectionTitle icon={<Award size={20} />} title="Certificaciones" />
            <div className="space-y-2">
              {cv.certifications.map((cert, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-gray-800">{cert.name}</span>
                    <span className="text-gray-500 text-sm ml-2">— {cert.issuer}</span>
                  </div>
                  <span className="text-sm text-gray-500">{cert.year}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        <footer className="bg-gray-50 border-t border-gray-200 px-8 py-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} {cv.personal.name} · CV generado con React + Vite + Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

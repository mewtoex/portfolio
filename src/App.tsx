import { Github, Linkedin, Mail, Terminal, Database, Bot, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const projects = [
    {
      title: "Finance Ecosystem (Home Lab)",
      description: "Sistema financeiro completo e auto-hospedado. Utiliza IA (Groq) para ler comprovantes e n8n para automação via Telegram.",
      tags: [".NET 8", "React", "PostgreSQL", "Docker", "n8n", "AI"],
      link: "https://github.com/mewtoex/finance-project",
      icon: <Bot className="w-10 h-10 text-purple-400" />
    },
    {
      title: "SMA System (Legacy Engineering)",
      description: "Sistema de gestão Desktop para ONGs (TCC). Construído com arquitetura MVC pura, Java Swing e acesso a dados via JDBC/DAO, demonstrando fundamentos sólidos de Engenharia de Software sem frameworks.",
      tags: ["Java 8", "Swing", "MVC", "PostgreSQL", "JDBC"],
      link: "https://github.com/mewtoex/sma",
      icon: <Code2 className="w-10 h-10 text-red-500" />
    }
  ];

  const skills = [
    { name: "Backend", items: "C#, .NET 8, Python, Node.js" },
    { name: "Frontend", items: "React, TypeScript, Tailwind CSS" },
    { name: "DevOps", items: "Docker, CasaOS, CI/CD, Linux" },
    { name: "Automação", items: "n8n, Groq AI, Webhooks" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-purple-500/30">

      {/* Header / Hero */}
      <header className="max-w-4xl mx-auto pt-20 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-purple-400 mb-4 font-mono text-sm">
            <Terminal size={16} />
            <span>whanderson@dev-lab:~$ ./welcome.sh</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
            Whanderson <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Andrade</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Full Stack Developer  <br />
          </p>

          <div className="flex gap-4 mt-8">
            <SocialLink href="https://github.com/mewtoex" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/whanderson-andrade/" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:whanderson@egmail.com" icon={<Mail />} label="Email" />
          </div>
        </motion.div>
      </header>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
          <Code2 className="text-purple-400" /> Stack Técnica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-colors"
            >
              <h3 className="text-purple-400 font-mono text-sm mb-2">{skill.name}</h3>
              <p className="text-slate-300 font-medium">{skill.items}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 pb-32">
        <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
          <Database className="text-blue-400" /> Projetos em Destaque
        </h2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="group block p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-slate-800/80 transition-colors">
                  {project.icon}
                </div>
                <ExternalLink className="text-slate-600 group-hover:text-purple-400 transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-slate-900 text-slate-400 hover:bg-purple-500/10 hover:text-purple-400 border border-slate-800 hover:border-purple-500/30 transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export default App;
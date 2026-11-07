'use client'

import { useEffect, useState, type FormEvent } from 'react'

type SendState = 'idle' | 'loading' | 'sent' | 'error'

type FormData = {
  name: string
  email: string
  message: string
}

const skillGroups = [
  {
    title: 'Programming Languages',
    pills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
  },
  {
    title: 'CS Fundamentals',
    pills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
  {
    title: 'Frontend',
    pills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Databases',
    pills: [
      'Node.js',
      'FastAPI',
      'REST APIs',
      'WebSockets',
      'Microservices',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
    ],
  },
  {
    title: 'Cloud & Tools',
    pills: ['AWS', 'Docker', 'Kubernetes', 'Kafka', 'Git', 'Linux', 'Supabase', 'GitHub Actions'],
  },
  {
    title: 'AI & Machine Learning',
    pills: [
      'LLMs',
      'Prompt Engineering',
      'Agentic Workflows',
      'MCP',
      'Gemini API',
      'Hugging Face',
      'Transformers',
      'NLP',
      'TensorFlow',
      'LangGraph',
      'RAG',
    ],
  },
]

const certifications = [
  {
    issuer: 'Coursera · deeplearning.ai',
    name: 'NLP with Classification & Vector Spaces',
    url: 'https://www.coursera.org/account/accomplishments/records/QIUFANLQ90UH',
  },
  {
    issuer: 'Coursera · deeplearning.ai',
    name: 'NLP with Probabilistic Models',
    url: 'https://www.coursera.org/account/accomplishments/verify/HP9AOIJO7TMU',
  },
  {
    issuer: 'Coursera · deeplearning.ai',
    name: 'NLP with Sequence Models',
    url: 'https://www.coursera.org/account/accomplishments/verify/RSCHGG7ED3TR',
  },
  {
    issuer: '100xDevs',
    name: '0–100 Full Stack Development',
    url: 'https://app.100xdevs.com/certificate/verify/I8LVNT9L',
  },
]

export default function Home() {
  const [sendState, setSendState] = useState<SendState>('idle')
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [formError, setFormError] = useState('')

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')

    if (typeof IntersectionObserver === 'undefined') {
      reveals.forEach((element) => element.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    reveals.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    }

    if (!payload.name || !payload.email || !payload.message) {
      setFormError('Please fill in all fields before sending your message.')
      return
    }

    setFormError('')
    setSendState('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('The contact request failed.')
      }

      setSendState('sent')
      setFormData({ name: '', email: '', message: '' })
      window.setTimeout(() => setSendState('idle'), 3500)
    } catch {
      setSendState('error')
      window.setTimeout(() => setSendState('idle'), 3500)
    }
  }

  return (
    <>
      {/* NAVIGATION */}
      <nav className="nav">
        <a href="#about" className="nav-logo" aria-label="Divyansh Nahar home">
          DN<span>.dev</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO / ABOUT */}
      <section className="hero" id="about">
        <div className="hero-glow" />
        <div className="hero-glow2" />

        <div className="hero-content">
          <div className="hero-tag anim-1">Full Stack Development · AI Systems · Backend Engineering</div>

          <h1 className="hero-name anim-2">
            Divyansh<br />
            <span>Nahar</span>
          </h1>

          <p className="hero-sub anim-3">
            Computer Science undergraduate and full-stack developer building production-ready
            applications, scalable backend systems, and AI-powered experiences.
          </p>

          <div className="hero-links anim-4">
            <a href="mailto:divyanshnahar15@gmail.com" className="btn btn-primary">
              → Say Hello
            </a>
            <a
              href="https://github.com/DivyanshNahar"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/divyansh-nahar-8872a6297/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn ↗
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">
              Resume ↗
            </a>
          </div>

          <div className="hero-stats anim-5">
            <div>
              <div className="stat-val">700+</div>
              <div className="stat-label">LeetCode Problems</div>
            </div>
            <div>
              <div className="stat-val">1935</div>
              <div className="stat-label">LeetCode Rating</div>
            </div>
            <div>
              <div className="stat-val">AIR <span className="stat-sub">6252</span></div>
              <div className="stat-label">JEE Advanced 2023</div>
            </div>
          </div>
        </div>

        {/* FLOATING TERMINAL */}
        <div className="terminal-card anim-terminal">
          <div className="terminal-bar">
            <div className="dot dot-r" />
            <div className="dot dot-y" />
            <div className="dot dot-g" />
            <span className="terminal-title">divyansh@dev</span>
          </div>
          <div className="terminal-body">
            <div><span className="t-prompt">~/ </span><span className="t-cmd">whoami</span></div>
            <div className="t-out">divyansh_nahar</div>
            <br />
            <div><span className="t-prompt">~/ </span><span className="t-cmd">cat stack.txt</span></div>
            <div className="t-out">→ <span className="t-hl">Node.js</span> · Next.js · FastAPI</div>
            <div className="t-out">→ <span className="t-hl">PostgreSQL</span> · Redis · MongoDB</div>
            <div className="t-out">→ <span className="t-hl">LLMs</span> · RAG · LangGraph</div>
            <br />
            <div><span className="t-prompt">~/ </span><span className="t-cmd">cat status.txt</span></div>
            <div className="t-out">🎓 IIIT Vadodara · <span className="t-hl">CSE &#39;27</span> (CPI 7.44)</div>
            <div className="t-out">📍 Gandhinagar, India</div>
            <div className="t-out">⚡ Building useful things...</div>
            <br />
            <div><span className="t-prompt">~/ </span><span className="t-cmd">_<span className="t-blink">▋</span></span></div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-label">01. Experience</div>
        <div className="section-title">Where I&apos;ve <span>Shipped</span></div>

        <div className="reveal">
          <div className="exp-card">
            <div className="exp-top">
              <div>
                <div className="exp-role">Full Stack Developer Intern</div>
                <div className="exp-company">
                  <a href="https://www.rayeva.com/" target="_blank" rel="noreferrer">
                    Rayeva World Pvt Ltd ↗
                  </a>
                </div>
              </div>
              <div className="exp-date">May 2026 – Aug 2026</div>
            </div>
            <ul className="exp-bullets">
              <li>
                Shipped production full-stack features using <strong>Node.js and REST APIs</strong>,
                including an Excel-to-Supabase bulk data ingestion pipeline with validation that
                reduced B2B and B2C product upload time by <strong>90%</strong>.
              </li>
              <li>
                Architected custom <strong>Razorpay payment workflows</strong>, implementing an
                automated 50% advance-payment rule for high-volume B2B orders.
              </li>
              <li>
                Engineered automated, event-driven fulfillment workflows for <strong>invoice and
                shipping-label generation</strong>, integrating order-state transitions and
                reducing manual processing.
              </li>
              <li>
                Delivered technical SEO optimizations and critical production bug fixes, driving an
                <strong> 80% increase in organic search indexing</strong> and improving system
                stability.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="section-label">02. Education</div>
        <div className="section-title">Academic <span>Background</span></div>

        <div className="reveal">
          <div className="exp-card">
            <div className="exp-top">
              <div>
                <div className="exp-role">B.Tech in Computer Science and Engineering</div>
                <div className="exp-company">Indian Institute of Information Technology, Vadodara</div>
              </div>
              <div className="exp-date">Sept 2023 – May 2027</div>
            </div>
            <ul className="exp-bullets">
              <li><strong>CPI:</strong> 7.44 / 10.00</li>
              <li>
                <strong>Relevant coursework:</strong> OOP, Software Engineering, DBMS, DSA,
                Artificial Intelligence, Cryptography, Operating Systems, and Computer Networks.
              </li>
              <li><strong>Class XII (CBSE):</strong> 91.6% <span aria-hidden="true"> · </span><strong>Class X (CBSE):</strong> 90.4%</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-label">03. Projects</div>
        <div className="section-title">Things I&apos;ve <span>Built</span></div>

        <div className="projects-grid reveal">
          {/* PROJECT 01 — REELSSTACK */}
          <div className="proj-card">
            <div className="proj-num">PROJECT / 01</div>
            <div className="proj-name">ReelsStack — AI Video Generation Platform</div>
            <div className="proj-desc">
              Built a full-stack AI-powered video generation platform that orchestrates a
              multi-step LLM pipeline. It generates scene-wise scripts with Gemini API and
              AI-generated images with Stable Diffusion through Hugging Face. ElevenLabs voice
              synthesis and Deepgram caption generation run as chained stages, followed by
              cloud-based rendering with Remotion and GitHub Actions.
            </div>
            <div className="proj-stack">
              {[
                'Next.js',
                'Gemini API',
                'Hugging Face',
                'Stable Diffusion',
                'ElevenLabs',
                'Deepgram',
                'Cloudinary',
                'Remotion',
                'GitHub Actions',
              ].map((technology) => (
                <span key={technology} className="tag">{technology}</span>
              ))}
            </div>
            <a
              href="https://reel-stack-9mcf.vercel.app/"
              className="proj-link"
              target="_blank"
              rel="noreferrer"
            >
              View Live ↗
            </a>
          </div>

          {/* PROJECT 02 — AI INTERVIEWER */}
          <div className="proj-card">
            <div className="proj-num">PROJECT / 02</div>
            <div className="proj-name">AI Interviewer — Mock Interview Platform</div>
            <div className="proj-desc">
              Built a full-stack, voice-based mock interview platform using Next.js, React, Prisma,
              and PostgreSQL. Integrated Google Gemini with structured outputs to generate
              contextual questions, evaluate responses, and provide recruiter-style feedback with
              real-time category-wise scoring. Includes a voice-first experience with ElevenLabs,
              secure authentication using NextAuth v5, interview history, and an analytics dashboard.
            </div>
            <div className="proj-stack">
              {[
                'Next.js',
                'React',
                'Prisma',
                'PostgreSQL',
                'Gemini API',
                'ElevenLabs',
                'NextAuth v5',
              ].map((technology) => (
                <span key={technology} className="tag">{technology}</span>
              ))}
            </div>
            <a
              href="https://ai-interview-eight-dun.vercel.app/"
              className="proj-link"
              target="_blank"
              rel="noreferrer"
            >
              View Live ↗
            </a>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="section" id="skills">
        <div className="section-label">04. Technical Stack</div>
        <div className="section-title">What I <span>Work With</span></div>

        <div className="skills-grid reveal">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-block">
              <div className="skill-block-title">{group.title}</div>
              <div className="skill-pills">
                {group.pills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* TECHNICAL INTERESTS */}
        <div className="section-label" style={{ marginTop: '3.5rem' }}>Technical Interests</div>
        <div className="skill-pills reveal" style={{ marginTop: '1rem' }}>
          {[
            'Software Development',
            'Full Stack Development',
            'Scalable Backend Systems',
            'Agentic AI Systems',
            'LLM Applications',
            'Workflow Automation',
          ].map((interest) => (
            <span key={interest} className="skill-pill">{interest}</span>
          ))}
        </div>

        {/* ACHIEVEMENTS */}
        <div className="section-label" style={{ marginTop: '3.5rem' }}>Highlights</div>
        <div className="achieve-list reveal" style={{ marginTop: '1rem' }}>
          {[
            {
              icon: '🎓',
              text: <>Qualified <strong>JEE Advanced 2023</strong> with an <strong>All India Rank of 6252</strong>.</>,
            },
            {
              icon: '🚀',
              text: <><strong>Flipkart GRiD 8.0</strong> Semi-Finalist.</>,
            },
            {
              icon: '🧠',
              text: <>Solved <strong>700+ problems</strong> on <a href="https://leetcode.com/u/divyanshnahar15/" target="_blank" rel="noreferrer"><strong>LeetCode</strong></a>.</>,
            },
            {
              icon: '📈',
              text: <>Earned the <strong>Knight badge</strong> on LeetCode with a contest rating of <strong>1935</strong>.</>,
            },
          ].map((achievement, index) => (
            <div key={index} className="achieve-item">
              <div className="achieve-icon">{achievement.icon}</div>
              <div className="achieve-text">{achievement.text}</div>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <div className="section-label" style={{ marginTop: '3.5rem' }}>Certifications</div>
        <div className="certs-grid reveal" style={{ marginTop: '1rem' }}>
          {certifications.map((certification) => (
            <a
              key={certification.name}
              href={certification.url}
              className="cert-card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert-issuer">{certification.issuer}</div>
              <div className="cert-name">{certification.name}</div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-inner">
          <div className="reveal">
            <div className="section-label">05. Connect</div>
            <div className="contact-big">Let&apos;s <span>Talk</span></div>
            <p className="contact-desc">
              Interested in software engineering, full-stack development, scalable backend
              systems, or AI applications? Let&apos;s connect and build something useful.
            </p>
            <ul className="contact-links-list">
              {[
                { label: 'divyanshnahar15@gmail.com', href: 'mailto:divyanshnahar15@gmail.com' },
                { label: '+91 946-103-2455', href: 'tel:+919461032455' },
                { label: 'github.com/DivyanshNahar', href: 'https://github.com/DivyanshNahar' },
                {
                  label: 'linkedin.com/in/divyansh-nahar',
                  href: 'https://www.linkedin.com/in/divyansh-nahar-8872a6297/',
                },
                { label: 'leetcode.com/divyanshnahar15', href: 'https://leetcode.com/u/divyanshnahar15/' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                  <span className="c-icon">→</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <form className="contact-form-box" onSubmit={handleSend}>
              <label className="c-input-label" htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="c-input"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={(event) => {
                  setFormData({ ...formData, name: event.target.value })
                  setFormError('')
                }}
                disabled={sendState === 'loading'}
                required
              />

              <label className="c-input-label" htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="c-input"
                placeholder="hello@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={(event) => {
                  setFormData({ ...formData, email: event.target.value })
                  setFormError('')
                }}
                disabled={sendState === 'loading'}
                required
              />

              <label className="c-input-label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="c-textarea"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(event) => {
                  setFormData({ ...formData, message: event.target.value })
                  setFormError('')
                }}
                disabled={sendState === 'loading'}
                required
              />

              {formError && <p role="alert">{formError}</p>}
              {sendState === 'error' && (
                <p role="alert">Something went wrong. Please try again or email me directly.</p>
              )}

              <button
                type="submit"
                className={`c-send${sendState === 'sent' ? ' sent' : ''}${sendState === 'error' ? ' error' : ''}`}
                disabled={sendState === 'loading' || sendState === 'sent'}
              >
                {sendState === 'loading'
                  ? 'Sending...'
                  : sendState === 'sent'
                    ? '✓ Message Sent!'
                    : sendState === 'error'
                      ? 'Error Sending'
                      : '→ Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 <a href="#about">Divyansh Nahar</a>. Designed &amp; Built with ♥</p>
        <p style={{ color: 'var(--border)' }}>IIIT Vadodara · CSE &apos;27</p>
      </footer>
    </>
  )
}

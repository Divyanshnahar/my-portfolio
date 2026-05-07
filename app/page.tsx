'use client'

import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [sendState, setSendState] = useState<'idle' | 'sent'>('idle')

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach(r => observer.observe(r))
    return () => observer.disconnect()
  }, [])

  const handleSend = () => {
    setSendState('sent')
    setTimeout(() => setSendState('idle'), 3000)
  }

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">DN<span>.dev</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="about">
        <div className="hero-glow" />
        <div className="hero-glow2" />

        <div className="hero-content">
          <div className="hero-tag anim-1">Available for opportunities · 2026</div>

          <h1 className="hero-name anim-2">
            Divyansh<br />
            <span>Nahar</span>
          </h1>

          <p className="hero-sub anim-3">
            Full Stack Engineer &amp; ML Practitioner building intelligent systems —
            from LLM pipelines to production-ready backends.
          </p>

          <div className="hero-links anim-4">
            <a href="mailto:divyanshnahar15@gmail.com" className="btn btn-primary">→ Say Hello</a>
            <a href="https://github.com/DivyanshNahar" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/divyansh-nahar-8872a6297/" target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn ↗</a>
          </div>

          <div className="hero-stats anim-5">
            <div>
              <div className="stat-val">500+</div>
              <div className="stat-label">DSA Problems</div>
            </div>
            <div>
              <div className="stat-val">3+</div>
              <div className="stat-label">ML Deployments</div>
            </div>
            <div>
              <div className="stat-val">AIR <span className="stat-sub">6252</span></div>
              <div className="stat-label">JEE Advanced 2023</div>
            </div>
          </div>
        </div>

        {/* Floating terminal */}
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
            <div><span className="t-prompt">~/ </span><span className="t-cmd">cat skills.txt</span></div>
            <div className="t-out">→ <span className="t-hl">NLP</span> · T5 · BERT · LLMs</div>
            <div className="t-out">→ <span className="t-hl">FastAPI</span> · Flask · Next.js</div>
            <div className="t-out">→ <span className="t-hl">Firebase</span> · Docker · Postgres</div>
            <br />
            <div><span className="t-prompt">~/ </span><span className="t-cmd">cat status.txt</span></div>
            <div className="t-out">🎓 IIIT Vadodara · <span className="t-hl">CSE &#39;27</span></div>
            <div className="t-out">📍 Gandhinagar, India</div>
            <div className="t-out">⚡ Building cool things...</div>
            <br />
            <div><span className="t-prompt">~/ </span><span className="t-cmd">_<span className="t-blink">▋</span></span></div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-label">01. Work</div>
        <div className="section-title">Where I&apos;ve <span>Shipped</span></div>

        {/* Rayeva World — NEW */}
        <div className="reveal">
          <div className="exp-card">
            <div className="exp-top">
              <div>
                <div className="exp-role">Full Stack Developer Intern</div>
                <div className="exp-company">
                  <a href="https://www.rayeva.com/" target="_blank" rel="noreferrer">Rayeva World Pvt Ltd ↗</a>
                </div>
              </div>
              <div className="exp-date">Apr 2026 – Present</div>
            </div>
            <ul className="exp-bullets">
              <li>Engineering the <strong>core backend architecture</strong> for a sustainable B2B/B2C marketplace, implementing secure payment, billing, and vendor onboarding modules using <strong>Node.js and REST APIs</strong>.</li>
              <li>Integrating <strong>Generative AI</strong> to automate product descriptions and content generation, projected to <strong>reduce vendor onboarding time by 40%</strong> and improve SEO visibility.</li>
              <li>Optimizing the order lifecycle management system to support high-concurrency transactions, aiming for a <strong>25% increase in operational efficiency</strong> for marketplace administrative tasks.</li>
              <li>Collaborating on the end-to-end launch strategy, ensuring a scalable infrastructure capable of handling an initial target of <strong>1,000+ active sustainable product SKUs</strong>.</li>
            </ul>
          </div>
        </div>

        {/* Bharat Talent */}
        <div className="reveal">
          <div className="exp-card">
            <div className="exp-top">
              <div>
                <div className="exp-role">Full Stack Developer Intern</div>
                <div className="exp-company">
                  <a href="https://hiregence.com/" target="_blank" rel="noreferrer">Bharat Talent ↗</a>
                </div>
              </div>
              <div className="exp-date">Jan 2026 – Feb 2026</div>
            </div>
            <ul className="exp-bullets">
              <li>Developed and deployed scalable backend services using <strong>Firebase, Next.js, and Python</strong>, implementing authentication, Firestore workflows, and API integrations.</li>
              <li>Designed responsive frontend interfaces using <strong>Plasmic</strong>, creating dashboards for clients and candidates with dynamic state management.</li>
              <li>Integrated <strong>Generative AI</strong> for resume parsing, automated profile summaries, and AI-driven interview question generation.</li>
              <li>Built end-to-end interview workflows including database triggers, cloud functions, and automated email-based interview invitations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-label">02. Build</div>
        <div className="section-title">Things I&apos;ve <span>Built</span></div>

        <div className="projects-grid reveal">

          {/* PROJECT 01 — ReelsStack */}
          <div className="proj-card">
            <div className="proj-num">PROJECT / 01</div>
            <div className="proj-name">ReelsStack — AI Video Generation Platform</div>
            <div className="proj-desc">
              Full-stack AI-powered short video generation platform. Generates scene-wise scripts
              via Gemini API, AI images via Stable Diffusion, ElevenLabs voice synthesis,
              Deepgram captions, and cloud rendering with Remotion + GitHub Actions.
            </div>
            <div className="proj-stack">
              {['Next.js', 'Gemini API', 'HuggingFace', 'ElevenLabs', 'Remotion', 'Cloudinary'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <a href="https://reel-stack-9mcf.vercel.app/" className="proj-link" target="_blank" rel="noreferrer">
              View Live ↗
            </a>
          </div>

          {/* PROJECT 02 — NL to SQL */}
          <div className="proj-card">
            <div className="proj-num">PROJECT / 02</div>
            <div className="proj-name">Natural Language → SQL Assistant</div>
            <div className="proj-desc">
              End-to-end Text-to-SQL system. Fine-tuned T5 with schema-aware generation,
              fuzzy column matching, Gemini LLM fallback and SQL validation to eliminate hallucinations.
              Deployed via Docker on Hugging Face Spaces.
            </div>
            <div className="proj-stack">
              {['FastAPI', 'T5', 'Gemini API', 'Docker'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <a href="https://divyanshnahar15-nltosql.hf.space/docs#/" className="proj-link" target="_blank" rel="noreferrer">
              View Live ↗
            </a>
          </div>

          {/* PROJECT 03 — Emotion Detection */}
          <div className="proj-card">
            <div className="proj-num">PROJECT / 03</div>
            <div className="proj-name">Real-Time Emotion Detection System</div>
            <div className="proj-desc">
              Full-stack emotion detection web app powered by a CNN trained on 35k+ facial images,
              delivering real-time inference with a Next.js frontend deployed on Vercel.
            </div>
            <div className="proj-stack">
              {['Flask', 'Next.js', 'CNN', 'Vercel'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <a href="https://emotion-frontend-vert.vercel.app/" className="proj-link" target="_blank" rel="noreferrer">
              View Live ↗
            </a>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-label">03. Stack</div>
        <div className="section-title">What I <span>Work With</span></div>

        <div className="skills-grid reveal">
          {[
            { title: 'ML / AI', pills: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Deep Learning', 'NLP'] },
            { title: 'LLMs & NLP', pills: ['Transformers', 'BERT', 'T5', 'Hugging Face', 'Embeddings', 'Text-to-SQL', 'Prompt Eng.'] },
            { title: 'Web & Backend', pills: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Flask', 'Firebase', 'Node.js', 'REST APIs'] },
            { title: 'Infra & Tools', pills: ['Docker', 'PostgreSQL', 'MySQL', 'MongoDB', 'Git', 'Linux', 'HF Spaces'] },
          ].map(block => (
            <div key={block.title} className="skill-block">
              <div className="skill-block-title">{block.title}</div>
              <div className="skill-pills">
                {block.pills.map(p => <span key={p} className="skill-pill">{p}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="section-label" style={{ marginTop: '3.5rem' }}>Highlights</div>
        <div className="achieve-list reveal" style={{ marginTop: '1rem' }}>
          {[
            { icon: '🧠', text: <><strong>500+ DSA problems</strong> solved on LeetCode and CodeChef — consistent algorithmic thinking.</> },
            { icon: '⚙️', text: <>Built multiple <strong>production-ready ML pipelines</strong> from training to containerized deployment.</> },
            { icon: '🤗', text: <>Hands-on experience fine-tuning <strong>Transformer models</strong> — T5 and BERT — on real datasets.</> },
            { icon: '🏆', text: <><strong>JEE Advanced 2023 — AIR 6252</strong>. Class XII CBSE: 91.6%. Currently at <strong>IIIT Vadodara</strong>, CPI 7.41.</> },
          ].map((a, i) => (
            <div key={i} className="achieve-item">
              <div className="achieve-icon">{a.icon}</div>
              <div className="achieve-text">{a.text}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="section-label" style={{ marginTop: '3.5rem' }}>Certifications</div>
        <div className="certs-grid reveal" style={{ marginTop: '1rem' }}>
          {[
            { issuer: 'Coursera · deeplearning.ai', name: 'NLP with Classification & Vector Spaces', url: 'https://www.coursera.org/account/accomplishments/records/QIUFANLQ90UH' },
            { issuer: 'Coursera · deeplearning.ai', name: 'NLP with Probabilistic Models', url: 'https://www.coursera.org/account/accomplishments/verify/HP9AOIJO7TMU' },
            { issuer: 'Coursera · deeplearning.ai', name: 'NLP with Sequence Models', url: 'https://www.coursera.org/account/accomplishments/verify/RSCHGG7ED3TR' },
            { issuer: '100xDevs', name: '0–100 Full Stack Development', url: 'https://app.100xdevs.com/certificate/verify/I8LVNT9L' },
          ].map(c => (
            <a key={c.name} href={c.url} className="cert-card" target="_blank" rel="noreferrer">
              <div className="cert-issuer">{c.issuer}</div>
              <div className="cert-name">{c.name}</div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-inner">
          <div className="reveal">
            <div className="section-label">04. Connect</div>
            <div className="contact-big">Let&apos;s <span>Talk</span></div>
            <p className="contact-desc">
              Open to internships, full-time roles, and interesting side projects —
              especially in AI/ML systems and full-stack engineering.
            </p>
            <ul className="contact-links-list">
              {[
                { label: 'divyanshnahar15@gmail.com', href: 'mailto:divyanshnahar15@gmail.com' },
                { label: '+91 946-103-2455', href: 'tel:+919461032455' },
                { label: 'github.com/DivyanshNahar', href: 'https://github.com/DivyanshNahar' },
                { label: 'linkedin.com/in/divyansh-nahar', href: 'https://www.linkedin.com/in/divyansh-nahar-8872a6297/' },
                { label: 'leetcode.com/divyanshnahar15', href: 'https://leetcode.com/u/divyanshnahar15/' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{l.label}</a>
                  <span className="c-icon">→</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <div className="contact-form-box">
              <label className="c-input-label">Your Name</label>
              <input type="text" className="c-input" placeholder="John Doe" />

              <label className="c-input-label">Email Address</label>
              <input type="email" className="c-input" placeholder="hello@example.com" />

              <label className="c-input-label">Message</label>
              <textarea className="c-textarea" placeholder="Tell me about your project or opportunity..." />

              <button
                className={`c-send${sendState === 'sent' ? ' sent' : ''}`}
                onClick={handleSend}
              >
                {sendState === 'sent' ? '✓ Message Sent!' : '→ Send Message'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 <a href="#">Divyansh Nahar</a>. Designed &amp; Built with ♥</p>
        <p style={{ color: 'var(--border)' }}>IIIT Vadodara · CSE &apos;27</p>
      </footer>
    </>
  )
}
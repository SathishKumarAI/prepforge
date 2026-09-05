---
qid: ing_4b384e97cb__think__local
question: 'Explain: Non-Functional Requirements — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 419
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:20:25-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   • Identify the *type* of conversational agent (chatbot, voice assistant, etc.).  
   • Assume end‑users are humans interacting via text/voice and that performance matters for satisfaction.

**2. Adopt a functional vs. non‑functional dichotomy**  
   • Functional requirements describe *what* the agent does; non‑functional concerns *how well* it performs those tasks (quality, reliability, etc.).

**3. Step‑by‑step mapping to key NFR categories**  
   1. **Usability & Accessibility** – natural language understanding, multimodal support, compliance with WCAG.  
   2. **Performance & Scalability** – response latency (< 300 ms), concurrent session handling, load‑balancing strategy.  
   3. **Reliability & Availability** – uptime SLA (e.g., 99.9 %), graceful degradation when NLP models fail.  
   4. **Security & Privacy** – data encryption in transit/storage, user consent flows, compliance with GDPR/CCPA.  
   5. **Maintainability & Extensibility** – modular intent‑handling architecture, versioned APIs for adding new skills.  
   6. **Localization & Internationalization** – language detection, translation pipelines, culturally appropriate responses.

**4. Common traps to avoid**  
   • Mixing functional specs with NFRs (e.g., “the bot should be fast” becomes a performance requirement).  
   • Overlooking non‑functional metrics that stakeholders actually care about (e.g., SLA vs. latency).  
   • Ignoring the impact of privacy regulations on data retention policies.

**5. Sanity‑check & communicate**  
   • Verify each NFR against stakeholder pain points (speed, trust, accessibility).  
   • Present them as a concise checklist with measurable KPIs so engineers can trace quality goals back to business objectives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

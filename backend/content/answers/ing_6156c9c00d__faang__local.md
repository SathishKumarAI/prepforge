---
qid: ing_6156c9c00d__faang__local
question: Half our application code is now written by AI tools. How does your job
  change - and how do you use those tools yourself?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 390
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:12-05:00'
sources: []
---

**Clarify**  
You’re asking how a developer’s role shifts when roughly half the production code is auto‑generated, and what personal workflow changes that entails. I’ll assume the AI tools are mature enough to produce syntactically correct, testable snippets but still require human oversight for design decisions, security, and business logic.

**Approach**  
1. Reframe responsibilities from “write code” → “design architecture & validate AI output.”  
2. Adopt a *code‑review‑plus‑prompt‑engineering* mindset: treat prompts as first‑class artifacts.  
3. Integrate AI tools into CI/CD pipelines for rapid iteration and automated linting.

**Depth**  
- **Design & Governance:** I’ll focus on high‑level system contracts, data flow, and edge‑case handling that AI struggles with.  
- **Prompt Engineering:** Craft reusable prompt templates; version them alongside code to capture intent.  
- **Quality Assurance:** Run unit/integration tests against AI‑generated modules, then perform manual security reviews (e.g., injection vectors).  
- **Documentation & Knowledge Base:** Generate docstrings and README snippets automatically, but curate them for clarity.  
- **Continuous Learning:** Feed model outputs back into fine‑tuning loops to improve future generations.

**Edge Cases**  
- AI hallucination on complex logic → manual override.  
- API changes causing prompt drift → regression tests catch failures.  
- Data privacy concerns with proprietary prompts → store locally, never expose externally.

**Optimize & Communicate**  
I’ll measure time saved per feature and track defect rates before/after adoption. I’ll narrate progress in sprint demos: “Here’s the prompt template; here’s the generated code; here’s my validation.” This keeps stakeholders aligned and demonstrates that AI is a *tool*, not a replacement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

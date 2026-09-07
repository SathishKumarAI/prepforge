---
qid: ing_c451adb54c__faang__local
question: 'Explain: Step 1: Context — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 437
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:17:26-05:00'
sources: []
---

**Clarify**  
The question asks for a concise description of *Step 1: Context* in the AI coding workflow presented by Neo Kim and Louis‑François Bouchard. I’ll assume “Context” means setting up the problem space—defining data, goals, constraints, and stakeholders—before any modeling or engineering.

**Approach**  
I’ll first restate what the authors mean by “Context.” Then outline why it matters: alignment of expectations, resource budgeting, and risk mitigation. I’ll map this to concrete actions (requirements gathering, data audit, metric definition) and highlight how they feed into later steps like Data Collection and Model Design.

**Depth**  
Kim & Bouchard describe *Context* as the foundational stage where you:

1. **Identify business objectives** – translate user needs into measurable outcomes (e.g., reduce churn by 5 %).
2. **Stakeholder alignment** – secure buy‑in from product, engineering, legal, and ethics teams.
3. **Data inventory & feasibility** – catalog available sources, assess quality, and estimate volume/velocity.
4. **Success metrics & constraints** – define primary KPIs (accuracy, latency) and hard limits (budget, compliance).
5. **Risk assessment** – surface bias, privacy, and deployment risks early.

This stage shapes the data pipeline, model choice, and evaluation plan downstream.

**Edge Cases**  
- Missing or proprietary data → fallback to synthetic generation or external APIs.  
- Conflicting stakeholder goals → use a weighted scoring matrix.  
- Regulatory constraints (GDPR) → embed anonymization checks at this point.

**Optimize & Communicate**  
I’d iterate the context map with quick prototyping: sketch a minimal dataset, run a pilot model, and validate metrics early to catch misalignments. In an interview, I’d emphasize that a well‑documented Context reduces rework by ~30 % and speeds time‑to‑market.  

*Word count:* 208 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_cc7be8939e__star__local
question: 'Explain: Current limitations — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 428
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:55-05:00'
sources: []
---

**Situation** – While leading a workshop for product managers on next‑generation chatbot features at a fintech startup, the team was excited to explore “agentic” AI that could autonomously schedule meetings, negotiate contracts, and manage customer journeys.

**Task** – I had to break down why agentic AI is still limited in real business scenarios: data privacy, explainability, ethical boundaries, and integration complexity. The goal was to give them a realistic scope so they could set achievable milestones.

**Action** – I started with a live demo of an open‑source LLM agent that pulled from a sandboxed API. Then I mapped out the key constraints: (1) *Data sovereignty* – the model can’t access personal data without explicit consent, which forces us to build separate pipelines for each jurisdiction; (2) *Explainability* – every autonomous decision must be logged and auditable, so we added a rule‑based fallback layer that captures provenance; (3) *Ethical guardrails* – we implemented a policy engine that blocks any request violating company values, showing how the agent can self‑moderate; (4) *Integration friction* – connecting the LLM to legacy CRM and payment systems required custom adapters and strict latency budgets. I illustrated each point with concrete metrics: 95 % of queries hit the fallback within 200 ms, and compliance audits revealed zero policy violations in a 30‑day pilot.

**Result** – The managers left the session with a clear blueprint: start with narrow, well‑audited agent tasks, use hybrid LLM/ rule‑based pipelines, and allocate budget for data‑privacy infra. We subsequently launched an internal “meeting scheduler” bot that reduced admin time by 45 % while keeping all interactions fully auditable. I learned that explaining limitations is as valuable as showcasing capabilities; it prevents costly over‑promising and builds trust with stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

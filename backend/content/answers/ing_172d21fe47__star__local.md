---
qid: ing_172d21fe47__star__local
question: 'Explain: Privacy & code security — Ai Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 323
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:12-05:00'
sources: []
---

**Situation** – While leading the migration of our internal CI/CD pipeline to a new AI‑powered code review tool, I discovered that the assistant was uploading raw source files to an external service for model training, raising serious privacy concerns for our regulated fintech clients.

**Task** – I needed to redesign the workflow so that sensitive data never left our secure network while still leveraging the assistant’s suggestions and error detection capabilities.

**Action** – First, I mapped out all data paths using a threat‑modeling tool (OWASP Threat Dragon) and identified the minimal set of tokens required for the AI model. I then built an on‑prem inference server with OpenAI’s open‑source GPT‑4o model, containerized it via Docker Compose, and exposed only a local REST endpoint to the CI jobs. To enforce code‑level privacy, I added a static analysis plug‑in that strips or masks PII from diffs before they reach the AI layer. Finally, I implemented audit logging with ELK stack integration so every model call is traceable.

**Result** – The new pipeline processed 1,200 pull requests per week without any external data leakage, cutting compliance review time by 35%. We also reduced our cloud spend by 20% and gained full control over the model’s training data. This project taught me that privacy can be baked into AI workflows through careful architecture, not just policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

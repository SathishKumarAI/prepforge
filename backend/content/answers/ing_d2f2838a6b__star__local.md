---
qid: ing_d2f2838a6b__star__local
question: 'Explain: Core Compliance Obligations for High-Risk AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 360
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:26-05:00'
sources: []
---

**Situation** – At my previous company we were launching an autonomous vehicle safety system that was classified as a high‑risk AI by the EU AI Act. The regulatory window to certify it was only six months, and any non‑compliance could delay our market entry by years.

**Task** – I had to design a compliance framework that met all core obligations: transparency, risk management, human oversight, data governance, and post‑market monitoring, while keeping the engineering schedule on track.

**Action** – First, we mapped every algorithmic decision path to a traceable audit log using the OpenTelemetry stack. We implemented a risk register in Jira, assigning severity scores based on potential harm, and set up automated tests that run in CI/CD to catch drift from approved models. For transparency, we built a lightweight “model card” generator that pulls metadata (training data provenance, version, performance metrics) directly from our MLflow tracking server. Human oversight was ensured by integrating a dashboard where safety engineers can flag decisions for manual review; this required adding an API gateway with role‑based access control. Finally, we scheduled quarterly post‑market reviews and created a feedback loop to retrain models when drift exceeded 2%.

**Result** – We achieved full certification three weeks ahead of deadline, reducing potential fines by €1.5 M. The audit logs cut incident investigation time from days to hours, and the model card system became an internal standard for all new AI projects. I learned that embedding compliance into the development pipeline—not as an afterthought—drives both speed and safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

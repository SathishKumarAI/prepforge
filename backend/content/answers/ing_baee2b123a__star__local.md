---
qid: ing_baee2b123a__star__local
question: 'High-Risk AI Classification: Does AI-Generated Code Qualify?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 355
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:56-05:00'
sources: []
---

**Situation** – In my last role as a Lead Software Engineer at a fintech startup, we were preparing to launch an automated trading platform that used machine‑learning models to generate trade signals in real time. The platform was built on top of an open‑source code base and we started experimenting with GPT‑4 to auto‑generate utility functions for data ingestion and risk checks.

**Task** – I had to determine whether the AI‑generated code fell under the EU High‑Risk AI Regulation, which would trigger a full conformity assessment. This meant evaluating the code’s impact on financial stability, consumer safety, and potential bias in trading decisions.

**Action** – First, I mapped every generated function against the “High‑Risk” criteria: 1) critical decision support for automated trading; 2) high monetary stakes; 3) potential for market manipulation. I then performed a static code analysis, ran unit tests with synthetic data, and conducted a bias audit on the outputs. To satisfy traceability, I integrated a versioning system that logged the model prompt, token usage, and human‑review checkpoints.

**Result** – The audit revealed that while the AI generated helper functions (e.g., loggers, parsers), none directly influenced trade decisions or risk limits, so they were classified as “low‑risk.” This allowed us to skip a full regulatory review, saving 3 months of compliance work and $120K in audit fees. I learned that rigorous impact mapping and transparent versioning are essential when integrating generative AI into regulated systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

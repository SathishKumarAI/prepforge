---
qid: ing_04c2f925b7__star__local
question: 'Explain: F1: Judge prompt drift goes unnoticed — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 366
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:38:28-05:00'
sources: []
---

**Situation** – In my last role I was responsible for a production chatbot that answered customer queries in real time. The model was fine‑tuned on a static dataset, but every week we saw a subtle drop in user satisfaction scores from 92 % to 86 %. After digging into the logs, I suspected *prompt drift* – users were phrasing questions differently than the training data.

**Task** – My goal was to detect this drift automatically and prevent it from slipping through our continuous integration/continuous deployment (CI/CD) pipeline. The system had to flag any significant change in prompt distribution before a new model version hit production.

**Action** – I implemented an *Eval‑Gated CICD* guard: a lightweight evaluation job that runs on each PR, comparing the incoming prompt embeddings against the baseline distribution using cosine similarity and KL‑divergence thresholds. If drift exceeded 0.15, the pipeline blocked merge and triggered a retraining cycle with the latest user logs. I also set up a monitoring dashboard in Grafana to visualize drift over time.

**Result** – After deployment, prompt‑drift alerts reduced unnoticed regressions by 95 %. The chatbot’s satisfaction score rebounded to 91 % within two weeks, and our release cycle time dropped from 48 h to 24 h. I learned that embedding‑based drift detection is a practical, low‑overhead solution for AI pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

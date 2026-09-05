---
qid: ing_cf2b1b9a08__star__local
question: 'Explain: Make it customer-driven — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 371
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:23:31-05:00'
sources: []
---

**Situation** – I was leading the redesign of Glean’s “Careers” landing page when analytics showed a 45 % drop in click‑through from job seekers after we rolled out a new AI‑powered search filter last quarter.

**Task** – My goal was to pivot the feature set so that it truly reflected what recruiters and candidates were asking for, not just what our data science team had imagined. I needed to gather real user insights, iterate quickly, and prove ROI within two sprint cycles.

**Action** – I organized a rapid ethnographic study: 15 one‑on‑one interviews with hiring managers and 30 shadow sessions with new applicants. From the feedback we distilled three pain points—“irrelevant job matches,” “slow load times,” and “lack of role context.” I then led an agile sprint where we re‑engineered the recommendation engine to weight skills and cultural fit, swapped our heavy TensorFlow model for a lightweight ONNX inference pipeline (cutting latency from 1.2 s to 0.4 s), and added micro‑content cards that explain each role’s impact. Throughout, I ran A/B tests on a subset of traffic and maintained a live dashboard in Grafana.

**Result** – Within four weeks the updated page saw a 38 % lift in job application starts and a 22 % reduction in bounce rate. The new model’s precision‑at‑k improved from 0.32 to 0.56, driving higher quality candidate pipelines. I learned that embedding continuous user feedback loops into AI product development not only boosts metrics but also aligns the team around shared customer goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_1f53473558__star__local
question: 'Explain: Requirements — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:01-05:00'
sources: []
---

**Situation** – In my last internship I was asked to build a real‑time recommendation engine for an e‑commerce startup that had just doubled its traffic. The product manager said the new feature needed to be live within two weeks and handle 10k requests per second with <200 ms latency.

**Task** – My job was to gather the system requirements, translate them into a design, and present a prototype that met the SLA while staying under budget.

**Action** – I started by interviewing stakeholders: the PM for business goals (CTR target 3%), the dev ops lead for deployment constraints (Docker/K8s only), and the data team for model latency (≤50 ms inference). I mapped out user stories, quantified load with a traffic simulator, and used a weighted scoring matrix to prioritize features. With those requirements I sketched a micro‑service architecture: an API gateway, a model server behind a Redis cache, and a batch job that retrains nightly. I documented trade‑offs (e.g., using TensorRT vs plain PyTorch) and produced a cost estimate (~$1k/month on AWS).

**Result** – The design was approved, the prototype launched in 12 days, achieved 5% CTR lift, and kept latency at 180 ms. I learned that clear, stakeholder‑driven requirements turn into actionable architecture and prevent scope creep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

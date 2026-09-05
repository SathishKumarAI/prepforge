---
qid: ing_cf67fb4f42__star__local
question: 'Explain: Applied Scientist (AS) — Ml Engineer Vs Ai Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:01-05:00'
sources: []
---

**Situation:** In my previous role at a fintech startup, we were launching an automated fraud‑detection feature that needed real‑time insights from millions of transaction logs.

**Task:** I was asked to design the system so it could learn new fraud patterns on the fly while ensuring compliance and minimal latency. The challenge was balancing model accuracy, explainability, and deployment speed across a tight two‑month sprint.

**Action:** Acting as an **Applied Scientist**, I first scoped the problem by collaborating with data scientists to prototype deep‑learning models in PyTorch, iterating on feature engineering and hyperparameters until we hit 98 % recall. Next, as an **ML Engineer**, I containerized the model with Docker, built a CI/CD pipeline using GitHub Actions, and deployed it on Kubernetes for horizontal scaling, adding a custom Prometheus exporter to monitor inference latency. Finally, stepping into the role of an **AI Engineer**, I integrated interpretability tools (SHAP) into the user dashboard so compliance could audit decisions, and automated drift detection with Evidently AI to trigger retraining.

**Result:** The feature reduced false positives by 35 % and cut fraud losses by $1.2M in the first quarter. We achieved sub‑50 ms inference latency across 99th percentile traffic. I learned that success hinges on blending research rigor (Applied Scientist), robust engineering practices (ML Engineer), and stakeholder‑centric AI delivery (AI Engineer).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

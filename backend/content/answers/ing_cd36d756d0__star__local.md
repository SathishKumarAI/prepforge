---
qid: ing_cd36d756d0__star__local
question: 'Explain: How to prepare — Xai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 346
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:19:24-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was leading a fraud‑detection team at an online payments startup. Our model’s accuracy hit 92 %, but regulators demanded a clear explanation for every flagged transaction before we could roll out to production.

**Task** – Build a transparent, audit‑ready system that could generate human‑readable explanations for each decision while keeping latency under 50 ms per transaction.

**Action** – I chose SHAP as the core explainability engine because of its additive feature attribution properties and integrated support in our Python stack. First, I wrapped the XGBoost model with a SHAP explainer, precomputing background data from the last 30 days to speed up on‑the‑fly calculations. Next, I built an asynchronous microservice that returned top‑3 contributing features per prediction, formatted as “This transaction was flagged because of unusually high merchant activity and late‑night time.” To satisfy regulatory compliance, I stored both raw predictions and SHAP values in a PostgreSQL audit table, indexed by request ID. Finally, I created a dashboard in Grafana to visualize feature importance trends over time.

**Result** – Deployment went live two weeks early, and the audit log now meets all GDPR and PCI‑DSS requirements. Our model’s fraud‑detection precision increased from 92 % to 95 %, while explanation latency stayed below 30 ms on average. I learned that integrating SHAP with a lightweight microservice can deliver both regulatory compliance and performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_f5e7a102df__star__local
question: 'Explain: What a System Design Interview Actually Is'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 303
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:40:18-05:00'
sources: []
---

**Situation** – When I applied for the senior ML engineer role at a fintech startup, they asked me to design an “anomaly detection” service that would run in real time on their transaction stream. The team had never built such a system before and was worried about latency, data freshness, and explainability.

**Task** – My goal was to architect a scalable pipeline that ingests millions of events per day, trains a lightweight model continuously, flags suspicious patterns with <50 ms latency, and logs explanations for audit purposes—all while keeping costs under $2k/month.

**Action** – I chose Kafka for ingestion, Spark Structured Streaming for micro‑batch feature engineering, and a TinyML model (LightGBM) deployed on a Kubernetes cluster with autoscaling. For explainability I integrated SHAP values into the prediction API so auditors could see why each flag was raised. I also set up Prometheus alerts for drift detection and used S3 lifecycle rules to archive older data.

**Result** – The prototype processed 1 M events/day with an average latency of 42 ms, detected 87% of simulated frauds, and cut operational cost by 30%. I learned that a good system design interview is less about the perfect architecture and more about demonstrating trade‑off thinking, tooling choices, and how you validate assumptions under constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_7aa6a610f0__star__local
question: 'Explain: Company context — Cognition Devin'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 358
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:19-05:00'
sources: []
---

**Situation** – In early 2024 I joined Cognition Devin, a fintech startup that had built a rule‑based credit scoring engine but was struggling to keep up with the increasing volume of loan applications. The monthly processing time had ballooned from 15 minutes to over an hour, and our customer satisfaction score dropped below 80%.

**Task** – My mandate was to reduce processing latency by at least 50% while maintaining or improving risk‑prediction accuracy, so we could scale to the projected 10,000 applications per day.

**Action** – I first mapped the data pipeline: raw applicant data → feature extraction → model inference → decision write‑back. I identified that the bottleneck was the monolithic Python script that performed heavy Pandas operations and called an external scoring API. To tackle this, I rewrote the ingestion layer in Rust using `polars` for fast columnar processing, replacing the API call with a local XGBoost model serialized to ONNX. I containerized the service with Docker, orchestrated it via Kubernetes, and implemented async queues (Kafka) so that inference ran concurrently. I also added a simple A/B test harness in Go to compare predictions against the legacy engine.

**Result** – End‑to‑end latency dropped from 65 seconds to just 22 seconds—a 66% improvement—while our precision‑recall curve improved by 3%. Monthly processing capacity increased from 1,200 to 6,000 applications. The project taught me how critical it is to profile every layer of the stack and to pair language performance with model deployment strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_89e262efac__star__local
question: 'Explain: How to prepare — Sarvam Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 294
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:42-05:00'
sources: []
---

**Situation:** At my previous company we were tasked with launching “Sarvam AI,” an enterprise‑grade chatbot platform that had to handle 10,000 concurrent users and integrate with legacy ERP systems before the fiscal year end.

**Task:** I was responsible for designing a scalable data pipeline, ensuring real‑time inference latency under 200 ms, and meeting strict compliance on data residency.

**Action:** First, I mapped out the data flow using Kafka for ingestion and Spark Structured Streaming for preprocessing. To keep latency low, I deployed a lightweight transformer model (DistilBERT) on NVIDIA A100 GPUs behind a gRPC load balancer, tuning batch size to 32 requests per GPU. For compliance, I used Docker‑based microservices with an encrypted EFS volume in the EU‑West region and implemented role‑based access control via AWS IAM. I also set up Prometheus + Grafana dashboards for real‑time monitoring of queue depth and error rates.

**Result:** The system handled 12,000 concurrent users with average inference latency of 185 ms, exceeding the SLA by 15%. Deployment time was cut from an expected 6 weeks to 4 weeks. I learned that combining event‑driven architecture with model distillation can deliver both scalability and compliance in a tight timeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

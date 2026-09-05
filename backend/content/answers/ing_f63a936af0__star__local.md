---
qid: ing_f63a936af0__star__local
question: What Is Pub/Sub? — Pub/Sub | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 357
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:41:11-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we were building an anomaly‑detection pipeline for credit card fraud. Our data ingestion layer had to handle millions of events per day from various sources—point‑of‑sale terminals, mobile apps, and partner APIs—all arriving at different times.

**Task:**  
I was tasked with designing a scalable, real‑time event bus that could decouple producers from consumers, allow multiple downstream ML models to run in parallel, and guarantee at-least‑once delivery without bottlenecks.

**Action:**  
I chose Google Cloud Pub/Sub as the backbone. I defined topic namespaces per data source, set up push subscriptions for our streaming analytics cluster (Apache Flink) and pull subscriptions for batch retraining jobs. To handle backpressure, I tuned the message retention window to 7 days and implemented dead‑letter topics for malformed records. For security, I enabled IAM roles and used VPC Service Controls to restrict egress. I also added a lightweight JSON schema validator in the publisher to catch schema drift early.

**Result:**  
The new pub/sub architecture cut our event latency from ~2 s to <200 ms for real‑time fraud scoring and increased throughput by 4× during peak holidays. We achieved 99.9% message delivery success, reduced model retraining time by 35%, and gained a clean audit trail of data lineage. I learned that choosing the right messaging pattern—pub/sub with proper partitioning and dead‑letter handling—is critical for resilient ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_354488f80b__aws__local
question: 'Explain: The the fact remained that we had — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 383
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:59-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to design a real‑time recommendation engine for a video platform that served **>10 M concurrent users** during peak events (e.g., the Seattle Conference). The goal was to keep latency < 200 ms while scaling to 50× traffic without increasing cost.

**Action – Architecture & AWS Services**  
- **Data ingestion:** Kinesis Data Streams → Lambda for real‑time feature extraction.  
- **Feature store:** DynamoDB with TTL, backed by DAX for sub‑10 µs reads.  
- **Model serving:** SageMaker endpoint behind an Application Load Balancer, auto‑scaling on CloudWatch metrics (CPU, RPS).  
- **Caching:** Elasticache Redis cluster with read replicas to serve hot recommendations.  
- **Observability:** CloudWatch + X-Ray for latency tracing; Athena on S3 logs for batch analysis.

**Result**  
- Reduced recommendation latency from 800 ms to **180 ms** (90% improvement).  
- Scaled traffic from 10 M to **520 M requests/day** with a **12% cost reduction** due to serverless compute and spot‑instance autoscaling.  
- Achieved 99.95% availability during the conference, meeting SLA.

**Reflection – Leadership Principles**  
- *Customer Obsession*: Prioritized end‑user latency.  
- *Ownership & Dive Deep*: Built a repeatable pipeline that surfaced bottlenecks early; iterated on caching strategy after profiling.  

Bar‑raisers look for measurable impact and depth of technical decisions—my solution delivered quantifiable performance gains while balancing cost, scalability, and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

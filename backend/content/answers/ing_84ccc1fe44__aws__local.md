---
qid: ing_84ccc1fe44__aws__local
question: 'Explain: ML System Design Questions (2025-2026) — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 508
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:18-05:00'
sources: []
---

**ML System Design – 2025/26 Amazon‑style Answer**

> **Leadership Principles:** *Ownership* & *Dive Deep*

### Situation
When I joined a fintech startup, the fraud team needed a real‑time ML pipeline to flag suspicious transactions. The existing batch model was too slow (≈ 30 min latency) and cost $12k/month on AWS.

### Task
Own the redesign: reduce latency to < 1 s, cut costs by 70 %, and keep accuracy ≥ 95 % precision/recall.

### Action
1. **Requirements & Constraints** – Real‑time inference with sub‑second latency, GDPR compliance (data retention ≤ 90 days), and elastic scaling for peak traffic (~ 10k TPS).
2. **Design Choices**
   * **Feature Store:** Amazon SageMaker Feature Store + DynamoDB for low‑latency lookups.
   * **Model Serving:** SageMaker RealTimeEndpoint on a **ml.m5.xlarge** instance (auto‑scaling via CloudWatch).  
     *Rationale:* 1 s latency, cost‑effective vs. GPU instances; autoscaling caps at 10 instances → ~ $2k/month.
   * **Data Pipeline:** Kinesis Data Streams → Lambda → SageMaker Batch Transform for nightly retraining (Spot Instances to save 60 %).
   * **Observability:** CloudWatch metrics + SageMaker Model Monitor for drift detection; automated rollback via Step Functions.
3. **Scalability & Availability** – Multi‑AZ deployment, read replicas on DynamoDB, and health checks with Route 53 latency routing.
4. **Cost Trade‑offs** – Spot vs. On‑Demand for training, reserved instances for inference during peak season.

### Result
- Latency dropped from 30 min → < 1 s (99th percentile).  
- Monthly spend fell from $12k to $3.5k (71 % savings).  
- Accuracy held at 96 % precision/recall.  
- System handled a sudden spike of 25k TPS without outage.

**Takeaway:** Own the end‑to‑end flow, dive deep into each component’s trade‑offs, and quantify impact—exactly what Amazon expects in an ML system design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

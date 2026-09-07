---
qid: ing_cde2254c49__aws__local
question: 'Explain: This is pretty standard for an API — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 485
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:35-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* & *Ownership*

---

### **Situation**
A startup wanted a location‑based recommendation API similar to Yelp/Google Places that could serve millions of users while keeping latency < 200 ms and cost <$0.01 per request.

### **Task**
Design the end‑to‑end architecture: data ingestion, storage, query layer, and scaling strategy.

### **Action**

| Component | AWS Service | Design Rationale |
|-----------|-------------|------------------|
| **Data Ingestion** | **Kinesis Data Streams → Lambda** | Real‑time updates from partners; serverless reduces ops. |
| **Storage (geo‑index)** | **Amazon DynamoDB Global Tables + Geo Library** | Multi‑region replication for low latency, geo‑spatial queries via hashed geohash keys. |
| **Query Layer** | **API Gateway + Lambda @ Edge** | Edge routing keeps 95 % of traffic < 100 ms; per‑request caching in CloudFront reduces DB reads by ~70 %. |
| **Recommendation Engine** | **SageMaker Pipelines (Batch)** | Periodic ML model updates; inference via Lambda for on‑demand ranking. |
| **Observability** | **CloudWatch + X-Ray** | End‑to‑end tracing to pinpoint 99th‑percentile latency spikes. |

*Scalability:* DynamoDB auto‑scales; Kinesis shards can be added in seconds.  
*Availability:* Multi‑AZ tables and edge caching provide >99.999 % uptime.  
*Cost:* Estimated $0.008 per request (≈$720k/month for 100M queries), with savings from cache hits.

### **Result**
After launch, API latency dropped to 120 ms avg, user satisfaction ↑30 %, and cost fell by 25 % vs the legacy monolith. The system handled a sudden traffic surge (×10) during a marketing event without outages.

**Bar‑raiser notes:** Demonstrated *ownership* of the entire stack, *dive deep* into geo‑spatial indexing, quantified performance gains, and learned from early cache‑miss failures to refine the geohash granularity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

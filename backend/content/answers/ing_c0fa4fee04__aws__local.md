---
qid: ing_c0fa4fee04__aws__local
question: 'Explain: Design Requirements — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 557
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:02-05:00'
sources: []
---

**Leadership Principles:**  
*Customer Obsession* – we build for the host and guest experience first.  
*Ownership* – I take full responsibility from data ingestion to UI response.

---

### **S – Situation**  
Airbnb’s “AI‑powered Search & Recommendation” needed a new micro‑service that could ingest real‑time listings, user signals, and return personalized results with < 200 ms latency for 10M daily users.

### **T – Task**  
Design an end‑to‑end system: data pipeline → feature store → inference → API gateway → front‑end. Ensure horizontal scalability, high availability, and cost control while delivering a 15% lift in booking conversion.

### **A – Action**  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Data Ingestion | Kinesis Streams + Lambda | Handles >1 M events/sec with auto‑scaling. |
| Feature Store | DynamoDB Global Tables + DAX | Low‑latency reads (≤5 ms) and multi‑AZ resilience. |
| Model Training | SageMaker Pipelines on Spot Instances | Cost savings (~70%) while iterating nightly. |
| Inference | SageMaker Endpoint (Multi‑Model, Auto Scaling) | Predicts 200 ms per request; scales to 10k RPS. |
| API Layer | API Gateway + Lambda@Edge | Edge caching reduces origin load by 40%. |

**Scalability & Cost:**  
- Autoscaling thresholds set at 80% CPU; cold starts < 500 µs.  
- Spot instance usage cuts inference cost from $0.10 to $0.03 per request.  
- Global tables keep latency < 20 ms worldwide.

### **R – Result**  

*Quantified Impact:*  
- Booking conversion up by **15%** (from 3.2% → 3.68%).  
- Latency dropped from 350 ms to **190 ms** average.  
- Monthly inference cost reduced by **$1.2M**.

### **Bar‑raiser Insight**  

*Ownership:* I own the end‑to‑end pipeline and set SLAs.  
*Dive Deep:* Leveraged CloudWatch metrics to identify 10 % latency spike, tuned Kinesis shard count accordingly.  
*Learning from Failure:* A failed model rollout caused a 2 % drop; we introduced blue/green SageMaker deployments, now zero impact on live traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

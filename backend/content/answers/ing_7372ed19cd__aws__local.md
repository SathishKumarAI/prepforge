---
qid: ing_7372ed19cd__aws__local
question: How Does the Live Comment Work? — Live Comment System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 618
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:46:43-05:00'
sources: []
---

**Answer (Amazon Style)**  

**Situation:** I was asked to build a real‑time comment feed for a video platform that could handle > 10 M concurrent viewers and deliver comments within < 200 ms with 99.9% availability.

**Task:** Design a scalable, low‑latency live comment system using AWS services, quantify the impact, and demonstrate ownership.

**Action (Design):**

1. **Ingest Layer – API Gateway → Lambda + DynamoDB Streams**  
   *Accepts POSTs from clients; writes to `Comments` table (partitioned by videoId).*  

2. **Stream Processing – Kinesis Data Stream → Lambda → SNS Topic**  
   *Lambda transforms comment payload, enriches with user metadata, publishes to SNS for fan‑out.*

3. **Real‑time Delivery – Amazon API Gateway WebSocket + AWS IoT Core**  
   *WebSocket endpoint subscribes clients to a channel per `videoId`. Lambda pushes messages via IoT Data Plane (Pub/Sub).*

4. **Caching & Back‑pressure – ElastiCache Redis**  
   *Stores the last 500 comments per video for quick replay and mitigates burst traffic.*

5. **Monitoring – CloudWatch Alarms + X-Ray**  
   *Track latency, error rates, and auto‑scale Lambda concurrency (10 k req/s).*

6. **Cost & Availability:**  
   *Serverless reduces CAPEX; Kinesis shards (≥ 4) ensure 99.95% availability; DynamoDB global tables for multi‑region read/write.*

**Result:** After launch, we achieved < 180 ms average latency, supported 12 M concurrent viewers with a 0.01% error rate, and reduced operational cost by **30 %** versus a monolithic approach.

---

### Leadership Principles

- **Ownership** – I scoped the entire pipeline, from ingestion to delivery, and set up automated rollback on failures.  
- **Dive Deep** – Chose Kinesis over SQS for ordered, high‑throughput streams; tuned Redis eviction policies after profiling burst patterns.  
- **Deliver Results** – Quantified latency, error rate, and cost savings in the metrics above.

---

### Bar‑raiser Checklist

| What they listen for | Why it matters |
|----------------------|----------------|
| End‑to‑end ownership | Shows you own the product from user to data plane |
| Depth of design choices | Demonstrates “Dive Deep” and trade‑off awareness |
| Quantified impact | Validates real business value |
| Learning loop (e.g., why we chose IoT over WebSocket only) | Indicates continuous improvement |

**Conclusion:** This architecture balances low latency, scalability, and cost while embedding AWS best practices, aligning with Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

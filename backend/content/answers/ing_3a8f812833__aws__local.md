---
qid: ing_3a8f812833__aws__local
question: 'Explain: So 4 character in phone, we get — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 540
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:38:50-05:00'
sources: []
---

**Situation & Task**

I was asked to design an on‑demand video recommendation service for a mobile app: when a user scans a 4‑character QR code on a phone, the backend must return a curated “Python Full Course for Beginners” playlist in < 200 ms. The challenge was to keep latency low while handling millions of concurrent scans during peak hours.

**Action – Architecture**

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| **API Gateway + Lambda@Edge** | Front‑end → Edge compute | Global distribution, sub‑second cold start, zero‑maintenance. |
| **Amazon DynamoDB (global table)** | Store code→playlist mapping | Single‑write throughput per region, 99.999% availability, automatic multi‑AZ replication. |
| **AWS AppConfig** | Feature flag for new courses | Can roll out or rollback content without redeploying Lambda. |
| **Amazon CloudWatch + X-Ray** | Observability | Deep dive into latency and error rates; trigger alarms if > 90th percentile > 250 ms. |

*Scalability*: DynamoDB scales horizontally; each partition key (4‑char code) is evenly distributed, avoiding hot partitions. Edge Lambda handles request bursts locally, offloading traffic from the origin.

*Cost*: Pay‑per‑request Lambda + DynamoDB on‑demand pricing keeps costs predictable and low for infrequent scans while supporting sudden spikes.

**Result**

- **Latency**: 95th percentile < 120 ms across all regions.  
- **Throughput**: Sustained 50,000 QPS during a product launch without throttling.  
- **Cost Savings**: $0.02 per request vs. a dedicated EC2 cluster ($4k/month).  

**Reflection**

I took full ownership by iterating on the design after the first pilot—identified a hotspot in the DynamoDB read capacity, then introduced an LRU cache in Lambda to reduce reads by 30%. This deep dive led to a more resilient system and reinforced my bias for action: we launched within two weeks of the spec.

---

**Leadership Principles Highlighted**

- **Ownership** – I drove end‑to‑end design, testing, and cost optimization.  
- **Dive Deep** – Analyzed cold start latencies, DynamoDB hot partitions, and applied fine‑grained metrics to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

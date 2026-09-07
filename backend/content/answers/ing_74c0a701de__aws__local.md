---
qid: ing_74c0a701de__aws__local
question: 'Explain: Storage — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 602
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:50:08-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*

---

### **Situation**
At my previous startup we launched a live‑comment feature for 3‑minute short videos. Within the first week, comment latency spiked to 350 ms and 12 % of users reported timeouts during peak traffic (≈30 k concurrent viewers). I owned the end‑to‑end design.

### **Task**
Build a scalable, low‑latency storage layer that guarantees *at‑least‑once* delivery, real‑time ordering per video, and cost efficiency for millions of comments per day.

### **Action**

| Requirement | Design Choice | AWS Service(s) | Rationale |
|-------------|---------------|----------------|-----------|
| **Real‑time ingestion & ordering** | **Kafka (MSK)** topic per video ID, partitioned by `video_id` to preserve order. | Amazon MSK | Guarantees ordering within a partition; low publish latency (<5 ms). |
| **Durable storage & replay** | **Amazon S3 + Athena** for long‑term analytics; **DynamoDB Streams** for incremental updates. | S3, DynamoDB, Athena | S3 is cost‑effective for billions of comments; DynamoDB provides instant read/write for active streams. |
| **Serving to viewers** | **Lambda@Edge + CloudFront** fetches the latest 100 comments from DynamoDB and caches them per edge location. | Lambda@Edge, CloudFront, DynamoDB | Edge execution reduces RTT; caching limits DB reads during high load. |
| **Scalability & fault tolerance** | Auto‑scaling MSK brokers, DynamoDB global tables for multi‑region read/write. | MSK, DynamoDB Global Tables | Handles 10× traffic spikes; data replicated with <200 ms latency. |
| **Cost control** | Use on‑demand Lambda for bursts; provisioned concurrency only during peak hours; S3 Lifecycle to transition older comments to Glacier. | Lambda, S3 Lifecycle | Keeps idle cost low while maintaining performance when needed. |

### **Result**

* Latency dropped from 350 ms to <70 ms (95th percentile) within 48 h.
* System sustained 500 k concurrent viewers with zero data loss for 99.9 % of comments.
* Daily storage cost reduced by 28 % compared to a monolithic RDBMS approach.

---

### **Bar‑raiser Takeaway**

I demonstrated *ownership* by leading the entire redesign, *dive deep* through quantitative latency analysis, and showcased *quantified impact* with clear performance & cost metrics. I also learned that partitioning strategy in Kafka directly influenced ordering guarantees—an insight we now apply to all time‑series workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_e2606755fd__aws__local
question: 'Explain: Example: Storing User Data in Elasticsearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 508
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:18-05:00'
sources: []
---

**Scenario:** I was tasked to redesign the user‑profile search for a global SaaS platform that served 12 M active users. The existing MySQL + Redis stack couldn’t deliver sub‑100 ms latency at peak traffic (≈3 k RPS) and cost $120K/month.

| Principle | How I Applied It |
|-----------|------------------|
| **Customer Obsession** | Prioritized a seamless search experience; 95% of users had to find profiles within 200 ms. |
| **Ownership & Dive Deep** | Took end‑to‑end ownership, dissected every layer (ingestion, indexing, query). |

### STAR

- **Situation:** Legacy stack suffered latency spikes during promotion events.
- **Task:** Build a scalable, cost‑effective search solution that guarantees <200 ms latency for 99.9% of queries.
- **Action:**  
  - Adopted **Amazon OpenSearch Service (ES)** with fine‑tuned shards and replicas; leveraged **S3** for cold backups.  
  - Implemented **Kinesis Data Streams + Lambda** to ingest user updates in real time, ensuring eventual consistency.  
  - Configured **Amazon CloudWatch & X-Ray** for observability; automated scaling via **Auto Scaling Groups** on OpenSearch nodes.  
  - Introduced a **canary deployment pipeline** (CodePipeline) to roll out index mapping changes without downtime.
- **Result:** Latency dropped from 350 ms to **<180 ms** (95th percentile). Query throughput increased from 3 k RPS to **15 k RPS** with 30% lower operational cost ($80K/month). User satisfaction scores rose by 12 points in the subsequent NPS survey.

### Trade‑offs & Learnings

- Chose OpenSearch over self‑managed ES for managed scaling and patching.  
- Acceptable trade‑off: slightly higher storage costs vs. reduced latency.  
- Learned that early integration of observability prevents “black‑box” failures; future iterations will incorporate AI‑driven anomaly detection.

This approach exemplifies **Ownership** by owning the full lifecycle, **Dive Deep** through detailed monitoring, and delivers measurable impact—hallmarks of a bar‑raiser at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

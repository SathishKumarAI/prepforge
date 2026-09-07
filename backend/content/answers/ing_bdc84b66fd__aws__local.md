---
qid: ing_bdc84b66fd__aws__local
question: 'Explain: Leaderboard data storage — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 620
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:29-05:00'
sources: []
---

**Situation / Task**  
I was asked to redesign the leaderboard for a global gaming platform that served 10 M concurrent players and needed real‑time ranking updates. The existing MySQL‑based solution lagged by 5–7 s under peak load, causing player churn.

**Action**  
1. **Architecture** – I broke the system into *write*, *aggregation*, and *read* layers.  
   * Writes go to an Amazon Kinesis Data Stream (capacity 200 k events/s).  
   * A Lambda stream processor updates a DynamoDB “raw” table (partitioned by game & region) and writes incremental deltas to an S3 bucket for audit.  
   * Periodic EMR jobs aggregate raw scores into a materialized view stored in Amazon Redshift, refreshed every 30 s.  
   * A CloudFront‑fronted API Gateway exposes the top‑N leaderboard, backed by an Elasticache Redis cluster (read replica) to serve sub‑50 ms queries.

2. **Scalability & Availability** – Kinesis and DynamoDB automatically scale; Redshift’s concurrency scaling handles burst reads; Redis replicas provide failover in <10 s.  
3. **Cost** – By offloading heavy analytics to batch jobs, we reduced on‑demand compute by 70 % compared to the previous Lambda‑only design.

**Result**  
- Latency dropped from 5–7 s to <200 ms for read queries and <1 s for write acknowledgments.  
- Daily active users increased by **12 %** in the first month, directly linked to smoother gameplay experience.  
- Operational cost fell by **$30k/month**.

---

### Leadership Principles Anchored
| Principle | How I Demonstrated It |
|-----------|------------------------|
| **Customer Obsession** | Focused on real‑time ranking to keep players engaged; measured impact via DAU lift. |
| **Ownership & Dive Deep** | Took full responsibility for end‑to‑end design, analyzed every layer’s performance bottlenecks, and iterated until SLA met. |

---

### Bar‑raiser Checklist  
- **Ownership:** I led the migration from a monolithic DB to a micro‑service architecture.  
- **Dive Deep:** I quantified latency per component (Kinesis → Lambda → DynamoDB → Redshift → Redis) and tuned each.  
- **Quantified Impact:** 12 % DAU increase, $30k/month savings.  
- **Learning from Failure:** The first prototype caused a spike in write latency; I traced it to hot partitions in DynamoDB and resolved with better partition keys.

> *“If you’re not thinking about the customer’s experience at every step, you’ll miss the data that drives real business outcomes.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

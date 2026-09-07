---
qid: ing_12ea4c0014__aws__local
question: 'Explain: Real-Time Gaming Leaderboard — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 531
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:16-05:00'
sources: []
---

**Situation (S)**  
While leading a game‑ops team at my last role, we had to replace our legacy leaderboard that froze during peak hours and lagged by 3–4 seconds per query. The product owner demanded sub‑200 ms response for 99th percentile while supporting 10M concurrent players.

**Task (T)**  
Design a real‑time gaming leaderboard that scales horizontally, guarantees strong consistency for top‑N updates, and keeps cost under $5k/month.

**Action (A)**  

1. **Data model & ingestion** – Each score event streams into an Amazon Kinesis Data Stream; Lambda parses and writes to a DynamoDB *Leaderboard* table with composite PK (`GameID`, `PlayerID`) and GSI on `Score` for range queries.  
2. **Real‑time aggregation** – A scheduled Lambda (every 5 s) scans the GSI, keeps the top‑1000 scores in an Amazon ElastiCache Redis cluster (READ‑REPLICA), using a sorted set (`ZADD`).  
3. **API layer** – API Gateway + Lambda proxies to Redis for reads; writes go directly to DynamoDB. Caching via CloudFront invalidation on update events keeps latency < 200 ms.  
4. **Observability** – CloudWatch metrics and X-Ray trace every request; alarms trigger auto‑scaling of both DynamoDB (on read/write capacity) and Lambda concurrency.

**Result (R)**  
After launch, peak query latency dropped from 3.2 s to **120 ms**, the system handled 12M concurrent users with a **$4.7k/month** bill, and we saw a 35% reduction in player churn during high‑traffic events.

---

### Leadership Principles

- **Customer Obsession** – focused on latency & reliability that directly impacted user satisfaction.  
- **Ownership / Dive Deep** – built end‑to‑end pipeline, instrumented every component, and iterated based on real metrics.  

### Bar‑raiser signals

- Quantified impact (latency drop, churn reduction).  
- Depth in trade‑offs: chose DynamoDB for durability vs. Redis for speed; tuned Lambda concurrency to avoid cold starts.  
- Learned from failure: initial design had a single point of contention at the leaderboard cache; we added read replicas after observing 70% cache miss during spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

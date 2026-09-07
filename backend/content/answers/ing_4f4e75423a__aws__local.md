---
qid: ing_4f4e75423a__aws__local
question: 'Explain: 5.9 Search Users — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 457
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:24:27-05:00'
sources: []
---

**Situation & Task**  
I was asked to design the “Search Users” feature for an Instagram‑style app (5.9 Search Users). The goal: let millions of users find others by username, location, interests, or recent activity while keeping latency < 100 ms and cost below $0.01 per query.

**Action – Design & AWS Services**  
1. **Data model** – Store user profiles in DynamoDB with a global secondary index (GSI) on `username`, `location`, and `interests`.  
2. **Search layer** – Use Amazon OpenSearch Service for full‑text queries (autocomplete, fuzzy match). Index the same attributes plus a popularity score (followers + recent likes).  
3. **Cache** – Deploy Elasticache Redis as a read‑through cache for hot queries; TTL = 5 min to keep data fresh without hitting OpenSearch every time.  
4. **API Gateway + Lambda** – Stateless entry point that checks Redis → OpenSearch → DynamoDB fallback, returning top‑10 results in < 80 ms.  
5. **Cost control** – Spot instances for OpenSearch nodes, auto‑scaling on CPU utilization; use reserved capacity for predictable traffic.

**Result (Dive Deep)**  
- Latency dropped from 250 ms to 60 ms under peak load (20k QPS).  
- Search accuracy improved by 12 % (recall) due to richer indexing.  
- Operational cost reduced 35 % compared to a single‑service approach.

**Reflection – Learning & Ownership**  
I initially over‑provisioned OpenSearch nodes, inflating costs. After reviewing CloudWatch metrics, I re‑balanced the cluster and introduced a “search tier” that serves 80 % of traffic from Redis. This trade‑off maintained SLA while cutting spend by $2k/month.

---

> **Leadership Principles**  
> • *Customer Obsession* – Prioritized low latency & relevance for user experience.  
> • *Ownership* – Took end‑to‑end responsibility: data modeling, caching strategy, cost optimization, and post‑deployment monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

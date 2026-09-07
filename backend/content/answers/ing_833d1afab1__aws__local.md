---
qid: ing_833d1afab1__aws__local
question: 'Explain: Dynamic Programming — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 547
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:21:46-05:00'
sources: []
---

**Answer – “Dynamic Programming in FAANG‑style interviews”**

> **Leadership Principles:** *Customer Obsession* (we solve the user’s hidden combinatorial problem) and *Ownership* (own the entire DP pipeline from data to deployment).

### STAR

- **Situation:** At my last role I was asked to redesign a recommendation engine that had 12 M users but only returned results in ~2 s.  
- **Task:** Reduce latency by 60% while keeping accuracy ≥ 0.78 (AUC).  
- **Action:** Implemented a *memoized DP* layer for the “optimal sub‑sequence” problem that underlies item ranking. I used a top‑down approach with LRU caching, stored intermediate results in DynamoDB (partition key = user ID, sort key = state hash) and triggered Lambda functions to pre‑compute heavy states during off‑peak hours.  
- **Result:** Latency dropped from 2 s to **0.7 s** (65% reduction). AUC improved by 3%, translating to a **$1.2M/month** lift in revenue. DynamoDB costs were < $200/ month, far below the $5k previously spent on in‑memory clusters.

### Technical Design

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| State cache | **DynamoDB** (LSI for TTL) | Scales to millions of users, low latency, cost‑effective. |
| Pre‑compute worker | **AWS Lambda + Step Functions** | Serverless, scales with demand, no overprovisioning. |
| Orchestration | **Amazon EventBridge** | Triggers pre‑computation after user activity spikes. |

**Scalability:** Each DP call is O(n²) in worst case; memoization reduces it to O(n). DynamoDB handles 10⁶+ requests per second with single‑digit ms latency.

**Availability:** Global replication and automatic failover keep the cache online even during region outages.

**Cost Trade‑offs:** Replacing Lambda with EC2 would cut execution time by ~20 ms but cost > $3k/month; our serverless stack balances speed and spend.

> **Bar‑raiser notes:** I demonstrated ownership (owning both algorithmic and infra sides), deep dive into DP complexity, quantified impact on latency and revenue, and showed learning from a failed prototype that overused in‑memory arrays.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

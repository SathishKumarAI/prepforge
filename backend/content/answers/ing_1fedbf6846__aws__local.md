---
qid: ing_1fedbf6846__aws__local
question: 'Explain: Hilbert Curve — Google\u2019s S2, geometry on the sphere, cells
  and Hilbert curve | Terra Incognita'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 559
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:39:21-05:00'
sources: []
---

**Situation (S)**  
I was leading a team that had to expose a global routing API for an ad‑tech platform used by 5 M daily active users worldwide. The latency requirement was < 50 ms per lookup and the service had to scale to 10× traffic during peak campaigns.

**Task (T)**  
We needed a spatial index on the Earth’s surface that could map any latitude/longitude pair to a single sortable key, so we could use DynamoDB Global Secondary Indexes for fast range queries. Google’s S2 Hilbert curve was the obvious choice, but integrating it into our AWS‑native stack required careful design.

**Action (A)**  
1. **Dive Deep on Requirements** – I mapped out the precision needed: 10 m accuracy at the equator translates to ~ S2 cell level 14.  
2. **Design** –  
   * Use the **S2 Geometry Library** (via a Lambda layer) to generate the Hilbert‑ordered `cellId` for each point.  
   * Store `cellId` as a string key in **Amazon DynamoDB** and create a GSI on `userId#cellId`.  
   * Cache hot cells in **ElastiCache Redis** (partitioned by region) to reduce DB reads.  
3. **AWS Services & Trade‑offs** –  
   * **Lambda** for on‑demand cell calculation (cold start mitigated with provisioned concurrency).  
   * **DynamoDB** gives single‑digit ms latency, but the cost of 10 M writes per day drove us to a pay‑per‑request pricing tier and use of on‑demand mode.  
   * **Redis** adds ~ 30 % latency but cuts DynamoDB reads by 70 %, saving ~$12k/month.  
4. **Bias for Action & Ownership** – I pushed the rollout in two phases: first a pilot with 1 M users, then full production once we hit SLA targets.

**Result (R)**  
- Latency dropped from 180 ms to **42 ms average**, meeting the < 50 ms goal.  
- Throughput increased from 2 kTPS to 18 kTPS without additional infrastructure.  
- Cost savings of **$15k/month** by shifting reads to Redis and using DynamoDB on‑demand.  

I documented the failure mode when we initially overprovisioned Lambda concurrency, learned to monitor cold start metrics, and iterated on the caching strategy—an example of continuous learning and ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

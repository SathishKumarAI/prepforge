---
qid: ing_4452c68769__aws__local
question: 'Explain: Use Enough Virtual Nodes — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 506
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:00:43-05:00'
sources: []
---

**Customer Obsession / Ownership**

*Situation*: Our recommendation engine served millions of users on a global e‑commerce platform. A sudden traffic spike (10 ×) during a flash sale caused node failures and 15 % drop in recommendation latency.

*Task*: I had to redesign the sharding layer so that each virtual node could absorb load spikes without manual intervention, while keeping cost and complexity low.

*Action*:  
1. **Requirement Clarification** – Each request must be routed deterministically with minimal re‑balancing when nodes are added/removed. Latency target: < 200 ms; cost target: ≤ 10 % increase.  
2. **Design** – Implement a *consistent hashing* ring with 4096 virtual nodes per physical server.  
   - Use **Amazon DynamoDB Streams** to publish key‑value changes.  
   - Store the hash ring in **ElastiCache Redis** (cluster mode enabled) for low‑latency lookups.  
   - On node churn, only 1/4096 of keys move, keeping cache warm and reducing write amplification.  
3. **AWS Services & Trade‑offs**  
   - *Elastic Load Balancer* to distribute incoming traffic across the hash ring.  
   - *EC2 Auto Scaling* with a lifecycle hook that updates Redis on scale‑in/out.  
   - *Cost*: 4096 virtual nodes ≈ 8 × more memory in Redis, but we avoid costly sharding logic and reduce read latency by ~30 %.  
4. **Scalability & Availability** – The ring is replicated across two AZs; failover is handled automatically by ElastiCache.  

*Result*: Post‑deployment, the system sustained a 12× traffic spike with < 100 ms latency and no manual re‑balancing. Cost increased only 8 %. This hands‑on ownership and deep dive into consistent hashing delivered measurable business value.

**Bar‑raiser takeaway**

- Clear ownership of end‑to‑end performance.  
- Deep dive: chosen virtual node count, DynamoDB Streams integration, Redis replication strategy.  
- Quantified impact: latency drop, cost control, scalability under spike.  
- Learned from failure: initial naive sharding caused 15 % latency; consistent hashing fixed it without operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

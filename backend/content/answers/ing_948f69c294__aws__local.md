---
qid: ing_948f69c294__aws__local
question: 'Explain: Removing a Node — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 421
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:52-05:00'
sources: []
---

**Situation & Task**  
While architecting a global recommendation engine for an e‑commerce platform, we used consistent hashing to distribute user embeddings across 1 200 EC2 instances. A sudden hardware failure required us to remove a node and re‑balance the cluster without impacting latency or data integrity.

**Action**  
I applied **Consistent Hashing with Virtual Nodes (vnodes)**: each physical machine owns 100 vnodes, spread uniformly on the hash ring. On removal, only the affected vnodes’ key ranges are migrated to neighboring nodes, reducing data movement to ~5 % of total traffic. I leveraged **AWS DynamoDB Streams** to capture change events and triggered an **AWS Lambda** function that recalculates vnode ownership in real time. For fault tolerance, each embedding is replicated on two adjacent vnodes (RAID‑1 style). To keep read latency < 10 ms, I used **Amazon ElastiCache for Redis** as a hot‑cache layer; the cache invalidation logic ran concurrently with the migration script.

**Result**  
The rebalancing completed in under 4 minutes with no observable spike in user latency. Post‑migration, our A/B test showed a *0.3 %* reduction in recommendation accuracy but a *12 %* decrease in EBS storage cost due to fewer data replicas. The system’s **Availability** remained at 99.97 %, meeting SLAs.

**Reflection**  
I owned the incident, dove deep into hash‑ring dynamics, and quantified impact with real metrics—exact numbers matter. I also documented failure scenarios for future teams, turning a one‑off fix into a repeatable playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

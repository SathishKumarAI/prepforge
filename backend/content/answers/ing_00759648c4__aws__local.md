---
qid: ing_00759648c4__aws__local
question: 'Explain: Use a Stable Node Identity — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 525
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:25:30-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a team that built an on‑prem recommendation engine for a large e‑commerce platform. The service had to scale from 10k to 500k concurrent users while keeping latency under 100 ms. We were using consistent hashing to shard user profiles across a cluster of stateless nodes, but the “stable node identity” was missing: when a node went down or we added a new one, user IDs would re‑hash to different buckets, causing session loss and data inconsistency.

**Action**  
I introduced **Stable Node Identity (SNI)** by assigning each EC2 instance a persistent *node tag* stored in AWS Systems Manager Parameter Store. The hash function incorporated this tag instead of the transient IP/instance ID. We also added an **Elastic Load Balancer** with sticky‑session support and a DynamoDB Global Table to store user profile pointers. For failure detection I leveraged CloudWatch Alarms and Auto Scaling Lifecycle Hooks to re‑populate the hash ring only after a node’s SNI was confirmed dead.

- *AWS Services*: EC2, Systems Manager Parameter Store, ELB, DynamoDB Global Tables, CloudWatch, Auto Scaling  
- *Scalability*: Adding/removing nodes changes the hash ring by < 5 % of keys; user traffic redistributes smoothly.  
- *Availability*: 99.9 % SLA achieved; we logged a 30 % drop in session churn compared to before SNI.  
- *Cost*: Minor increase (~2 %) from Parameter Store usage, but saved ~$12k/month in recompute and data transfer costs.

**Result**  
Post‑deployment, the system handled 500k concurrent users with < 95 ms average latency, and we reduced user profile miss rates by **42 %**. The design earned a cross‑functional “Innovation Award” for simplifying stateful sharding while maintaining full ownership of reliability.

---

### Leadership Principles Highlighted  
- **Ownership** – I took full responsibility for the shard rebalancing logic and its operational impact.  
- **Dive Deep** – Investigated hash collisions, node lifecycle events, and DynamoDB consistency models to engineer a robust solution.  

Bar‑raisers listen for deep technical decisions tied to business metrics, evidence of ownership, and lessons learned from prior failures—elements all present in this story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

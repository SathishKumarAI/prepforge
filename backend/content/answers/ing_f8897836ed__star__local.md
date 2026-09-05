---
qid: ing_f8897836ed__star__local
question: 'Explain: Practical Design Guidance — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 391
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:45:39-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we had to build a real‑time fraud detection pipeline that processed millions of transactions per second across three continents. The existing monolithic service was hitting latency limits and couldn't scale without costly hardware upgrades.

**Task:**  
I needed to redesign the architecture so it could handle 1 M TPS with sub‑50 ms response time, while ensuring data consistency for regulatory compliance and tolerating at least one datacenter outage per month.

**Action:**  
I applied the CAP theorem by first mapping our requirements: *Availability* (every transaction must be evaluated instantly), *Consistency* (all nodes must see the same fraud rules and scores within 1 s), and *Partition tolerance* (the system must keep running during network splits). I chose a hybrid approach:  
- Use **Cassandra** for high write throughput, accepting eventual consistency on rule updates but keeping read‑heavy fraud scoring consistent via **Redis Cluster** with a master‑replica fallback.  
- Implement **Sagas** to orchestrate cross‑region transactions, so partial failures don’t corrupt state.  
- Deploy the services in an AWS Multi‑AZ setup and enable automatic failover; use **Consul** for service discovery to keep the cluster healthy during splits.

**Result:**  
The new design sustained 1.2 M TPS with average latency of 35 ms, dropped error rates by 90%, and survived a simulated datacenter outage without downtime. I learned that CAP is a lens for trade‑offs rather than a strict rule—choosing the right consistency model per component can deliver both performance and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_e9c1c0961e__faang__local
question: 'Explain: the backup data center will help to — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 460
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:43:17-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to explain why a *backup data‑center* (disaster recovery site) is essential for a large‑scale ride‑hailing service like Uber or OLA, and how it fits into the overall architecture.

**Approach**  
1. Identify the primary functions that must stay online: user requests, driver matching, payment processing, map routing.  
2. Show where data flows (front‑end → API gateway → microservices → databases).  
3. Highlight failure modes: site outage, network partition, data corruption.  
4. Map those failures to the backup center’s responsibilities.

**Depth**  
- **High availability**: The backup site hosts a *hot standby* of all stateless services and read‑only replicas of stateful stores (e.g., Cassandra, MySQL). Requests are routed via global load balancers that fail over in milliseconds.  
- **Data consistency**: Employ asynchronous replication with conflict resolution (vector clocks or CRDTs) so the backup can catch up within seconds. Critical writes go through a *dual‑write* pattern to both sites for durability.  
- **Disaster recovery time objective (RTO)**: Aim for <5 min by pre‑warming containers and maintaining an identical infrastructure stack on the standby site.  
- **Cost vs. risk**: Running two full replicas is expensive, but the cost of a 30‑minute outage—lost rides, stranded drivers, regulatory fines—far outweighs it.

**Edge Cases**  
- *Partial network failure*: Use split‑brain detection to avoid stale reads.  
- *Data center-wide power loss*: Ensure redundant UPS and diesel generators.  
- *Simultaneous updates*: Resolve write conflicts with version vectors.

**Optimize & Communicate**  
Explain that the backup data center is not just a “backup” but an integral part of a multi‑region, fault‑tolerant design. Emphasize metrics (latency, MTTR) and how you would monitor replication lag. Conclude by noting that this architecture scales: adding more regions reduces risk further while keeping the same operational model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_9e822a54b0__star__local
question: 'Explain: Active-Active — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 327
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:08-05:00'
sources: []
---

**Situation:**  
When I joined the infrastructure team at a fintech startup, our payment gateway was running on a single‑region deployment. A recent audit revealed that any regional outage could take us offline for up to 45 minutes, violating our SLA of 99.999% uptime.

**Task:**  
I was tasked with designing an active‑active architecture that kept the service available during a region failure while keeping data consistency and cost in check.

**Action:**  
I started by mapping out the traffic patterns and selecting AWS Global Accelerator to front all edge locations. I then deployed two identical Kubernetes clusters—one per region—and used Cross‑Region Replicated State Machines (CRSM) with etcd’s Raft protocol for state synchronization, limiting cross‑region writes to 50 ms latency. To handle eventual consistency in user balances, I implemented a conflict‑resolution strategy based on vector clocks and a background reconciliation job that ran hourly. We also introduced a health‑check circuit breaker so that if one cluster failed the traffic automatically drained to the healthy side without manual intervention.

**Result:**  
After three months of testing, our system achieved 99.9997% availability during simulated outages, dropping the maximum downtime from 45 minutes to under 10 seconds. The cost increased by only 12%, and we gained confidence in delivering uninterrupted service to our users. I learned that balancing consistency, latency, and cost is key when designing active‑active systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

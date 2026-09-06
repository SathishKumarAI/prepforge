---
qid: ing_a9342bec50__think__local
question: 'Explain: 7.2 Availability — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 606
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:13:12-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- *What is “Availability” in this context?* It’s a non‑functional requirement: the proportion of time the Instagram system serves requests without failure.  
- *Scope*: we’re focusing on the high‑level design (data stores, services, network) rather than micro‑optimisations.  
- *Assumptions*: global user base (~2B), millions of writes/reads per second, multi‑region deployment.

**2️⃣ Adopt a layered mental model**  
1. **Front‑end layer**: CDN + load balancers → first line of resilience.  
2. **Service layer**: stateless API servers with retries & circuit breakers.  
3. **Data layer**: partitioned, replicated storage (SQL/NoSQL).  
4. **Infrastructure layer**: autoscaling, health checks, monitoring.

**3️⃣ Step‑by‑step reasoning**  

| Layer | Availability tactics | Reasoning |
|-------|---------------------|-----------|
| CDN & LB | Geo‑distributed edge caches; active‑active load balancers with health probes | Keeps latency low and removes single points of failure. |
| API servers | Stateless, auto‑scale on CPU/latency; retries with exponential backoff; circuit breakers to downstream services | If a node dies, traffic is redistributed instantly. |
| Databases | Multi‑region replication (master‑less or read replicas); quorum reads/writes; automatic failover scripts | Guarantees data remains accessible even if an entire region goes down. |
| Queues & Workers | Redundant message brokers; deduplication; retry policies | Prevents loss of background jobs that could otherwise stall the system. |
| Monitoring | 99.999% uptime SLA requires real‑time dashboards, anomaly detection, and on‑call rotation | Early detection lets engineers shift traffic before a full outage. |

**4️⃣ Common traps to avoid**  
- *Over‑optimising latency at the cost of consistency*: don’t sacrifice availability for strict serialisation unless business demands it.  
- *Single point of failure in monitoring*: monitor your monitors!  
- *Assuming autoscaling is instant*: account for warm‑up times and queue backlogs.

**5️⃣ Sanity‑check & communicate**  
1. Verify that each layer has redundancy (≥2 instances).  
2. Ensure failover paths are automated, not manual.  
3. Test with chaos engineering: shut down a region, observe traffic shift.  

When explaining to an interviewer, narrate the flow from user request → CDN → LB → API → data store, highlighting how each component’s design choice (replication, statelessness, retries) contributes to overall uptime. End by quantifying: e.g., “with 3‑region replication and autoscaling, we can target >99.999% availability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_bf22c5e6e4__faang__local
question: 'Explain: Redundancy: The Foundation of Availability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 483
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:06:48-05:00'
sources: []
---

**Clarify**  
You’re asking why *redundancy*—the duplication of critical components—is the cornerstone of availability in AI systems. I’ll assume we’re talking about distributed ML pipelines (data ingestion → training → inference) that must stay online with minimal downtime.

**Approach**  
1. Identify failure modes (hardware, network, software).  
2. Map each component to a redundant tier (active‑passive or active‑active).  
3. Quantify the impact on *Mean Time Between Failures* (MTBF) and *Recovery Point/Time*.  

**Depth**  
- **Stateless services**: Deploy across multiple nodes with load balancers; a failed node is swapped out instantly.  
- **Stateful storage**: Use erasure coding or replication (e.g., 3‑node quorum in Cassandra). This ensures data can be reconstructed even if two disks fail.  
- **Model checkpoints**: Persist every N steps to persistent storage so training can resume without retraining from scratch.  
- **Failover orchestration**: Kubernetes’ readiness probes and self‑healing controllers automatically restart pods; multi‑region clusters provide geographic redundancy.  

Complexity trade‑offs: more replicas → higher cost, but linear cost scaling vs exponential MTBF improvement (MTBF ≈ MTBF₀ × replicas).  
Latency may rise slightly due to extra hops, yet still within acceptable bounds for most inference workloads.

**Edge Cases**  
- *Simultaneous correlated failures* (e.g., power outage) can be mitigated with geographically dispersed data centers.  
- *Data consistency* across replicas: use CAP‑theory aware protocols; eventual consistency is usually acceptable in AI training pipelines.  

**Optimize & Communicate**  
Start with a single redundant tier for critical services, then layer additional redundancy (geo‑replication, hardware diversity) only when SLAs demand it. Explain to stakeholders that each added replica halves the probability of downtime, and quantify ROI: cost per 99.999% availability versus potential loss from outages. This structured reasoning shows clear problem framing, actionable steps, depth of technical detail, awareness of edge cases, and a concise narrative—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

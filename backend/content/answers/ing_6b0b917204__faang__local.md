---
qid: ing_6b0b917204__faang__local
question: 'Explain: Cons — How to Implement Read Replica Pattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 476
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:52:38-05:00'
sources: []
---

**Clarify**  
The question asks for the disadvantages of implementing a *Read‑Replica* pattern in an ML system. I’ll assume we’re dealing with a production ML pipeline that serves predictions from a trained model stored in a database (or key‑value store) and that read replicas are used to scale inference traffic.

**Approach**  
1. List the typical benefits of read replicas (latency, load balancing).  
2. Enumerate the trade‑offs that turn those benefits into cons: consistency lag, operational overhead, cost, scaling limits, and complexity in failover.

**Depth**  

| Cons | Why it matters for ML inference |
|------|---------------------------------|
| **Read‑consistency lag** | Models or feature tables may be updated asynchronously. A replica can serve stale weights/feature values, leading to incorrect predictions until replication catches up. |
| **Write amplification on updates** | Every model retraining or feature refresh must propagate to all replicas, increasing write traffic and potentially throttling the primary. |
| **Operational overhead** | Requires tooling for replication monitoring, health checks, automatic fail‑over, and manual intervention when a replica lags significantly. |
| **Cost of additional nodes** | Each replica is a separate VM/instance; memory‑intensive models can be expensive to duplicate. |
| **Limited scalability for write‑heavy ML workloads** | The primary becomes a bottleneck if retraining or feature updates are frequent, as replicas cannot absorb those writes. |
| **Complexity in data schema evolution** | Schema changes must be rolled out to all replicas; coordinating migrations is error‑prone. |

**Edge Cases**  
- Extremely rapid model rollouts (e.g., A/B tests) may cause replicas to never converge.  
- High read‑write ratio workloads will overload the primary, breaking latency guarantees.  

**Optimize & Communicate**  
To mitigate these cons: use *read‑through caching* for immutable models, employ *synchronous replication* for critical features, and schedule bulk updates during low‑traffic windows. I would explain that while replicas improve read throughput, they introduce consistency and operational trade‑offs that must be carefully managed in an ML serving environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

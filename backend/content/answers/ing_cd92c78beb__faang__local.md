---
qid: ing_cd92c78beb__faang__local
question: 'Explain: Types of Failover Configurations: Active-Active vs Active-Passive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 558
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:38:32-05:00'
sources: []
---

**Clarify**  
We’re asked to compare two common high‑availability patterns for AI workloads: *active‑active* (both nodes serve traffic) versus *active‑passive* (one serves, the other waits). I’d confirm which resources are involved (compute, GPU clusters, model replicas), the failure domain (node vs rack vs region), and the SLAs (latency, throughput).

**Approach**  
1. Define each topology in plain terms.  
2. List key metrics: availability, cost, complexity, data consistency.  
3. Contrast strengths/weaknesses with concrete trade‑offs.  

**Depth**  
| Aspect | Active‑Active | Active‑Passive |
|--------|---------------|----------------|
| **Availability** | 99.999%+ (both nodes active). Failover is instant; no warm‑up. | 99.9–99.95%; failover requires promotion and state sync. |
| **Cost** | Higher—dual GPU clusters, double storage, load balancer, data replication. | Lower—one cluster runs most of the time; standby can be cheaper or on spot instances. |
| **Latency** | Consistent, as traffic is split across nodes; no hot‑standby delays. | Possible spike during failover (promotion + state sync). |
| **Consistency** | Requires strong consistency protocols (e.g., Raft) to keep models identical; adds overhead. | Easier: passive can lag slightly; only needs eventual sync before promotion. |
| **Operational Complexity** | Continuous monitoring, load‑balancing logic, conflict resolution. | Simpler ops; just need a health check and promotion script. |

**Edge Cases**  
- *Data drift*: active‑active must guard against model version divergence.  
- *Partial failures*: in active‑passive, a node failure that also corrupts the passive state can break redundancy.  
- *Scaling*: adding capacity is easier in active‑active; passive nodes often stay underutilized.

**Optimize & Communicate**  
For AI inference at scale, I’d lean toward **active‑active** when latency is critical and budgets allow double the hardware; it eliminates failover delays and balances load. For training or batch inference where throughput dominates and cost is tighter, **active‑passive** with spot instances for the standby can provide a good balance of resilience and economics. I’d present this recommendation by first summarizing the trade‑offs in a table (as above), then walking through a concrete scenario to illustrate how each choice impacts SLAs and ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

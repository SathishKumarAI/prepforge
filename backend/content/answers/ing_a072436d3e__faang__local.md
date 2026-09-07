---
qid: ing_a072436d3e__faang__local
question: 'Explain: Cons of Vertical Scaling — Vertical vs Horizontal Scaling | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 465
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:57:31-05:00'
sources: []
---

**Clarify**  
You’re asking why *vertical scaling* (adding more CPU, RAM, or storage to a single machine) is often viewed negatively compared to *horizontal scaling* (adding more nodes). I’ll assume we’re talking about web‑service workloads that must handle increasing load while maintaining reliability and performance.

**Approach**  
1. List the primary drawbacks of vertical scaling.  
2. Contrast each with how horizontal scaling mitigates it.  
3. Summarize trade‑offs in terms of cost, complexity, and operational risk.

**Depth**  

| Issue | Vertical Scaling Problem | Horizontal Mitigation |
|-------|--------------------------|-----------------------|
| **Single Point of Failure** | One machine’s outage brings the whole service down. | Redundant nodes; failover keeps traffic alive. |
| **Resource Limits** | Hardware caps (max RAM, CPU cores) constrain growth. | Adding nodes increases capacity linearly. |
| **Scalability Lag** | Scaling requires downtime or live‑migration; often manual. | Autoscaling policies spin up/down instances automatically. |
| **Cost Inefficiency** | Premium high‑spec hardware is expensive per unit of performance. | Commodity servers at scale yield lower cost per throughput. |
| **Vendor Lock‑in / Hardware Sprawl** | Upgrades tied to specific vendors; difficult to homogenize. | Cloud providers offer standardized VM types and managed services. |

**Edge Cases**  
- *Burst workloads*: vertical scaling can handle short spikes cheaply, but still limited by max spec.  
- *Stateful services*: horizontal scaling needs sharding or state replication, adding complexity.

**Optimize & Communicate**  
Explain that while vertical scaling is simpler to implement and works well for small‑to‑medium apps, its “single point of failure” and hard capacity ceilings make it unsustainable at scale. Highlight that modern architectures (e.g., microservices on Kubernetes) favor horizontal elasticity, cost predictability, and resilience—key metrics every FAANG team tracks. Conclude by noting you’d choose vertical only for legacy monoliths or when the workload is inherently bounded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

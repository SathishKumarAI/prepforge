---
qid: ing_efdb6a6fbb__fp__local
question: 'Explain: Non Functional Aspects — System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 381
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:29:16-05:00'
sources: []
---

**Non‑functional system design for a food‑delivery app**

The *fundamental problem* is to guarantee that thousands of orders reach the right restaurant and customer within minutes, while keeping costs low. This translates into four core constraints:

| Constraint | Why it must hold | Underlying principle |
|------------|-----------------|----------------------|
| **Latency** | Users judge quality by wait time; a 1 s delay can drop engagement. | *Real‑time information theory*: the end‑to‑end response must be bounded to preserve utility. |
| **Scalability** | Peak demand spikes during lunch/dinner or festivals. | *Load‑balancing as an optimization problem* – minimize contention while maximizing throughput. |
| **Reliability** | A single failed node should not cancel orders. | *Redundancy and fault tolerance* from distributed systems theory: `k` replicas, quorum reads/writes. |
| **Cost‑efficiency** | Cloud resources are billed per request; idle capacity is wasteful. | *Elasticity as a resource allocation optimization*: auto‑scale based on predictive demand curves. |

A **non‑obvious insight**: *Cache the “restaurant–cuisine” similarity graph* instead of individual menu items. By materializing this graph in an in‑memory store, the system can answer recommendation and routing queries with sub‑millisecond latency, while reducing write amplification when menus change—something most designs overlook.

Designing for these aspects turns a simple order‑taking app into a resilient, low‑cost service that satisfies users’ hidden expectation of instant gratification.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

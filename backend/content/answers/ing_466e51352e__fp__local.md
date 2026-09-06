---
qid: ing_466e51352e__fp__local
question: 'Explain: Horizontal Scaling — Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 428
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:35:22-05:00'
sources: []
---

**Horizontal vs. vertical scaling – why the choice matters**

At its core a machine‑learning system must keep *throughput* (examples per second) and *latency* (time to produce an answer) within user‑defined limits while staying cost‑effective.  
The two ways to meet higher demand are:

| | Vertical (scale‑up) | Horizontal (scale‑out) |
|---|---|---|
| **What changes** | CPU, RAM, GPU on a single node | Number of identical nodes in a cluster |
| **Bottleneck** | A single machine’s capacity; if it fails the whole service stalls | Network and coordination overhead among replicas |

From an *optimization* viewpoint, vertical scaling is a 1‑dimensional search: “find a machine type that satisfies all constraints.” Horizontal scaling turns the problem into a high‑dimensional one: “allocate enough replicas so that combined capacity meets demand while keeping inter‑node communication cost low.” The latter can be formalized as minimizing *total latency* = \(L_{\text{compute}} + L_{\text{comm}}\) subject to \(\sum_i C_i \geq R\), where \(C_i\) is per‑node compute capacity and \(R\) the required throughput.

**Non‑obvious insight:**  
In many ML workloads, *model partitioning* (e.g., data parallelism for training or sharding inference services by class) can turn a vertical bottleneck into a horizontal one. By decomposing the model graph across nodes, you reduce per‑node memory pressure and enable true scale‑out—something that pure “scale‑up” never achieves because GPUs are already near their physical limits.

Thus, horizontal scaling is not just adding more machines; it’s re‑architecting the computation so that each node operates below its hard ceiling, yielding linear cost growth and graceful degradation when individual nodes fail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

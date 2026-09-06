---
qid: ing_fdcf6521de__fp__local
question: 'Explain: This video is on the basics of — System Design BASICS: Horizontal
  vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 537
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:59:37-05:00'
sources: []
---

**Why a Machine‑Learning service must scale**

A model serving pipeline receives requests \(x\) and emits predictions \(f(x)\).  
Let the throughput requirement be \(T\) (requests/sec) and each instance can handle
\(c\) requests/s.  The fundamental problem is to keep latency bounded while
meeting \(T\).

---

### Vertical scaling – “scale up”

Increase a single machine’s capacity: add CPU, RAM, or faster NICs so that
\(c \rightarrow c'\).  
*Mathematically:* we solve \(c' = T\) by raising resources.  
*Why it works*: the service remains a single process; no inter‑node communication,
so latency stays low.

**Limitations**

1. **Diminishing returns** – A CPU’s clock speed is bounded; adding more cores
   may not help if the workload is memory‑bound or I/O‑bound.
2. **Single point of failure** – a crash kills all throughput.
3. **Cost curve** – high‑end servers explode in price.

---

### Horizontal scaling – “scale out”

Add \(n\) identical nodes, each handling \(c\) requests/s: \(T = n \cdot c\).  
*Mathematically:* we solve for the smallest integer \(n\) such that
\(n \geq T/c\).  
*Why it works*: throughput grows linearly with nodes; redundancy adds fault‑tolerance.

**Key insight most miss**

When distributing inference across nodes, *the bottleneck often shifts from
compute to network*. Even if each node is powerful, the aggregate data that must
travel between them (model parameters, sharded embeddings, or result aggregation)
creates a new “communication capacity” constraint. Optimizing for this hidden
bandwidth can be more effective than simply adding more CPUs.

---

**Deeper principle**

Both strategies are instances of *resource allocation under convex constraints*.
Vertical scaling solves \(c' \ge T\) with a single variable; horizontal scaling
introduces an integer variable \(n\). The choice is guided by the *cost‑efficiency
function* that balances marginal compute gain against marginal communication cost.

In practice, a hybrid approach—moderate vertical upgrades on each node plus a
well‑tuned horizontal distribution—yields the most robust, scalable ML service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

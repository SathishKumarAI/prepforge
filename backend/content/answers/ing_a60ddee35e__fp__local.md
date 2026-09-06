---
qid: ing_a60ddee35e__fp__local
question: 'Explain: 2.4 Memory Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 501
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:58:50-05:00'
sources: []
---

### Why a Load‑Balancer’s Memory Matters

A load‑balancer is essentially a *stateful router* that decides where to forward each incoming request.  
Its **memory** must hold two pieces of state:

| State | What it represents | How many entries |
|-------|--------------------|------------------|
| **Pool table** | `service → {IP, weight, health}` | ≈ #services × #instances |
| **Session map (optional)** | `client‑id → backend` | ≈ #active sessions |

The fundamental problem is *deciding the next hop* under constraints:  
1. **Correctness** – each request must reach a healthy instance, respecting weights.  
2. **Latency** – decision time must be sub‑µs so it doesn’t become the bottleneck.  
3. **Scalability** – as traffic grows, memory per request should stay O(1).

#### Deriving the Memory Formula

Let  

- *S* = number of services (≈ 10⁴ in a large org)  
- *I* = average instances per service (≈ 20)  
- *W* = bytes needed to encode an instance record (~40B).  

Pool memory ≈ *S × I × W*.  
For sessions, if we keep 1 M concurrent users and use a 64‑bit hash → ~8 MB.

Thus total ≈ **S×I×W + session\_size**.  
Any design that inflates the per‑instance record (e.g., storing full logs) will break O(1) lookup, leading to cache misses and higher latency.

#### Non‑obvious Insight

Many designs treat the pool table as immutable; they rebuild it on every health‑check change. That forces a **global lock** and stalls all requests. A *copy‑on‑write* approach—each update swaps in a new immutable map—keeps reads lock‑free, preserves memory locality, and guarantees zero‑latency forwarding even during rapid topology changes.

In short, memory must be *compact*, *immutable per read path*, and *bounded by O(S × I)*; otherwise the balancer becomes the very bottleneck it is meant to eliminate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

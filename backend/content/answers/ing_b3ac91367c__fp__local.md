---
qid: ing_b3ac91367c__fp__local
question: 'Explain: Static vs. Dynamic Batching — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 542
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:10-05:00'
sources: []
---

**Static vs. Dynamic Batching – why the choice matters**

At inference time we must decide how many requests to co‑process on a GPU.  
The *fundamental problem* is a **throughput–latency trade‑off**: packing more samples increases arithmetic intensity and hides memory‑bandwidth stalls, but each sample waits for the whole batch to finish.

---

### Static batching

We fix a batch size \(B\) in advance (e.g. 32).  
- **Pros**: predictable GPU occupancy; kernels can be tuned for that exact shape, yielding maximum per‑sample FLOPs and minimal register pressure.  
- **Cons**: any request arriving when the queue is not full must wait until enough peers arrive, incurring extra latency. If traffic is bursty, many small batches are executed, wasting compute.

Mathematically, throughput \(T = \frac{B}{t(B)}\) where \(t(B)\) grows sublinearly with \(B\); for a fixed \(B\), \(T\) is constant.

---

### Dynamic batching

We maintain a queue and whenever the GPU becomes idle we *greedily* pack as many pending requests as possible, up to a max size.  
- **Pros**: latency is bounded by the time until enough peers arrive; we avoid under‑utilised small batches.  
- **Cons**: kernel launch overheads and variable shapes can hurt cache locality and lead to suboptimal occupancy.

From an optimization standpoint, dynamic batching solves a *knapsack‑like* problem online: choose a set of pending jobs whose combined size maximizes GPU utilisation while respecting latency constraints. The greedy policy is optimal under the assumption that all requests have identical compute cost; otherwise a more sophisticated scheduler (e.g., weighted round‑robin) can be derived from queueing theory.

---

**Non‑obvious insight**

Many overlook that *dynamic batching can actually improve energy efficiency*. By consolidating work, each kernel launch pays a fixed overhead (driver, context switches). Fewer launches mean fewer micro‑operations and lower DRAM access frequency, reducing power draw even though the per‑sample compute remains unchanged. Thus, in data‑center settings, dynamic batching is not just about speed but also about greener AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

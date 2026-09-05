---
qid: ing_0a951e0c24__fp__local
question: 'Explain: Performance Metrics — Inference Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 532
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:27:54-05:00'
sources: []
---

### Why inference performance matters

When a trained model is deployed, every query must be answered within a *budget* (latency, throughput, energy). This budget is a hard constraint on the *optimization problem* of computing \(y=f_\theta(x)\) as fast and cheaply as possible.  
The **performance metrics** quantify how well a system satisfies that optimization.

| Metric | Fundamental meaning | Why it must be defined this way |
|--------|---------------------|---------------------------------|
| **Latency (ms)** | Time from input arrival to output delivery | It is the *objective* in real‑time systems; any delay directly violates the user’s expectation. |
| **Throughput (req/s)** | Number of queries processed per second | In a batch or multi‑tenant setting, throughput is the *dual objective*: maximizing \(N/T\) while keeping latency bounded. |
| **FLOPs / MACs** | Count of arithmetic operations | Gives an *implementation‑agnostic* estimate of computational effort; links to energy and silicon area through known power models. |
| **Memory Footprint (MB)** | Peak RAM/DRAM usage | Determines whether the model can run on a given device; also influences cache miss rates, which dominate latency in many kernels. |
| **Energy / Power (J / W)** | Electrical consumption per inference | In mobile or edge deployments, battery life is the ultimate resource constraint. |

### The deeper principle

These metrics are *dual* to each other: improving one often degrades another because they arise from a single *resource budget*.  
For instance, reducing FLOPs by pruning increases memory accesses, which may raise latency unless the hardware can overlap computation and memory traffic.

### Non‑obvious insight

**Cache hierarchy depth is the hidden bottleneck for latency, not just raw compute.**  
Even if a model has few MACs, a poor cache hit rate forces frequent DRAM stalls, inflating latency disproportionately. Optimizing *temporal locality* (e.g., via operator fusion or layout changes) can yield larger latency reductions than simply cutting FLOPs.

---

In short, inference performance metrics are engineered to capture the trade‑offs between speed, capacity, and energy that arise from solving a constrained optimization problem on real hardware. Understanding their origins lets us target the right knobs—compute, memory, or architecture—to meet deployment goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

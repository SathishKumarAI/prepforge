---
qid: ing_1f5f5f672c__fp__local
question: 'Explain: So what do you do? One of — System Design BASICS: Horizontal vs.
  Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 518
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:12:45-05:00'
sources: []
---

### Why a machine‑learning platform needs to scale

At its core, an ML service turns **data → model predictions**.  
The cost of this pipeline is dominated by two resources:

1. **Compute** – CPU/GPU cycles for inference or training.  
2. **Memory / storage** – the volume of data that must be cached or read.

When traffic grows, you have only one choice: get more of these resources.

---

## Horizontal vs. Vertical scaling

| Aspect | Vertical (scale‑up) | Horizontal (scale‑out) |
|--------|---------------------|-----------------------|
| **What changes?** | Add CPU/GPUs, RAM to a single machine. | Add more machines behind a load balancer. |
| **Bottleneck addressed?** | Single node limits – e.g., a GPU can process only so many requests per second. | Network or inter‑node communication; you can parallelize across many workers. |
| **Cost curve** | Typically exponential: a 2× GPU often costs > 3× the price. | Linear until network latency dominates; cheaper per unit of throughput. |

### The deeper principle

Both strategies are instances of **parallelism vs. capacity**.  
Vertical scaling is *in‑place parallelism*: you give one worker more power, hoping it will finish faster.  
Horizontal scaling is *distributed parallelism*: you split the workload across many workers and aggregate results.

In an ML context, horizontal scaling becomes essential when:

- **Latency requirements** are strict (e.g., real‑time inference).  
- **Model size** exceeds a single machine’s memory.  
- **Fault tolerance** matters: if one node fails, others keep serving.

---

## Non‑obvious insight

People often assume “just add more GPUs.” In practice, the *communication cost* between GPUs (especially across machines) can eclipse compute gains. A carefully designed model parallelism strategy—splitting a neural network across nodes with minimal inter‑node data transfer—is required to keep horizontal scaling effective.

---

**Bottom line:**  
Vertical scaling gives you a stronger single machine; horizontal scaling gives you resilience and linear throughput growth. For robust ML systems, the trade‑off is governed by how much data must cross the network during inference or training—an optimization problem that balances compute, memory, and communication costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

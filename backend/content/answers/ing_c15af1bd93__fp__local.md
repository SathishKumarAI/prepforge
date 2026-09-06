---
qid: ing_c15af1bd93__fp__local
question: 'Explain: Like we said, scalability is being able — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 430
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:53:12-05:00'
sources: []
---

**Scalability as a resource‑optimization problem**

In any learning pipeline we treat *computational resources* (CPU, GPU, memory, I/O) as a budget that must be allocated to maximize **throughput**—the number of training samples processed per unit time—while respecting constraints such as latency or cost.  
- **Vertical scaling** adds more power to a single node: larger CPUs, GPUs, RAM, faster disks.  The throughput gains are bounded by *Amdahl’s law*: the serial fraction (data loading, model initialization) caps how much a stronger machine can help.  It is also limited by the memory footprint of a batch; if the model or data exceed RAM, you must reduce batch size and lose parallelism.  
- **Horizontal scaling** distributes work across many nodes.  Each node processes a subset of data (data‑parallelism) or a part of the model (model‑parallelism).  Theoretically, throughput scales linearly with the number of workers until communication overhead dominates (the *roofline* of distributed systems).  

**Deeper principle:**  
Both strategies are manifestations of **concurrency control under resource contention**. They trade off *locality* (vertical: keep data close to compute) against *parallelism* (horizontal: split data across many machines). The optimal choice depends on the shape of the cost function \(C(B,N)\), where \(B\) is batch size and \(N\) nodes, and on the *communication-to-computation ratio*.  

**Non‑obvious insight:**  
Most practitioners think adding more workers always helps.  In practice, when the **gradient synchronization cost** (e.g., all‑reduce bandwidth) exceeds a few percent of compute time, extra nodes actually degrade performance—this is the “sweet spot” where horizontal scaling stops being beneficial. Understanding and measuring this ratio early can save months of wasted cloud spend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

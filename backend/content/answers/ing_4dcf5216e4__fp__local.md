---
qid: ing_4dcf5216e4__fp__local
question: 'Explain: 3.2 Parallel, Not Concurrent — Concurrency vs Parallelism - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 545
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:50:57-05:00'
sources: []
---

### Why concurrency *doesn’t* equal parallelism

At its core a **machine‑learning pipeline** is an optimization problem: we wish to minimize a loss function over data and model parameters as fast as possible. The *work* can be split into *tasks*, each with a certain execution time \(t_i\). If the tasks are independent, the total time on a single processor is \(\sum t_i\).

#### Concurrency  
Concurrency is a **temporal** trick: we interleave task execution by switching contexts. On a single core, a CPU can only run one instruction stream at a time; concurrency merely hides latency (e.g., waiting for I/O). In the context of ML, this means that while one thread waits for GPU kernels to finish, another may start preprocessing. The *speed‑up* is limited to the fraction of idle time we can cover—never more than the number of logical switches.

#### Parallelism  
Parallelism is a **spatial** trick: we actually execute multiple tasks simultaneously on distinct resources (cores, GPUs, nodes). If we have \(p\) processors and perfectly balanced workloads, the ideal speed‑up is \(\frac{1}{p}\) of the serial time. In practice, Amdahl’s law tells us that only the *parallel fraction* \(f\) can be accelerated:  
\(T_{\text{par}} = T_{\text{serial}}\left[(1-f)+\frac{f}{p}\right]\).  
Thus, to achieve meaningful speed‑ups we must design algorithms whose **critical path** (the longest chain of dependent operations) is short and whose *parallel fraction* \(f\) is high.

#### Non‑obvious insight
Many practitioners equate “parallel” with “multithreaded.” However, for deep learning the bottleneck often lies in **data movement**, not compute. A truly parallel system must co‑design communication patterns (e.g., tensor sharding) to keep all cores busy; otherwise, the *parallel fraction* collapses despite many processors. The deeper principle is that **information flow**—how data dependencies propagate through a computation graph—determines whether concurrency can be leveraged into real parallelism. If the graph has long serial chains (e.g., recurrent layers), adding more cores yields diminishing returns; only by restructuring the computation (e.g., using transformer blocks or block‑wise parallelism) can we expose sufficient independent subgraphs to exploit hardware fully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

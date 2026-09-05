---
qid: ing_1ea62fb526__fp__local
question: 'Explain: Core Orchestration — Framework Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 647
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:21-05:00'
sources: []
---

**Why we need a “core orchestration” framework**

Every AI system is a *workflow graph* whose nodes are data‑transformations or model training steps, and edges encode data or control flow.  
The fundamental problem is to **schedule, execute, and recover** this graph on heterogeneous hardware while guaranteeing reproducibility, scalability, and low latency.

1. **Dependency closure** – the scheduler must enforce partial order; a node cannot run until all its parents finish.  
2. **Resource constraints** – GPUs, TPUs, CPUs, or distributed clusters impose capacity limits that are *non‑convex* (e.g., memory is a hard cap).  
3. **Fault tolerance** – jobs may fail for stochastic reasons; the system must checkpoint and resume without recomputing the whole graph.

These requirements map cleanly to **constraint‑satisfaction + combinatorial optimization**: we need to find a feasible assignment of nodes to devices that minimizes makespan while respecting memory, bandwidth, and failure probabilities.  

**Framework selection criteria**

| Criterion | What it measures | Why it matters |
|-----------|-----------------|----------------|
| **Graph expressiveness** (e.g., DAG vs dynamic) | Can you model your training loop? | Dynamic graphs (PyTorch‑Dynamo) are essential for models that change shape per batch. |
| **Execution engine** (Spark, Ray, Kubernetes) | How does it schedule tasks? | CPU‑bound pipelines benefit from Spark’s map‑reduce; GPU‑heavy workloads need fine‑grained tasklets (Ray). |
| **State management** (stateless vs stateful actors) | Where is data stored? | Stateless pipelines reduce checkpoint overhead but increase data transfer; stateful actors keep local cache at the cost of higher fault tolerance complexity. |
| **Observability & lineage** | Can you trace provenance? | For regulated AI, you need immutable lineage and audit trails (e.g., Pachyderm). |

**Non‑obvious insight**

Many people treat orchestration as “pick a scheduler that runs your code.”  
In reality, *the choice of stateless vs stateful execution changes the geometry of the optimization problem*.  
With stateless actors, the graph becomes **high‑dimensional but sparse**, allowing linear‑time greedy schedulers.  
With stateful actors, the graph’s edges become dense (due to data locality), turning the scheduling into a *hard* combinatorial problem that often requires approximate or heuristic solutions.

Thus, pick the framework not just by feature list, but by whether your AI pipeline is **statelessly distributed** (lean on Spark/Ray) or **state‑ful and cache‑heavy** (favor Kubernetes + custom actors).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

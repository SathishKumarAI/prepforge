---
qid: ing_f7f5eea918__fp__local
question: How do load balancers work? — What is Load Balancing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 500
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:47:05-05:00'
sources: []
---

### Why we need load balancing

In any distributed system—web servers, micro‑services, or a cluster of GPU nodes for training—we have **multiple workers** that can serve requests simultaneously. If all traffic were routed to a single worker, it would become a bottleneck: its queue length grows linearly with request volume, latency rises, and the other workers sit idle. The fundamental problem is *how to keep every worker’s queue roughly equal while keeping routing overhead minimal*.

### The core principle

Load balancing reduces **queueing delay** by treating each incoming request as an object that must be placed into a buffer (the worker’s job queue). The goal is to minimize the maximum queue length, i.e. solve  
\[
\min_{\text{routing policy}} \max_{i} Q_i,
\]
where \(Q_i\) is the queue length of worker \(i\).

A simple optimal policy when all workers are identical and preemption is free is **“assign to the least loaded machine”** (the “power‑of‑two choices” algorithm achieves near‑optimality with only two random probes). In practice, we approximate this by:

1. **Health checks**: each worker reports its current load or health status.
2. **Routing logic**: a controller (or proxy) forwards new requests to the reported least busy worker.
3. **Session persistence**: for stateful services, sticky sessions keep subsequent requests from the same client on the same worker.

### A non‑obvious insight

Most people think load balancers just *spread traffic evenly*. The deeper truth is that they are a **feedback controller**: the system continuously measures its own state (queue lengths, CPU usage) and adjusts routing to keep that state in a desirable region. If you ignore this feedback loop—e.g., by hard‑coding round robin—you let the system drift into suboptimal states, especially under non‑uniform request sizes or bursty traffic.

---

In short, load balancing is an online optimization problem solved by real‑time monitoring and adaptive routing, ensuring that no single worker becomes a performance choke point.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_c78d153ddf__fp__local
question: 'Explain: Choose Horizontal Scaling When — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 413
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:05:32-05:00'
sources: []
---

When a system’s **throughput or latency budget** is bounded by *resource contention*—CPU, memory, I/O, network—and the workload can be partitioned without global state, horizontal scaling is the principled choice.

### Why it works
1. **Independent sub‑tasks**: If each request touches only local data (or sharded data), you can duplicate processing units. The *law of diminishing returns* for a single machine’s resources ensures that adding more CPU or RAM eventually yields negligible speed‑ups because the bottleneck shifts to inter‑process communication or memory bandwidth.
2. **Scalable entropy**: In probabilistic terms, each node contributes independent *information* about the data distribution; aggregating predictions reduces variance (ensemble effect). This aligns with the *law of large numbers*: more workers → tighter confidence bounds on results.
3. **Fault isolation**: Horizontal nodes can be taken offline without service interruption, satisfying the *availability* dimension of the CAP theorem.

### When to choose vertical scaling
- **Stateful services** requiring a single source of truth (e.g., in‑memory DBs) where sharding would break consistency guarantees.
- **Low‑latency, high‑throughput pipelines** that cannot tolerate network hops; a larger CPU/memory box can process more data locally.
- **Cost constraints**: If the marginal cost per added throughput is lower on a single machine (e.g., GPU‑accelerated inference) than the operational overhead of many nodes.

### Non‑obvious insight
Horizontal scaling *does not* automatically improve performance; it trades off inter‑node communication for parallelism. The key design decision is to **measure the cost of cross‑node data movement** against the expected speed‑up from parallel execution. If the former dominates, vertical scaling or a hybrid (co‑located shards) may actually be optimal.

---

*Word count: 206*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

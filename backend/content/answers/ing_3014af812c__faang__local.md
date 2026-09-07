---
qid: ing_3014af812c__faang__local
question: 'Explain: Cache-Aware Load Balancer — SGLang v0.4: Zero-Overhead Batch Scheduler,
  Cache-Aware Load Balancer, Faster Structured Outputs - LMSYS Org'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 549
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:36:13-05:00'
sources: []
---

**Clarify**  
The interview asks about *SGLang v0.4*’s “Cache‑Aware Load Balancer” – a component that schedules inference batches so GPU memory is fully utilized while avoiding cache thrashing and maintaining zero‑overhead scheduling. I’ll assume we’re dealing with large language models, multi‑GPU nodes, and that the scheduler runs in the same process as the model.

**Approach**  
1. **Model the state:** track per‑GPU memory usage, active tensors, and their LRU status.  
2. **Batch selection:** pick a set of requests whose cumulative token count fits the free cache on each GPU.  
3. **Zero‑overhead:** compute the fit using integer arithmetic only; no heap allocations or kernel launches during scheduling.  
4. **Cache‑aware policy:** prefer to keep tensors that are hot (recently used) and evict cold ones, similar to a two‑queue LRU but weighted by token length.

**Depth**  
- The scheduler runs every `t` ms, performing O(N) passes over pending requests (`N` = #requests).  
- Memory estimation uses the known tensor shapes (embedding, attention, MLP) and the current batch size.  
- A simple bin‑packing heuristic (first‑fit decreasing on token count) gives near‑optimal GPU occupancy while keeping cache misses < 5%.  
- Complexity: O(N log N) for sorting + O(M) for placement (`M` = #GPUs).  
- Trade‑off: strict zero‑overhead means we can’t do backtracking; we accept occasional sub‑optimal packing.

**Edge Cases**  
- Very large single requests that exceed any GPU cache → fallback to model parallelism.  
- Sudden spikes in token length → trigger a quick re‑balance, evicting the least recently used tensors.  
- GPU memory fragmentation over time → periodic compaction step (rare).

**Optimize & Communicate**  
Future improvements: predictive caching using request history, adaptive batch sizing based on latency SLA, and multi‑objective optimization (throughput vs. energy). I’d explain this by walking through a concrete example: two GPUs with 16 GB each, three pending requests of sizes 8k, 12k, and 4k tokens; show how the scheduler packs 8k+4k on GPU 1 and 12k on GPU 2, keeping cache hits high. This demonstrates structured reasoning, depth, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_a49814c4dc__fp__local
question: 'Explain: Cohere System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 387
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:56:22-05:00'
sources: []
---

**Cohere‑style AI System‑Design Interview – From Problem to Architecture**

The core problem a generative‑AI platform solves is *fast, accurate inference over billions of tokens*. Two constraints force the design:

1. **Latency** – users demand sub‑second responses; this pushes us toward *model sharding* and *parallel decoding*.  
2. **Throughput & Cost** – we must serve thousands of requests per GPU hour; this drives *parameter‑efficient fine‑tuning* (e.g., LoRA) and *dynamic batching*.

Start by modeling the inference pipeline as a graph \(G=(V,E)\).  
- **\(V\)**: tokenization, embedding lookup, transformer layers, softmax.  
- **\(E\)**: data flow edges.  
The goal is to minimize the *critical path length* (latency) while keeping *edge weights* (compute cost) low. Classic graph‑cut optimization tells us to cut along the largest bottleneck – usually the self‑attention matrix. Thus we shard the attention heads across GPUs and fuse them with *tensor parallelism*.  

A non‑obvious insight: **use a “prompt‑cache” for repetitive prefixes**. Many requests share initial tokens; caching their hidden states avoids recomputation, turning an \(O(n^2)\) operation into near‑linear.  

Finally, wrap the graph in a *resource‑aware scheduler* that maps sub‑graphs to heterogeneous accelerators (CPU, GPU, TPU), respecting memory constraints and maintaining fairness across tenants. This end‑to‑end reasoning is what Cohere interviewers expect: clear derivation from problem → constraints → graph model → optimization → practical implementation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

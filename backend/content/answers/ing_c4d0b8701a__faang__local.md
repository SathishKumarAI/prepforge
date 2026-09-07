---
qid: ing_c4d0b8701a__faang__local
question: You're designing an MCP server. How do you decide whether something should
  be a tool, a resource, or a prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 463
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:18:37-05:00'
sources: []
---

**Clarify**  
You’re building an MCP (Multi‑Channel Platform) server that serves three kinds of artifacts: *tools* (executable models), *resources* (static data or embeddings), and *prompts* (text templates). The decision hinges on usage patterns, lifecycle, and cost. I’d ask:

- How often will the item be invoked per request?  
- Does it need to persist across sessions or can it be regenerated?  
- What are the compute/latency trade‑offs for loading vs. executing?

**Approach**  
1. **Profile access patterns** – map frequency and concurrency.  
2. **Categorize by statefulness** – stateless prompts → prompt; heavy inference → tool; large static data → resource.  
3. **Define lifecycle rules** – cache duration, eviction policy, versioning.

**Depth**  
- *Prompts*: pure text, no heavy init. Store in a lightweight KV (e.g., Redis) with TTL; retrieve on‑the‑fly. Complexity O(1).  
- *Resources*: large embeddings or datasets. Persist on disk/SSD; load into memory only when first accessed, keep in LRU cache. Retrieval O(1), load O(n).  
- *Tools*: models that require GPU/CPU init. Spin up a container per request or maintain a pool. Pay‑per‑use cost drives decision: if latency < 200 ms and usage > 10×/min → tool; else store as resource.

**Edge Cases**  
- Sudden traffic spikes could exhaust GPU pools → fallback to queued inference.  
- Prompt drift: if templates change frequently, treat them as resources to avoid recompilation.  
- Resource size > memory limits → shard across nodes.

**Optimize & Communicate**  
Explain that this tiered strategy balances latency, cost, and maintainability. Highlight trade‑offs (e.g., tool overhead vs. prompt flexibility) and how monitoring metrics (latency, cache hit rate, GPU utilization) will drive dynamic reclassification over time. This demonstrates a clear, scalable decision framework to FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

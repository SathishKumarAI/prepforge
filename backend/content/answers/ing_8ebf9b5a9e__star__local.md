---
qid: ing_8ebf9b5a9e__star__local
question: 'Explain: Context Caching (Self-hosted) — Kv Cache And Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 343
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:18:20-05:00'
sources: []
---

**Situation**  
When we launched a real‑time recommendation engine for an e‑commerce platform, the LLM inference latency shot up to 1.2 s per request after adding a 12‑hour product catalog to the prompt. The engineering team was hitting SLA limits and users complained about slow page loads.

**Task**  
I had to cut inference time by at least 40 % without increasing GPU memory, while keeping the model fully self‑hosted for compliance reasons.

**Action**  
I introduced a two‑layer context cache: first, a key‑value (KV) store built on Redis‑Cluster that persisted the token‑level embeddings of frequently accessed catalog sections. Second, I implemented an in‑memory “context window” cache inside the model runtime that could replay only the relevant KV entries for each request. By mapping product IDs to hashed keys and using lazy loading, we avoided re‑tokenizing the entire catalog. I tuned Redis eviction policies (LRU with a 2 GB soft limit) and added a Bloom filter to skip missing keys quickly.

**Result**  
Inference latency dropped from 1.2 s to 0.7 s—a 42 % improvement—while GPU memory usage stayed constant at 8 GB. The cache hit rate reached 88 %, reducing CPU load by 30 %. I learned that combining a lightweight KV store with an in‑process context window can bring significant speedups for self‑hosted LLM workloads without sacrificing data privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

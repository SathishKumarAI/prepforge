---
qid: ing_9028769852__faang__local
question: 'Explain: Value ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 466
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:19:26-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of *Paged‑Attention* in the context of **vLLM**, a high‑performance inference engine for large language models. I’ll assume you want an overview of why paging is needed, how it works, and its impact on memory & latency.

**Approach**  
1. Define the problem: standard attention stores all KV pairs in RAM → O(n²) memory for sequence length *n*.  
2. Explain vLLM’s solution: split KV into fixed‑size pages that fit GPU DRAM; load only pages required by current query tokens.  
3. Detail the mechanics: page table, cache eviction policy (LRU), and batched kernel launch.  
4. Summarize performance gains and trade‑offs.

**Depth**  
Paged‑Attention replaces a monolithic KV tensor with *N* pages (e.g., 16 KiB each). During decoding, for token *t* the engine looks up which pages contain keys/values that overlap the attention window (past *k* tokens). Only those pages are fetched from host memory to GPU; the rest stay on CPU. The kernel then performs multi‑head scaled dot‑product on the gathered KV slice. This reduces peak GPU RAM from *O(n²)* to roughly *O(k·d)*, where *k* is the attention window and *d* hidden dimension. vLLM uses a simple LRU cache for page eviction, ensuring that frequently accessed context stays resident.

**Edge Cases**  
- Very long contexts (e.g., 1 M tokens) still require many pages; paging overhead grows.  
- Small models or short windows may not benefit enough to offset kernel launch cost.  
- Page fragmentation can lead to sub‑optimal GPU utilization if page sizes misalign with memory allocator.

**Optimize & Communicate**  
Future work could adopt adaptive page sizing or combine paging with KV compression (e.g., quantization). In an interview, I’d highlight that this technique keeps inference latency low while enabling models that would otherwise exceed GPU limits—exactly the kind of engineering trade‑off FAANG teams value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

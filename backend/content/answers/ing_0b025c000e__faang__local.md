---
qid: ing_0b025c000e__faang__local
question: You need to serve 200 customer-specific fine-tunes of the same 8B base model.
  How do you do that on a handful of GPUs, and what breaks first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 557
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:09:45-05:00'
sources: []
---

**Clarify**

> *Goal:* Host 200 unique fine‑tuned variants of an 8 B LLM on “a handful” of GPUs (≈4–8).  
> *Assumptions to confirm:*  
> – Each variant shares the same base weights, only a few adapter layers differ.  
> – Inference latency ≤ 150 ms per request.  
> – GPU memory ~24 GB each; compute budget allows 2–3 FP16 ops/sec per model.

**Approach**

1. **Parameter‑efficient fine‑tuning (PEFT)**: store only LoRA/adapters (~10–20 M params) per customer.  
2. **Model partitioning**: keep the base in GPU memory; load adapters on‑demand from NVMe or host RAM.  
3. **Request routing**: a lightweight dispatcher maps each request to its adapter, loads it into a pool of “adapter slots” (≈10–20 per GPU).  
4. **Caching & eviction**: LRU policy for adapters that are idle beyond a threshold.  
5. **Batching across customers**: group identical‑adapter requests to amortize kernel launches.

**Depth**

- Each inference uses the base once; adapter weights overlay only the attention and MLP gates, so forward pass cost ≈ base + 2×adapter ops.  
- Memory per GPU: 8 B (≈32 GB FP16) *not* feasible, but we keep a shared **checkpoint** on NVMe, streaming chunks to compute buffer; adapters fit in ~100 MB each → 20 adapters = 2 GB.  
- Complexity: O(1) load per request (adapter copy), amortized inference cost ≈ base + adapter overhead.  
- Trade‑off: higher latency for cold starts (adapter load).

**Edge Cases**

- **Cold start spikes**: sudden burst of new customers → GPU memory thrashing.  
- **Adapter drift**: stale adapters evicted before use, causing re‑load penalties.  
- **Model size > GPU RAM**: if base checkpoint cannot be streamed efficiently, inference stalls.

**Optimize & Communicate**

- Use *model parallelism* (pipeline) to spread the 8 B base across GPUs, reducing per‑GPU memory to ~4 B.  
- Profile adapter load times; pre‑warm hot adapters during idle periods.  
- Explain to interviewers: “We trade a modest extra memory for adapters and a small runtime hit on cold starts, but keep latency within SLA by caching and batching.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

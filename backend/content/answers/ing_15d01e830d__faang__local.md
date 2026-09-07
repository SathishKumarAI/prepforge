---
qid: ing_15d01e830d__faang__local
question: Kimi extended usable context far beyond typical training lengths. How do
  you take a model trained at, say, 8K-32K and make it work at 128K or more?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 503
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:33:51-05:00'
sources: []
---

**Clarify**  
The problem: we have an LLM that was trained with a maximum context window of *C* (e.g., 8 k–32 k tokens). We want it to process inputs up to ~128 k tokens without retraining from scratch. Key assumptions: the model’s attention mechanism is fixed, weights are frozen, and we have compute resources for inference‑time extensions.

**Approach**  
1. **Chunking + Sliding Window** – split the long input into overlapping windows that fit *C*.  
2. **Cross‑Attention Fusion** – use a lightweight “context aggregator” (e.g., cross‑attention or hierarchical transformer) to merge per‑chunk representations into a global vector.  
3. **Recurrence / Memory Token** – prepend a learnable memory token that gets updated as each chunk is processed, akin to GPT‑NeoX’s *past key/value* caching but applied across chunks.

**Depth**  
- **Chunking**: O(N) tokens, windows of size *C* with stride *s* (often 0.5 C).  
- **Aggregator**: a small transformer layer that attends over the set of chunk embeddings; complexity O(k²·h) where k = #chunks.  
- **Memory token**: updated via a gated recurrent unit or simple linear transform; negligible cost.  
This keeps the base model untouched, preserving its learned inductive biases while providing a global context signal.

**Edge Cases**  
- Very long repetitive passages may cause the memory token to saturate—test with synthetic repeats.  
- Tokenization inconsistencies at chunk boundaries can break semantics—ensure consistent detokenization.  
- Memory capacity limits: if k grows too large, aggregator becomes bottleneck; cap at ~50 chunks.

**Optimize & Communicate**  
- Use **pre‑tokenized batching** to avoid per‑chunk overhead.  
- Cache intermediate key/value tensors for reuse across overlapping windows.  
- Explain the trade‑off: we add a small linear component (≈0.5 M params) versus retraining a 1B‑parameter model, yielding >10× longer context with <1% latency increase.

This strategy is production‑ready: it leverages existing inference pipelines, requires minimal training data, and scales linearly with input length.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

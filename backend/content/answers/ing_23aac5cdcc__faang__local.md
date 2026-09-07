---
qid: ing_23aac5cdcc__faang__local
question: 'Explain: Stateful Caching — Optimizing AI Inference at Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 451
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:01-05:00'
sources: []
---

**Stateful Caching for AI inference at Character.ai**

| Stage | What to cover |
|-------|---------------|
| **Clarify** | *Problem*: Each user dialogue requires a large transformer to generate next token, incurring latency & compute. *Assumptions*: (1) Tokens are generated sequentially; (2) The model’s hidden state can be reused across turns; (3) Cache storage is cheaper than recomputing. |
| **Approach** | 1️⃣ Keep a per‑session cache of the transformer’s key/value tensors after each turn. <br>2️⃣ On next inference, load cached states, skip re‑encoding earlier tokens, and start decoding from the current position. <br>3️⃣ Evict or compact older turns when session length exceeds a threshold or memory limits. |
| **Depth** | *Implementation*: Store `[batch_size, seq_len, dim]` KV pairs in GPU/CPU memory. When new user input arrives, concatenate it to the cached context and run only the decoder forward pass for the new tokens. <br>*Complexity*: Latency reduces from `O(L)` to `O(new_tokens)`, compute drops proportionally; memory cost is `O(session_len * dim)`. <br>Trade‑off: larger cache → higher memory usage but lower latency. |
| **Edge Cases** | • Long conversations exceed GPU RAM → need hierarchical or paging strategy.<br>• Cache corruption or stale states due to model updates – invalidate on version bump.<br>• Tokenization changes break alignment; guard with checksum. |
| **Optimize & Communicate** | • Compress KV tensors (float16/quantized) for memory savings. <br>• Use a LRU policy per user to cap cache size. <br>Explain: “By reusing the transformer’s internal state, we avoid redundant work, turning what would be an `O(L)` inference into a near‑constant‐time operation relative to conversation length.” |

*Result*: Significant latency reduction (≈ 50–70%) and compute savings while preserving response quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_ff2377ad31__star__local
question: 'Explain: KV cache — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 327
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:00-05:00'
sources: []
---

**Situation**  
In my last role at a startup building an auto‑reply chatbot, our inference latency was 1.2 s per request for a 12‑Billion‑parameter model. The product team needed <400 ms to stay competitive in the mobile space.

**Task**  
I had to reduce latency without compromising accuracy, and I decided to implement a key–value (KV) cache for transformer layers during repeated queries on the same conversation context.

**Action**  
I profiled the attention computation and found that re‑computing KV pairs across all tokens cost ~70 % of runtime. I added an LRU‑based KV cache in PyTorch, storing the last 256 hidden states per head. On subsequent turns, the model reused cached keys/values for the unchanged context and only recomputed new tokens. I also tuned the batch size to 8 on a single A100 GPU, enabling overlapping of KV lookups with GPU kernels. To keep accuracy, I validated against the baseline on a held‑out dataset and used gradient checkpointing to reduce memory.

**Result**  
Latency dropped from 1.2 s to 350 ms—over a 70 % improvement—while maintaining BLEU scores within 0.3 points of the full‑compute model. I learned that careful caching of transformer internals can yield dramatic speedups, and that profiling is essential to target the right bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

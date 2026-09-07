---
qid: ing_797e853a5c__faang__local
question: 'Explain: What is the KV cache, why is it needed, and how big does it get?
  Ballpark it for a 70B-class model at 128K context.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 613
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:26:05-05:00'
sources: []
---

**Clarify**  
The question asks about *KV caches* in transformer‑based language models: what they store, why they’re required during inference, and how large the cache becomes for a 70 B parameter model with a 128K token context window.

---

**Approach**  
1. Define KV cache (keys/values per layer).  
2. Explain its role in efficient autoregressive decoding.  
3. Derive size: per‑token *k/v* dimension × number of layers × batch size.  
4. Plug numbers for a 70 B model.

---

**Depth**  

| Component | Value |
|-----------|-------|
| Model depth (layers) | ~96–112 (typical for 70 B) |
| Hidden dim per layer | ~12,288 (≈70 B ÷ 96) |
| KV size per token/layer | `hidden_dim × 2` → ~24 k floats |
| Context tokens | 128 K |

**Per‑token cache**:  
\(24{,}576 \text{ floats} ≈ 98.3 \text{ kB}\).

**Full 128 K context**:  
\(98.3 \text{ kB} × 128{,}000 ≈ 12.6 \text{ GB}\) per batch‑size‑1 run.

If the model uses *relative positional encodings* or *sharded KV*, the number of layers might be halved, cutting cache size roughly in half (~6 GB).  

The cache is essential because each new token only needs to compute attention against past keys/values; recomputing all self‑attention would be \(O(n^2)\) per step. The KV cache turns inference into linear time per token.

---

**Edge Cases**  
* Multi‑GPU pipelines: sharding the cache across devices reduces per‑device memory but increases communication overhead.  
* Mixed‑precision (FP16/INT8): halves or quarters the raw bytes, but still requires careful layout to avoid bank conflicts.  
* Very large batch sizes inflate the cache linearly; for real‑time serving, one may truncate context or use *chunked decoding*.

---

**Optimize & Communicate**  

- **Compression**: quantize KV to 8 bit with a small per‑layer scale table → reduces size to ~3 GB.  
- **Cache reuse**: store only the last *k* tokens if early layers can be skipped (dynamic truncation).  
- **Narrative**: “The KV cache is a memory‑efficient shortcut that lets us keep past attention statistics, enabling each new token to be processed in linear time. For a 70 B model at 128K context, the raw cache is ~12–13 GB; practical deployments therefore rely on precision reduction and sharding.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

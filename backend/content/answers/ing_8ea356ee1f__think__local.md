---
qid: ing_8ea356ee1f__think__local
question: 'Explain: Estimate the KV-cache footprint for serving a Llama-3-70B-class
  model, and explain what PagedAttention fixes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 727
total_tokens: 933
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:29:23-05:00'
sources: []
---

**1. Clarify & assume**  
- *KV‑cache* refers to the key/value tensors cached per token during inference.  
- “Llama‑3‑70B‑class” means roughly 70 B parameters, ~65k hidden units, and a typical 32‑bit float precision for KV entries.  
- The user wants an **order‑of‑magnitude estimate** (bytes/GB) and a concise explanation of *PagedAttention*.

**2. Mental model / framework**  
1. Compute the size per token:  
   \[
   \text{KV per layer} = 2 \times H \times D_k
   \]
   where \(H\) is hidden dim (~65 k), \(D_k=H/32\) for Llama‑3 (≈2 k).  
2. Multiply by the number of layers (80).  
3. Convert to bytes: 4 bytes per float32.  
4. Scale by batch size or sequence length if needed.  
5. Compare against GPU memory limits (~24–48 GB) to show why paging is essential.

**3. Step‑by‑step reasoning**  

| Step | Calculation |
|------|-------------|
| KV entries per layer | \(2 \times 65{,}000 \times 2{,}048 ≈ 266\text{M}\) |
| Bytes per layer | \(266\text{M} × 4 \text{B} ≈ 1.07 \text{GB}\) |
| All layers (80) | \(1.07 \text{GB} × 80 ≈ 85 \text{GB}\) |
| One token cache | ~85 GB |

Thus a single‑token KV cache for a full 70B model would need on the order of **tens of gigabytes**—far beyond what a typical GPU can hold. For a sequence length \(L\), it scales linearly: \(≈85 \text{GB} × L\).

*PagedAttention* solves this by storing most KV entries in **paged (off‑device) memory** and only bringing the needed slices into device RAM on demand. It keeps an index of which pages are resident, so inference can run with a small GPU buffer while still accessing the full cache via fast host‑GPU transfers.

**4. Common traps to avoid**  
- Forgetting that KV entries per layer are *double* (key + value).  
- Mixing up hidden dim vs. key dimension; Llama uses \(H/32\).  
- Assuming float16 or bfloat16 unless specified—use 32‑bit for the estimate.  
- Ignoring that the cache grows with sequence length, not just batch size.

**5. Sanity check & communication**  
- Verify numbers: 65k × 2k ≈ 130M entries per token per layer; times two = 260M; *80* layers → ~20B entries → 80 GB (close to our 85 GB).  
- Explain in plain terms: “If we kept the entire KV cache on a single GPU, we’d need more memory than any current card offers. PagedAttention moves most of that data out to system RAM and only pulls what’s needed for each step.”  

This reasoning framework can be reused for other transformer sizes or precision choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_862bab656a__faang__local
question: 'Explain: Size the KV cache for a 70B-class model and explain how paged
  KV cache management works and why it exists.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 558
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:56:24-05:00'
sources: []
---

**Clarify**

You’re asking how to estimate the key‑value (KV) cache size for a 70 B‑parameter transformer and how *paged* KV caching works, including its purpose.

**Approach**

1. Identify per‑token KV memory footprint.
2. Scale by max sequence length and batch size.
3. Explain paging: storing only active windows in RAM, swapping older blocks to disk/SSD.
4. Discuss why this is needed for large models.

**Depth**

- **Per‑token KV size**  
  - Each attention head stores a key and value vector of dimension *dₕ* = *model_dim* / *heads*.  
  - For a 70 B model, `model_dim ≈ 8 k` → `dₕ ≈ 256`.  
  - Key/value per token: 2 × 256 × 4 bytes (float32) ≈ **2 KB**.  
- **Cache size estimate**  
  - Max context `L = 2048` tokens, batch `B = 1`:  
    `2 KB × 2048 × 1 ≈ 4 MB`.  
  - If using float16: halve to ~2 MB.  
  - For larger batches or longer contexts, multiply accordingly.

- **Paged KV cache**  
  - Store only the most recent *k* tokens (e.g., last 512) in RAM.  
  - Older blocks are written to fast storage (SSD or NVMe).  
  - On demand, pages are swapped back into RAM; LRU/clock policies manage eviction.  
  - Enables models with >10 B parameters to run on GPUs with <32 GB by keeping the working set small.

**Edge cases**

- Very long sequences (>10k) exceed in‑RAM capacity → performance hits from frequent paging.  
- Mixed precision: float16 reduces memory but increases risk of numerical instability.  
- Batch sizes >1 multiply cache linearly; paging must handle multiple concurrent windows.

**Optimize & Communicate**

- Use *block‑wise* KV (e.g., 32‑token blocks) to reduce metadata overhead.  
- Prefetch pages for upcoming tokens to hide I/O latency.  
- Profile page fault rates: if >10 % of time spent paging, consider increasing GPU memory or reducing context length.

**Bottom line:** A 70 B model needs only a few megabytes per token in KV cache; paged caching lets us keep that working set in RAM while offloading the rest, making inference feasible on commodity GPUs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

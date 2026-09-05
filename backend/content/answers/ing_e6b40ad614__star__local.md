---
qid: ing_e6b40ad614__star__local
question: 'Explain: KV-cache memory math and paged attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 459
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:30-05:00'
sources: []
---

**Situation:**  
At my last startup I was tasked with deploying a transformer‑based language model on a serverless platform where the maximum RAM per instance was only 8 GB. The model had 12 layers, each with 12 attention heads and an embedding size of 768, so a naïve forward pass would require roughly 1.2 GB for hidden states alone.

**Task:**  
I needed to reduce memory usage by at least 60 % while keeping latency under 200 ms per request, and still support variable‑length inputs up to 512 tokens.

**Action:**  
I implemented a KV‑cache that stores the key (K) and value (V) tensors for each token once they are computed, instead of recomputing them on every attention step. For a single head, K/V shape is `(seq_len, head_dim)`; with 12 heads this becomes `(512, 64)` per layer. I calculated that storing all KV pairs across 12 layers required only `512 × 64 × 2 × 4 bytes ≈ 0.33 GB`—a 70 % reduction compared to recomputing every time.  
Next, I introduced paged attention: the cache is split into pages of 128 tokens and swapped out to a fast NVMe SSD when memory pressure rises. The paging algorithm prioritizes recent pages (LRU) so that the probability of a page fault stays below 1 %. I used CUDA streams to overlap disk reads with computation, keeping the overall latency within the target window.

**Result:**  
Memory consumption dropped from ~1.2 GB to ~0.6 GB, allowing us to run two concurrent inference jobs per instance and cut cost by 35 %. Latency stayed at 180 ms on average, and the paging mechanism introduced <5 % overhead. I learned that careful math around KV‑cache sizing combined with an efficient page swap strategy can turn a seemingly impossible deployment into a production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_8ea356ee1f__fp__local
question: 'Explain: Estimate the KV-cache footprint for serving a Llama-3-70B-class
  model, and explain what PagedAttention fixes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 758
total_tokens: 945
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:08:22-05:00'
sources: []
---

### KV‑cache footprint

A *KV cache* stores the key and value vectors for every token that has been processed so far.  
For each position \(t\) we keep  

\[
K_t , V_t \in \mathbb{R}^{d_{\text{model}}}\,,
\]

so two \(d_{\text{model}}\)-dimensional tensors per token.  
LLaMA‑3’s hidden size is **8192**.  Assuming single‑precision (4 bytes) each KV pair costs

\[
2 \times d_{\text{model}} \times 4
= 2\times8192\times4 = 65\,536~\text{bytes} \approx 64~\text{kB}.
\]

With a typical context window of **4096** tokens, the cache occupies

\[
65\,536~\text{B}\times 4096 \approx 268\,435\,456~\text{B}
= 256~\text{MiB}.
\]

For larger windows (e.g. 16 k) the footprint scales linearly to ~1 GiB.  
Thus, a LLaMA‑3‑70B inference server must reserve several hundred megabytes of VRAM **just for the KV cache**, even before accounting for activations and parameters.

---

### What PagedAttention fixes

PagedAttention replaces the dense in‑VRAM KV tensors with a *paged* structure:

1. **Page granularity** – KV entries are grouped into blocks (e.g., 64 tokens).  
2. **On‑demand paging** – Only pages needed for the current attention window reside in GPU memory; older pages are swapped out to CPU RAM or NVMe.  
3. **Efficient gather** – Attention queries fetch only the active pages, so kernel launch overhead stays low.

This solves the *memory bottleneck* that arises when the KV cache size exceeds GPU capacity. By exploiting the locality of attention (each query attends to a bounded set of keys), PagedAttention keeps the working set small while still allowing arbitrarily long contexts.

---

### Non‑obvious insight

PagedAttention is not merely a memory trick; it implements **a learned caching policy**. The page size and eviction strategy can be tuned so that frequently accessed key/value blocks stay in fast memory, mirroring an LRU cache. Consequently, the method trades *compute* (for paging operations) against *memory*, which aligns with the principle of **information locality**: keep only the most informative parts of the KV store close to the compute engine. This perspective explains why a modest increase in kernel latency can dramatically reduce VRAM usage without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

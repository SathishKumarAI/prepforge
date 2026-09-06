---
qid: ing_d9166d7dcd__fp__local
question: 'Explain: Your agent''s prompt cache hit rate is 20% when you expected 90%.
  Walk me through the debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 540
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:41:47-05:00'
sources: []
---

**Why a low cache hit matters**

A prompt‑cache stores previously seen prompts and their generated completions so that identical or near‑identical requests can be answered instantly. Formally, the hit rate \(H = \frac{\text{cached requests}}{\text{total requests}}\) directly scales the expected latency: if \(L_{\text{api}}\) is the remote inference time and \(L_{\text{cache}}\) the local lookup time (≈ 0), then  
\[
E[T] = H\,L_{\text{cache}} + (1-H)\,L_{\text{api}} \approx (1-H)L_{\text{api}}.
\]
Thus a 20 % hit rate inflates average latency by five times compared to an expected 90 %.  

**Debugging roadmap**

| Step | What to check | Why it matters |
|------|---------------|----------------|
| **1. Prompt normalization** | Strip whitespace, canonicalize variable names, enforce consistent formatting. | Even a one‑character difference prevents reuse; hash collisions are rare but prompt hashing must be deterministic. |
| **2. Cache key derivation** | Verify the key function (e.g., SHA‑256 of the raw string) and that it’s applied before any post‑processing. | A mis‑ordered pipeline can generate different keys for semantically identical prompts. |
| **3. Expiration policy** | Inspect TTL, LRU eviction thresholds, and size limits. | Over‑aggressive eviction or a very short TTL will prune useful entries before reuse. |
| **4. Persistence layer health** | Ensure the underlying store (Redis, LMDB, etc.) isn’t throttling writes/reads; check network latency. | Backpressure can cause fallback to remote inference, lowering observed hit rate. |
| **5. Instrumentation granularity** | Confirm that metrics count *exact* cache lookups versus hits, not just total requests. | Mis‑instrumented counters can underreport hits. |

**Non‑obvious insight:**  
The cache is a *probabilistic* data structure; if your workload contains many near‑duplicates (e.g., prompts differing only in user ID), consider **semantic hashing** (embedding similarity) instead of exact string matching. This trades precision for higher effective hit rates without inflating memory usage dramatically.

By systematically validating each link—from prompt canonicalization to storage health—you can pinpoint why the cache underperforms and restore the expected 90 % hit rate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

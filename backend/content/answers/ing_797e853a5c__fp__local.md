---
qid: ing_797e853a5c__fp__local
question: 'Explain: What is the KV cache, why is it needed, and how big does it get?
  Ballpark it for a 70B-class model at 128K context.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 674
total_tokens: 869
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:22:40-05:00'
sources: []
---

### From first principles: why a KV cache exists

A transformer decoder generates tokens sequentially.  
At step *t*, it must attend to all previous hidden states \(h_{1:t-1}\).  
Re‑computing the key/value projections of those past states for every new token would be **O(T²)** in time and memory—unacceptably expensive for long contexts.

Instead, we pre‑compute the **key** (\(K\)) and **value** (\(V\)) matrices once when each token is first processed and store them.  
During subsequent steps we simply look up \(K_{1:t-1}\) and \(V_{1:t-1}\), which reduces the cost to **O(T)** per new token.  
Thus the KV cache is a *persistent memory* that turns an inherently quadratic operation into linear time, enabling long‑context inference.

### Size calculation

For a model with hidden dimension \(d_h\) and half‑precision (fp16):

| Component | Shape per token | Bytes |
|-----------|-----------------|-------|
| Key       | \((1,d_h)\)     | \(2\,d_h\) |
| Value     | \((1,d_h)\)     | \(2\,d_h\) |

Total per token: \(4\,d_h\) bytes.

For a 70‑B parameter transformer the typical hidden size is about **8192** (≈ 8 K).  
So each token consumes

\[
4 \times 8192 = 32{,}768 \text{ B } \approx 32 \text{ kB}.
\]

With a context window of **128 k tokens**, the cache occupies

\[
32 \text{ kB} \times 128{,}000 \approx 4.1 \text{ GB}.
\]

(If we include padding or per‑layer duplication, it may grow to ~5–6 GB.)

### Non‑obvious insight

The KV cache **does not** store the raw activations; it stores *projections* that are already compressed by linear layers.  
This means we can discard the original hidden states after projection, drastically reducing peak memory.  
In practice, this allows a 70B model to run on GPUs with < 80 GB of RAM while still handling 128k‑token contexts—something impossible if we recomputed or cached full activations.

--- 

**Bottom line:** The KV cache is the algorithmic trick that turns quadratic attention into linear time by persisting pre‑projected keys and values, costing roughly 32 kB per token (≈ 4 GB for a 128k context in a 70‑B model).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

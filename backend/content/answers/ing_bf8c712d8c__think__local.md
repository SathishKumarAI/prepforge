---
qid: ing_bf8c712d8c__think__local
question: 'Explain: KV Cache Sharing (Copy-on-Write) — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 499
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:37:00-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Understand that the question blends *KV‑cache sharing*, *copy‑on‑write (CoW)*, and *paged attention* in transformer models.  
- Assume a modern LLM training pipeline with multi‑head self‑attention, batch processing, and GPU memory constraints.

**2️⃣ Mental model / framework**  
- Treat the KV cache as a 3‑D tensor \((B, H, S_{\text{max}}, D)\) (batch, heads, sequence positions, head dim).  
- View CoW as a lazy‑copy mechanism: only duplicate rows/heads when a write is needed.  
- Paged attention refers to processing the cache in fixed‑size “pages” that fit GPU memory, swapping pages in/out.

**3️⃣ Step‑by‑step reasoning**  
1. **Cache sharing**: Multiple tokens (or micro‑batches) reference the same KV rows; no duplication until modification.  
2. **Copy‑on‑write**: When a head needs to be updated (e.g., new key/value pair for a different token), the system checks if that page is shared; if so, it allocates a private copy before writing.  
3. **Paged attention**: Split \(S_{\text{max}}\) into pages of size \(P\). During inference, only pages intersecting the current query window are loaded; others stay on host memory or disk.  
4. Combine CoW with paging: when swapping in a page that is shared across batches, use CoW to avoid writing back unnecessary data.  
5. Optimize by tracking reference counts per page and using efficient GPU kernels for copy‑on‑write.

**4️⃣ Common traps**  
- Forgetting to update reference counts → memory leaks or premature deallocation.  
- Assuming all pages fit in GPU → out‑of‑memory crashes.  
- Ignoring the cost of copying when many heads are modified; can outweigh paging benefits.

**5️⃣ Sanity‑check & verbalize**  
- Verify that the number of copies never exceeds batch size *heads* *pages*.  
- Explain: “We keep a single shared KV cache, but lazily duplicate only the pages we need to modify. Paging keeps memory bounded while CoW ensures correctness.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

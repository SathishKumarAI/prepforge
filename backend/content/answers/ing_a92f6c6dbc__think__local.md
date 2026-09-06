---
qid: ing_a92f6c6dbc__think__local
question: 'Explain: Softmax ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 601
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:13:15-05:00'
sources: []
---

**1. Clarify the request & assumptions**  
   • *What* is being asked?  We need an explanation of how the **soft‑max function** is used in **paged attention** within the open‑source inference engine **vLLM**.  
   • *Assumptions*: The audience knows basic neural‑net terminology (attention, logits) but may not be familiar with vLLM’s paging strategy or why soft‑max behaves differently on paged data.

**2. Mental model / framework**  
   - **Soft‑max fundamentals**: turns raw attention scores into a probability distribution over keys.  
   - **Paged attention**: splits the key/value tensors into contiguous “pages” to fit in GPU memory; only a subset of pages is loaded per query token.  
   - **vLLM’s optimization**: uses batched sparse soft‑max on each page, then aggregates results across pages.

**3. Step‑by‑step reasoning**  
   1. Start with the standard attention formula \( \text{softmax}(QK^T / \sqrt{d})V\).  
   2. Explain that in vLLM, \(K\) and \(V\) are partitioned into pages; each query token attends to a *small* set of pages at a time.  
   3. For each page: compute logits, apply soft‑max locally → gives partial attention weights.  
   4. Because probabilities over different pages must sum to one overall, vLLM rescales the local soft‑max outputs by normalizing across all processed pages (often via a running max trick).  
   5. Finally, weighted sums of \(V\) from each page are accumulated to produce the final output.

**4. Common traps & wrong turns**  
   - *Confusing page boundaries with token positions*: remember that pages are contiguous in memory, not necessarily contiguous in sequence order.  
   - *Assuming soft‑max is computed once per query*: actually it’s recomputed for every page seen by that query.  
   - *Overlooking numerical stability tricks* (log‑sum‑exp across pages) which vLLM implements to avoid overflow.

**5. Sanity‑check & verbal communication**  
   • Verify dimensional consistency: after paging, each partial soft‑max still yields a vector of length equal to the page size.  
   • Explain in plain terms: “vLLM treats every page as a mini‑world where the query looks around; it does its own little probability calculation there, then stitches all those mini‑worlds back together so that overall attention behaves exactly like the unpaged version.”  
   • Conclude by noting why this is efficient: fewer memory copies, better GPU utilization, while mathematically preserving the same soft‑max semantics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

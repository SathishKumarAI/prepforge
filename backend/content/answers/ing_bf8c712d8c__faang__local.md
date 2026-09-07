---
qid: ing_bf8c712d8c__faang__local
question: 'Explain: KV Cache Sharing (Copy-on-Write) — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 553
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:07:42-05:00'
sources: []
---

**Clarify**  
We’re asked how *KV‑cache sharing* works in transformer inference, specifically the *copy‑on‑write (COW) paged attention* trick that lets multiple beams reuse key/value tensors without redundant memory copies. I’ll assume:  
- We have a multi‑head self‑attention layer with cached KV tensors per beam.  
- The cache is stored as pages (fixed‑size blocks).  
- New tokens are appended to the end of each beam’s sequence.

**Approach**  
1. **Page layout:** Store KV pairs in contiguous memory pages; each page holds a fixed number of token positions for all heads.  
2. **Reference counting/COW:** Each page has a refcount. When a new beam diverges, it copies only the *dirty* pages (those that will change). Shared pages remain shared.  
3. **Attention read‑only:** During attention computation, beams read from their KV cache as if it were contiguous; the underlying memory manager maps pages transparently.

**Depth**  
- When appending a token, we need to write its KV into the next slot of each head’s page. If that page is shared (refcount > 1), we allocate a fresh copy for this beam and decrement the old refcount—classic COW.  
- The paged structure keeps cache locality: only pages touched by the new token are written, reducing writes from *O(T·H)* to *O(P·H)* where *P* is page size.  
- Complexity: O(H × B) for a beam update (H heads, B batch size), but with COW we often hit O(1) when no split occurs. Memory overhead is the refcount per page.

**Edge Cases**  
- **Page boundary splits:** If the new token lands exactly at a page boundary, two pages may need copying.  
- **Beam pruning:** When beams are killed, decrement refcounts; free pages with count = 0.  
- **Large models / many heads:** Refcount storage can become significant; use 16‑bit counters if possible.

**Optimize & Communicate**  
Future improvements: *Lazy paging* (defer page allocation until needed) and *compressed KV* for further memory savings. I’d explain the trade‑off: COW reduces writes but introduces occasional copy overhead; paged layout balances locality with flexibility. This shows clear problem framing, a concrete algorithmic plan, complexity analysis, and awareness of edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

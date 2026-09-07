---
qid: ing_c29d7795c1__faang__local
question: 'Explain: The Contiguous Memory Problem — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 474
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:13:36-05:00'
sources: []
---

**Clarify**  
The “Contiguous Memory Problem – Paged Attention” asks how to efficiently perform attention over a very long sequence when only a *page* of tokens can reside in fast memory at once (e.g., GPU VRAM). We assume: 1) the input length \(L \gg\) page size, 2) we have a fixed per‑token memory budget, and 3) we need full‑sequence attention or an approximation that preserves quality.

**Approach**  
1. **Chunking** – split \(L\) into overlapping windows (pages).  
2. **Local Attention** – compute self‑attention within each page.  
3. **Global Tokens** – select a small set of “summary” tokens per page (e.g., via clustering or learned projection).  
4. **Cross‑Page Attention** – let global tokens attend to all pages, then broadcast their updates back.

This is the essence of *Paged Attention*: local dense attention + sparse cross‑page communication.

**Depth**  
- Complexity: Local cost \(O((L/P)^2 d)\) per page (\(P\)=page size), global cost \(O(P_{\text{global}}^2 d)\).  
- Memory: Each page stores only its tokens; global tokens are a tiny fraction.  
- Implementation: Use fused kernels for intra‑page attention, and gather‑scatter operations for cross‑page updates.

Trade‑offs: More overlap improves quality but increases redundancy; fewer global tokens reduce compute but may hurt long‑range modeling.

**Edge Cases**  
- Very short sequences (≤ P): fall back to standard full attention.  
- Highly repetitive content: clustering may collapse distinct contexts—test with synthetic repeats.  
- Streaming data: need online update of global tokens—evaluate latency.

**Optimize & Communicate**  
Possible improvements include learned adaptive page sizes, hierarchical global tokens, or integrating sparse transformers (e.g., Performer). In an interview, I’d explain the trade‑offs in terms of GPU occupancy, memory bandwidth, and model fidelity, emphasizing how the design keeps per‑token memory constant while preserving long‑range dependencies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_c7ceefbb0a__fp__local
question: 'Explain: Parallel Extractors vs Single-Pass — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 341
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:06:04-05:00'
sources: []
---

**Parallel Extractors vs. Single‑Pass in Document Intelligence**

*Fundamental problem:*  
A document contains heterogeneous signals—text, tables, images, layout cues—that must be interpreted jointly to answer a query. The naïve way is to feed the whole page through one pipeline (single‑pass). However, each signal has its own optimal representation and computational cost.

**Single‑Pass**  
- One transformer processes the raw page end‑to‑end.  
- *Why it can fail:* the model must learn a composite mapping that simultaneously respects language semantics, visual geometry, and cross‑modal alignment. This is an ill‑posed optimization: gradients from text and pixels interfere, leading to sub‑optimal convergence and inflated inference time.

**Parallel Extractors**  
- Separate modules specialize: OCR → tokens, layout encoder → spatial features, image CNN → pixel embeddings.  
- *Why it works:* each extractor solves a well‑defined sub‑problem; their outputs are fused later via attention or graph neural nets. This modularity mirrors the principle of *divide and conquer* in optimization—each component minimizes its own loss, then a higher‑level model learns inter‑modal relations.

**Non‑obvious insight:**  
Parallelism reduces *cognitive load* on the fusion network: by presenting already‑compressed, modality‑aligned embeddings, it can focus on relational reasoning rather than raw perception. This explains why models like LayoutLMv3 outperform monolithic architectures despite similar parameter counts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

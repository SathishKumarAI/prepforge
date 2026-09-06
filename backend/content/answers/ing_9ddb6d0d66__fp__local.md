---
qid: ing_9ddb6d0d66__fp__local
question: 'Explain: Iterative Document Enrichment — Advanced Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 449
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:41:01-05:00'
sources: []
---

**Iterative Document Enrichment – the “Pull‑and‑Push” of modern IR**

At its core, information retrieval is an *optimization* problem: given a query vector **q**, we wish to select documents whose representations **d** maximize similarity \(S(\mathbf{q},\mathbf{d})\). Classical rankers use static embeddings and a single scoring pass.  
Iterative enrichment reframes this as a *feedback loop*:  

1. **Pull** – retrieve an initial set \(\mathcal{D}_0\) using a lightweight model (e.g., BM25 or sparse TF‑IDF).  
2. **Push** – for each \(d_i\in\mathcal{D}_0\), generate *contextual augmentations* (summaries, paraphrases, entity expansions) via an encoder‑decoder or transformer.  
3. **Re‑pull** – embed the enriched corpus \(\tilde{\mathcal{D}}\) with a dense model and rerank against \(\mathbf{q}\).

Why does this work?  
- **Bayesian sharpening**: Each enrichment step conditions on evidence from \(\mathcal{D}_0\), updating the posterior over relevant documents.  
- **Geometric densification**: The enriched vectors occupy a higher‑dimensional manifold that aligns better with semantic query subspaces, reducing hubness.  
- **Information bottleneck**: By iteratively compressing and re‑expanding content, we move from noisy lexical overlap to distilled semantic signal.

*Non‑obvious insight:* The *order* of enrichment matters less than its *diversity*. Mixing paraphrases with entity expansions yields a richer “semantic field” than repeated self‑similar augmentations; this diversity mitigates the over‑fitting that plagues single‑pass dense retrieval.  

Thus, iterative document enrichment turns retrieval into a principled, multi‑step optimization that leverages both lexical recall and semantic refinement, delivering sharper relevance with controlled computational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

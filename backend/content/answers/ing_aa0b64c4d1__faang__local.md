---
qid: ing_aa0b64c4d1__faang__local
question: 'Explain: Next Steps — BigLaw Bench Deep Dive: Retrieval | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 503
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:19:31-05:00'
sources: []
---

**Clarify**  
You’re asking how to move from a *BigLaw Bench* deep‑dive on retrieval into concrete next steps for the Harvey project. I’ll assume (1) we have a corpus of legal briefs and opinions, (2) a prototype retrieval engine that can surface relevant documents, and (3) stakeholders who want actionable insights, not just raw hits.

**Approach**  
1. **Evaluation & Benchmarking** – define IR metrics (MAP, NDCG) using a labeled test set.  
2. **Feature Engineering** – augment embeddings with legal entity tags, citation graphs, and paragraph‑level relevance signals.  
3. **Model Refinement** – fine‑tune a transformer (e.g., LegalBERT) on query–doc pairs; experiment with sparse + dense hybrid retrieval.  
4. **Explainability & Feedback Loop** – add relevance feedback UI for attorneys to re‑rank or flag false positives, feeding back into the model.  
5. **Deployment & Monitoring** – containerize the service, set up A/B testing, and monitor latency, recall, and user satisfaction.

**Depth**  
- **Complexity**: Dense retrieval inference is *O(n)* per query; using FAISS indexes reduces it to *O(log n)*.  
- **Trade‑offs**: Sparse methods (BM25) give faster baseline but miss nuanced semantics; hybrids balance speed & accuracy.  
- **Explainability**: Use attention heatmaps or LIME on top‑ranked snippets so lawyers trust the engine.

**Edge Cases**  
- *Cold start*: new legal topics with no labeled data → use unsupervised clustering to bootstrap relevance.  
- *Ambiguous queries*: employ query expansion via legal thesauri.  
- *Legal updates*: retrain periodically or use incremental learning to incorporate recent cases.

**Optimize & Communicate**  
Iterate on feature sets guided by A/B results; aim for a 15–20 % lift in MAP while keeping latency <200 ms. Present findings with clear visuals (precision‑recall curves, heatmaps) and a roadmap: prototype → pilot with a small law firm team → scale to full Harvey platform. This demonstrates structured problem solving, depth, and the ability to translate technical work into business value—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

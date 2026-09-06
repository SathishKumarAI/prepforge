---
qid: ing_82e1443901__fp__local
question: 'Explain: Embedding Selection Guide — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 461
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:43:26-05:00'
sources: []
---

### Embedding Selection Guide – A Taxonomy from First Principles  

At its core, an embedding is a mapping \(f:\mathcal{X}\to\mathbb{R}^d\) that turns raw data into a geometry amenable to downstream learning. The *fundamental problem* we solve when choosing embeddings is: **“Given a target task and a set of candidate representations, which one minimises the expected loss under limited resources?”**  

1. **Task‑Driven Geometry** – Every supervised objective imposes an implicit metric on the input space (e.g., classification pushes classes apart, retrieval pulls similar items together). Embeddings that respect this metric inherit lower Bayes risk.  
2. **Capacity vs. Generalisation** – By viewing \(f\) as a parameterised function class, we invoke Rademacher complexity: richer embeddings capture more structure but risk over‑fitting unless regularised or distilled.  
3. **Information Bottleneck** – Optimal embeddings balance mutual information \(I(X;Z)\) with relevance \(I(Z;Y)\). This yields a principled trade‑off between compression and predictive power, explaining why many modern methods (e.g., contrastive learning) implicitly solve this optimisation.  

The taxonomy arises by organising embeddings along three axes:  
- **Pretraining objective** (supervised, self‑supervised, generative).  
- **Architectural inductive bias** (CNN, Transformer, Graph neural nets).  
- **Transferability scale** (task‑specific fine‑tuning vs. frozen feature extractor).  

A non‑obvious insight: *the same architecture can serve vastly different roles depending on the objective*. For instance, a Vision Transformer trained with masked image modeling yields features that are both highly transferable and well‑aligned with human perceptual similarity—a property lost when the same backbone is fine‑tuned for classification alone. Thus, embedding choice is less about “what model” and more about *which optimisation surface* the representation has been carved from.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

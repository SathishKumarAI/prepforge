---
qid: ing_a4cd1ef646__fp__local
question: 'Explain: For In-House — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 391
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:56:39-05:00'
sources: []
---

**Harvey: an in‑house AI for legal & professional services**

The core problem is *scale* – firms need to process millions of documents, contracts, and case files while maintaining the precision required by law. Traditional rule‑based engines falter because legal language is highly contextual; a clause that is harmless in one jurisdiction can be liability elsewhere.  
Harvey tackles this with **hierarchical transformer models fine‑tuned on annotated legal corpora**. The hierarchy mirrors the document structure: tokens → clauses → sections → whole contracts. At each level the model learns *semantic embeddings* that respect both syntactic patterns and domain‑specific jargon, allowing it to infer intent even when phrasing varies.

Why must it work this way?  
1. **Optimization of information flow** – By compressing long documents into clause‑level vectors, Harvey reduces computational cost while preserving discriminative power.  
2. **Probabilistic reasoning** – The system outputs calibrated confidence scores for each inference (e.g., “non‑compliant clause: 0.87”). These are derived from Bayesian calibration layers that correct overconfident transformer logits, ensuring decisions can be audited.  
3. **Geometry of legal concepts** – Embedding space is constrained by a *legal manifold* learned from cross‑jurisdictional corpora; distances correspond to semantic similarity in the legal sense (e.g., “indemnity” vs. “waiver”).  

A non‑obvious insight: Harvey’s internal “attention heatmaps” are not just diagnostics—they serve as **explanatory evidence** that can be fed back into the firm’s knowledge base, gradually improving the model’s priors without retraining from scratch. This continual learning loop turns static AI into a *dynamic legal oracle* that adapts to evolving statutes and precedents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

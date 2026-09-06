---
qid: ing_a742452886__fp__local
question: 'Explain: Red flags interviewers watch for — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 409
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:00:55-05:00'
sources: []
---

### Red flags interviewers spot when evaluating **RAG (Retrieval‑Augmented Generation) systems**

| # | Red flag | Why it matters | Deeper principle |
|---|----------|----------------|------------------|
| 1 | **Ignoring the retrieval latency–accuracy trade‑off** | A system that always fetches everything or never does so will either choke on speed or hallucinate. | *Information bottleneck*: the optimal amount of retrieved context balances compression (speed) and relevance (accuracy). |
| 2 | **Using a single, unscored index** | Retrieval quality is non‑uniform; treating all documents equally wastes capacity. | *Weighted entropy*: high‑entropy passages should be weighted lower than low‑entropy, highly informative ones. |
| 3 | **Blindly concatenating retrieved chunks** | Long inputs saturate transformer limits and introduce noise. | *Geometric embedding alignment*: overlapping contexts distort the query’s vector; proper re‑ranking restores orthogonality. |
| 4 | **No end‑to‑end evaluation of hallucinations** | Retrieval can mitigate hallucination only if the generator respects it. | *Conditional independence*: the generation must be conditioned on retrieved evidence; otherwise, the model reverts to its prior. |

> **Non‑obvious insight:**  
> Most candidates treat retrieval as a pre‑processing step, but in RAG the *retriever* and *generator* form a coupled dynamical system. Optimizing one without the other leads to *catastrophic forgetting*: the generator learns to ignore the retriever’s output. A principled training objective that jointly penalizes both hallucination loss **and** retrieval mismatch (e.g., cross‑entropy over retrieved vs. generated tokens) is essential for stable, high‑performance RAG models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

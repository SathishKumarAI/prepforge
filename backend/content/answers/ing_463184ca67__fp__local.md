---
qid: ing_463184ca67__fp__local
question: How do you evaluate the generation side of RAG - faithfulness, relevance,
  and citation quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 454
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:34:50-05:00'
sources: []
---

**Evaluating Generation in Retrieval‑Augmented Generation (RAG)**  
The generation module in a RAG system must *faithfully* reproduce evidence, *relevantly* respond to the prompt, and *accurately cite* sources. To assess these properties rigorously, we reduce each to an objective that can be measured against ground truth.

| Property | Fundamental problem | Measurement principle | Practical metric |
|----------|---------------------|-----------------------|------------------|
| **Faithfulness** | The model should not hallucinate facts beyond the retrieved evidence. | Treat each generated token as a hypothesis; verify it against the evidence corpus using a *probabilistic entailment* test. | **Evidence‑based F1 (EBF1)**: precision = proportion of tokens that are entailed by evidence, recall = proportion of evidence tokens reproduced. |
| **Relevance** | The answer must address the query while staying within the evidence scope. | Map query and generated response to a shared semantic space; relevance is their cosine similarity conditioned on the retrieved documents. | **Contextual Relevance Score (CRS)**: average similarity over top‑k retrievals, penalized for drift outside evidence keywords. |
| **Citation Quality** | Citations must be traceable, correctly formatted, and correspond to the claimed facts. | Model outputs can be parsed into citation triples \((fact, source, span)\). Validate each triple against a *citation graph* built from the retrieval index. | **Citation Accuracy (CA)**: fraction of triples that are exact matches in the index; plus a *Link Precision* metric for formatting correctness. |

### One non‑obvious insight  
Most evaluations treat faithfulness and relevance as separate axes, but they are jointly constrained by the *retrieval budget*. A model can be perfectly faithful yet irrelevant if it over‑uses low‑rank documents. By jointly optimizing **EBF1 + CRS** under a fixed retrieval count, we expose a *sweet spot* where the generator learns to weight evidence importance—an emergent property akin to Bayesian evidence weighting. This joint metric often reveals subtle hallucinations that surface‑level F1 misses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

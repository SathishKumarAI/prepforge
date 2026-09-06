---
qid: ing_6a324b5dd1__fp__local
question: 'Explain: RAGAS Framework and Metrics — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 473
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:50:45-05:00'
sources: []
---

### Why a New Evaluation Paradigm for Retrieval‑Augmented Generation (RAG)?

The core problem in RAG is **alignment**: the model must *use* the retrieved evidence correctly, not just hallucinate plausible text.  
If we treat generation as a **decision‑making process**, each token choice depends on two sources:

1. The internal language model state \(L\).
2. The external document set \(D=\{d_1,\dots,d_n\}\).

The probability of the next token is
\[
P(t_{i+1}\mid t_{\le i}, L, D)=f(L,D),
\]
where \(f\) must balance *informativeness* (useful evidence) against *fluency* (coherent language).  

A metric that ignores this trade‑off will reward hallucinations or over‑reliance on a single source. Hence RAGAS is built from **three orthogonal axes**:

| Axis | Principle | Metric |
|------|-----------|--------|
| **Relevance** | Information retrieval: retrieved docs should overlap the query intent. | *Recall@k*, *Precision@k* |
| **Faithfulness** | Probabilistic consistency: generated tokens must be entailed by evidence. | *Evidence‑based F1*, *BLEU‑E* |
| **Coverage** | Geometric diversity: avoid redundant snippets that cover the same facts. | *Distinct‑n*, *Entropy of source usage* |

These metrics are derived from Shannon’s information theory (entropy), Bayesian inference (belief updates), and computational geometry (coverage in embedding space).  

#### Non‑obvious Insight  
Most evaluations treat relevance and faithfulness separately, but **faithfulness is only meaningful if the retrieved set actually contains the answer**. RAGAS therefore couples them: a *Faithful* score of 1 can be achieved only when at least one relevant document exists. This coupling reveals that improving retrieval quality has a *super‑linear* impact on overall generation fidelity—an effect often missed when metrics are computed in isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

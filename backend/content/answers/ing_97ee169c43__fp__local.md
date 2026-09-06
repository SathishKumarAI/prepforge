---
qid: ing_97ee169c43__fp__local
question: 'Explain: Known Biases and Mitigations — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 530
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:29:09-05:00'
sources: []
---

## RAG Evaluation Patterns: Why Bias Appears & How to Fix It

### The Core Problem  
A Retrieval‑Augmented Generator (RAG) must *decide* which documents to retrieve **and** how to blend them into an answer. Two intertwined biases surface:

1. **Retriever bias** – the retrieval engine favors certain document types (e.g., popular URLs, high‑TFIDF terms).  
2. **Generator bias** – the language model tends to “hallucinate” from the most frequent patterns in its pre‑training data.

When we evaluate a RAG system using *token‑level overlap* or *BLEU*, we implicitly reward answers that reuse the same lexical forms as the reference, amplifying both biases. The evaluator prefers documents that match the reference’s style rather than those truly informative for the query.

### Deeper Principle  
This is an **information‑theoretic trade‑off**: retrieval maximizes *mutual information* between query and evidence; generation maximizes *likelihood* of next token given context. If the evaluator only checks token overlap, it collapses the objective to a single, surface‑level metric that neglects semantic relevance.

### Non‑Obvious Insight  
The *retrieval step itself can be tuned by the evaluator*. If we penalize high‑confidence but low‑novelty retrievals (e.g., using an entropy regularizer), we force the system to explore less obvious documents. This reduces “semantic drift” where the generator repeats the same phrasing without truly grounding in diverse evidence.

### Practical Mitigations  

| Bias | Fix |
|------|-----|
| Retriever | Use *diversity‑aware* retrieval (max‑margin, nucleus sampling over document scores) and penalize high‑term overlap with references. |
| Generator | Fine‑tune on *retrieval‑conditioned* datasets with an explicit “use evidence” loss; add a **contrastive** term that rewards distinct tokens when multiple documents are present. |
| Evaluator | Adopt *semantic similarity* metrics (e.g., METEOR, BERTScore) and *coverage* scores that check whether key retrieval facts appear in the answer. |

By aligning the evaluation metric with the underlying optimization goals—information gain and factual grounding—we break the loop of surface‑bias amplification and produce RAG systems that truly learn to retrieve and synthesize from diverse evidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_231289ae48__fp__local
question: 'Explain: Custom Evaluator Pattern — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 429
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:20:09-05:00'
sources: []
---

## Custom Evaluator Pattern – Rag Evaluation Patterns  

Retrieval‑augmented generation (RAG) mixes *retrieval* and *generation*.  
The fundamental problem is that **accuracy must be judged on two coupled sub‑tasks**:  
1. Did the model fetch a useful document?  
2. Does the final answer depend correctly on that document?

A naïve metric (BLEU, ROUGE) treats the output as a monolithic string and ignores the retrieval step, leading to inflated scores when the model hallucines. The evaluator must therefore **decouple** these sub‑tasks and re‑integrate them in a principled way.

The pattern is:

1. **Retrieve‑Evaluator** – compute relevance (e.g., cosine similarity or rank‑based metrics) between the query and the retrieved passages.
2. **Generation‑Evaluator** – apply traditional text‑matching metrics to the answer conditioned on the *retrieved* content.
3. **Fusion Layer** – weight each component by its confidence or by an information‑theoretic score (e.g., mutual information between query and passage), then aggregate.

Why this works:  
- Retrieval quality is a latent variable; treating it as observable allows us to apply Bayesian marginalisation over the retrieval step.  
- The fusion layer embodies *principled uncertainty propagation*: if retrieval confidence is low, we down‑weight generation metrics, preventing hallucination credit.

### Non‑obvious insight  
Most implementations treat the retrieved document as a black box and merely concatenate it to the prompt. The custom evaluator pattern reveals that **the retrieval step can be treated as an explicit latent variable in a probabilistic model**, enabling *joint optimisation* of retrieval ranker and generator via back‑propagation through the evaluator—something standard metrics miss. This yields tighter training signals and more reliable evaluation for RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

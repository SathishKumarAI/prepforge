---
qid: ing_a8a88d8d70__fp__local
question: 'Explain: Generator Evaluation — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 573
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:04:22-05:00'
sources: []
---

## Why Retrieval‑Augmented Generation (RAG) needs a special evaluation

The core problem for any generator is *hallucination*: the model outputs fluent text that may be factually wrong or unsupported by evidence.  
A RAG system solves this by first retrieving a small set of documents \(D=\{d_1,\dots,d_k\}\) from an indexed corpus and then conditioning the language model on both the user query \(q\) and \(D\). The generator’s objective becomes

\[
\max_{\theta} \sum_{(q,y)} \log P_\theta(y|q,D(q)),
\]

where \(D(q)\) is the retrieval result.  
Because the training distribution now includes external evidence, we must evaluate *two* things:

1. **Retrieval quality** – does \(D(q)\) contain the relevant facts?  
2. **Generation fidelity** – does the model use \(D(q)\) to produce a correct answer?

### Rag Evaluation Patterns

| Pattern | What it measures | Why it matters |
|---------|------------------|----------------|
| **Retrieval‑only** | Precision@k, Recall@k of retrieved documents | Ensures the evidence pool is sound. |
| **Generation‑only** | BLEU/ROUGE on outputs ignoring retrieval | Captures linguistic fluency but ignores grounding. |
| **Joint (RAG‑Eval)** | Accuracy or F1 after verifying that each factual claim in the output cites a sentence from \(D(q)\) | Guarantees end‑to‑end correctness; aligns with the objective’s conditioning. |

The joint pattern is essentially an *information‑theoretic* test: it verifies that the mutual information between the answer and the retrieved evidence, conditioned on the query, is maximized.

### Non‑obvious insight

Most people treat retrieval as a black‑box preprocessor. In reality, **retrieval acts like a prior distribution over latent facts**. If we model the posterior \(P(f|q)\) (the probability of fact \(f\) given query), retrieval supplies samples from this distribution. The generator’s loss can then be seen as minimizing cross‑entropy against a *soft* target that reflects the evidence likelihood, not just the ground truth. Consequently, improving retrieval precision boosts the *effective capacity* of the generator to represent true facts, while poor retrieval causes the model to rely on its internal priors—leading back to hallucination. This duality explains why RAG evaluation must jointly assess both components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

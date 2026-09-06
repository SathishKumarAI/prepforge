---
qid: ing_92fb417aa6__fp__local
question: 'Explain: Retrieving a Context Window Around a Sentence'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 441
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:18:04-05:00'
sources: []
---

**Retrieving a Context Window Around a Sentence – From First Principles**

The core problem is *locality*: we want to expose a model only the linguistic neighborhood that influences a target sentence’s meaning, while discarding irrelevant long‑range noise.  
1. **Formulation**: Let \(S\) be the target sentence and \(\mathcal{C}\) the entire document. We seek a sub‑document \(W\subseteq\mathcal{C}\) such that every token in \(W\) is within distance \(k\) (in tokens or paragraphs) of some token in \(S\).  
2. **Why it works**: In natural language, syntactic and semantic dependencies decay with distance (Zipf’s law for co‑occurrence). By constraining to a window of size \(k\), we preserve the high‑probability dependency pairs while pruning low‑probability long‑range ones—an instance of *Markov locality*.  
3. **Optimization view**: Selecting \(W\) minimizes an objective \(\sum_{t\in W}\!\!-\log P(t|S)\) subject to a cardinality constraint, which is equivalent to picking the most informative tokens under a fixed budget—classic information‑theoretic compression.  
4. **Non‑obvious insight**: The *optimal* window size \(k^\*\) depends on the task’s entropy: for classification of sentiment, a smaller \(k\) suffices; for coreference resolution, a larger \(k\) is needed because antecedents can be far away. Thus, instead of fixing \(k\), adapt it to the *mutual information* between \(S\) and its neighbors—this yields better generalization without extra parameters.

In short, context windows are a principled truncation of the document that respects linguistic locality, reduces variance, and can be tuned by measuring information flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

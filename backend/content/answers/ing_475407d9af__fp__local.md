---
qid: ing_475407d9af__fp__local
question: 'Explain: pass@k — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 398
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:37:18-05:00'
sources: []
---

**Pass@k – why it works and what it really measures**

In a retrieval or recommendation task we usually rank items \(i\) for each query by an estimated relevance score \(\hat{s}_i\).  
The *pass* condition asks: **does at least one relevant item appear in the top‑\(k\) positions?**  
Formally, let \(R\subseteq\{1,\dots,N\}\) be the set of truly relevant items. For a ranking \(\pi\),  

\[
\text{Pass@}k = \mathbf{1}\!\left(\pi^{-1}(i)\le k\;\text{for some } i\in R\right).
\]

Averaging over queries gives the empirical probability that a user finds what she wants within \(k\) clicks.  
From an optimization point of view, Pass@k is the *expected value* of this binary indicator; it is a **non‑decreasing concave function** of the quality of each item’s score, hence a valid objective for learning-to-rank algorithms.

A subtle but crucial insight: **Pass@k does not decompose into independent per‑item probabilities.**  
The event “relevant in top‑\(k\)” is highly correlated across items; assuming independence (as some naïve derivations do) inflates the metric, especially when \(R\) contains many elements.  
Thus Pass@k captures *collective* ranking quality, not just individual item scores—an observation often overlooked when interpreting its values.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

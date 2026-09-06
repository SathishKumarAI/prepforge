---
qid: ing_c18dd01ba8__fp__local
question: 'Explain: Constrained Decoding (CFG & Regex) — Structured Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 530
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:53:34-05:00'
sources: []
---

### Constrained Decoding: Why and How

At its core a language model learns a distribution \(p(\mathbf{y}\mid\mathbf{x})\) over token sequences \(\mathbf{y}\).  
During generation we repeatedly pick the next token that maximizes this probability, possibly tempered by temperature or beam width.  
The *fundamental problem* is that raw samples can violate hard structural rules (e.g., JSON syntax, arithmetic expressions), which are impossible to recover from later.

**Constrained decoding solves this by embedding a *grammar* \(G\) into the search.**  
When we maintain a partial sequence \(\mathbf{y}_{1:t}\), we compute the set of tokens \(\mathcal{T}_t(G,\mathbf{y}_{1:t})\) that keep at least one full completion in the language defined by \(G\).  
We then restrict the probability mass to this set before sampling or taking an argmax.  
Formally, the conditional distribution becomes  

\[
p_{\text{constrained}}(y_{t+1}\mid \mathbf{y}_{1:t}) = 
\frac{\mathbbm{1}[y_{t+1}\in\mathcal{T}_t]\; p(y_{t+1}\mid \mathbf{y}_{1:t})}
{\sum_{z\in\mathcal{T}_t}p(z\mid \mathbf{y}_{1:t})}.
\]

This guarantees every generated sequence lies in the language of \(G\), without sacrificing the model’s learned preferences.

**Deep insight:**  
Constrained decoding is *not* a post‑hoc filter; it is an **online projection onto a convex polytope** defined by the grammar. The projection preserves relative likelihoods while annihilating impossible continuations, making the search space exponentially smaller but still locally optimal. This explains why even simple CFG constraints dramatically improve BLEU for code generation tasks: we prune away a vast portion of the probability mass that would otherwise be wasted on syntactically invalid outputs.

In practice, CFGs capture global structure (e.g., matching parentheses), whereas regexes enforce local patterns (e.g., email formats). Both fit into the same projection framework, differing only in how \(\mathcal{T}_t\) is computed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

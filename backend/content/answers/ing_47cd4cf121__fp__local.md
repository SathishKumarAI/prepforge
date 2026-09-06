---
qid: ing_47cd4cf121__fp__local
question: 'Explain: Unigram (SentencePiece) — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 467
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:38:11-05:00'
sources: []
---

**Unigram Tokenization – a principled view**

The core problem is *compressing* an arbitrary text stream into a fixed‑size vocabulary while preserving as much information as possible.  
Let \(C\) be the corpus and \(\mathcal{T}\) a set of candidate tokens (subwords). We seek \(\mathcal{V}\subseteq\mathcal{T}\) that minimizes the *expected code length* under a probabilistic model:

\[
L(\mathcal{V})=\sum_{x\in C} -\log P_{\mathcal{V}}(x)
\]

where \(P_{\mathcal{V}}\) is a **product of token probabilities** (the unigram assumption).  
Because the tokens are independent, the likelihood factorises:

\[
P_{\mathcal{V}}(x)=\prod_{t\in \text{seg}(x)} p_t
\]

The optimisation problem becomes: choose \(\mathcal{V}\) and \(\{p_t\}\) to minimise \(L\), subject to a budget on \(|\mathcal{V}|\).  
This is exactly the *minimum description length* (MDL) principle applied at token granularity.  

**Why “unigram” works:**  
1. **Convexity in probabilities** – with fixed \(\mathcal{V}\), maximizing likelihood over \(\{p_t\}\) reduces to simple frequency counts.  
2. **Greedy pruning** – tokens that contribute the least expected log‑probability can be removed without re‑optimising from scratch, yielding an efficient EM algorithm.  

**Non‑obvious insight:** The resulting token set is *not* a “minimal segmentation” of the corpus; it deliberately retains some high‑frequency subwords even if they overlap with longer ones. This redundancy reduces perplexity on unseen data because the model can back off to shorter tokens when rare contexts appear, embodying an implicit form of **smoothing** without extra parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_6bd807f369__fp__local
question: 'Explain: Semantic Similarity — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 467
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:53:46-05:00'
sources: []
---

**Semantic similarity in LLM evaluation**

At its core we want to know whether two texts *mean the same thing*.  
Formally, let \(x\) and \(y\) be sequences of tokens. We ask for a function
\(S(x,y)\in[0,1]\) that is high iff every **semantic feature** present in one
is also present (with comparable weight) in the other.

The *fundamental problem* is that language is compositional: the meaning of \(x\)
depends on how its tokens combine under grammar and world knowledge.  
Thus we must map each token to a continuous vector \(\mathbf{v}\) such that
similar meanings lie close together. Modern LLMs learn these vectors by
optimizing a *contrastive* objective:

\[
\min_{\theta}\; \mathbb{E}_{(x,y)}\Big[ -\log\frac{\exp(\langle f_\theta(x),f_\theta(y)\rangle/\tau)}
{\sum_{z}\exp(\langle f_\theta(x),f_\theta(z)\rangle/\tau)}\Big],
\]

where \(f_\theta\) is the encoder and \(\tau\) a temperature.  
This objective guarantees that for any *positive pair* \((x,y)\) (semantically
equivalent paraphrases) the dot product is larger than for *negative pairs*
(randomly sampled). Hence, after training, similarity reduces to cosine or
Euclidean distance in embedding space.

**Non‑obvious insight:**  
The temperature \(\tau\) controls *semantic granularity*. A small \(\tau\)
sharpens distinctions—useful when evaluating fine‑grained paraphrases—but can
cause over‑sensitivity to lexical choice. Conversely, a large \(\tau\) smooths
out such nuances, yielding higher similarity scores for loosely related texts.
Thus, choosing \(\tau\) is not merely a hyperparameter; it encodes the *level
of semantic abstraction* you wish to measure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

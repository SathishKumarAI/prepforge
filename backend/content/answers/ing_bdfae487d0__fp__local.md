---
qid: ing_bdfae487d0__fp__local
question: A conversation runs past the context window. What do you keep, and how do
  you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 426
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:47:32-05:00'
sources: []
---

**Why a model must “remember” selectively**

A transformer’s context window is a fixed‑size buffer that holds the most recent tokens. The fundamental problem it solves is *sequence modeling*: predict the next token given all prior tokens. Because the number of possible histories grows exponentially with length, we cannot store everything; we need a principled compression.

**Principle: mutual information + relevance**

We want to keep tokens \(x_{t}\) that maximize their *mutual information* with future tokens \(y\):  
\(I(x_t;y)=H(y)-H(y|x_t)\).  
In practice, this is approximated by the model’s attention scores or learned salience. Tokens that provide little new information about \(y\) can be safely dropped.

**Geometric view**

Treat each token as a vector in embedding space. The context window represents a subspace spanned by recent vectors. Dropping a token corresponds to projecting onto a lower‑dimensional subspace. To preserve the span, we keep those vectors with largest *principal component* contributions (high variance) and discard orthogonal noise.

**Non‑obvious insight**

Most people think “keep everything that appears in the prompt.” In fact, *redundant paraphrases* often carry less incremental information than a single clear statement. A model will therefore drop earlier synonyms or repeated facts because their mutual information with future tokens is already captured by a concise version.

**Decision rule**

1. Compute an attention‑based salience score for each token in the window.  
2. Rank tokens; keep the top‑\(k\) that cover at least 90 % of total salience mass.  
3. If a token’s contribution is below a threshold and its embedding is highly correlated with already kept tokens, drop it.

This preserves the most informative content while staying within the fixed window, ensuring the model can still generate coherent continuations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

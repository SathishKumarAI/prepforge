---
qid: ing_ab5bbd3f47__fp__local
question: 'Explain: The Context Window: Working Memory — AI Agents Explained - by
  Sairam Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 485
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:09:36-05:00'
sources: []
---

**Why a “context window” is the *working memory* of an LLM**

The core problem any language model faces is: *given a prompt, produce the next token*.  
In a sequential model this decision must be based only on a finite history because
computational resources are bounded.  
Let \(x_{1:t}\) be the tokens seen so far; the probability of the next token \(y\) is  

\[
P(y|x_{1:t}) = \frac{\exp(f(x_{1:t},y))}{Z}
\]

where \(f\) is a neural function and \(Z\) normalises.  
If we let the history grow without limit, the hidden state would have to encode an unbounded amount of information—an impossibility for any finite‑parameter network.  

**Derivation from Information Theory**

The model’s *mutual information* between the next token and past tokens decays rapidly with distance: \(I(y;x_{t-k}) \approx O(e^{-k/\lambda})\).  
Thus, after a few dozen tokens the marginal gain in predictive power is negligible.  
A fixed‑size window of length \(w\) captures almost all useful dependencies while keeping memory linear in \(w\).

**Geometric view**

The hidden state lives on a high‑dimensional manifold; each token adds a new direction.  
Because the manifold’s curvature is bounded, after \(w\) steps the trajectory folds back onto itself—any further history lies within the span already represented.

**Non‑obvious insight**

A context window is *not* merely a buffer—it defines an *effective horizon* for causal inference.  
When an agent must plan over many turns (e.g., dialogue or game strategy), it can only base decisions on what remains in that window; everything beyond is treated as latent, requiring the agent to use higher‑level abstractions or external memory modules.

In short, the context window arises from the exponential decay of useful past information and the geometric limits of finite neural representations. It is the principled, computationally tractable substitute for an infinite working memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

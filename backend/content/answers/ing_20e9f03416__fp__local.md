---
qid: ing_20e9f03416__fp__local
question: 'Explain: Positional information — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 414
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:16:18-05:00'
sources: []
---

**Positional Information in Language Models**

The core problem a language model (LM) solves is predicting the next token given all previous tokens, i.e., computing  
\(P(x_{t+1}\mid x_1,\dots,x_t)\).  Tokens are categorical symbols; their order is the only source of *structure*.  If an LM treats each position as an independent sample from a fixed distribution, it can learn word frequencies but cannot capture syntax or semantics that depend on relative placement.  

Thus we must encode *relative* positions into the model’s input representation.  In transformer‑style LMs this is done by adding a positional encoding vector \(p_t\) to each token embedding \(e(x_t)\).  Mathematically, the attention score between tokens \(i\) and \(j\) becomes  
\( \text{score}_{ij}= (e_i+p_i)^\top (e_j+p_j)/\sqrt{d}\).  
Expanding this shows that the dot product contains a term \(p_i^\top p_j\), which is a deterministic function of the distance \( |i-j|\) when using sinusoidal encodings.  This term provides the model with a *continuous* notion of relative position, enabling it to learn that, for example, “the dog” and “dog” should attend strongly if they are close, but less so if separated by many tokens.

The deeper principle is **information geometry**: the positional vectors span a subspace that augments token embeddings, allowing the attention mechanism to discriminate between permutations of the same multiset of words.  A non‑obvious insight is that *relative* rather than absolute position suffices; sinusoidal encodings allow any shift in sequence length without retraining because they are invariant under translation.

In short, positional information transforms a bag‑of‑words model into one that respects order, making the LM capable of capturing linguistic structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

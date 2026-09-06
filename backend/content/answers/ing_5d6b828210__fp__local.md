---
qid: ing_5d6b828210__fp__local
question: 'Q: How do embedding models learn semantic similarity?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 358
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:23:13-05:00'
sources: []
---

### From the Ground Up

Embedding models are trained to **compress** high‑dimensional data (words, images, graphs) into a low‑dimensional vector space where *similarity* is reflected by geometric proximity.  
The core objective is an **optimization problem**: minimize a loss that rewards pairs of semantically related items being close while pushing unrelated pairs apart.  

In word embeddings, this takes the form of predicting context words from a target word (or vice versa). The loss is the negative log‑likelihood of observing the true context under a softmax distribution over all vocabulary items:

\[
L = -\sum_{(w,c)} \log \frac{e^{v_w^\top v_c}}{\sum_{x} e^{v_w^\top v_x}}
\]

This encourages the dot product \(v_w^\top v_c\) to be large for true pairs, small otherwise. By virtue of **information theory**, maximizing this likelihood is equivalent to minimizing the cross‑entropy between the empirical distribution of contexts and the model’s predicted distribution, i.e., reducing KL divergence.

The geometry emerges because the dot product acts as a similarity measure in Euclidean space; optimizing it forces semantically coherent words to cluster.  

**Non‑obvious insight:** The *softmax denominator* implicitly regularizes embeddings by considering every word in the vocabulary. This global competition introduces a form of **negative sampling** without explicit negatives: rare or unrelated words automatically become implicit “penalties,” ensuring that common words don’t dominate the geometry.

Thus, semantic similarity is learned as an emergent property of maximizing predictive likelihood under a probabilistic model, grounded in optimization and information theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

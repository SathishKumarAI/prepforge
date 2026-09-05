---
qid: ing_1beaacd303__fp__local
question: 'Explain: Untied vs. Tied Embeddings — Transformer Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 485
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:05:27-05:00'
sources: []
---

**Untied vs. Tied Embeddings in Transformers**

A transformer maps discrete tokens \(x_t\) to continuous vectors \(\mathbf{e}_t=W_{\text{in}}\phi(x_t)\), processes them, and finally projects back to token scores \(\hat{\mathbf{s}}_t=W_{\text{out}}\mathbf{h}_t\).  
The *fundamental problem* is that the same vocabulary must be represented in two different spaces: an *input embedding space* for contextualization and an *output logits space* for prediction.  

**Why tying works:**  
If we set \(W_{\text{out}}=W_{\text{in}}^{\top}\), the model re‑uses the same parameters to encode and decode tokens. This enforces a *self‑consistency* constraint: the geometry that makes two tokens similar in input space must also make them produce similar logits. It reduces parameter count by \(O(Vd)\) (where \(V\) is vocabulary size, \(d\) embedding dimension), alleviating overfitting when data are limited. Moreover, the shared matrix acts as a *regularizer*—it implicitly aligns the encoder and decoder manifolds, which is beneficial for learning smooth probability distributions over sequences.

**Untied embeddings:**  
Separating \(W_{\text{in}}\) and \(W_{\text{out}}\) allows each side to specialize. The encoder may learn richer contextualized features (e.g., syntax), while the decoder focuses on matching the distribution of next tokens. This flexibility is especially valuable in multimodal or multilingual settings where input and output vocabularies differ.

**Non‑obvious insight:**  
Tied embeddings *do not* guarantee that the input and output spaces are identical; they merely enforce that the dot product between an embedding and a decoder weight equals the logit. The true alignment is governed by *cosine similarity* in the shared space, which can be far more informative than raw Euclidean distance. Thus, tying implicitly encourages the model to learn angular relationships (semantic similarities) rather than absolute positions—an effect that often underlies the superior performance of tied‑embedding transformers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

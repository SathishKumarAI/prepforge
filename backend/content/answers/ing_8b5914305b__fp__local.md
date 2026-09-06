---
qid: ing_8b5914305b__fp__local
question: What is weight tying, and why do some models tie the embedding and output
  matrices while others do not?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 491
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:01:10-05:00'
sources: []
---

**Weight tying** is a parameter‑sharing trick in neural language models that forces the input‑embedding matrix \(E\in\mathbb{R}^{V\times d}\) (mapping one‑hot tokens to dense vectors) and the output‑projection matrix \(W\in\mathbb{R}^{d\times V}\) (mapping hidden states back to logits) to be transposes of each other:  

\[
W = E^{\top}.
\]

---

### Why it works

1. **Information bottleneck** – The embedding captures a *context‑agnostic* representation of tokens; the output projection should decode that same representation back into scores. Sharing parameters reduces redundancy and ensures consistency between encoding and decoding spaces.

2. **Parameter economy & regularisation** – With \(V\) large, naïve models have \(\mathcal{O}(Vd)\) free parameters in both matrices. Tying cuts this by half, preventing overfitting on small corpora and speeding up training.

3. **Symmetry of the objective** – The loss (cross‑entropy) is symmetric w.r.t. the inner product \(h^{\top}E_{w}\). By tying, we enforce that the same similarity metric governs both encoding and decoding, aligning with the probabilistic interpretation \(p(w|h)\propto \exp(h^{\top}E_w)\).

---

### When to untie

- **Task‑specific embeddings**: If the model learns *contextual* token vectors (e.g., BERT), these are not meant to be reused as output weights.  
- **Multilingual or domain adaptation**: Separate projections allow each language/domain to have its own scoring function while still sharing a common embedding space.  
- **Architectural asymmetry**: Some models (e.g., GPT‑style transformers) use separate linear layers for the final softmax because they already employ layer normalisation and other transformations that break the symmetry.

---

### Non‑obvious insight

Weight tying implicitly imposes *orthogonality* between the hidden state space and the token space. This constraint encourages the hidden representation to be *low‑rank*, which can improve generalisation but may also limit expressiveness for highly polysemous tokens—an effect that disappears once the matrices are untied.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

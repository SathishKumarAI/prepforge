---
qid: ing_7a0b15733a__fp__local
question: 'Explain: Sentence/Document Embeddings — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 449
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:23:58-05:00'
sources: []
---

### From “What is a sentence?” to “How do we compare it?”

The core problem: *measure similarity between arbitrary pieces of text*.  
A human reads two sentences and instantly judges them as similar or not; a computer needs a numeric representation that preserves this judgment.

**Why vectors?**  
Similarity in Euclidean space can be measured with dot products or cosine.  If we embed every sentence into ℝⁿ, then similarity ≈ cosine(s₁,s₂).  This reduces the problem to linear algebra—fast, differentiable, and amenable to optimization.

**How does it work?**  
1. **Tokenization → Word embeddings**: each word w ↦ v_w ∈ ℝᵈ (learned so that semantically close words have nearby vectors).  
2. **Sentence encoder f(·)**: a neural network (transformer, RNN, pooling) maps the sequence {v_{w₁},…,v_{w_k}} to a single vector s = f({v}) ∈ ℝⁿ.  
3. **Training objective**: contrastive or supervised loss that forces s to be close to related sentences and far from unrelated ones (e.g., triplet, InfoNCE).  This is an instance of *contrastive learning*, a general principle for embedding data into spaces where similarity matches distance.

**Deeper principle – information geometry**  
The learned space is a manifold whose curvature reflects linguistic regularities.  The loss implicitly maximizes mutual information between the sentence and its context, aligning with *variational inference*.

**Non‑obvious insight**  
A well‑trained embedding can be *linearized*: complex semantic operations (e.g., “king – man + woman ≈ queen”) arise because the encoder aligns with an underlying vector space that approximates a *semantic manifold*.  This linearity is not enforced explicitly; it emerges from the geometry of language itself, making embeddings surprisingly powerful for downstream tasks without fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

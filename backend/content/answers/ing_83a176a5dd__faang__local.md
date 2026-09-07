---
qid: ing_83a176a5dd__faang__local
question: 'Explain: Selection Criteria — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 525
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:50:57-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how we pick a representation (embedding) for AI models and what role vector spaces play.  
*Assumptions:*  
- The goal is downstream tasks (classification, retrieval, clustering).  
- We have labeled or unlabeled data, and computational budget constraints.

**2️⃣ Approach**  
1. Define the *semantic* space needed (text, image, graph).  
2. Choose an embedding method that preserves relevant relationships.  
3. Verify that the vector space is *continuous*, *dense*, and *low‑dimensional* enough for efficient computation.  
4. Evaluate against task metrics.

**3️⃣ Depth**  
- **Embeddings** map discrete entities to ℝⁿ so similarity becomes dot/Euclidean distance.  
  - *Word embeddings* (word2vec, GloVe) capture co‑occurrence statistics; *contextual* models (BERT, GPT) produce dynamic vectors.  
  - *Image embeddings* come from CNN feature maps or vision transformers.  
- **Vector space properties**:  
  - *Linearity*: allows algebraic operations like averaging for sentence embeddings.  
  - *Metric compatibility*: Euclidean distance ≈ cosine similarity after L2‑normalization.  
  - *Dimensionality trade‑off*: higher dims → richer expressiveness but O(n²) storage and slower nearest‑neighbor search.  
- **Selection criteria**:  
  - *Task relevance* (e.g., supervised fine‑tuning vs. zero‑shot).  
  - *Training data coverage* (pretrained on large corpora = better generalization).  
  - *Computational budget* (model size, inference latency).

**4️⃣ Edge Cases**  
- Out‑of‑vocabulary tokens → random or “unknown” vectors degrade similarity.  
- Very high dimensionality can cause the “curse of dimensionality”; nearest neighbors become meaningless.  
- Non‑Euclidean data (e.g., graph embeddings) may require specialized distance metrics.

**5️⃣ Optimize & Communicate**  
- Compress embeddings via PCA or quantization to reduce memory without losing >95% variance.  
- Use approximate nearest neighbor libraries (FAISS, Annoy) for real‑time retrieval.  
- When explaining, start with the intuition of “continuous semantic space”, then layer in mathematical guarantees and practical trade‑offs, closing with a quick performance benchmark.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

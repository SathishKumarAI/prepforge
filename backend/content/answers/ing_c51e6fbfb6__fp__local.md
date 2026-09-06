---
qid: ing_c51e6fbfb6__fp__local
question: 'Explain: Open Source Models — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 435
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:00:51-05:00'
sources: []
---

## Why we turn data into vectors

The core problem of an AI model is **comparison**: given two pieces of information, decide how similar they are.  
Any similarity operation needs a representation that supports a *metric*—a way to measure distance or angle.  A raw text string, image pixels, or audio waveform lacks such structure; their spaces are discrete and high‑dimensional, making nearest‑neighbour queries impossible.

**Embedding** solves this by learning a smooth map  

\[
f:\mathcal{X}\rightarrow \mathbb{R}^d
\]

from the raw domain \(\mathcal{X}\) to a low‑dimensional Euclidean space.  
The map is trained so that semantically similar inputs land close together (small Euclidean distance, large cosine similarity).  The loss function typically encourages “pulling” positives together and “pushing” negatives apart—an instance of *contrastive* or *triplet* optimization.

### Geometry & probability

In \(\mathbb{R}^d\) we can use dot products, norms, and rotations to reason about similarity.  Probabilistically, the embedding can be seen as a latent variable model: each input is generated from a hidden vector \(z\), and inference amounts to estimating \(z\).  This unifies seemingly disparate tasks—search, clustering, or classification—under one geometric framework.

### Non‑obvious insight

Most people treat embeddings as “just vectors.”  
But **the choice of norm matters**: Euclidean distance preserves linear structure, whereas cosine similarity (dot product normalized by norms) is invariant to vector length.  In open‑source models, developers often choose Euclidean because it’s easier to train with squared error, yet downstream tasks like semantic search benefit from cosine similarity.  Switching the metric can yield a *several‑fold* boost in retrieval quality without retraining the model—an inexpensive but powerful tweak.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

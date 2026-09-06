---
qid: ing_c0816c9d8b__fp__local
question: 'Explain: API Embedding Models (May 2026) — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 511
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:08-05:00'
sources: []
---

**Why we need a taxonomy for API‑level embedding models**

At the core, an embedding model solves *representation learning*: mapping raw data (text, image, audio…) into a fixed‑dimensional vector space so that semantic similarity becomes geometric proximity.  
The space is learned by optimizing a contrastive or predictive objective; thus its structure reflects the **geometry of the loss surface** and the **statistics of the training distribution**.

Because the downstream task dictates what “semantic” means, we cluster models along three orthogonal axes:

| Axis | Sub‑category | What it captures |
|------|--------------|------------------|
| **Data modality** | Text, Vision, Audio, Multimodal | Different feature extractors (transformers, CNNs) and tokenization schemes. |
| **Training objective** | Contrastive (SimCLR, CLIP), Predictive (BERT‑style masked LM), Hybrid | Determines the manifold curvature: contrastive yields hyperbolic or spherical embeddings; predictive tends to Euclidean. |
| **Fine‑tuning strategy** | Zero‑shot, Few‑shot, Full fine‑tune | Controls the *semantic granularity* and transferability of the learned geometry. |

These axes are not arbitrary—they arise from fundamental trade‑offs:

- **Optimization complexity ↔ Generalization**: Contrastive objectives require negative sampling; predictive ones rely on autoregressive likelihoods.
- **Information bottleneck ↔ Expressiveness**: A tighter bottleneck (smaller hidden size) forces the model to encode only the most salient semantic axes, yielding cleaner cluster structure in the embedding space.

**Non‑obvious insight:**  
The *geometry* of an embedding space is a fingerprint of its training objective. For example, CLIP’s contrastive loss pushes image–text pairs onto a hypersphere, making cosine similarity a natural distance metric—yet this very property limits linear separability for certain classification tasks unless you re‑embed into Euclidean space. Recognizing this link lets practitioners choose the right model family *before* even looking at downstream performance metrics.

In sum, the taxonomy is a map from **objective → geometry → application**; understanding it reduces empirical trial‑and‑error to principled design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

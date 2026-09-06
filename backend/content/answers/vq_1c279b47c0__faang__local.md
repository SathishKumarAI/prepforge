---
qid: vq_1c279b47c0__faang__local
question: Explain Unsupervised Learning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 403
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:00:18-05:00'
sources: []
---

**Unsupervised Learning – A FAANG‑style Interview Answer**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You’re asking how models learn patterns *without* labeled data. I’ll assume we’re talking about clustering, dimensionality reduction, or density estimation—classic unsupervised tasks—and that the goal is to extract structure useful for downstream analytics.” |
| **Approach** | 1️⃣ Define the problem (e.g., cluster customers). <br>2️⃣ Choose a representation (raw features → embeddings). <br>3️⃣ Pick an algorithm: k‑means, DBSCAN, PCA, t‑SNE, autoencoders. <br>4️⃣ Train & evaluate using intrinsic metrics (silhouette score, perplexity) or downstream performance. |
| **Depth** | *k‑Means*: minimize intra‑cluster variance; O(n·k·t). *DBSCAN*: density‐based, handles arbitrary shapes; complexity O(n log n). *PCA*: linear projection maximizing variance; computationally cheap with SVD. *Autoencoders*: learn nonlinear embeddings via backprop; can capture complex manifolds. Hyperparameters (k, ε, latent size) are tuned by cross‑validation or grid search. |
| **Edge Cases** | • High dimensionality → curse of dimensionality: use PCA first.<br>• Imbalanced clusters → silhouette may be misleading; consider cluster size constraints.<br>• Noisy data → robust algorithms (DBSCAN) or denoising autoencoders. |
| **Optimize & Communicate** | “If we need real‑time clustering, we’ll switch to Mini‑Batch k‑Means or online DBSCAN. For interpretability, I’d add feature importance via SHAP on the learned embeddings.” |

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

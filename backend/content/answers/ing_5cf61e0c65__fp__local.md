---
qid: ing_5cf61e0c65__fp__local
question: Explain contrastive learning and the InfoNCE loss. How are modern embedding
  models (CLIP, text retrievers) actually trained?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 568
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:22:05-05:00'
sources: []
---

**Contrastive Learning & InfoNCE – a first‑principles view**

The core problem is to learn an embedding function \(f\) that maps raw data (images, text, audio…) into a space where *semantically similar* pairs lie close while *dissimilar* pairs are far apart.  
Mathematically we want to maximize the mutual information between two views of the same sample, say an image \(x\) and its augmented version \(x'\), i.e.
\[
I(f(x); f(x')) \;\ge\; 0 .
\]
Mutual information can be bounded below by a *contrastive* objective that compares the similarity of the true pair against all other pairs in a batch.  

The InfoNCE loss is this bound in closed form:
\[
L_{\text{InfoNCE}} = - \log \frac{\exp(\operatorname{sim}(f(x), f(x'))/\tau)}{\sum_{k=1}^{K}\exp(\operatorname{sim}(f(x), f(z_k))/\tau)},
\]
where \(z_k\) are negative samples (other items in the batch or a memory bank) and \(\tau\) is a temperature scaling similarity.  
The numerator rewards aligning the true pair; the denominator penalizes any other item that looks too similar, thereby sharpening the decision boundary.

**Training modern embeddings**

1. **Pre‑training stage** – Use large unlabelled corpora or image collections. For CLIP, an image and its caption are paired; for text retrievers, two sentences (e.g., question–answer) form a positive pair. Negative pairs come from the rest of the batch or a queue.  
2. **Back‑propagation** – Optimize \(L_{\text{InfoNCE}}\) with SGD/Adam to learn both encoder weights and, in CLIP’s case, a joint vision–language embedding space.  
3. **Fine‑tuning** – Optional supervised signals (e.g., classification heads or retrieval metrics) are added, but the core embedding remains shaped by contrastive pre‑training.

*Non‑obvious insight*: The temperature \(\tau\) acts as an implicit regularizer on *gradient variance*. A too low \(\tau\) makes the softmax sharp, concentrating gradients on a few negatives and risking collapse; a high \(\tau\) smooths gradients but weakens discrimination. Thus, tuning \(\tau\) is not merely a scaling choice—it governs the trade‑off between exploration (sampling diverse negatives) and exploitation (focusing on hard ones).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

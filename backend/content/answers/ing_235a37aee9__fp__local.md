---
qid: ing_235a37aee9__fp__local
question: 'Explain: Tips for Example Selection — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 459
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:20:38-05:00'
sources: []
---

**Why “example selection” matters**

A prompt is a *partial specification* of the task we want a language model (LM) to perform. The LM’s output depends on two things:

1. **The distribution it was trained on** – a vast, noisy prior.
2. **The conditioning information we give it** – the prompt and any few-shot examples.

When we hand an example to the LM, we are *tilting* its posterior toward the region of the input space that looks like that example. The fundamental problem is: *how do we choose those tilts so that the model’s output aligns with our intent?*

**Key principles**

| Principle | Why it holds |
|-----------|--------------|
| **Representativeness** | An example must belong to the same latent class as the test input; otherwise the LM will learn a spurious pattern. |
| **Diversity of boundary cases** | The model’s decision surface is high‑dimensional; sampling near the class boundary forces it to refine that surface, reducing overconfidence on edge inputs. |
| **Signal‑to‑noise ratio** | Overly generic examples give weak signals; overly specific ones risk overfitting. |
| **Calibration via counter‑examples** | Presenting a contrasting negative example teaches the model what *not* to do, sharpening its internal decision boundary. |

**Practical recipe**

1. **Cluster the training data** (e.g., by embeddings).  
2. Pick one exemplar from each cluster that sits near the centroid *and* at least one from each edge cluster (high‑distance points).  
3. If possible, include a single counter‑example that lies just outside the desired class to anchor the decision boundary.

**Non‑obvious insight**

Most people treat examples as isolated demonstrations, but in fact **the order of examples encodes an implicit curriculum**: starting with broad, high‑confidence cases and moving toward edge cases gradually shapes the LM’s internal representation. Skipping this progression often leaves the model stuck on a coarse partition of the space, yielding brittle predictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

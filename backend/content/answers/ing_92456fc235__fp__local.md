---
qid: ing_92456fc235__fp__local
question: 'Explain: Building the Future Together — Optimizing AI Inference at Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 452
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:16:26-05:00'
sources: []
---

**Why inference must be *optimised***

The core problem any deployed AI faces is: *given a fixed budget (latency, energy, cost), deliver the best possible prediction*.  
At Character.AI this translates to answering millions of user‑to‑character queries in real time. The naive solution—running a large transformer on a GPU for every request—is prohibitively expensive and slow. Therefore we must reduce *the amount of computation that actually influences the output* while keeping the model’s expressive power.

**Geometric view**

Think of each token as a point in an embedding space. A transformer layer is a linear map followed by a non‑linearity; it rotates and scales this geometry. Not all directions are equally important for a given context: most variation lies on a low‑dimensional manifold. By projecting onto the leading principal components (dynamic sparsity, attention pruning), we preserve the “signal” while discarding orthogonal noise—exactly what *attention dropout* or *block‑sparse attention* does.

**Information‑theoretic angle**

The model’s output distribution is a stochastic function of the input. We want to minimise the *mutual information* between unnecessary hidden states and the final logits. Techniques like knowledge distillation, quantisation, or low‑rank factorisation explicitly enforce this by compressing redundant pathways, guaranteeing that every bit of computation carries maximal information about the answer.

**Non‑obvious insight**

Most people focus on *parameter count*; what is often overlooked is *computation reuse*. In a dialogue setting, consecutive user inputs share large portions of context. By caching intermediate activations and re‑using them across turns (dynamic batching + cache‑aware inference), we can reduce FLOPs by 30–50 % without any architectural change.

**Bottom line**

Optimising AI inference is an exercise in *selective computation*: prune geometry, compress information, and reuse work. At Character.AI this yields faster, cheaper, and more responsive characters—exactly what users expect when they say “Let’s build the future together.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

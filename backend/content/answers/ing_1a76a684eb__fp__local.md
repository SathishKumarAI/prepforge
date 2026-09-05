---
qid: ing_1a76a684eb__fp__local
question: 'Explain: Correcting Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 409
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:02:30-05:00'
sources: []
---

**Correcting Hallucinations – the BigLaw Bench Example**

A *hallucination* is a model’s output that violates factual constraints. In legal‑tech, the BigLaw Bench system must answer queries about statutes, case law, or procedural rules; any hallucinated citation could mislead counsel.  
The fundamental problem is *discrepancy between latent representations and verifiable knowledge*. Transformers learn patterns from text but have no grounding mechanism: their logits reflect statistical co‑occurrence rather than truth.

**Why the correction must be constraint‑driven**

1. **Optimization perspective** – The loss function (cross‑entropy) optimizes for next‑token prediction, not factuality. Introducing a *hard* consistency layer forces the model to satisfy a set of logical constraints during inference, effectively turning an unconstrained language model into a constrained solver.

2. **Information theory** – A hallucination reduces mutual information between input and true world state. By incorporating an external knowledge base (e.g., a legal ontology) as an auxiliary decoder that shares hidden states, we preserve high‑entropy useful content while pruning low‑information hallucinated tokens.

3. **Geometric view** – In embedding space, correct responses lie on a *knowledge manifold*. Hallucinations drift off this manifold. Projecting the output vector back onto it (via a learned projection matrix) restores plausibility without sacrificing fluency.

**Non‑obvious insight**

The key is to treat hallucination correction as *structured prediction* rather than post‑hoc filtering. By augmenting training with *contrastive examples*—pairs of correct and intentionally corrupted legal statements—and applying a *margin loss* that penalizes deviation from the knowledge manifold, the model learns an implicit self‑regulation mechanism. This internal regularizer reduces hallucinations at inference time without costly external checks, making BigLaw Bench both accurate and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_2d2d01d3b0__fp__local
question: 'Explain: Pitfall 19: Ignoring Hallucination Risk — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 379
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:40:31-05:00'
sources: []
---

**Pitfall 19 – Ignoring Hallucination Risk**

When we build a language model, the *objective* is to minimize expected loss over all possible contexts. The model learns a probability distribution \(p_\theta(\text{token}\mid \text{context})\). During inference, we sample or take the arg‑max of this distribution to generate text. If the true data distribution is highly sparse (e.g., factual statements), the model’s learned distribution will still assign non‑zero mass to many *impossible* tokens because it has no penalty for producing coherent but false content—only for deviating from the training set. Thus, even with perfect calibration on seen data, the *hallucination risk* remains: the model can confidently output plausible yet incorrect facts.

This phenomenon is rooted in **information theory**: maximizing likelihood under a mismatched prior leads to *over‑confidence* on low‑probability events. The deeper principle is that *prediction and generation are not the same task*. Generation requires an extra constraint—truthfulness—which must be enforced by either:

1. A **discriminator** (e.g., fact‑checking module) that assigns a cost to hallucinated tokens, or  
2. An **entropy regularizer** that penalizes high‑confidence predictions on unseen contexts.

A non‑obvious insight: *hallucinations often surface when the model’s internal representation collapses multiple distinct facts into one latent vector.* This collapse is invisible in perplexity but explodes during generation. Therefore, monitoring latent space diversity and not just surface metrics is essential to preempt hallucination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

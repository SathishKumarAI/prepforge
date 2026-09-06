---
qid: ing_fa744aa300__fp__local
question: 'Explain: What Changed in the Threat Model — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 447
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:52:15-05:00'
sources: []
---

**What Changed in the Threat Model for LLM Security?**

The core problem has always been *information leakage*: an attacker wants to extract or misuse data the system holds.  
In early models, the adversary was **static**—they could only observe outputs and had no influence on training data. The defense focused on rate‑limiting, differential privacy, or hard‑coding safe prompts.

With modern LLMs the threat landscape has shifted to a **dynamic, adaptive adversary** that can *shape* the model’s knowledge base and internal state:

1. **Data poisoning & prompt injection**: By feeding carefully crafted inputs during fine‑tuning or inference, an attacker nudges the optimizer toward a hidden policy that later discloses private facts.
2. **Distributional shift exploitation**: The model’s latent space is a *probabilistic memory*; subtle shifts in input distribution can steer it to retrieve memorized tokens without explicit queries.
3. **Model inversion via internal state probing**: Because transformers expose intermediate activations, an attacker can reverse‑engineer the attention patterns that encode sensitive data.

These changes arise from two deeper principles:

- **Optimization bias**: The loss surface is highly non‑convex; small perturbations in training data or prompts create large gradients that steer the model into memorizing undesirable content.
- **Information geometry of embeddings**: The embedding manifold preserves semantic proximity, so a single “anchor” query can unlock a whole cluster of private facts.

*Non‑obvious insight*: Many defenses assume outputs are the only observable. In reality, an attacker can learn from *hidden layers* via model introspection or by training auxiliary classifiers on activation snapshots—turning the model’s own internal representation into a side‑channel attack vector.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

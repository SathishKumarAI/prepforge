---
qid: ing_b906908d97__faang__local
question: 'Explain: Mixture of Experts (MoE) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 425
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:53:21-05:00'
sources: []
---

**Mixture of Experts (MoE)**  
*A key scaling trick for large language models*

| Step | What to say |
|------|-------------|
| **Clarify** | “You’re asking how MoE lets a model grow without a linear cost in parameters or compute. I’ll assume we’re talking about transformer‑based LLMs, with a single *router* that decides which expert sub‑network processes each token.” |
| **Approach** | 1) Describe the architecture: shared tokenizer → embedding → multiple expert layers (each a small feed‑forward net) → router → weighted sum of experts. <br>2) Explain training: cross‑entropy loss + load‑balancing regularizer so that all experts are used. |
| **Depth** | • *Router*: usually a lightweight softmax over logits from the last transformer block; can be hard‑top‑k for sparsity.<br>• *Expert capacity*: each expert processes only a fraction of tokens per batch, keeping FLOPs ≈ constant as model size (number of experts) grows.<br>• *Load balancing*: loss term encourages uniform expert usage to avoid “expert collapse.”<br>• *Complexity*: parameter count scales linearly with number of experts, but compute stays ~O(1) per token. |
| **Edge Cases** | • If load‑balance weight is too high → over‑regularization and poor accuracy.<br>• Too few experts → no scaling benefit; too many → memory fragmentation and slower data movement.<br>• Hard routing can lead to training instability if gradients are sparse. |
| **Optimize & Communicate** | “By keeping each token routed to only a handful of experts, we achieve sub‑linear compute growth while still increasing representational capacity. In practice, MoE is deployed in models like GLaM and Switch Transformer, showing > 10× parameter increase for < 2× latency.” |

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_44d853830f__fp__local
question: 'Explain: Post-training quantization incurs a large performance drop on
  reasoning models.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 427
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:32:04-05:00'
sources: []
---

Post‑training quantization (PTQ) squeezes a pre‑trained network into low‑bitwidth integer arithmetic **without fine‑tuning**.  
The fundamental problem it solves is *efficient inference*: each weight and activation is stored in, say, 8 bits instead of 32, so memory traffic and compute are cut by ≈4×. The underlying assumption is that the network’s function can be approximated well enough after simply clipping or scaling its parameters to a discrete set.

For *reasoning* models—large language models fine‑tuned on tasks that require multi‑step deduction—the loss surface is highly **non‑convex and sparse**. Small perturbations in weight values propagate through many self‑attention layers, amplifying errors because each token’s representation is built from a cascade of linear transforms and non‑linearities. PTQ introduces quantization noise at every layer; this noise is *additive* but not independent: it correlates with the model’s internal activation distribution. The result is a drift that moves the network far from the narrow basin where reasoning gradients were learned.

A deeper principle at play is **information bottleneck**. Reasoning models compress context into a hidden state that must preserve fine‑grained relational cues. Quantization reduces the channel capacity of each neuron, effectively discarding entropy that the model relied on to disambiguate multi‑step chains. Unlike classification, where many outputs are tolerant to small shifts, reasoning demands precise alignment across layers.

**Non‑obvious insight:** The *order* of operations matters. If quantization is applied after every residual addition (as in standard PTQ), it forces the network to re‑quantize intermediate sums that already contain accumulated noise, leading to a **cumulative error avalanche**. Quantizing only the final linear projections—while keeping hidden states full‑precision—preserves reasoning fidelity and yields far smaller performance drops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

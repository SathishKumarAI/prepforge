---
qid: ing_343441db8e__fp__local
question: 'Explain: Tokens Per Second (TPS) — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 441
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:55:44-05:00'
sources: []
---

**Tokens Per Second (TPS) – the true speed metric for an inference pipeline**

When a language model answers a prompt, it emits a *sequence* of tokens. Each token is produced by a probabilistic neural network that updates its internal state after every output step. The **fundamental problem** is: *how many tokens can we generate per unit time while keeping the model’s predictive quality intact?*

1. **From latency to throughput**  
   Latency measures the time to produce one token; TPS inverts this, averaging over a batch of inputs. Because inference pipelines often process many requests concurrently, TPS captures both per‑token computation and parallelism.

2. **Optimization principle**  
   Generating each token requires a forward pass through the transformer layers. If we denote the compute cost per token as \(C\) (in FLOPs) and the available GPU compute bandwidth as \(B\), then asymptotically \( \text{TPS} \leq B/C\). This bound comes from Amdahl’s law applied to pipelined inference: any speedup is limited by the most expensive token‑generation step.

3. **Geometry of attention**  
   Attention scales quadratically with sequence length; thus, for long contexts, \(C\) grows and TPS falls. Efficient architectures (e.g., sparse or linear attention) reduce this growth, directly boosting TPS.

4. **Non‑obvious insight**  
   *Batch size does not linearly increase TPS.* Because the transformer’s per‑token cost dominates, a single large batch may saturate GPU memory but not add proportionally to throughput. The optimal batch is where the marginal compute gain equals the marginal memory overhead—often a surprisingly small number of tokens.

In short, TPS quantifies how many *meaningful* tokens a model can emit per second, derived from the interplay of latency, computational cost, and architectural design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

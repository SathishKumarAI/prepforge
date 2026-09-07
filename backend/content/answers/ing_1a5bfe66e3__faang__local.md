---
qid: ing_1a5bfe66e3__faang__local
question: 'Explain Mixture-of-Experts: the router, top-k experts, total vs active
  parameters. Why does it win?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 448
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:46:28-05:00'
sources: []
---

**Mixture‑of‑Experts (MoE)**  
*The idea*: a large neural net is split into many “experts” (sub‑networks). A lightweight **router** decides which experts to activate for each token.

### Clarify
- *What exactly are we measuring?* Total vs. active parameters, routing scheme (top‑k), and why MoE can outperform dense models.
- *Assumptions*: We have a fixed compute budget per token; the router is deterministic or stochastic; experts share no weights.

### Approach
1. **Router**: takes the input embedding, produces logits over \(N\) experts.  
2. **Top‑k selection**: pick the highest‑scoring \(k\) experts (often \(k=2\)).  
3. **Expert execution**: only those \(k\) experts process the token; others are idle.  
4. **Load balancing loss** to avoid overusing a few experts.

### Depth
- **Total parameters** ≈ \(N \times\) expert size (e.g., 300 B).  
- **Active parameters per token** = \(k \times\) expert size, often an order of magnitude smaller.  
- Complexity: routing O(\(N\)), but with sparse attention the forward pass is O(\(k\)).  
- *Why it wins*: capacity grows linearly with experts while compute stays bounded; each expert can specialize, reducing interference and improving generalization.

### Edge Cases
- **Skewed routing** → over‑utilized experts cause bottlenecks.  
- **Too small \(k\)** → under‑use of model capacity.  
- **Training instability** if load‑balancing loss is too weak.

### Optimize & Communicate
- Use *load‑balance regularization* and *capacity constraints* per expert.  
- Report metrics: perplexity vs. compute, expert utilization histograms.  
- Emphasize that MoE delivers higher accuracy for the same FLOPs by decoupling parameter count from active computation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

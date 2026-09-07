---
qid: ing_8cc7fc6ae2__faang__local
question: 'Explain: Kimi K2 is a 1T-parameter MoE with about 32B active per token
  and hundreds of experts. Explain the routing and the systems cost of training it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 711
total_tokens: 972
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:11:35-05:00'
sources: []
---

**Clarify**  
We’re asked to describe how *Kimi K2* (≈1 trillion‑parameter Mixture‑of‑Experts, MoE) routes tokens through ~32 B active parameters per token and what training cost that implies. I’ll assume the model uses top‑k expert selection, a sparsity‑aware optimizer, and distributed data‑parallel training on GPU clusters.

**Approach**  
1. Outline the MoE architecture (expert layers, gating).  
2. Explain per‑token routing: probability distribution → top‑k experts → activation of only those experts.  
3. Quantify compute: 32 B active ops/token × tokens per batch.  
4. Discuss system overhead: communication of activations, load balancing, memory, and optimizer state.  
5. Rough cost estimate in FLOPs and GPU hours.

**Depth**

| Component | Details |
|-----------|---------|
| **Experts** | Hundreds (≈200–400) of feed‑forward networks; each has ~16 B params, but only a subset active. |
| **Gating** | Learned softmax over experts per token; top‑k = 2 or 4 chosen by highest logits. |
| **Routing** | For a batch of *N* tokens: compute gate logits (≈M×E), select k experts → activate them, pass token through only those experts. |
| **Active Ops** | Each active expert performs ~32 B FLOPs per token; with top‑k=4, ≈128 B FLOPs per token overall. |
| **Compute Load** | For 8K tokens per batch on a 256‑GPU cluster: 128 B × 8 000 = 1.024×10¹⁴ FLOPs per step. |
| **Communication** | *All‑to‑all* of sparse activations; load‑balancing via hash‑based routing or dynamic balancing. Overhead ≈10–15 % extra bandwidth. |
| **Memory** | Expert parameters reside on device shards; only active experts loaded per GPU. Memory footprint ≈ 32 B/4 = 8 B per token, so ~64 GB total for a 256‑GPU system. |
| **Optimizer** | Sparse Adam or LAMB with expert‑level state; extra memory ≈ 0.5× parameters. |

**Edge Cases**

* *Load imbalance*: Some experts become hot spots → dynamic load balancing needed.  
* *Gate saturation*: If gates collapse to few experts, effective model size shrinks.  
* *Sparse gradients*: Requires specialized back‑prop that only updates active experts.  

**Optimize & Communicate**

To reduce cost:  
- **Reduce k** (e.g., from 4 to 2) → halving FLOPs but may hurt accuracy.  
- **Expert sharing** across tokens via “expert sharding” or “expert compression”.  
- **Mixed‑precision** reduces memory and bandwidth by 2×.

When presenting, I’d start with a high‑level diagram of token → gate → experts, then drill into the FLOP calculation, finish with a cost estimate (~$10–15 M GPU‑hours for full pretraining) and mention trade‑offs. This shows clear problem framing, systematic reasoning, and depth expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

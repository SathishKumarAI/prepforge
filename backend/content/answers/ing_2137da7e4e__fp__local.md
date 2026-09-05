---
qid: ing_2137da7e4e__fp__local
question: 'Explain: Qwen moved from dense-only to shipping both dense and MoE models
  (for example a 30B model with ~3B active parameters, and a 235B model with ~22B
  active). Explain the tradeoff, and when you would pick the 30B-A3B MoE over a 32B
  dense.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 445
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:16:49-05:00'
sources: []
---

**Why the switch to mixture‑of‑experts (MoE) matters**

A dense transformer with *N* parameters must process all tokens through every layer, so inference cost grows linearly in *N*.  
An MoE layer keeps a small “expert pool” but activates only a subset (*k*) of experts for each token.  The computational load is therefore proportional to *k × model‑size*, not the full *N*.  

For Qwen‑30B, dense inference requires ~30 B FLOPs per forward pass.  
With a 3 B‑active MoE (30B‑A3B), only about **10 %** of the parameters are used for any token, cutting FLOPs to ≈ 3 B while preserving expressive power through the large expert bank.  

The trade‑off is:

| Metric | Dense 32B | MoE 30B‑A3B |
|--------|-----------|-------------|
| Parameters | 32 B | 30 B (total) |
| Active params per token | 32 B | ~3 B |
| FLOPs / sample | *≈* 32 B | *≈* 3 B |
| Memory overhead | none | expert routing, sparsity mask |

**When to choose MoE**

1. **Latency‑critical inference**: the reduced FLOPs give lower latency even with a larger model size.
2. **Fine‑tuning on domain data**: only the active experts are updated, saving GPU memory and speeding training.
3. **Deployment on commodity hardware**: the sparse activation fits within fixed compute budgets while still delivering 30 B‑scale capacity.

**Non‑obvious insight**

The MoE’s *routing* learns to partition the token space; over time it tends to cluster semantically similar tokens into the same experts. This emergent **semantic routing** can be exploited for downstream tasks: a lightweight classifier can predict which expert will be used, allowing early stopping or adaptive computation paths without inspecting the entire network.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

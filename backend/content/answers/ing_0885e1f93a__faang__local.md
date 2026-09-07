---
qid: ing_0885e1f93a__faang__local
question: 'Explain: Mixture of Experts (MoE) — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 613
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:04:21-05:00'
sources: []
---

**Mixture‑of‑Experts (MoE)**  
*Cheat‑sheet for LLM papers*

| **Step** | **What to say** |
|----------|-----------------|
| **1️⃣ Clarify** | “We’re looking at MoEs: a collection of sparse expert networks whose outputs are gated by a lightweight controller. The goal is to scale model capacity without linearly increasing compute.” Ask: *How many experts? What gating policy? Is routing deterministic or stochastic?”* |
| **2️⃣ Approach** | 1. **Define the architecture** – base transformer + `E` experts (small MLPs/transformer blocks). 2. **Gating mechanism** – softmax over expert logits → probability vector. 3. **Routing** – pick top‑k experts per token, send only that slice to compute. 4. **Training** – cross‑entropy + load‑balance regularizer (`λ * Σ (p_e - 1/E)^2`). |
| **3️⃣ Depth** | • **Forward pass**: for each token, compute logits `g_t ∈ ℝ^E`, apply top‑k to get mask `m_t`. Compute expert outputs only where `m_t=1`. Weighted sum: `y_t = Σ m_t,e * g_t,e * expert_e(x_t)`. <br>• **Backward pass**: gradients flow only through active experts; others stay idle. <br>• **Complexity**: compute cost ≈ `k/E` of a dense transformer; memory grows linearly with `E`. <br>• **Key papers**: *“Outrageous‐Scale Language Modeling by Switching to Mixture‑of‑Experts”* (GShard), *“Switch Transformers”*, *“Mixture‑of‑Experts for Efficient Scaling”*. |
| **4️⃣ Edge Cases** | • **Cold experts** – if an expert never selected, add entropy penalty. <br>• **Routing collisions** – limit capacity per expert to avoid overload. <br>• **Non‑determinism** – stochastic routing can hurt reproducibility; use deterministic top‑k for inference. |
| **5️⃣ Optimize & Communicate** | • **Load balancing**: tune λ, use auxiliary loss. <br>• **Hardware mapping**: map experts to GPUs/TPUs for parallelism. <br>• **Explain trade‑offs**: higher `E` → more capacity but larger parameter set; top‑k=1 gives extreme sparsity but may hurt expressivity. <br>• **Narrative**: “By routing each token to only a handful of experts, MoEs let us add billions of parameters while keeping FLOPs constant, enabling scalable LLMs that still fit on commodity hardware.” |

*Word count ≈ 200.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

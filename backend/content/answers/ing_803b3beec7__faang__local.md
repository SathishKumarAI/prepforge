---
qid: ing_803b3beec7__faang__local
question: 'Explain: Mixture-of-Experts (MoE) — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 547
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:43:25-05:00'
sources: []
---

**Mixture‑of‑Experts (MoE) for LLMs**

| # | Section | What to say |
|---|---------|-------------|
| **1. Clarify** | “We’re building a language model that can scale without blowing up compute. MoE lets us keep the *parameter count* huge while only activating a tiny fraction per token.” | Ask: “Do we care about latency, memory budget, or just raw throughput?” |
| **2. Approach** | 1️⃣ Partition parameters into many *expert* modules (MLPs). <br>2️⃣ For each input token run a lightweight *router* that assigns a small set of experts (often 2‑3). <br>3️⃣ Compute the weighted sum of those experts’ outputs, back‑propagate only through them. | This keeps per‑token compute ≈ O(experts_per_token × expert_size) rather than full model size. |
| **3. Depth** | *Router* can be a softmax over linear scores or a sparse top‑k selector; training uses Gumbel‑softmax to keep gradients flowing. Experts share embeddings and decoder heads but have distinct weights, enabling specialization (e.g., one expert for math, another for prose). The overall capacity is the sum of all experts’ parameters, yet each forward pass touches only ~ 1/num_experts of them. Complexity per token: O(num_active × expert_dim), memory: O(total_params) but active memory ≈ active_params. |
| **4. Edge cases** | • Over‑routing → load imbalance, some experts idle while others thrash.<br>• Router collapse → all tokens go to same few experts (degenerate to dense model).<br>• Training instability from sparse gradients; need load‑balancing loss. Testing: synthetic data with distinct “domains” to verify specialization, monitor expert utilization statistics. |
| **5. Optimize & Communicate** | • Add a *load‑balance* term in the router loss to spread usage.<br>• Cache embeddings per expert to reduce memory traffic.<br>Explain trade‑offs: higher capacity → better accuracy but more memory; top‑k sparsity → lower latency. Conclude with how MoE scales linearly in compute while keeping inference fast, making it attractive for next‑gen LLMs. | 200 words |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

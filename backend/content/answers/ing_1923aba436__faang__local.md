---
qid: ing_1923aba436__faang__local
question: 'GLM-4.5 is a Mixture-of-Experts model with 355B total but 32B active parameters.
  Explain the economics: what does that split buy you and what does it cost?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 530
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:43:31-05:00'
sources: []
---

**Clarify**  
You’re asking why a Mixture‑of‑Experts (MoE) model like GLM‑4.5 can have *355 B total parameters* yet only *32 B active* during inference. Confirm the assumptions: the 355 B are the sum of all experts’ weights; each token activates a small subset (often two) of those experts, so at run time only ~32 B are loaded/used.

**Approach**  
Explain the benefit (parameter‑efficiency & capacity), then discuss the cost (compute, memory, data transfer). Use a concise table to contrast “total” vs “active” figures and break down the trade‑offs.

| Item | Total MoE | Active per token |
|------|-----------|------------------|
| Parameters | 355 B | ~32 B |
| FLOPs (≈2×params) | 710 B | ~64 B |
| Memory read | ~1.4 TB | ~128 GB |
| Energy | high | lower |

**Depth**  
- **Economics of the split**: The “total” budget gives a huge expressive capacity, allowing the model to learn diverse patterns across modalities. Only a tiny slice is *activated* per token, so inference cost stays comparable to a dense 32 B transformer.  
- **Cost**: Switching experts requires routing overhead (softmax over experts), dynamic memory fetches, and can lead to load‑balancing issues. Training also incurs extra communication because gradients must propagate to the correct expert.

**Edge Cases**  
- *Load imbalance*: Some experts may receive far fewer tokens → under‑utilized capacity or hot spots.  
- *Latency spikes*: Memory fetch for a rarely used expert could increase inference latency.  
- *Training convergence*: Over‑fitting an expert if it dominates certain inputs.

**Optimize & Communicate**  
- Use load‑balancing regularizers (e.g., “load‑balance loss”) to keep experts evenly utilized.  
- Cache frequently used experts in on‑chip memory or use tensor‑core fused kernels for routing.  
- Explain that the 355 B total is a *latent* capacity; the active 32 B ensures we pay only for what we need, achieving a sweet spot between expressiveness and efficiency.

This structure shows clear reasoning, quantitative trade‑offs, and actionable mitigation strategies—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

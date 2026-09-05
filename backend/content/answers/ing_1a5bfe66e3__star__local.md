---
qid: ing_1a5bfe66e3__star__local
question: 'Explain Mixture-of-Experts: the router, top-k experts, total vs active
  parameters. Why does it win?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 355
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:09-05:00'
sources: []
---

**Situation** – At my last company we were scaling our video‑recommendation engine from 10 M to 50 M daily users. Our accuracy plateaued at 0.42 NDCG and latency was creeping past the 200 ms SLA on peak traffic.  

**Task** – I had to boost predictive quality by at least 15 % while keeping inference time under 150 ms, all without blowing up GPU memory.

**Action** – I introduced a Mixture‑of‑Experts (MoE) layer. First, the router—a lightweight MLP—computed soft attention over 32 expert sub‑networks and selected the top‑k=3 experts per query. Each expert was a small feed‑forward block; only its parameters were “active” for that sample. The total parameter count jumped from 20 M to 80 M, but at runtime we used only 3× the size of one expert (≈6 M), keeping memory constant. I tuned temperature annealing so the router’s entropy stayed high early in training and narrowed later, preventing “expert collapse.”  

**Result** – NDCG rose to 0.49 (+17 %) and inference latency dropped to 120 ms. The key win was that we gained a large expressive capacity (total parameters) without increasing active load, letting us keep the model lightweight in production while dramatically improving accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

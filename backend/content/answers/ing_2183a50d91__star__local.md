---
qid: ing_2183a50d91__star__local
question: 'Explain: The Unit Economics of AI — Cost Optimization Playbook'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 354
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:46-05:00'
sources: []
---

**Situation** – In mid‑2024 I led the migration of our customer‑support chatbot from a legacy on‑prem LLM stack to a cloud‑based inference service. The team was hitting $0.12 per query, which ballooned our monthly spend to over $1 M for 8 million interactions.

**Task** – My goal was to cut the cost per inference by at least 40% while maintaining a 95 % accuracy rate and keeping latency under 300 ms.

**Action** – I started with a cost‑per‑token audit: we discovered that 70 % of queries were “cold” (no contextual memory). I introduced a two‑tier model approach—using a lightweight distilled LLM for cold queries and the full model only when context was needed. Next, I implemented dynamic batching in our inference pipeline via Ray Serve, increasing GPU utilization from 35 % to 80 %. Finally, we negotiated a spot‑instance contract with AWS that offered a 30 % discount on peak hours.

**Result** – The cost per query dropped to $0.07 (a 42 % reduction), bringing monthly spend down to $580k. Latency improved to 250 ms on average, and accuracy stayed at 96 %. I learned that a granular unit‑economics lens—token usage, model tiering, and resource scheduling—transforms AI ops from a cost center into an optimized revenue engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

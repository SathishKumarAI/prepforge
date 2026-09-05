---
qid: ing_c2d916d6b3__star__local
question: How do you engineer an agent for cost and latency without wrecking quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 336
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:59:28-05:00'
sources: []
---

**Situation** – In my last role I was tasked with deploying a conversational AI for our customer support portal that had to handle ~10,000 concurrent requests daily. The SLA demanded <300 ms response time and the cost budget could not exceed $0.02 per inference.

**Task** – Build an agent that stayed within latency and cost limits while maintaining >90 % intent‑classification accuracy and a user satisfaction score above 4.5/5.

**Action** – I started by profiling the existing model: a 12M‑parameter transformer was too heavy, so I replaced it with a distilled 3M‑parameter BERT base and added a two‑stage inference pipeline—first a lightweight rule‑based NLU to filter obvious intents, then the neural model only for ambiguous cases. I also introduced dynamic batching on GPU instances and scheduled inference on spot VMs with autoscaling. For cost control, I set up a budget‑aware inference gate that throttled requests during peak times and cached frequent responses using Redis. Continuous A/B testing fed back into an adaptive learning loop that fine‑tuned the model only when accuracy dipped below 88 %.

**Result** – Latency dropped to 210 ms on average, cost per request fell to $0.015, and user satisfaction rose from 4.2 to 4.6. I learned that combining lightweight models with intelligent routing and real‑time monitoring can keep both quality and budgets in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
